// components/DigitalCXMenu.js
import React from 'react';

const digitalCXItems = [
  {
    title: 'Contact Center as a Service',
    description: 'Future-ready contact center operations',
    url: 'https://www.sutherlandglobal.com/services/business-process-services/contact-center-as-a-service'
  },
  {
    title: 'CX Engineering',
    description: 'Deliver seamless omni-channel engagement',
    url: 'https://www.sutherlandglobal.com/services/digital-cx/cx-engineering'
  },
  {
    title: 'Insight and Design Labs',
    description: 'Human-centric CX and EX with AI',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting/insight-and-design'
  },
  {
    title: 'Digital Consulting',
    description: 'Transformation strategy for digital enterprises',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting'
  },
  {
    title: 'Experience-Led Digital Transformation',
    description: 'Experience-led transformation journey',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting/experience-led-digital-transformation'
  },
  {
    title: 'Digital Acceleration Center',
    description: 'Transform at speed and scale',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting/digital-acceleration-center'
  },
  {
    title: 'Trust and Safety',
    description: 'Secure your content and brand',
    url: 'https://www.sutherlandglobal.com/services/digital-cx/trust-and-safety'
  },
  {
    title: 'Ad Sales and Operations',
    description: 'High-performance ad ops for enterprises',
    url: 'https://www.sutherlandglobal.com/services/digital-cx/ad-sales-and-operations'
  }
];
import { useRouter } from 'next/navigation';


const DigitalCXMenu = () => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg p-6 w-full max-w-4xl grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <h2 className="text-xl font-semibold text-gray-800">Digital CX</h2>
        <p className="text-sm text-gray-600 mb-4">
          Reinvent customer and employee experiences to achieve increased engagement,
          loyalty and customer lifetime value.
        </p>
      </div>
      {digitalCXItems.map((item, index) => (
        <div key={index} onClick={() => router.push(item.url)}>
          <h3 className="text-sm font-medium text-blue-700">{item.title}</h3>
          <p className="text-xs text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DigitalCXMenu;