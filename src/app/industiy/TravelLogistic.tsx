const travelLogisticsItems = [
    {
        title: "Airlines",
        description: "Transforming airlines with experience-led strategies",
        url: "https://www.sutherlandglobal.com/industries/travel-and-hospitality/airlines"
    },
    {
        title: "Cargo and Logistics",
        description: "Shaping the digital future for cargo and logistics industry",
        url: "https://www.sutherlandglobal.com/industries/travel-and-hospitality/cargo-and-logistics"
    },
    {
        title: "Hospitality",
        description: "Enhancing guest experiences with hyperpersonalization and digital excellence",
        url: "https://www.sutherlandglobal.com/industries/travel-and-hospitality/hospitality"
    }
];

import { useRouter } from "next/navigation";

export default function TravelLogisticMenu() {
    const router = useRouter();
    return (
        <div className="bg-white p-6 rounded shadow-lg  xl:w-[1000px] mx-auto space-y-10">

            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">Travel , Transportation and Logistics Menu</h2>

                <div className="grid grid-cols-2 gap-5">
                    {travelLogisticsItems.map(({ title, description ,url}, index) => (
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
}

