"use client";
import React from 'react'

import Image from 'next/image';


const data2 = [
  {
    value: "$500M",
    description: `<p class="text-white text-sm max-w-[250px]">
      In annual written premiums delivered for commercial 
      <span class="text-blue-500 underline">insurance</span> leader
    </p>`
  },
  {
    value: "70%",
    description: `<p class="text-white text-sm max-w-[250px]">
      Efficiency uplift through digital operations for a global 
      <span class="text-blue-500 underline">technology</span> leader
    </p>`
  },
  {
    value: "45%",
    description: `<p class="text-white text-sm max-w-[250px]">
      Faster loan cycles for a top 
      <span class="text-blue-500 underline">mortgage</span> lender with a digital-first approach
    </p>`
  },
  {
    value: "60%",
    description: `<p class="text-white text-sm max-w-[250px]">
      Margin improvement for a 
      <span class="text-blue-500 underline">leading</span> 
      airline through intelligent automation and digital modernization
    </p>`
  },
  {
    value: "25%",
    description: `<p class="text-white text-sm max-w-[250px]">
      Uplift in customer delight through digital CX transformation for a 
      <span class="text-blue-500 underline">fintech</span> and digital bank
    </p>`
  },
  {
    value: "40%",
    description: `<p class="text-white text-sm max-w-[250px]">
      Increase in receivables for a leading municipal health system with 
      <span class="text-blue-500 underline">operational</span> transformation
    </p>`
  }
];



const sectors = [
  "insurance",
  "mortgage",
  "fintech",
  "technology",
  "leading airline",
  "operational transformation"
];




const AboutUsDescriptions = () => {
  const [insurancePremiums, setInsurancePremiums] = React.useState(500); // $500M
  const [efficiencyUplift, setEfficiencyUplift] = React.useState(70);    // 70%
  const [loanCycleSpeed, setLoanCycleSpeed] = React.useState(45);        // 45%
  const [marginImprovement, setMarginImprovement] = React.useState(60);  // 60%
  const [customerDelight, setCustomerDelight] = React.useState(25);      // 25%
  const [receivablesIncrease, setReceivablesIncrease] = React.useState(40); // 40%


  React.useEffect(() => {
    for (let i = 0; i <= 500; i++) {
      setTimeout(() => setInsurancePremiums(i), i * 10);
    }

    for (let i = 0; i <= 70; i++) {
      setTimeout(() => setEfficiencyUplift(i), i * 100);
    }

    for (let i = 0; i <= 45; i++) {
      setTimeout(() => setLoanCycleSpeed(i), i * 10);
    }

    for (let i = 0; i <= 60; i++) {
      setTimeout(() => setMarginImprovement(i), i * 10);
    }

    for (let i = 0; i <= 25; i++) {
      setTimeout(() => setCustomerDelight(i), i * 10);
    }

    for (let i = 0; i <= 40; i++) {
      setTimeout(() => setReceivablesIncrease(i), i * 10);
    }
  }, []);
  const values = [
    insurancePremiums,
    efficiencyUplift,
    loanCycleSpeed,
    marginImprovement,
    customerDelight,
    receivablesIncrease
  ];

  return (

    <div className='w-full'>


      <div className='w-full flex flex-col md:flex-row bg-purple-800 p-8

            
        '>

        <div className='w-full md:w-[50%]'>


          <section className='flex flex-col gap-5 p-8 text-white text-md  ' >
            <h2 className='font-bold text-white text-3xl ml-10'>About Us</h2>


            <section className=" text-white py-6 px-4 md:px-10">
              <div className="max-w-5xl mx-auto space-y-6">
                <p className="text-sm leading-relaxed">
                  Artificial Intelligence. Automation. Cloud Engineering. Advanced Analytics.<br />
                  For Enterprises, these are key factors of success. For us, they’re our core expertise.
                </p>

                <p className="text-sm leading-relaxed">
                  We work with global iconic brands. We bring them a unique value proposition through market-leading technologies and business process excellence. At the heart of it all is Digital Engineering – the foundation that powers rapid innovation and scalable business transformation.
                </p>

                <p className="text-sm leading-relaxed">
                  We’ve created over 200 unique inventions under several patents across AI and other emerging technologies. Leveraging our advanced products and platforms, we drive digital transformation at scale, optimize critical business operations, reinvent experiences and pioneer new solutions, all provided through a seamless “as-a-service” model.
                </p>

                <p className="text-sm leading-relaxed">
                  For each company, we provide new keys for their businesses, the people they work with, and the customers they serve. With proven strategies and agile execution, we don’t just enable change – we engineer digital outcomes.
                </p>

                <p className="text-sm font-semibold">
                  <strong>Sutherland</strong><br />digital outcomes.
                </p>
              </div>
            </section>

          </section>


        </div>
        <div style={{ backgroundImage: "url('https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg')", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="h-screen p-8 md:p-10 w-full md:w-[50%] " >


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 lg:p-8 w-full">
            {data2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-white space-y-3 p-4 bg-white/5 rounded-xl shadow-lg"
              >
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
                  {index === 0 ? `${values[index]}M` : `${values[index]}%`}
                </h2>

                <div
                  className="text-base md:text-lg text-gray-300"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            ))}
          </div>




        </div>



      </div>

      <div className='flex flex-col items-center justify-center w-full p-2 hide-scrollbar'>
        <h1 className='mt-[-60] w-[70%] bg-white font-bold p-4 text-4xl '>Transformation Stories</h1>



        <div className='overflow-hidden flex flex-row gap-6 w-full bg-amber-400 hide-scrollbar'>

          <div className='w-3/12' style={{ backgroundImage: "url('https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg')", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

          </div>

          <div className='flex col-span-3 bg-orange-500 w-6/12 h-60' >
            <Image src={'https://res.cloudinary.com/dffepahvl/image/upload/v1752875688/ifehmu2g3t6vluifruxl.jpg'} width={500} height={500} alt='midle imae' className='w-full h-full object-cover' />
          </div>
          <div className='w-3/12'>


          </div>


        </div>


      </div>
    </div>
  )
}

export default AboutUsDescriptions
