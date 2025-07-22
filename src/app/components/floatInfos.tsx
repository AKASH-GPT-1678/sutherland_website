import React from 'react'
import BpaaMenu from '../menucomponents/BpaaMenu'
import ConnectedAISection from '../menucomponents/connectedSection'
import DigitalCXMenu from '../menucomponents/digitalCx'
import DigitalEngineeringMenu from '../menucomponents/engineeringscvs'
import DigitalOperationsMenu from '../menucomponents/digitalOrperations'
import DigitalConsultingMenu from '../menucomponents/DigitalConsultng'

const FloatingInfo = () => {
    return (


        <div className='flex flex-row h-[500px] bg-white '>
            <div className=' flex flex-col max-w-[300px] '>

                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-gray-100 ml-16 "></div>


                <div className='bg-gray-100  p-2'>
                    <p className=' text-[12px] font-bold ml-5 mt-3'>DIGITAL FOUNDATION</p>
                    <ul className='ml-5 text-sm font-bold flex flex-col mt-3'>
                        <li className='hover:bg-white px-8 p-2 cursor-pointer'>Advanced Analytics</li>
                        <li className='hover:bg-white px-8 p-2 cursor-pointer'>Artificial Intelligence</li>
                        <li className='hover:bg-white px-8 p-2 cursor-pointer'>Automation</li>
                        <li className='hover:bg-white px-8 p-2 cursor-pointer'>Cloud</li>



                    </ul>
                    <div>
                        <p className=' text-[12px] font-bold ml-5 mt-3'>SERVICES</p>

                        <ul className='ml-5 text-sm font-bold flex flex-col mt-3'>

                            <li className='hover:bg-white px-8 p-2 cursor-pointer'>Business Process as a Service</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer'>Connected Intelligence and AI</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer'>Digital Consulting</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer'>Digital CX</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer'>Digital Engineering Services</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer'>Digital Operations</li>
                        </ul>

                    </div>



                </div>

            </div>

            <div className=' flex flex-col  bg-white h-full  p-2 mt-3'>

                <DigitalConsultingMenu />


            </div>
        </div>
    )
}

export default FloatingInfo
