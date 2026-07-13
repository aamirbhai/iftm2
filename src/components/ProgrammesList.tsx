"use client";

import { useState } from "react";
import Link from "next/link";

interface Programme {
  id: string;
  title: string;
  slug: string;
  level: string;
  duration: string;
}

interface School {
  name: string;
  icon: string;
  programmes: Programme[];
}

interface Props {
  schools: School[];
}

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

export default function ProgrammesList({ schools }: Props) {
  const [activeSchool, setActiveSchool] = useState(0);
  const current = schools[activeSchool];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
      {/* Sidebar - Schools */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="bg-white rounded-2xl border border-iftm-border overflow-hidden shadow-sm">
          <div className="p-4 bg-iftm-navy">
            <h3 className="text-white font-bold text-sm">Our Schools</h3>
          </div>
          <div className="divide-y divide-iftm-border max-h-[500px] overflow-y-auto">
            {schools.map((school, index) => (
              <button
                key={school.name}
                onClick={() => setActiveSchool(index)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all ${
                  activeSchool === index
                    ? "bg-iftm-primary/10 border-l-4 border-iftm-primary"
                    : "hover:bg-iftm-light"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  activeSchool === index ? "bg-iftm-primary text-white" : "bg-iftm-light text-iftm-primary"
                }`}>
                  <i className={`fas ${school.icon} text-sm`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold truncate ${
                    activeSchool === index ? "text-iftm-primary" : "text-iftm-dark"
                  }`}>
                    {school.name}
                  </p>
                  <p className="text-iftm-text-light text-xs">{school.programmes.length} Programmes</p>
                </div>
                {activeSchool === index && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-iftm-primary flex-shrink-0">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content - Programmes List */}
      <div>
        {/* School Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-iftm-primary/10 rounded-xl flex items-center justify-center">
            <i className={`fas ${current.icon} text-iftm-primary text-xl`} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-iftm-dark">{current.name}</h2>
            <p className="text-iftm-text-light text-sm">{current.programmes.length} Programmes Available</p>
          </div>
        </div>

        {/* Programmes List - Clean, no images */}
        <div className="space-y-2">
          {current.programmes.map((programme) => (
            <Link
              key={programme.slug}
              href={`/programmes/${programme.slug}`}
              className="group flex items-center gap-4 bg-white rounded-xl border border-iftm-border px-5 py-4 hover:shadow-md hover:border-iftm-primary/30 transition-all duration-300"
            >
              {/* Level Badge */}
              <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase text-white flex-shrink-0 ${levelColors[programme.level] || levelColors["UG"]}`}>
                {programme.level}
              </span>

              {/* Programme Name */}
              <h3 className="flex-1 text-iftm-dark font-semibold text-sm group-hover:text-iftm-primary transition-colors">
                {programme.title}
              </h3>

              {/* Duration */}
              {programme.duration && (
                <span className="text-iftm-text-light text-xs flex items-center gap-1 flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {programme.duration}
                </span>
              )}

              {/* Arrow */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-text-light group-hover:text-iftm-primary group-hover:translate-x-1 transition-all flex-shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
