"use client";

import React, { useState } from "react";

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const TabsList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex space-x-4 border-b">{children}</div>;
};

const TabsTrigger = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`py-2 px-4 border-b-2 ${
        isActive ? "border-black font-bold" : "border-transparent"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabsContent = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return isActive ? <div className="mt-4">{children}</div> : null;
};

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger
          label="Tab 1"
          isActive={activeTab === 0}
          onClick={() => setActiveTab(0)}
        />
        <TabsTrigger
          label="Tab 2"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <TabsTrigger
          label="Tab 3"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
      </TabsList>
      <TabsContent isActive={activeTab === 0}>
        Content for Tab 1
      </TabsContent>
      <TabsContent isActive={activeTab === 1}>
        Content for Tab 2
      </TabsContent>
      <TabsContent isActive={activeTab === 2}>
        Content for Tab 3
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
