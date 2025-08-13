
import React from 'react'
import FlyingDetails from './flyingdetails';
import InsightView from './insightView';
import ContatForm from '../forms/contactForm';
import BottomFooter from './bottonFooter';



const BottomEnginnering = () => {
    return (
        <div className='bg-white mt-24 p-8 xl:p-12 relative'>

            <div className='flex flex-row p-4 md:px-12 gap-4 items-center justify-center'>
                <h1 className='max-w-[450px] 
            font-bold text-xl md:text-3xl lg:text-3xl '>How We Engineer Digital Outcomes</h1>

                <div className='flex flex-col px-6 '>
                    <p className='text-[14px]'>
                        Leveraging our deep expertise in data and AI, digital engineering, and our advanced products and platforms, we drive digital transformation, optimize critical business operations, reinvent experiences, and pioneer new solutions, all provided through a seamless “as a service” model.
                    </p>
                    <span className='text-blue-600'>Explore Services</span>
                </div>
            </div>


            <div className='absolute top-44 '>
                <FlyingDetails />

            </div>



            <div className='bg-blue-700 mt-40 h-[500px] w-full'>


            </div>

            <div>
                <InsightView />
            </div>

            <div>
                <ContatForm />
            </div>
            <div>
                <BottomFooter />
            </div>



        </div>
    )
}

export default BottomEnginnering;
