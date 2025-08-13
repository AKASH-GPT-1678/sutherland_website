const technologyItems = [
    {
        title: "Digital Platforms",
        description: "Enabling growth and innovation for digital platform businesses",
        url: "https://www.sutherlandglobal.com/industries/technology/digital-platforms"
    },
    {
        title: "Gaming and Apps",
        description: "Delivering immersive experiences and operational excellence for gaming and app companies",
        url: "https://www.sutherlandglobal.com/industries/technology/gaming-and-apps"
    },
    {
        title: "Hardware OEM & Semiconductor",
        description: "Transforming hardware and semiconductor operations with next-gen solutions",
        url: "https://www.sutherlandglobal.com/industries/technology/hardware-oem-semiconductor"
    },
    {
        title: "Software, ISVs & SaaS",
        description: "Helping software and SaaS providers scale efficiently and innovate faster",
        url: "https://www.sutherlandglobal.com/industries/technology/software-isvs-sass"
    }
];
import { useRouter } from "next/navigation";

export default function TechnologyMenu() {
    const router = useRouter();
    return (
        <div className="bg-white p-6 rounded shadow-lg  xl:w-[1000px] mx-auto space-y-10">

            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">Technology</h2>

                <div className="grid grid-cols-2 gap-6">
                    {technologyItems.map(({ title, description, url }, index) => (
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
