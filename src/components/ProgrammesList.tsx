"use client";

import { useState } from "react";
import Link from "next/link";

interface Programme {
  id: string;
  title: string;
  slug: string;
  level: string;
  duration: string;
  image?: string;
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

      {/* Content - Programmes */}
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

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {current.programmes.map((programme) => (
            <Link
              key={programme.slug}
              href={`/programmes/${programme.slug}`}
              className="group flex gap-4 bg-white rounded-xl border border-iftm-border p-4 hover:shadow-lg hover:border-iftm-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-iftm-light">
                {programme.image ? (
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><i class="fas fa-graduation-cap text-iftm-primary/30 text-2xl"></i></div>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-iftm-primary/30 text-2xl" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase text-white mb-2 ${levelColors[programme.level] || levelColors["UG"]}`}>
                  {programme.level}
                </span>
                <h3 className="text-iftm-dark font-semibold text-sm group-hover:text-iftm-primary transition-colors line-clamp-2 mb-1">
                  {programme.title}
                </h3>
                {programme.duration && (
                  <p className="text-iftm-text-light text-xs flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {programme.duration}
                  </p>
                )}
                <div className="flex items-center gap-1 text-iftm-primary text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                  View Details
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
