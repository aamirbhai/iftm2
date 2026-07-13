"use client";

import { useState } from "react";
import Link from "next/link";

interface Programme {
  id: string;
  title: string;
  slug: string;
  school: string;
  level: "Diploma" | "UG" | "PG" | "Ph.D.";
  duration: string;
  image?: string;
}

interface Props {
  programmes: Programme[];
}

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

export default function ProgramsSectionClient({ programmes }: Props) {
  const [selectedLevel, setSelectedLevel] = useState("All");

  // Group programmes by school
  const schoolMap = new Map<string, Programme[]>();
  for (const p of programmes) {
    const arr = schoolMap.get(p.school) ?? [];
    arr.push(p);
    schoolMap.set(p.school, arr);
  }
  const schools = Array.from(schoolMap.entries()).map(([name, items]) => ({
    name,
    programmes: items,
  }));

  const [selectedSchool, setSelectedSchool] = useState(0);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);

  const activeSchool = schools[selectedSchool] || { name: "", programmes: [] };
  const filteredProgrammes = activeSchool.programmes.filter(
    (p) => selectedLevel === "All" || p.level === selectedLevel
  );

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-iftm-primary blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-iftm-navy-light blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Programmes <span className="text-iftm-gold">Offered</span>
          </h2>
          <p className="text-white/50 text-sm mt-2">
            {programmes.length}+ Programmes across {schools.length} Schools
          </p>
        </div>

        {/* ═══ DESKTOP: Sidebar Layout ═══ */}
        <div className="hidden lg:grid grid-cols-[280px_1fr] gap-6">
          {/* Left Sidebar - Schools */}
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
            {schools.map((school, index) => (
              <button
                key={school.name}
                onClick={() => {
                  setSelectedSchool(index);
                  setSelectedLevel("All");
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  selectedSchool === index
                    ? "bg-iftm-primary text-white shadow-lg shadow-iftm-primary/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedSchool === index ? "bg-white/20" : "bg-white/5"
                }`}>
                  <i className="fas fa-graduation-cap text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-semibold truncate block">{school.name}</span>
                  <span className="text-[10px] opacity-60">{school.programmes.length} Programmes</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-40 flex-shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right Content - Programmes */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            {/* School Header + Level Filter */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <h3 className="text-white text-lg font-bold">{activeSchool.name}</h3>
                <p className="text-white/40 text-sm">{filteredProgrammes.length} Programmes</p>
              </div>
              <div className="flex gap-2">
                {["All", "Diploma", "UG", "PG", "Ph.D."].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase transition-all ${
                      selectedLevel === level
                        ? "bg-iftm-primary text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Programme Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1 scrollbar-hide">
              {filteredProgrammes.map((programme) => (
                <Link
                  key={programme.id}
                  href={`/programmes/${programme.slug}`}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-iftm-gold/30 hover:bg-white/10 transition-all group"
                >
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase text-white ${levelColors[programme.level]}`}>
                    {programme.level}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-[13px] font-semibold truncate group-hover:text-iftm-gold transition-colors">
                      {programme.title}
                    </h4>
                    {programme.duration && (
                      <p className="text-white/40 text-[10px]">{programme.duration}</p>
                    )}
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/30 group-hover:text-iftm-gold transition-colors flex-shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ MOBILE: Accordion Layout ═══ */}
        <div className="lg:hidden space-y-3">
          {/* Mobile Level Filter */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {["All", "Diploma", "UG", "PG", "Ph.D."].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase flex-shrink-0 transition-all ${
                  selectedLevel === level
                    ? "bg-iftm-primary text-white"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {schools.map((school, index) => {
            const isOpen = mobileAccordion === index;
            const programmes = school.programmes.filter(
              (p) => selectedLevel === "All" || p.level === selectedLevel
            );

            if (programmes.length === 0) return null;

            return (
              <div key={school.name} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileAccordion(isOpen ? null : index)}
                  className="w-full flex items-center gap-3 px-4 py-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-graduation-cap text-iftm-gold text-sm" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="text-white text-sm font-semibold block">{school.name}</span>
                    <span className="text-white/40 text-[11px]">{programmes.length} Programmes</span>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4">
                    <div className="space-y-2">
                      {programmes.map((p) => (
                        <Link
                          key={p.id}
                          href={`/programmes/${p.slug}`}
                          className="flex items-center gap-2 p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase text-white ${levelColors[p.level]}`}>
                            {p.level}
                          </span>
                          <span className="text-white text-xs font-medium flex-1 truncate">{p.title}</span>
                          {p.duration && (
                            <span className="text-white/30 text-[10px]">{p.duration}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/programmes"
            className="inline-block px-8 py-3 bg-iftm-primary text-white font-semibold rounded-lg hover:bg-iftm-primary-dark transition-colors"
          >
            View All Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
