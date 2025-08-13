// components/DigitalOperationsMenu.js
import React from 'react';

const digitalOpsMain = [
  {
    title: 'Digital Finance',
    description: 'Digital solutions for finance operations',
    url: 'https://www.sutherlandglobal.com/services/digital-operations/digital-finance'
  },
  {
    title: 'HR Operations',
    description: 'Optimize HR processes, enhance EX',
    url: 'https://www.sutherlandglobal.com/services/digital-operations/hr-operations'
  },
  {
    title: 'Returns Management',
    description: 'End-to-end Returns Management Transformation',
    url: 'https://www.sutherlandglobal.com/services/digital-operations/returns-management'
  },
  {
    title: 'Enterprise Technology Services',
    description: 'Transform your enterprise support operations with generative AI',
    url: 'https://www.sutherlandglobal.com/services/digital-operations/enterprise-services'
  },
  {
    title: 'Intelligent Automation',
    description: 'Enabling smarter processes and enhanced experiences',
    url: 'https://www.sutherlandglobal.com/services/intelligent-automation'
  }
];


const industryOps = [
  {
    title: 'Banking & Financial Services',
    url: 'https://www.sutherlandglobal.com/industries/banking-and-financial-services'
  },
  {
    title: 'Communications, Media and Entertainment',
    url: 'https://www.sutherlandglobal.com/industries/communications-media-and-entertainment'
  },
  {
    title: 'Energy and Utilities',
    url: 'https://www.sutherlandglobal.com/industries/energy-and-utilities'
  },
  {
    title: 'Healthcare',
    url: 'https://www.sutherlandglobal.com/industries/healthcare'
  },
  {
    title: 'Insurance',
    url: 'https://www.sutherlandglobal.com/industries/insurance'
  },
  {
    title: 'Manufacturing',
    url: 'https://www.sutherlandglobal.com/industries/manufacturing'
  },
  {
    title: 'Mortgage Services',
    url: 'https://www.sutherlandglobal.com/industries/mortgage-services'
  },
  {
    title: 'Retail, Marketplaces, and Consumer Packaged Goods',
    url: 'https://www.sutherlandglobal.com/industries/retail-and-consumer-packaged-goods'
  },
  {
    title: 'Technology',
    url: 'https://www.sutherlandglobal.com/industries/technology'
  },
  {
    title: 'Travel, Transportation, Hospitality & Logistics',
    url: 'https://www.sutherlandglobal.com/industries/travel-and-hospitality'
  }
];



import { useRouter } from 'next/navigation';

export default function DigitalOperationsMenu() {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg p-6 w-full  grid grid-rows-2 gap-6">

      <div className="row-span-2">
        <h2 className="text-xl font-semibold text-gray-800">Digital Operations</h2>
        <p className="text-sm text-gray-600 mb-4">
          Reimagine your business operations with AI and automation to transform into an agile, digital enterprise.
        </p>
      </div>
      <div className='grid grid-cols-2 space-x-20
      '>
        {digitalOpsMain.map((item, idx) => (
          <div key={idx} className="mb-3" onClick={() => router.push(item.url)}>
            <h3 className="text-sm font-medium text-blue-700">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>


      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Operations</h3>
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-700">
          {industryOps.map((industry, idx) => (
            <div key={idx} className="mb-1 text-sm font-semibold" onClick={() => router.push(industry.url)}>{industry.title} </div>
          ))}
        </div>
      </div>
    </div>
  );
};
