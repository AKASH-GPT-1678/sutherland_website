"use client";
import React from 'react';
import PurpleBg from "../assets/purpbg.png";
import Image from 'next/image';


const data = [
    PurpleBg.src,
    PurpleBg.src,
    PurpleBg.src,
    PurpleBg.src,
    PurpleBg.src,
    PurpleBg.src,
    PurpleBg.src,
    PurpleBg.src,
];





const InsightView = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
const itemWidth = 400; // Same as image width

const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: itemWidth, behavior: 'smooth' });
};

const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -itemWidth, behavior: 'smooth' });
};

    return (
        <div

            className='h-[200px] bg-white shadow-xl min-w-[300px] flex flex-col p-4 gap-4 relative'
            style={{
                backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}


        >

            <div>
                <h1 className='px-28 text-white text-4xl font-bold'>Insights</h1>
            </div>

              {/* Scrollable Content */}
            <div
                ref={scrollRef}
                className="flex flex-row gap-4 overflow-hidden scroll-smooth"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{
                            width: `${itemWidth}px`,
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <Image
                            src={item}
                            width={itemWidth}
                            height={200}
                            alt="icon-company"
                            className="h-[200px] w-[400px] object-cover"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2"
            >
                ◀
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2"
            >
                ▶
            </button>



        </div>
    )
}

export default InsightView
