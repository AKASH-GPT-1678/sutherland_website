import React from 'react'

const Insights = () => {
    return (


        <div className=' flex flex-col max-w-[500px] '>

            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-gray-100 ml-16 "></div>


            <div className='max-w-[500px] bg-gray-100 p-6 min-h-[200px] min-w-[200px]'>
                <p className='font-bold text-sm'>Insights</p>
                <div className='flex flex-row justify-between w-full'>
                    <div className='mt-5'>
                        <ul className='flex space-y-3 flex-col text-sm'>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Blogs
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Case Studies
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Infographics
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Glossary
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Podcasts
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                        </ul>
                    </div>

                    <div className='h-[200px] border-1 pt-4 pb-4'>
                    </div>

                    <div className='mt-5 mr-18'>
                        <ul className='flex space-y-3 flex-col text-sm'>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Solution Overviews
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Videos
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Webinars
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                            <li className='text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer'>
                                Whitepapers
                                <div className='border-2 w-10 border-red-500 hidden group-hover:inline-block'></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Insights
