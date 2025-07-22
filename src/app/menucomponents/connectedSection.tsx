const connectedIntelligence = {
  title: "Connected Intelligence",
  desc: "Unlock the full potential of your data to operationalize transformation strategy",
  items: [
    ["Data and Analytics", "Smarter decisions, measurable outcomes"],
    ["Data Engineering", "Build a future-ready data foundation"],
    ["Data Science", "From data to insights and outcomes"],
    ["Data and Analytics Advisory", "Convert business problems to opportunities"],
    ["Data Management Office", "Unlock the value of your cloud data"],
    ["Research and Market Intelligence", "Empower business decisions with AI-powered research insights"],
  ],
};

const artificialIntelligence = {
  title: "Artificial Intelligence",
  desc: "Augment human expertise with AI to unlock new possibilities, transformative outcomes and enduring relationships.",
  items: [
    ["Gen AI-Powered Tools & Platforms", "Business outcomes, powered by AI"],
    ["AI as a Service", "AI on demand, at scale"],
    ["AI Infrastructure and Engineering", "Power your AI ambitions"],
    ["AI Solution Development", "Tailored AI solutions for your DNA"],
    ["Data and AI Security", "Safeguarding digital foundations for enterprises."],
    ["Ethical AI", "Ethical and responsible AI"],
  ],
};

export default function ConnectedAISection() {
  return (
    <div className="bg-white p-6 rounded shadow-lg  xl:w-[1000px] mx-auto space-y-10">

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{connectedIntelligence.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{connectedIntelligence.desc}</p>
        <div className="grid grid-cols-2 gap-6">
          {connectedIntelligence.items.map(([title, desc], index) => (
            <div key={index}>
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
          {artificialIntelligence.items.map(([title, desc], index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-blue-800">{title}</h3>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
