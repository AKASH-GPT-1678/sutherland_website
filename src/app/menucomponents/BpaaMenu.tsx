const services = [
    {
        title: "Contact Center as a Service",
        desc: "Future-ready contact center operations",
        link: "https://www.sutherlandglobal.com/services/business-process-services/contact-center-as-a-service"
    },
    {
        title: "Healthcare BPaaS",
        desc: "Smarter hospitals, better care",
        link: "https://www.sutherlandglobal.com/industries/healthcare"
    },
    {
        title: "Insurance BPaaS",
        desc: "Digital-first insurance operations",
        link: "https://www.sutherlandglobal.com/services/business-process-services/insurance-tpa"
    },
    {
        title: "Telco BPaaS",
        desc: "Empowering Telco business excellence",
        link: "https://www.sutherlandglobal.com/industries/communications-media-and-entertainment/communications-and-wireless/telco-bpaas"
    },
    {
        title: "Finance BPaaS",
        desc: "Digital-led finance operations",
        link: "https://www.sutherlandglobal.com/services/digital-operations/digital-finance"
    },
    {
        title: "HR BPaaS",
        desc: "Elevate employee experience",
        link: "https://www.sutherlandglobal.com/services/digital-operations/hr-operations"
    },
    {
        title: "IoT as a Service",
        desc: "Smarter operations with IoT, analytics, and automation",
        link: "https://www.sutherlandglobal.com/services/iot-plus"
    },
];
import { useRouter } from "next/navigation";

const BpaaMenu = () => {
    const router = useRouter();
    return (
        <div className="bg-white p-6 rounded shadow-lg xl:w-[800px] h-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Business Process as a Service
            </h2>
            <p className="text-[12px]">Enhance business performance and create new keys for your business, your workforce and your clients</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                {services.map((service, idx) => (
                    <li key={idx} onClick={() => router.push(service.link)}>
                        <h3 className="text-sm font-semibold text-blue-800">{service.title}</h3>
                        <p className="text-[10px] text-gray-600">{service.desc}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default BpaaMenu;