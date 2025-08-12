import React from 'react'
import BpaaMenu from '../menucomponents/BpaaMenu'
import ConnectedAISection from '../menucomponents/connectedSection';
import DigitalCXMenu from '../menucomponents/digitalCx'
import DigitalEngineeringMenu from '../menucomponents/engineeringscvs'
import DigitalOperationsMenu from '../menucomponents/digitalOrperations'
import DigitalConsultingMenu from '../menucomponents/DigitalConsultng'

const FloatingService = () => {
    const [activeMenu, setActiveMenu] = React.useState('');
    return (


        <div className='flex flex-row h-[500px] w-full bg-white '>
            <div className=' flex flex-col max-w-[300px] '>

                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-gray-100 ml-16 "></div>


                <div className='bg-gray-100  p-2'>
                    <p className=' text-[12px] font-bold ml-5 mt-3'>DIGITAL FOUNDATION</p>
                    <ul className='ml-5 text-sm font-bold flex flex-col mt-3'>
                        <li
                            className="hover:bg-white px-8 p-2 cursor-pointer"
                            onMouseEnter={() => setActiveMenu('')}
                        >
                            Advanced Analytics
                        </li>
                        <li
                            className="hover:bg-white px-8 p-2 cursor-pointer"
                            onMouseEnter={() => setActiveMenu('')}
                        >
                            Artificial Intelligence
                        </li>
                        <li
                            className="hover:bg-white px-8 p-2 cursor-pointer"
                            onMouseEnter={() => setActiveMenu('')}
                        >
                            Automation
                        </li>
                        <li
                            className="hover:bg-white px-8 p-2 cursor-pointer"
                            onMouseEnter={() => setActiveMenu('')}
                        >
                            Cloud
                        </li>



                    </ul>
                    <div>
                        <p className=' text-[12px] font-bold ml-5 mt-3'>SERVICES</p>

                        <ul className='ml-5 text-sm font-semibold flex flex-col mt-3'>

                            <li className='hover:bg-white px-8 p-2 cursor-pointer' onMouseEnter={() => setActiveMenu('Business Process as a Service')}>Business Process as a Service</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer' onMouseEnter={() => setActiveMenu('Connected Intelligence and AI')}>Connected Intelligence and AI</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer' onMouseEnter={() => setActiveMenu('Digital Consulting')}>Digital Consulting</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer' onMouseEnter={() => setActiveMenu('Digital CX')}>Digital CX</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer' onMouseEnter={() => setActiveMenu('Digital Engineering Services')}>Digital Engineering Services</li>
                            <li className='hover:bg-white px-8 p-2 cursor-pointer' onMouseEnter={() => setActiveMenu('Digital Operations')}>Digital Operations</li>

                        </ul>

                    </div>



                </div>

            </div>

            <div className=' flex flex-col  bg-white h-full  '>

                {
                    activeMenu === 'Digital Consulting' && <DigitalConsultingMenu />
                }
                {
                    activeMenu === 'Business Process as a Service' && <BpaaMenu />
                }
                {
                    activeMenu === 'Connected Intelligence and AI' && <ConnectedAISection />
                }
                {
                    activeMenu === 'Digital CX' && <DigitalCXMenu />

                }
                {
                    activeMenu === 'Digital Engineering Services' && <DigitalEngineeringMenu />
                }
                {
                    activeMenu === 'Digital Operations' && <DigitalOperationsMenu />
                }



            </div>
        </div>
    )
}

export default FloatingService;
