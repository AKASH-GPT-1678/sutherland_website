const connectedIntelligence = {
  title: "Connected Intelligence",
  desc: "Unlock the full potential of your data to operationalize transformation strategy",
  items: [
    ["Data and Analytics", "Smarter decisions, measurable outcomes", "https://www.sutherlandglobal.com/services/connected-intelligence/data-and-analytics"],
    ["Data Engineering", "Build a future-ready data foundation", "https://www.sutherlandglobal.com/services/connected-intelligence/data-engineering"],
    ["Data Science", "From data to insights and outcomes", "https://www.sutherlandglobal.com/services/connected-intelligence/data-science"],
    ["Data and Analytics Advisory", "Convert business problems to opportunities", "https://www.sutherlandglobal.com/services/connected-intelligence/data-and-analytics-advisory"],
    ["Data Management Office", "Unlock the value of your cloud data", "https://www.sutherlandglobal.com/services/connected-intelligence/data-management-office"],
    ["Research and Market Intelligence", "Empower business decisions with AI-powered research insights", "https://www.sutherlandglobal.com/services/connected-intelligence/research-and-market-intelligence"],
  ],
};


const artificialIntelligence = {
  title: "Artificial Intelligence",
  desc: "Augment human expertise with AI to unlock new possibilities, transformative outcomes and enduring relationships.",
  items: [
    ["Gen AI-Powered Tools & Platforms", "Business outcomes, powered by AI", "https://www.sutherlandglobal.com/products-x-platforms"],
    ["AI as a Service", "AI on demand, at scale", "https://www.sutherlandglobal.com/services/artificial-intelligence/ai-as-a-service"],
    ["AI Infrastructure and Engineering", "Power your AI ambitions", "https://www.sutherlandglobal.com/services/artificial-intelligence/ai-infrastructure-and-engineering"],
    ["AI Solution Development", "Tailored AI solutions for your DNA", "https://www.sutherlandglobal.com/services/artificial-intelligence/ai-solution-development"],
    ["Data and AI Security", "Safeguarding digital foundations for enterprises.", "https://www.sutherlandglobal.com/services/artificial-intelligence/data-and-ai-security"],
    ["Ethical AI", "Ethical and responsible AI", "https://www.sutherlandglobal.com/services/artificial-intelligence/ethical-ai"],
  ],
};


import { useRouter } from "next/navigation";
export default function ConnectedAISection() {
  const router = useRouter();
  return (
    <div className="bg-white p-6 rounded shadow-lg  xl:w-[1000px] mx-auto space-y-10">

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{connectedIntelligence.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{connectedIntelligence.desc}</p>
        <div className="grid grid-cols-2 gap-6">
          {connectedIntelligence.items.map(([title, desc, url], index) => (
            <div key={index} onClick={() => router.push(url)}>
              <h3 className="text-sm font-semibold text-blue-800">{title}</h3>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{artificialIntelligence.title}</h2>

        <p className="text-sm text-gray-600 mb-4">{artificialIntelligence.desc}</p>
        <div className="grid grid-cols-2 gap-6">
          {artificialIntelligence.items.map(([title, desc, url], index) => (
            <div key={index} onClick={() => router.push(url)}>
              <h3 className="text-sm font-semibold text-blue-800">{title}</h3>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
