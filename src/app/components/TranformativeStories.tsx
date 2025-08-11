'use client';
import RedLine from "../assets/red-line.png";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";
import React from "react";
interface CardProps {
    imageUrl: string;      // The URL of the image
    description: string;   // Text describing the item
    link: string;          // Link related to the item
}

// Props for a component that takes an array of CardProps
interface CardListProps {
    cards: CardProps[];

}
export const sampleCards: CardProps[] = [
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png',
        description: "How AI transformed customer engagement for a retail giant.",
        link: "/stories/ai-retail"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753342566/q83djtp0n5mayi3tz3zq.jpg',
        description: "Digitizing supply chain operations for faster delivery and reduced costs.",
        link: "/stories/supply-chain"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png',
        description: "Cloud migration success story for a financial institution.",
        link: "/stories/cloud-finance"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753349789/xy9ghbsh2yk0uox9pnfp.jpg',
        description: "Leveraging data analytics to predict market trends with 95% accuracy.",
        link: "/stories/data-analytics"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753353452/lskfh37hd82jajgfd832.jpg',
        description: "Enhancing cybersecurity protocols to protect sensitive customer data.",
        link: "/stories/cybersecurity-upgrade"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753356451/aok47dbuh823jsh1kjhs.jpg',
        description: "Sustainable energy integration for manufacturing plants worldwide.",
        link: "/stories/green-energy"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753354567/kdh38js72dfh73bd82hd.jpg',
        description: "Omnichannel strategy that boosted e-commerce sales by 120%.",
        link: "/stories/omnichannel-sales"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753358231/po38dh28djf93nnd8ehs.jpg',
        description: "AI-driven personalization in healthcare for improved patient outcomes.",
        link: "/stories/ai-healthcare"
    },
    {
        imageUrl: 'https://res.cloudinary.com/dffepahvl/image/upload/v1753359100/pls92ksh72ndh7shw92.jpg',
        description: "Smart farming solutions that increased crop yield by 40%.",
        link: "/stories/smart-farming"
    }
];


const TransformativeStories: React.FC<CardListProps> = ({ cards }) => {
    const divRef = React.useRef<HTMLDivElement | null>(null);
    const [width, setScreenWidth] = React.useState(0);


    React.useEffect(() => {
        // Now it's safe to use `window` because this runs only on the client
        setScreenWidth(window.innerWidth);
        const firtshalf = window.innerWidth / 3
        const widhToScroll = (window.innerWidth / 2);

        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        divRef.current?.scrollBy(window.innerWidth, window.innerWidth);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const scrolwidth = divRef.current?.clientWidth;
    return (
        <div className="max-w-screen overflow-hidden relative border-2">
            {/* Scrollable container */}
            <div className="flex flex-row w-full shrink-0 overflow-x-auto scroll-smooth gap-10" ref={divRef} style={{ scrollMargin: "auto" }}>
                {sampleCards.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${item.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="h-[300px] min-w-[1000px] flex-shrink-0"

                    >
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="absolute flex flex-row w-full items-center justify-between self-center z-40 top-1/2 -translate-y-1/2">
                <IoChevronForwardCircleOutline
                    size={30}
                    fill="black"
                    className="rotate-180 bg-white border-2 cursor-pointer"
                />
                <IoChevronForwardCircleOutline
                    size={30}
                    fill="black"
                    className="bg-white border-2 cursor-pointer"
                />

            </div>
            <p>hii{width}</p>


        </div>

    );
};


export default TransformativeStories;