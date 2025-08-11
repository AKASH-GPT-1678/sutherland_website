import React from 'react'
import WhiteLine from "../assets/whiteline.png";
import Image from 'next/image';
import TransWoman from "../assets/trans-woman.png";
const statsData = [
    {
        value: ">40K",
        description: "Global team of domain and technology experts"
    },
    {
        value: "200+",
        description: "Unique inventions associated with numerous patent grants"
    },
    {
        value: "63%",
        description: "Of our client partnerships contractually tied to measurable client outcomes"
    },
    {
        value: "50%",
        description: "Fortune 500 firms served"
    },
    {
        value: "61",
        description: "Offices across global locations"
    },
    {
        value: "32",
        description: "Languages proficiently spoken"
    }
];


const aboutus = () => {

    return (

        <div>
            <div className='w-full h-[300px] flex flex-row relative'>
                <div className='h-[300px] w-[40%] md:w-[50%]  bg-gray-700'>

                </div>

                <div className='absolute flex flex-col gap-4 max-w-[700px] top-10 left-10 z-40'>
                    <h1 className='text-lg md:text-2xl font-semibold text-white'>ABOUT US</h1>
                    <h1 className='text-xl md:text-4xl font-bold text-white'>Unlocking Possibilities, Transformative Outcomes, and Enduring Relationships</h1>
                    <p className='text-sm text-white'>
                        Sutherland is the preferred digital transformation partner for iconic brands worldwide. For each company, we provide new keys for their businesses, the people they work with, and the customers they serve.
                    </p>
                </div>
                <div style={{ backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1753373850/qmnf2uteilph7g3gnr26.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='w-[80%] md:w-[50%] h-[300px] mask-r-from-30%'>

                </div>
            </div>
            <div style={{ backgroundImage: `url(${WhiteLine.src})` }} className="bg-no-repeat bg-cover h-[400px] w-full flex flex-row">
                <div className='w-[50%] h-[300px] op0acity-40 bg-white '>
                    <h1 className='md:text-2xl xl:text-3xl text-md font-bold text-gray-800 p-8 max-w-[800px]'>
                        With market-leading technology and business process excellence, we tailor proven and rapid formulas to fit our client’s unique DNA.
                    </h1>
                    <p className='text-sm  text-gray-800 px-8 max-w-[800px]'>
                        Sutherland is a global leader in driving business and digital transformation. Over the last 39 years, we have partnered with iconic brands worldwide to deliver revenue growth, operational efficiency, and innovative business models.
                    </p>

                </div>
                <div className='w-[50%] h-[300px] grid grid-cols-2 gap-10 ml-6 '>

                    {statsData.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2 p-4 justify-center'>
                            <h1 className='text-2xl font-bold'>{item.value}</h1>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    ))}


                </div>
            </div>
            <div className='flex flex-col items-center justify-center p-5 text-2xl'>
                <h1 className='font-bold text-2xl'>Artificial Intelligence. Automation. Cloud engineering. Advanced analytics.
                </h1>
                <p> For business leaders, these are key factors of success. For us, they’re our core expertise.</p>
            </div>

            <div className='flex flex-row justify-between p-8 '>
                <div className=' max-w-[800px] p-6'>
                    <h1 className='text-3xl font-bold mb-6'>What Sets Us Apart ?</h1>
                    <p>
                        <strong>A Track Record That Speaks Volumes</strong> – We have helped build and transform many of the world’s most successful companies. The brands you trust, trust in us.
                    </p>

                    <p>
                        <strong>We Win When You Win</strong> – 63% of our business is contractually tied to the measurable success of our clients. We uniquely model our engagements so our clients’ KPIs become our outcome-based criteria for success.
                    </p>

                    <p>
                        <strong>Human + AI = Digital Chemistry</strong> – The incredible collective power of human expertise and AI fuels our vision. Human-centricity is in everything we do – for our clients and for us.
                    </p>

                    <p>
                        <strong>Pioneering Innovation</strong> – We invest in disruptive innovation and harness emerging technologies to help our clients succeed. Through our Digital Acceleration Centers, we enhance our clients’ innovation capacity and ability to drive transformation at scale.
                    </p>

                </div>
                <div>
                    <Image src={TransWoman.src} alt='imags' width={"1000"} height={"1000"} className='cursor-pointer h-[400px] w-[400px] md:h-[600px] md:w-[600px] ' />

                </div>
            </div>

        </div>
    )
}

export default aboutus
