import React from "react";

type MenuItem = {
  title: string;
  description: string;
};

type MegaMenuSectionProps = {
  title: string;
  items: MenuItem[];
};

const MegaMenuSection: React.FC<MegaMenuSectionProps> = ({ title, items }) => {
  return (
    <div className="p-4">
      <p className="font-bold text-sm mb-4">{title}</p>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[600px]">
        {items.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <p className="text-[13px] font-semibold text-gray-700 group-hover:text-black">
              {item.title}
            </p>
            <p className="text-[11px] text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuSection;
