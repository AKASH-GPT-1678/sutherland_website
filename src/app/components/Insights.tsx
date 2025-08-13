import React from 'react';
import { useRouter } from 'next/navigation';

const leftLinks = [
    { title: "Blogs", url: "https://www.sutherlandglobal.com/insights/blog" },
    { title: "Case Studies", url: "https://www.sutherlandglobal.com/insights/case-study" },
    { title: "Infographics", url: "https://www.sutherlandglobal.com/insights/infographic" },
    { title: "Glossary", url: "https://www.sutherlandglobal.com/insights/glossary" },
    { title: "Podcasts", url: "https://www.sutherlandglobal.com/insights/podcast/back-to-the-future-with-sutherland" }
];
const rightLinks = [
    { title: "Solution Overviews", url: "https://www.sutherlandglobal.com/insights/solution-overview" },
    { title: "Videos", url: "https://www.sutherlandglobal.com/insights/video" },
    { title: "Webinars", url: "https://www.sutherlandglobal.com/insights/webinar" },
    { title: "Whitepapers", url: "https://www.sutherlandglobal.com/insights/whitepaper" }
];


const Insights = () => {
    const router = useRouter();
    return (


        <div className="flex flex-col max-w-[700px]">


            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-gray-100 self-start ml-16"></div>


            <div className="bg-gray-100 p-6 min-h-[200px] min-w-[200px]">
                <p className="font-bold text-sm">Insights</p>

                <div className="flex flex-row justify-between w-full mt-5">

                    <ul className="flex flex-col space-y-3 text-sm">
                        {leftLinks.map((item, i) => (
                            <li key={i} className="text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer" onClick={() => router.push(item.url)}>
                                {item.title}
                                <div className="border-2 w-10 border-red-500 hidden group-hover:inline-block"></div>
                            </li>
                        ))}
                    </ul>

                    {/* Divider */}
                    <div className="border-l border-gray-300 mx-6"></div>

                    {/* Right Column */}
                    <ul className="flex flex-col space-y-3 text-sm">
                        {rightLinks.map((item, i) => (
                            <li key={i} className="text-gray-500 hover:text-black font-semibold group flex flex-col cursor-pointer" onClick={() => router.push(item.url)}>
                                {item.title}
                                <div className="border-2 w-10 border-red-500 hidden group-hover:inline-block"></div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Insights;
