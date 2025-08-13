'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Solutions } from './floatingforPlatform';
export const products = [
    { heading: "Sutherland Agent Success", subheading: "AI-powered agent assist", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-agent-success" },
    { heading: "Sutherland Anywhere®", subheading: "Remote workforce management platform", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-anywhere" },
    { heading: "CloudTestr", subheading: "AI-powered test automation", url: "https://www.sutherlandglobal.com/products-x-platforms/cloudtestr" },
    { heading: "Cognitive Knowledge Engine (CKE)", subheading: "AI-driven information self-service", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-cognitive-knowledge-engine" },
    { heading: "Sutherland Connect®", subheading: "Omnichannel CX powered by AI", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-connect" },
    { heading: "Conversational AI", subheading: "Intelligent chat & voice support automation", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-conversational-ai" },
    { heading: "Sutherland CX360®", subheading: "Customer 360° insights", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-cx360" },
    { heading: "eSeal®", subheading: "Intelligent supply chain visibility platform", url: "https://www.sutherlandglobal.com/products-x-platforms/eseal" },
    { heading: "Extract", subheading: "Document digitization made easy with AI", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-extract" },
    { heading: "Robility®", subheading: "Enterprise hyperautomation platform", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-robility" },
    { heading: "Sutherland Sentinel AI®", subheading: "Secure your data", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-sentinel" },
    { heading: "Sutherland Translate AI®", subheading: "AI-powered multi-lingual translation", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-translate-ai" }
];

export const solutions = [
    { heading: "Cognitive Knowledge Engine", subheading: "AI-driven information self-service", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-cognitive-knowledge-engine" },
    { heading: "Sutherland Connect®", subheading: "Omnichannel CX powered by AI", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-connect" },
    { heading: "Conversational AI", subheading: "Intelligent chat & voice support automation", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-conversational-ai" },
    { heading: "Sutherland CX360®", subheading: "Customer 360° insights", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-cx360" },
    { heading: "Level Up", subheading: "Empowering a high-performance workforce", url: "https://www.sutherlandglobal.com/products-x-platforms/level-up" },
    { heading: "SmartLeap® HelpTree", subheading: "Smarter knowledge management with AI", url: "https://www.sutherlandglobal.com/products-x-platforms/smartleap-helptree" },
    { heading: "Sutherland Translate AI®", subheading: "AI-powered multi-lingual translation", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-translate-ai" }
];

export const digitalBusiness = [
    { heading: "Sutherland altra®", subheading: "Transform airline finance operations", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-altra" },
    { heading: "Sutherland Anywhere®", subheading: "Remote workforce management platform", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-anywhere" },
    { heading: "eSeal®", subheading: "Intelligent supply chain visibility platform", url: "https://www.sutherlandglobal.com/products-x-platforms/eseal" },
    { heading: "Extract", subheading: "Document digitization made easy with AI", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-extract" },
    { heading: "SmartLeap® HelpTree", subheading: "Smarter knowledge management with AI", url: "https://www.sutherlandglobal.com/products-x-platforms/smartleap-helptree" },
    { heading: "Prodigy", subheading: "Digitize and automate F&A processes", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-prodigy" },
    { heading: "Sutherland Sentinel AI®", subheading: "Secure your data", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-sentinel" },
    { heading: "Sutherland SmartCred®", subheading: "Digitalize credentialing processes", url: "https://www.sutherlandglobal.com/products-x-platforms/smartcred" }
];

export const healthcareSolutions = [
  { heading: "Sutherland Anywhere®", subheading: "Remote workforce management platform", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-anywhere" },
  { heading: "CloudTestr", subheading: "AI-powered test automation", url: "https://www.sutherlandglobal.com/products-x-platforms/cloudtestr" },
  { heading: "Cognitive Knowledge Engine (CKE)", subheading: "AI-driven information self-service", url: "https://www.sutherlandglobal.com/products-x-platforms/sutherland-cognitive-knowledge-engine" },
  { heading: "E-Hub", subheading: "Automate healthcare information exchange", url: "https://www.sutherlandglobal.com/products-x-platforms/e-hub" },
  { heading: "SmartHealthConnect & SmartHealthAnalytics", subheading: "Real-time BI/reporting & actionable insights", url: "https://www.sutherlandglobal.com/products-x-platforms/smarthealthanalytics" }
];

interface ReuseMenuViewProps {
    data: Solutions[],
    title: string
}


const ReuseMenuView: React.FC<ReuseMenuViewProps> = ({ data, title }) => {
    const router = useRouter();
    return (
        <div>
            <div className='p-8 bg-white '>
                <p className=' text-lg md:text-xl  font-bold text-purple-500 mt-5'>{title}</p>
                <div className='grid grid-cols-2   gap-2 max-w-[700px] xl:max-w-[1000px]'>
                    {data.map((item, idx) => (
                        <div key={idx} className="mb-3" onClick={() => router.push(item.url as string)}>
                            <h3 className="text-sm font-bold text-black">{item.heading}</h3>
                            <div className='h-[12px] max-w-[60px]  border-t-4 border-white hover:border-pink-700'></div>
                            <p className="text-xs text-gray-600">{item.subheading}</p>
                        </div>
                    ))}


                </div>
            </div>

        </div>
    )
}

export default ReuseMenuView;
