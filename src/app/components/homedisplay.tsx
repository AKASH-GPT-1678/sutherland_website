import React from 'react';
import SutherLogo from "../../app/assets/logo.png";
import Image from 'next/image';

const HomeDisplay = () => {
  return (
    <div>
        <div id='header' className='flex flex-row p-2'>
            <div id='logo'>
               <Image src={SutherLogo.src} alt="Sutherland Logo" width={"300"} height={"300"} className='h-10 w-60' />
            </div>
            <div className='flex flex-row gap-2'>
                <ul className='flex flex-row gap-2'>
                    <li className='m-2'>Services</li>
                    <li className='m-2'>Industries</li>
                    <li className='m-2'>Products & Platforms</li>
                    <li className='m-2'>Insights</li>
                    <li className='m-2'>About Us</li>
                    <li className='m-2'>Careers</li>
                </ul>

            </div>

            
        </div>
      
    </div>
  )
}

export default HomeDisplay;
