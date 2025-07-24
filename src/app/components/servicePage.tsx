"use client";
import React from 'react';
import Image from 'next/image';
import { FaPlus } from "react-icons/fa6";
import SutherLogo from "../../app/assets/logo.png";
import GlobeIcon from "../../app/assets/globe.png";
import SearchIcon from "../../app/assets/search.png";
import ThreeLine from "../../app/assets/line.png";
import ContatForm from '../forms/contactForm';
import BottomFooter from './bottonFooter';

const technologies = [
    "Advanced Analytics",
    "Artificial Intelligence",
    "Automation",
    "Cloud Engineering",
    "Business Process as a Service",
    "Connected Intelligence and AI",
    "Digital Consulting",
    "Digital CX",
    "Digital Engineering Services",
    "Digital Operations",
];

const ServicePage = () => {
    return (
        <div>

            {/* Hero Section */}
            <div
                className='w-full h-[340px]'
                style={{
                    backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1753341196/wfh4pjlohrvzmf9pmgiw.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                {/* Header */}
                <div>
                    <div className='flex flex-row justify-between items-center'>
                        {/* Logo and Navigation */}
                        <div id='header' className='flex flex-row p-2'>
                            <div id='logo'>
                                <Image
                                    src={SutherLogo.src}
                                    alt="Sutherland Logo"
                                    width={300}
                                    height={300}
                                    className='h-6 w-40 md:h-10 md:w-60'
                                />
                            </div>

                            <div className='flex-row hidden gap-2 ml-6 md:inline'>
                                <ul className='flex flex-row gap-2 text-white'>
                                    {["Services", "Industries", "Products & Platforms", "Insights", "About Us", "Careers"].map((text, i) => (
                                        <li key={i} className='m-2 font-medium hover:font-semibold text-sm'>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Icons and Contact */}
                        <div className='flex flex-row p-2'>
                            <div className='p-2 flex flex-row gap-4 md:gap-4 items-center justify-center'>
                                <Image src={GlobeIcon.src} alt='globe' width={20} height={20} className='cursor-pointer' />
                                <Image src={SearchIcon.src} alt='search' width={20} height={20} className='cursor-pointer' />
                                <div className='hidden md:inline'>
                                    <button className='text-black bg-white p-2 px-4 md:p-2.5 md:px-6 rounded-lg text-sm md:font-bold border-2 cursor-pointer border-white hover:bg-black hover:text-white'>
                                        Contact Us
                                    </button>
                                </div>
                                <Image src={ThreeLine.src} alt='menu' width={20} height={20} className='md:hidden cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Text */}
                <div className='max-w-[700px]'>
                    <h1 className='text-3xl lg:text-4xl font-bold text-white p-4 md:px-20'>Services</h1>
                    <p className='text-white p-4 md:px-20 text-sm'>
                        Leveraging market-leading technology, business process excellence, and our advanced products and platforms, we drive digital transformation, optimize operations, reinvent experiences, and pioneer new solutions – all seamlessly delivered “as a service.”
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <div className='px-20 mt-12 mb-8 flex flex-col md:flex-row justify-between space-x-4 space-y-4'>
                <p className='text-2xl lg:text-3xl max-w-[500px] font-bold'>
                    Engineering Digital Outcomes With Innovative Partnership Models
                </p>
                <p className='md:p-4'>
                    At Sutherland, we accelerate digital transformation by fostering innovation and delivering measurable outcomes that drive lasting value for our clients. Our engagement with clients is defined by innovative approaches, including strategic partnerships, expert advisory services, co-innovation hubs, and shared success-based commercial models. Our approach ensures efficient market expansion, delivers transformative solutions, and drives digital outcomes tailored to our clients’ unique needs.
                </p>
            </div>

            {/* First Grid Section */}
            <div className='flex flex-col md:flex-row space-y-4 w-full md:space-x-6'>
                <div className='relative md:min-w-[400px] md:min-h-[400px] xl:min-w-[600px]'>
                    <Image
                        src='https://res.cloudinary.com/dffepahvl/image/upload/v1753342566/q83djtp0n5mayi3tz3zq.jpg'
                        alt='Digital Foundation'
                        width={0}
                        height={0}
                        className='cursor-pointer w-full h-[100px] md:min-h-[300px] md:max-h-[500px] md:max-w-[450px] lg:max-w-[600px]'
                    />
                    <p className='absolute left-10 top-10 text-2xl font-bold text-white'>Digital Foundation</p>
                </div>

                <div className='flex flex-col space-y-6 w-full p-8'>
                    {technologies.slice(0, 4).map((item, index) => (
                        <div key={index}>
                            <div className='flex flex-row justify-between w-full'>
                                <p className='text-sm font-bold md:text-lg xl:text-xl'>{item}</p>
                                <FaPlus className='text-2xl cursor-pointer' />
                            </div>
                            <div className='border-1 border-gray-300 w-full mt-5' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Grid Section */}
            <div className='flex flex-col md:flex-row space-y-4 w-full md:space-x-6'>
                <div className='w-full min-w-[400px] min-h-[100px] md:max-w-[600px] bg-gray-300 md:min-h-[400px]'>
                    <p className=' items-center p-5 text-2xl font-bold text-black'>Services</p>
                </div>

                <div className='flex flex-col space-y-6 w-full p-8'>
                    {technologies.slice(4, 10).map((item, index) => (
                        <div key={index}>
                            <div className='flex flex-row justify-between w-full'>
                                <p className='text-sm font-bold md:text-lg xl:text-xl'>{item}</p>
                                <FaPlus className='text-2xl cursor-pointer' />
                            </div>
                            <div className='border-1 border-gray-300 w-full mt-5' />
                        </div>
                    ))}
                </div>
            </div>

            <div>

                <ContatForm />
                <BottomFooter />
            </div>

        </div>
    );
};

export default ServicePage;
