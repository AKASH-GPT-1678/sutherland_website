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

        <div className='p-4 md:px-12 grid grid-rows md:grid-cols-3 space-y-5 space-x-6'>
            {
                data.map((item, index) => (
                    <div
                        key={index}
                        className='h-[200px] bg-white shadow-xl min-w-[300px] flex flex-col p-4 gap-4'
                        style={{
                            backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1753296006/xuz5u3w4cyo9my0p0izy.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <h1 className='font-bold text-2xl'>{item.title}</h1>
                        <p className='font-medium'>{item.description}</p>
                        <p className='text-pink-500 font-bold flex flex-row gap-2'>Learn More
                            <Image src={Forward.src} alt='' width={20} height={12} />


                        </p>

                    </div>

                ))
            }


        </div>
    )
}

export default FlyingDetails
