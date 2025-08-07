import React from 'react'

const ContatForm = () => {
    return (
        <div>
            <div className='bg-gray-200 p-8'>
                <h1 className='font-bold text-2xl lg:text-3xl'>Contact Us</h1>

                <div>


                    <div className="mt-16 grid grid-rows-7 gap-8 md:grid-cols-3 ">
                        <input type="text" placeholder="First Name" className="p-1 bg-white rounded-lg py-5" />
                        <input type="text" placeholder="Last Name" className="p-1 bg-white rounded-lg" />
                        <input type="email" placeholder="Email" className="p-1 bg-white rounded-lg" />
                        <input type="text" placeholder="Company Name" className="p-1 bg-white rounded-lg" />


                        <input
                            type="text"
                            placeholder="How we can help you?"
                            className="p-3 bg-white rounded-lg md:col-span-2"
                        />


                        <span className='flex flex-row gap-2 w-full  items-center justify-center'>
                            <input type="checkbox" className='p-2' />
                            <p className='text-sm'>Opt in to our email list, and we&apos;ll send you information about relevant content, products, and services</p>
                        </span>

                        <span className='text-xs'>
                            <p>
                                We process your Personal Data as needed to establish and maintain a business relationship with Sutherland. Your Personal Data may be disclosed to third parties in the normal course of business or as needed to comply with the law. A complete privacy notice is available at: privacy policy.
                            </p>
                        </span>
                        <span>
                            <button className='bg-blue-600 text-white p-2 px-6 rounded-lg'>Submit</button>
                        </span>
                    </div>











                </div>



            </div>

        </div>
    )
}

export default ContatForm
