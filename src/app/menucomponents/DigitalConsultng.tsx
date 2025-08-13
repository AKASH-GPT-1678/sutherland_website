// components/DigitalConsultingMenu.js
import React from 'react';
const digitalConsultingItems = [
  {
    title: 'Insight and Design Labs',
    description: 'Human-centric CX and EX with AI',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting/insight-and-design',
  },
  {
    title: 'Experience-Led Digital Transformation',
    description: 'Experience-led transformation journey',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting/experience-led-digital-transformation',
  },
  {
    title: 'Digital Acceleration Center',
    description: 'Transform at speed and scale',
    url: 'https://www.sutherlandglobal.com/services/digital-consulting/digital-acceleration-center',
  },
];
import { useRouter } from 'next/navigation';
const DigitalConsultingMenu  = () => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg p-6 w-full max-w-4xl grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <h2 className="text-xl font-semibold text-gray-800">Digital Consulting</h2>
        <p className="text-sm text-gray-600 mb-4">
          Design and implement a digital transformation strategy that is agile, value-driven, and aligned to business outcomes.
        </p>
      </div>
      {digitalConsultingItems.map((item, index) => (
        <div key={index} onClick={()=> router.push(item.url)}>
          <h3 className="text-sm font-medium text-blue-700">{item.title}</h3>
          <p className="text-xs text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
export default DigitalConsultingMenu;