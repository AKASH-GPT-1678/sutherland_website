"use client";
import React from 'react';

import Report1 from "../insightasset/agentic-wave.png";
import Report2 from "../insightasset/ai-tower.png";
import Report3 from "../insightasset/aibrain.png";
import Report4 from "../insightasset/flight-women.png";
import Report5 from "../insightasset/hand-smile.webp";
import Report6 from "../insightasset/human.png";
import Report7 from "../insightasset/team-meeting.webp";



const data = [
    Report1.src,
    Report2.src,
    Report3.src,
    Report4.src,
    Report5.src,
    Report6.src,
    Report7.src,
];
const reports = [
    {
        title: "AI in Healthcare: Revolutionizing Patient Diagnosis",
        description: "An in-depth report on how artificial intelligence is transforming medical imaging, predictive analytics, and personalized treatment."
    },
    {
        title: "Generative AI: Shaping the Future of Content Creation",
        description: "A comprehensive study on the impact of generative models like GPT and DALL·E on media, marketing, and design industries."
    },
    {
        title: "AI-Powered Cybersecurity: The New Digital Shield",
        description: "This report explores how machine learning and AI algorithms are proactively detecting and preventing cyber threats in real-time."
    },
    {
        title: "The Role of AI in Financial Forecasting",
        description: "An analytical review of how banks and financial firms use AI to enhance market predictions, risk assessments, and algorithmic trading."
    },
    {
        title: "Ethical AI: Balancing Innovation with Responsibility",
        description: "This report discusses the growing need for ethical guidelines and bias prevention in AI development and deployment."
    },
    {
        title: "5G and Edge Computing: Accelerating Real-Time Applications",
        description: "A tech-forward report on how 5G networks and edge computing are reshaping IoT, AR/VR, and real-time data processing."
    },
    {
        title: "Quantum Computing: Unlocking Unprecedented Processing Power",
        description: "An introduction to how quantum processors could revolutionize computing, cryptography, and material science in the coming decade."
    }
];







const InsightView = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);


    const scrollNext = () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
    };

    const scrollPrev = () => {
        scrollRef.current?.scrollBy({ behavior: 'smooth' });
    };

    return (
        <div

            className='h-[250px] lg:min-h-[300px] bg-white shadow-xl min-w-[400px] flex flex-col p-4 gap-4 relative'
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
                        className="flex-shrink-0 p-4 min-w-[400px] lg:min-w-[600px] lg:min-h-[300px] flex flex-col "
                        style={{
                            width: `${100}px`,
                            scrollSnapAlign: 'start',
                            backgroundImage: `${`url(${item})`}`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}


                    >


                        <p className='text-xl text-white lg:mt-[100] '>{reports[index].title}</p>
                        <p className='text-sm text-white'>{reports[index].description}</p>
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
