'use client';
import React from 'react'
import SutherLogo from "../assets/sutherlogo.png";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { sampleCards } from '../components/TranformativeStories';
import { FaPlus } from 'react-icons/fa6';
import TransformativeStories from '../components/TranformativeStories';
import ContatForm from '../forms/contactForm';
import BottomFooter from '../components/bottonFooter';
const topics = [
    "Advanced Analytics",
    "Artificial Intelligence",
    "Automation",
    "Cloud Engineering"
];
const services = [
    "Business Process as a Service",
    "Connected Intelligence and AI",
    "Digital Consulting",
    "Digital CX",
    "Digital Engineering Services",
    "Digital Operations"
];


const Services = () => {
    const router = useRouter();
    return (
        <div>
            <div
                style={{ backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1755105590/sqzxud8e6i4eyradf7ih.jpg")' }}
                className="w-full h-[300px]"
            >
                <div id='header' className='flex flex-row p-2'>
                    <div id='logo '>
                        <Image src={SutherLogo.src} alt="Sutherland Logo" width={"300"} height={"300"} className=' h-6 w-40   md:h-10 md:w-60 bg-white' />
                    </div>
                    <div className=' flex-row hidden gap-2 ml-6  md:inline md:font-semibold text-white'>
                        <ul className='flex flex-row gap-2'>
                            <li className='m-2 font-medium hover:font-semibold text-sm'>Services</li>
                            <li className='m-2 font-medium hover:font-semibold text-sm' onClick={() => router.push("/industries")}>Industries</li>
                            <li className='m-2 font-medium hover:font-semibold text-sm'>Products & Platforms</li>
                            <li className='m-2 font-medium hover:font-semibold text-sm' onClick={() => router.push("/insights")}>Insights</li>
                            <li className='m-2 font-medium hover:font-semibold text-sm'>About Us</li>
                            <li className='m-2 font-medium hover:font-semibold text-sm'>Careers</li>

                        </ul>

                    </div>


                </div>
                <div className='xl:mx-14'>
                    <h1 className="text-white text-3xl font-bold px-10 mt-6 flex items-center  xl:text-4xl">Services</h1>
                    <p className='text-white px-10  md:max-w-[500px]  lg:max-w-[700px] mt-10 text-sm font-medium'>
                        Leveraging market-leading technology, business process excellence, and our advanced products and platforms,
                        we drive digital transformation, optimize operations, reinvent experiences, and pioneer new solutions – all seamlessly delivered “as a service.”
                    </p>

                </div>


            </div>

            <div className="p-8 mt-10 flex  flex-col md:flex-row justify-between lg:ml-24">
                <p className="text-2xl lg:text-3xl max-w-[400px] font-bold">
                    Engineering Digital Outcomes With Innovative Partnership Models
                </p>
                <p className='text-sm xl:px-16'>
                    At Sutherland, we accelerate digital transformation by fostering innovation and delivering measurable outcomes that drive lasting value for our clients.
                    Our engagement with clients is defined by innovative approaches, including strategic partnerships, expert advisory services, co-innovation hubs, and shared success-based commercial models. Our approach ensures efficient market expansion, delivers transformative solutions, and drives digital outcomes tailored to our clients’ unique needs.
                </p>


            </div>

            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-[30%] mt-10 max-h-[350px]'>
                    <Image src={`https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg`} width={400} height={400} alt='display' className='w-full h-full' />

                </div>

                <div className="flex flex-col space-y-6 w-full p-8 max-w-[1400px]">
                    {topics.map((item, index) => (
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
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-[30%] mt-10 max-h-[350px] bg-gray-100 flex '>
                    <p className='text-2xl font-bold p-8 lg:text-4xl'>Services</p>


                </div>

                <div className="flex flex-col space-y-6 w-full p-8 max-w-[1400px]">
                    {services.map((item, index) => (
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
           <div>
            <TransformativeStories cards={sampleCards}/>
           </div>
           <div>
             <ContatForm/>
           </div>
           <div>
            <BottomFooter/>
            
           </div>
        </div>
    )
}

export default Services;
