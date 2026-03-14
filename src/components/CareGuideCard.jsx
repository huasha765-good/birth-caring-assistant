import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const CareGuideCard = ({ title, icon, items, isLast }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mtd-card overflow-hidden">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleExpanded}>

        <div className="flex items-center">
          <span className="text-blue-600 mr-2">{icon}</span>
          <h2 className={isLast ? "text-blue-500" : "text-gray-900"}>
            {isLast ? "最容易结\"月子仇\"的雷区" : title}
          </h2>
        </div>
        {expanded ?
        <ChevronUp className="h-5 w-5 text-gray-500" /> :

        <ChevronDown className="h-5 w-5 text-gray-500" />
        }
      </div>

      {expanded &&
      <div className="p-4 pt-0">
          <ul className="space-y-3">
            {items.map((item, index) =>
          <li key={index} className="border-b border-gray-100 pb-3 last:border-0 flex justify-center items-center flex-col">
                <div className="text-gray-800 flex">
                  <span className="text-body-md break-words text-left pl-0 font-bold w-[250px]">{item.text}</span>
                </div>
                {item.subItems &&
            <ul className="mt-2 ml-0 space-y-1">
                    {item.subItems.map((subItem, subIndex) =>
              <li key={subIndex} className="text-gray-600 flex justify-center items-center">
                      <span className="mr-1 w-[12px] text-[14px]">•</span>
                      <span className="break-words my-[5px] text-[14px] text-left w-full pl-0">{subItem}</span>
                    </li>
              )}
                  </ul>
            }
              </li>
          )}
          </ul>
        </div>
      }
    </div>);

};

export default CareGuideCard;
