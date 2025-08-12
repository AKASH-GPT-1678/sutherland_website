import React from 'react'

const AboutUsInfo = () => {
  return (
<div className='flex flex-col max-w-[500px]'>

  {/* Triangle */}
  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-gray-100 ml-16"></div>

  {/* Dropdown Box */}
  <div className='max-w-[500px] bg-gray-100 p-6 min-h-[200px] min-w-[200px]'>
    <p className='font-bold text-sm'>About Us</p>

    <div className='flex flex-row justify-between w-full'>
      
      {/* Column 1 */}
      <div className='mt-5'>
        <ul className='flex space-y-3 flex-col text-sm'>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Company Overview
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Our Leadership
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Our Work
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Newsroom
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Events
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Partnerships
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className='mt-5 mr-18'>
        <ul className='flex space-y-3 flex-col text-sm'>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Analyst Recognitions
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Sustainability
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Diversity, Equity and Inclusion
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Locations
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
          <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
            Contact Us
            <div className='border-2 w-10 border-red-500 invisible group-hover:visible'></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default AboutUsInfo;
