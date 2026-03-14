import React from 'react';
const TimeAnchor = ({ sections, activeSection, onSectionChange }) => {
  // 方案1: 卡片式导航（去掉图标）
  const CardStyleNavigation = () =>
  <div className="flex space-x-1 overflow-x-auto pb-1">
      {sections.map((section) =>
    <button
      key={section.id}
      onClick={() => onSectionChange(section.id)}
      className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
      activeSection === section.id ?
      'bg-blue-500 text-white shadow-md' :
      'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`
      }>

          <span className="whitespace-nowrap text-sm font-medium">
            {section.title}
          </span>
        </button>
    )}
    </div>;


  // 方案2: 标签式导航（去掉图标）
  const TabStyleNavigation = () =>
  <div className="flex space-x-1 overflow-x-auto bg-gray-100 p-1 rounded-lg">
      {sections.map((section) =>
    <button
      key={section.id}
      onClick={() => onSectionChange(section.id)}
      className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-all duration-200 ${
      activeSection === section.id ?
      'bg-white text-blue-600 shadow-sm' :
      'text-gray-600 hover:text-gray-900'}`
      }>

          <span className="whitespace-nowrap text-sm font-medium">
            {section.title}
          </span>
        </button>
    )}
    </div>;


  // 方案3: 点状指示器导航
  const DotStyleNavigation = () =>
  <div className="flex justify-center space-x-4">
      {sections.map((section) =>
    <button
      key={section.id}
      onClick={() => onSectionChange(section.id)}
      className={`flex items-center justify-center w-4 h-4 rounded-full transition-all duration-200 ${
      activeSection === section.id ?
      'bg-blue-500 scale-125' :
      'bg-gray-300 hover:bg-gray-400'}`
      }
      title={section.title}>

          <span className="sr-only">{section.title}</span>
        </button>
    )}
    </div>;


  // 当前使用方案1，可以根据需要切换为方案2或方案3
  return (
    <div className="sticky top-16 bg-white z-10 overflow-x-auto border-b border-[#00000000] h-[70px] py-[12px]">
      <div className="container mx-auto px-4">
        <CardStyleNavigation />
        {/* <TabStyleNavigation /> */}
        {/* <DotStyleNavigation /> */}
      </div>
    </div>);

};

export default TimeAnchor;
