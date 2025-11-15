import { useState } from "react";

// Define a type for a single tab entry.
type TabConfigEntry = {
    header: string;
    component: React.ReactNode;
};
// define a type for the component
type TabsProps = {
    config: TabConfigEntry[];
};

const Tabs: React.FC<TabsProps> = ({ config }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className="flex justify-between p-4 text-[17px] font-medium">
                <div className="flex justify-start space-x-8">
                {
                    config.map((entry, index) => (
                        <div className={`tab-header ${activeTab === index ? "text-[#34967C] border-b-2 border-[#34967C]" : "text-gray-400 hover:text-gray-600"}`} onClick={() => setActiveTab(index)} key={index}>
                            {entry.header}
                        </div>
                    ))
                }
                </div>
                <div className="text-gray-400">Published July 01, 2024</div>
            </div>

            <div>
            {config[activeTab].component}
            </div>
        </div>
    );
}
export default Tabs;