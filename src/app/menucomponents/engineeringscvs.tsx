// components/DigitalEngineeringMenu.js
import React from 'react';

const digitalEngineeringItems = [
  {
    title: 'AI & Automation',
    description: 'Augment human expertise with AI',
  },
  {
    title: 'Custom Applications & Modernization',
    description: 'Customized solutions to uplift & evolve application ecosystem',
  },
  {
    title: 'Enterprise Packaged Applications',
    description: 'Accelerated E2E solution transformation across enterprise technology',
  },
  {
    title: 'Infrastructure & Cloud Services',
    description: 'Build a strong digital foundation with cloud',
  },
  {
    title: 'Connected Intelligence',
    description: 'Driving insights-led decisions and innovation',
  },
  {
    title: 'Digital Assurance',
    description: 'End-to-end quality assurance for seamless experiences',
  },
  {
    title: 'Experience Engineering',
    description: 'Engineering customer and employee experiences for impact',
  },
  {
    title: 'Product Engineering',
    description: 'Engineering capabilities powering modern enterprises',
  },
];

export default function DigitalEngineeringMenu() {
  return (
    <div className="bg-white shadow-lg p-6 w-full max-w-4xl grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <h2 className="text-xl font-semibold text-gray-800">Digital Engineering Services</h2>
        <p className="text-sm text-gray-600 mb-4">
          Accelerating your digital transformation journey
        </p>
      </div>
      {digitalEngineeringItems.map((item, index) => (
        <div key={index}>
          <h3 className="text-sm font-medium text-blue-700">{item.title}</h3>
          <p className="text-xs text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
