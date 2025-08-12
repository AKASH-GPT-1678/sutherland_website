import React from 'react';
import Image from 'next/image';
import Forward from "../assets/forward.png";

const data = [
    {
        title: "Artificial Intelligence",
        description: "Automate processes and enhance human expertise with AI to unlock new possibilities and transformative outcomes."
    },
    {
        title: "Automation",
        description: "Engineer smarter processes, decode critical business problems, and deliver exceptional experiences with hyperautomation and AI."
    },
    {
        title: "Cloud Engineering",
        description: "Fast-track your cloud journey and unleash the power of data and AI."
    },
    {
        title: "Advanced Analytics",
        description: "With advanced analytics, democratize insights, empower smarter decisions, and drive innovation at scale."
    },
    {
        title: "Digital CX",
        description: "Reinvent customer and employee experiences to achieve increased engagement, loyalty, and customer lifetime value."
    },
    {
        title: "Digital Operations",
        description: "Reimagine your business operations with AI and automation to transform into an agile digital enterprise."
    }
];

const FlyingDetails = () => {
    return (
        <div className="p-4 md:px-12 w-full">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-xl rounded-lg flex flex-col p-4 gap-4 min-h-[170px] hover:scale-105 transition-transform duration-300"
                        style={{
                            backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1753296006/xuz5u3w4cyo9my0p0izy.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">{item.title}</h1>
                        <p className="font-medium text-sm md:text-base lg:text-lg">{item.description}</p>
                        <p className="text-pink-500 font-bold flex items-center gap-2 cursor-pointer">
                            Learn More
                            <Image src={Forward.src} alt="" width={20} height={12} />
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default FlyingDetails
