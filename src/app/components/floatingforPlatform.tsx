import React from "react";
const menuItems = [
    "AI & Automation",
    "Customer Experience",
    "Digital Business Process",
    "Digital IT"
];
export interface Solutions {
    heading: string;
    subheading: string;
    url?: string
}

import ReuseMenuView from "./ReuseMenuView";
import { products, solutions, digitalBusiness, healthcareSolutions } from "./ReuseMenuView";


const FloatingforPlatform = () => {
    const [activeData, setActiveData] = React.useState<Solutions[]>(products);
    const [activeTitle, setActiveTitle] = React.useState<string>("AI & Automation");


    React.useEffect(() => {
        if (activeTitle === "AI & Automation") {
            setActiveData(products);
        } else if (activeTitle === "Customer Experience") {
            setActiveData(solutions);
        } else if (activeTitle === "Digital Business Process") {
            setActiveData(digitalBusiness);
        } else if (activeTitle === "Digital IT") {
            setActiveData(healthcareSolutions);
        }

    }, [activeTitle]);
    return <div className="h-fit flex flex-row shadow-2xl ">
        <div className="flex flex-col bg-gray-200 w-fit gap-1 mt-5">
            <ul className="p-2 w-fit ml-8">

                {
                    menuItems.map((item, index) => (
                        <div key={index} className="p-1 pl-10 text-sm font-bold  hover:bg-white cursor-pointer" onMouseEnter={() => setActiveTitle(item)}>
                            <p>{item}</p>
                        </div>
                    ))
                }
            </ul>

        </div>
        <div className="w-full mb-6">
            <ReuseMenuView data={activeData} title={activeTitle} />


        </div>



    </div>;
};

export default FloatingforPlatform;