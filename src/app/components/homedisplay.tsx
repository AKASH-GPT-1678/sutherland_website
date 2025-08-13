"use client";
import React from 'react';
import SutherLogo from "../../app/assets/logo.png";
import Image from 'next/image';
import GlobeIcon from "../../app/assets/globe.png";
import SearchIcon from "../../app/assets/search.png";
import ThreeLine from "../../app/assets/line.png";
import { useRouter } from 'next/navigation';
import FloatingService from './floatInfos';
import FloatingInfoIndustries from './floatInfoIndustries';
import FloatingforPlatform from './floatingforPlatform';
import Insights from './Insights';
import AboutUsInfo from './aboutus';
const HomeDisplay = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = React.useState('');
  return (
    <div className='flex flex-row justify-between items-center'>
      <div id='header' className='flex flex-row p-2'>
        <div id='logo'>
          <Image src={SutherLogo.src} alt="Sutherland Logo" width={"300"} height={"300"} className=' h-6 w-40   md:h-10 md:w-60' />
        </div>
        <div className=' flex-row hidden gap-2 ml-6  md:inline'>
          <ul className='flex flex-row gap-2'>




            <div>
              <li className='m-2 font-medium hover:font-semibold text-sm relative' onMouseEnter={() => setActiveMenu('services')} onClick={() => router.push("/services")}>Services</li>




              {
                activeMenu === 'services' && (
                  <div className='absolute top-14 z-40 '>
                    <FloatingService />
                  </div>
                )
              }

            </div>







            <div>
              <li className='m-2 font-medium hover:font-semibold text-sm' onMouseEnter={() => setActiveMenu('industries')} onClick={() => router.push("/industries")}>Industries</li>
              {
                activeMenu === 'industries' && (
                  <div className='absolute top-14 z-40 '>
                    <FloatingInfoIndustries />
                  </div>
                )
              }
            </div>

            <div>
              <li className='m-2 font-medium hover:font-semibold text-sm' onMouseEnter={() => setActiveMenu('platforms')} onClick={() => router.push("/platforms")}>Products & Platforms</li>

              {
                activeMenu === 'platforms' && (
                  <div className='absolute top-14 z-40 '>
                    <FloatingforPlatform />
                  </div>
                )
              }
            </div>

            <div>
              <li className='m-2 font-medium hover:font-semibold text-sm' onClick={() => router.push("/insights")} onMouseEnter={() => setActiveMenu('insights')}>Insights</li>

              {
                activeMenu === 'insights' && (
                  <div className='absolute top-14 z-40 '>
                    <Insights />
                  </div>
                )
              }

            </div>

            <div>
              <li className='m-2 font-medium hover:font-semibold text-sm' onMouseEnter={() => setActiveMenu('aboutus')}>About Us</li>

              {
                activeMenu === 'aboutus' && (
                  <div className='absolute top-14 z-40 w-full '>
                    <AboutUsInfo />
                  </div>
                )
              }

            </div>
            <li className='m-2 font-medium hover:font-semibold text-sm'>Careers</li>

          </ul>

        </div>


      </div>

      <div className=' flex flex-row p-2'>

        <div className='p-2 flex flex-row gap-4 md:gap-4 items-center justify-center'>

          <Image src={GlobeIcon.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
          <Image src={SearchIcon.src} alt='imags' width={"20"} height={"20"} className='cursor-pointer' />
          <div className='hidden md:inline'>
            <button className='text-white bg-red-600 p-2 px-4 md:p-2.5 md:px-6 rounded-lg text-sm md:font-bold border-2 cursor-pointer border-red-600 hover:bg-white hover:text-red-600'>Contact Us</button>
          </div>
          <Image src={ThreeLine.src} alt='imags' width={"20"} height={"20"} className='md:hidden cursor-pointer' />


        </div>

      </div>

    </div>
  )
}

export default HomeDisplay;
