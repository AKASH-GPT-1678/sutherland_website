import React from 'react'
import MegaMenuSection from './MegaMenu';

const sutherlandProducts = [
  {
    title: "Sutherland Agent Success",
    description: "AI-powered agent assist"
  },
  {
    title: "Sutherland Anywhere®",
    description: "Remote workforce management platform"
  },
  {
    title: "CloudTestr",
    description: "AI-powered test automation"
  },
  {
    title: "Cognitive Knowledge Engine (CKE)",
    description: "AI-driven information self-service"
  },
  {
    title: "Sutherland Connect®",
    description: "Omnichannel CX powered by AI"
  },
  {
    title: "Conversational AI",
    description: "Intelligent chat & voice support automation"
  },
  {
    title: "Sutherland CX360®",
    description: "Customer 360° insights"
  },
  {
    title: "eSeal®",
    description: "Intelligent supply chain visibility platform"
  },
  {
    title: "Extract",
    description: "Document digitization made easy with AI"
  },
  {
    title: "Robility®",
    description: "Enterprise hyperautomation platform"
  },
  {
    title: "Sutherland Sentinel AI®",
    description: "Secure your data"
  },
  {
    title: "Sutherland Translate AI®",
    description: "AI-powered multi-lingual translation"
  }
];
const customerExperience = [
  {
    title: "Cognitive Knowledge Engine",
    description: "AI-driven information self-service"
  },
  {
    title: "Sutherland Connect®",
    description: "Omnichannel CX powered by AI"
  },
  {
    title: "Conversational AI",
    description: "Intelligent chat & voice support automation"
  },
  {
    title: "Sutherland CX360®",
    description: "Customer 360° insights"
  },
  {
    title: "Level Up",
    description: "Empowering a high-performance workforce"
  },
  {
    title: "SmartLeap® HelpTree",
    description: "Smarter knowledge management with AI"
  },
  {
    title: "Sutherland Translate AI®",
    description: "AI-powered multi-lingual translation"
  }
];


const ProductsandPlatform = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <div className='bg-gray-200 p-6 pr-0'>
                    <ul className='ml-3 space-y-3 p-2'>
                        <li className='hover:bg-white px-6 pr-6 p-1 text-sm font-bold cursor-pointer'>AI & Automation</li>
                        <li className='hover:bg-white px-6 pr-6 p-1 text-sm font-bold cursor-pointer'>Customer Experience</li>
                        <li className='hover:bg-white px-6 pr-6 p-1 text-sm font-bold cursor-pointer'>Digital Business Process</li>
                        <li className='hover:bg-white px-6 pr-6 p-1 text-sm font-bold cursor-pointer'>Digital IT</li>
                    </ul>



                </div>
                <div>
                    {/* <MegaMenuSection title='AI am Automation' items={sutherlandProducts}/> */}
                    <MegaMenuSection title='Customer Experience' items={customerExperience} />
                    <h1>hii</h1>

                </div>

            </div>

        </div>
    )
}

export default ProductsandPlatform
