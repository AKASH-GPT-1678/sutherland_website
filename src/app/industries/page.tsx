import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import ContatForm from '../forms/contactForm';
import BottomFooter from '../components/bottonFooter';

const industries = [
    "Banking and Financial Services",
    "Communications, Media, and Entertainment",
    "Energy and Utilities",
    "Healthcare",
    "Insurance",
    "Manufacturing",
    "Mortgage Services",
    "Retail, Marketplace, and Consumer Package Goods",
    "Technology",
    "Travel, Transportation, Hospitality & Logistics"
];

const page = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png")' }}
                className="w-full h-[300px]"
            >
                <h1 className="text-white text-4xl font-bold p-12 flex items-center">Industries We Serve</h1>
            </div>

            <div className="p-8 mt-10 flex  flex-col md:flex-row justify-between lg:ml-24">
                <p className="text-2xl lg:text-3xl max-w-[400px] font-bold">
                    Transforming Businesses Across Industries With Tailored Digital Solutions
                </p>

                <div className="flex flex-col space-y-6 w-full p-8 max-w-[1400px]">
                    {industries.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-row justify-between w-full">
                                <p className="text-sm font-bold md:text-md xl:text-lg">{item}</p>
                                <FaPlus className="text-2xl cursor-pointer" />
                            </div>
                            <div className="border-1 border-gray-300 w-full mt-5" />
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-blue-950 w-full h-[10px] md:h-[200px] '>

            </div>
            <div className='p-20 md:mt-[-200]'>
                <ContatForm />
            </div>
            <div>
                <BottomFooter/>

            </div>
        </div>

    )
}

export default page
