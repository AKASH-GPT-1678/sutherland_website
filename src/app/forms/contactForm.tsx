import React from 'react'

const ContatForm = () => {
    return (
        <div>
            <div className='bg-gray-200 p-8'>
                <h1 className='font-bold text-2xl lg:text-3xl'>Contact Us</h1>

                <div>


                    <div className="mt-16 grid grid-rows-5 gap-8 md:grid-cols-3 h-fit ">
                        <input type="text" placeholder="First Name" className="p-3 bg-white rounded-lg py-5" />
                        <input type="text" placeholder="Last Name" className="p-3 bg-white rounded-lg" />
                        <input type="email" placeholder="Email" className="p-3 bg-white rounded-lg" />
                        <input type="text" placeholder="Company Name" className="p-3 bg-white rounded-lg" />


                        <input
                            type="text"
                            placeholder="How we can help you?"
                            className="p-3 bg-white rounded-lg md:col-span-2"
                        />
                    </div>



                    <div className='flex flex-row gap-2'>
                        <input type="checkbox" />
                        <p>Opt in to our email list, and we'll send you information about relevant content, products, and services</p>


                    </div>








                </div>



            </div>

        </div>
    )
}

export default ContatForm
