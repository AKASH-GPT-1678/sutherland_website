// components/DigitalOperationsMenu.js
import React from 'react';

const digitalOpsMain = [
  {
    title: 'Digital Finance',
    description: 'Digital solutions for finance operations',
  },
  {
    title: 'HR Operations',
    description: 'Optimize HR processes, enhance EX',
  },
  {
    title: 'Returns Management',
    description: 'End-to-end Returns Management Transformation',
  },
  {
    title: 'Enterprise Technology Services',
    description: 'Transform your enterprise support operations with generative AI',
  },
  {
    title: 'Intelligent Automation',
    description: 'Enabling smarter processes and enhanced experiences',
  },
];

const industryOps = [
  'Banking & Financial Services',
  'Communications, Media and Entertainment',
  'Energy and Utilities',
  'Healthcare',
  'Insurance',
  'Mortgage Services',
  'Retail, Marketplaces, and Consumer Packaged Goods',
  'Technology',
  'Travel, Transportation, Hospitality & Logistics',
];

export default function DigitalOperationsMenu() {
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
          <div key={idx} className="mb-3">
            <h3 className="text-sm font-medium text-blue-700">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>


      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Operations</h3>
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-700">
          {industryOps.map((industry, idx) => (
            <div key={idx} className="mb-1 text-sm font-semibold">{industry}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
