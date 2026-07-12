"use client";

import { useState } from "react";

interface ProgrammeTabsProps {
  overview?: string;
  curriculum?: string;
  career?: string;
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "career", label: "Career Prospects" },
];

export default function ProgrammeTabs({ overview, curriculum, career }: ProgrammeTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const content: Record<string, string> = {
    overview: overview ?? "",
    curriculum: curriculum ?? "",
    career: career ?? "",
  };

  return (
    <>
      <div className="flex gap-2 mb-8 border-b border-iftm-border pb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-iftm-primary text-white"
                : "bg-iftm-light text-iftm-text hover:bg-iftm-primary/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="prose prose-lg max-w-none
          prose-headings:text-iftm-dark prose-headings:font-bold
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-iftm-text prose-p:leading-relaxed
          prose-li:text-iftm-text"
        dangerouslySetInnerHTML={{ __html: content[activeTab] }}
      />
    </>
  );
}
