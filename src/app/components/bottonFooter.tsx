import React from 'react';
import Twitter from "../assets/twitter_icon.png";
import Youtube from "../assets/youtube_icon.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Image from 'next/image';
import LinkedIn from "../assets/linkedin.png";

const BottomFooter = () => {
    return (
        <div className='p-16 bg-gray-200 mt-2'>
            <div>
                <h1 className='text-lg'>Stay Ahead: Subscribe to Get Upcoming Insights</h1>

                <div className='mt-2 flex flex-row gap-3'>
                    <input type="text" className='p-2 border-1 w-[400px]' placeholder='Enter your email' />
                    <button className='bg-pink-600 rounded-lg cursor-pointer text-white font-medium px-12'>Subscribe</button>


                </div>
                <ul className="flex flex-row gap-6 mt-6 text-sm font-semibold">
                    <li className="cursor-pointer hover:text-blue-600">Services</li>
                    <li className="cursor-pointer hover:text-blue-600">Industries</li>
                    <li className="cursor-pointer hover:text-blue-600">About Us</li>
                    <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
                    <li className="cursor-pointer hover:text-blue-600">Careers</li>
                    <li className="cursor-pointer hover:text-blue-600">Locations</li>
                </ul>



            </div>

            <div className='flex flex-row gap-4 mt-6'>
                <Image src={Twitter.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
                <Image src={Youtube.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
                <Image src={Instagram.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
                <Image src={Facebook.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
                <Image src={LinkedIn.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
                

            </div>


        </div>
    )
}

export default BottomFooter;
