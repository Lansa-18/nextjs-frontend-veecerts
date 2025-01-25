import DocsPage from "@/tabpage/DocsPage";
import { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["All", "Documents", "Images","Videos", "Audios", "Others"]; 
  const tabContent = [
    <DocsPage/>,
    "Content for Tab 2",
    "Content for Tab 3",
  ]; 

  return (
    <div>
    <div className="flex flex-wrap justify-center sm:justify-start mb-4">
      <div className="bg-bluey rounded-lg flex flex-wrap gap-2 sm:gap-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className="cursor-pointer py-2 px-2"
          >
            <div
              className={`px-4 py-2 ${
                activeTab === index
                  ? "bg-white shadow-lg rounded-lg"
                  : ""
              }`}
            >
              {tab}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="p-4">{tabContent[activeTab]}</div>
  </div>
  
  );
};

export default TabComponent;
