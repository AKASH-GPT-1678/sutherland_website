import React from 'react';


const industries = [
  'Banking & Financial Services',
  'Communications, Media, and Entertainment',
  'Energy and Utilities',
  'Healthcare',
  'Insurance',
  'Manufacturing',
  'Mortgage Services',
  'Retail, Marketplaces, and Consumer Packaged Goods',
  'Technology',
  'Travel, Transportation, Hospitality & Logistics',
];

const FloatingInfoIndustries = () => {
    return (
        <div>
            <div className='flex flex-row h-[500px] bg-white '>
                <div className=' flex flex-col max-w-[400px] '>

                    <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-gray-100 ml-16 "></div>
                 


                 <div className='p-2 bg-gray-100'>

           
                    <ul className=" ml-5 font-bold">
                        {industries.map((industry, idx) => (
                            <li key={idx} className="text-[12px] font-bold text-gray-800 hover:text-blue-600 cursor-pointer p-2 hover:bg-white">
                                {industry}
                            </li>
                        ))}
                    </ul>
                          </div>



                </div>

                <div className=' flex flex-col  bg-white h-full  p-2 mt-3'>



                </div>
            </div>
        </div>
    )
}

export default FloatingInfoIndustries
