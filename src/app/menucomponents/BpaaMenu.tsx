const services = [
    {
        title: "Contact Center as a Service",
        desc: "Future-ready contact center operations",
    },
    {
        title: "Healthcare BPaaS",
        desc: "Smarter hospitals, better care",
    },
    {
        title: "Insurance BPaaS",
        desc: "Digital-first insurance operations",
    },
    {
        title: "Telco BPaaS",
        desc: "Empowering Telco business excellence",
    },
    {
        title: "Finance BPaaS",
        desc: "Digital-led finance operations",
    },
    {
        title: "HR BPaaS",
        desc: "Elevate employee experience",
    },
    {
        title: "IoT as a Service",
        desc: "Smarter operations with IoT, analytics, and automation",
    },
];

export default function BpaaMenu() {
    return (
        <div className="bg-white p-6 rounded shadow-lg xl:w-[800px] h-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Business Process as a Service
            </h2>
            <p className="text-[12px]">Enhance business performance and create new keys for your business, your workforce and your clients</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                {services.map((service, idx) => (
                    <li key={idx}>
                        <h3 className="text-sm font-semibold text-blue-800">{service.title}</h3>
                        <p className="text-[10px] text-gray-600">{service.desc}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}
