const healthcareItems = [
    {
        title: "Payer",
        description: "Enabling payers to deliver affordable, quality care"
    },
    {
        title: "Provider",
        description: "Provider solutions for better patient outcomes"
    },
    {
        title: "ISVs",
        description: "Propelling innovative healthcare product journeys"
    },
    {
        title: "Life Sciences",
        description: "Pioneering digital excellence in life sciences"
    },
    {
        title: "MedTech",
        description: "Empowering digital innovation in medtech"
    }
];



export default function HealthCareMenu() {
    return (
        <div className="bg-white p-6 rounded shadow-lg  xl:w-[1000px] mx-auto space-y-10">

            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">HealthCare</h2>

                <div className="grid grid-cols-2 gap-6">
                    {healthcareItems.map(({ title, description }, index) => (
                        <div key={index} className="group cursor-pointer">
                            <h3 className="text-sm font-semibold text-blue-800 ">{title}</h3>
                            <div className='border-2 w-12 border-red-500 invisible  group-hover:visible'></div>


                            <p className="text-xs text-gray-500">{description}</p>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}
