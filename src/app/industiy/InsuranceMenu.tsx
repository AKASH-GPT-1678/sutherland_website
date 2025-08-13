const insuranceItems = [
    {
        title: "Life Insurance",
        description: "Innovating life insurance operations for the digital age",
        url: "https://www.sutherlandglobal.com/industries/insurance/life-insurance"
    },
    {
        title: "Property and Casualty Insurance",
        description: "Transforming P&C insurance with digital solutions",
        url: "https://www.sutherlandglobal.com/industries/insurance/property-and-casualty-insurance"
    }
];

import { useRouter } from "next/navigation";

const InsuranceMenu = () => {
    const router = useRouter();
    return (
        <div className="bg-white p-6 rounded shadow-lg  xl:w-[1000px] mx-auto space-y-10">

            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">Insurance</h2>

                <div className="grid grid-cols-2 gap-6">
                    {insuranceItems.map(({ title, description, url }, index) => (
                        <div key={index} className="group cursor-pointer" onClick={() => router.push(url)}>
                            <h3 className="text-sm font-semibold text-blue-800 ">{title}</h3>
                            <div className='border-2 w-12 border-red-500 invisible  group-hover:visible'></div>


                            <p className="text-xs text-gray-500">{description}</p>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default InsuranceMenu;
