"use client";

import { useState } from "react";
import Link from "next/link";

interface Programme {
  name: string;
  href: string;
  level: "Diploma" | "UG" | "PG" | "Ph.D.";
  duration: string;
}

interface College {
  id: string;
  name: string;
  icon: string;
  programmes: Programme[];
}

const colleges: College[] = [
  {
    id: "sbm",
    name: "School of Business Management",
    icon: "fa-briefcase",
    programmes: [
      { name: "BBA (Hons. with Research)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Com. (Hons. with Research)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "MBA", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Com.", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Master of Hotel Management (MHM)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Bachelor of Hotel Mgmt. & Catering Technology", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "Ph.D. in Management", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Commerce", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sps",
    name: "School of Pharmaceutical Sciences",
    icon: "fa-pills",
    programmes: [
      { name: "D.Pharm.", href: "/diploma", level: "Diploma", duration: "2 Years" },
      { name: "B.Pharm.", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Pharm (Pharmaceutics)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Pharm (Pharmaceutical Chemistry)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Pharm (Pharmacology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Pharm (Pharmacognosy)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Pharmacy", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sca",
    name: "School of Computer Science & Applications",
    icon: "fa-laptop-code",
    programmes: [
      { name: "BCA (Hons. with Research)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. Computer Science", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "MCA", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Computer Science & Applications", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "set",
    name: "School of Engineering & Technology",
    icon: "fa-cogs",
    programmes: [
      { name: "Diploma (Civil)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Computer Science)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Electronics & Communication)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Electrical)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Mechanical)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Production Engg.)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (AI)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "B.Tech (Computer Sc. & Engg.)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Artificial Intelligence)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Civil Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Mechanical Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Electrical Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Electronics & Communication)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Biotechnology)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Agriculture Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Tech (Civil Engineering)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Computer Sc. & Engg.)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Mechanical Engineering)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Electrical Engineering)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Electronics & Communication)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Biotechnology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Soil & Water Conservation Engg.)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Farm Machinery & Power Engg.)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Process & Food Engineering)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Computer Science & Engineering", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Civil Engineering", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Electronics & Communication Engg.", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Mechanical Engineering", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Electrical Engineering", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Agriculture Engineering", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sbt",
    name: "School of Biotechnology",
    icon: "fa-dna",
    programmes: [
      { name: "B.Sc. (Hons. with Research) Biotechnology", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons. with Research) Microbiology", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Food Technology)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "M.Sc. (Biotechnology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Micro Biology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Food Technology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Biotechnology", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sos",
    name: "School of Sciences",
    icon: "fa-flask",
    programmes: [
      { name: "B.Sc. (Hons. with Research) Physics", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons. with Research) Chemistry", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons. with Research) Mathematics", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons. with Research) Botany", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons. with Research) Zoology", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons. with Research) Home Science", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "M.Sc. (Physics)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Chemistry)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Mathematics)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Botany)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Zoology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Home Science)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Physics", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Chemistry", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Mathematics", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Botany", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Zoology", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Home Science", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sol",
    name: "School of Law",
    icon: "fa-gavel",
    programmes: [
      { name: "LL.B", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "Integrated Law (B.B.A. LL.B)", href: "/ug", level: "UG", duration: "5 Years" },
      { name: "Integrated Law (B.A. LL.B)", href: "/ug", level: "UG", duration: "5 Years" },
      { name: "LLM", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Law", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sss",
    name: "School of Education & Humanities",
    icon: "fa-chalkboard-teacher",
    programmes: [
      { name: "B.Ed.", href: "/ug", level: "UG", duration: "2 Years" },
      { name: "BA-B.Ed.-ITEP (Foundation)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "BA-B.Ed.-ITEP (Preparatory)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "BA-B.Ed.-ITEP (Secondary)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Sc.-B.Ed.-ITEP (Foundation)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Sc.-B.Ed.-ITEP (Preparatory)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Sc.-B.Ed.-ITEP (Secondary)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Ed.", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (Education)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (English)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (Hindi)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (Economics)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (Geography)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (Sociology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "MA (Journalism)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Master of Social Work (MSW)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Education", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in English", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Hindi", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Economics", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Geography", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Sociology", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Journalism & Mass Communication", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sase",
    name: "School of Agricultural Sciences",
    icon: "fa-seedling",
    programmes: [
      { name: "B.Sc. (Hons.) Agriculture", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Sc. (Agronomy)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Horticulture) Veg Science", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Horticulture) Floriculture & Landscaping", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Genetics & Plant Breeding)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Agriculture (Genetic & Plant Breeding)", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Agriculture Science (Horticulture)", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "ba",
    name: "BA (Hons.) Programmes",
    icon: "fa-book-open",
    programmes: [
      { name: "BA (Hons. with Research) English", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Hindi", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Economics", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Geography", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Sociology", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Political Science", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) History", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Sanskrit", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Home Science", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Hons. with Research) Education", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA (Journalism)", href: "/ug", level: "UG", duration: "3 Years" },
    ],
  },
  {
    id: "lib",
    name: "Library & Information Science",
    icon: "fa-book",
    programmes: [
      { name: "B.Lib. & Information Science", href: "/ug", level: "UG", duration: "1 Year" },
      { name: "M.Lib. & Information Science", href: "/pg", level: "PG", duration: "1 Year" },
      { name: "Ph.D. in Library Science", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "uop",
    name: "University Polytechnic",
    icon: "fa-wrench",
    programmes: [
      { name: "Diploma (Hotel Mgmt)", href: "/diploma", level: "Diploma", duration: "2 Years" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

export default function ProgramsSection() {
  const [selectedCollege, setSelectedCollege] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);

  const activeCollege = colleges[selectedCollege];

  const filteredProgrammes = activeCollege.programmes.filter(
    (p) => selectedLevel === "All" || p.level === selectedLevel
  );

  const totalProgrammes = colleges.reduce((sum, c) => sum + c.programmes.length, 0);

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
          <p className="text-white/50 text-sm mt-2">{totalProgrammes}+ Programmes across {colleges.length} Schools</p>
        </div>

        {/* ═══ DESKTOP: Sidebar Layout ═══ */}
        <div className="hidden lg:grid grid-cols-[280px_1fr] gap-6">
          {/* Left Sidebar - Schools */}
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
            {colleges.map((college, index) => (
              <button
                key={college.id}
                onClick={() => {
                  setSelectedCollege(index);
                  setSelectedLevel("All");
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  selectedCollege === index
                    ? "bg-iftm-primary text-white shadow-lg shadow-iftm-primary/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedCollege === index ? "bg-white/20" : "bg-white/5"
                }`}>
                  <i className={`fas ${college.icon} text-sm`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-semibold truncate block">{college.name}</span>
                  <span className="text-[10px] opacity-60">{college.programmes.length} Programmes</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-40 flex-shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right Content - Programmes */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            {/* College Header + Level Filter */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <h3 className="text-white text-lg font-bold">{activeCollege.name}</h3>
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
              {filteredProgrammes.map((programme, index) => (
                <Link
                  key={index}
                  href={programme.href}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-iftm-gold/30 hover:bg-white/10 transition-all group"
                >
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase text-white ${levelColors[programme.level]}`}>
                    {programme.level}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-[13px] font-semibold truncate group-hover:text-iftm-gold transition-colors">
                      {programme.name}
                    </h4>
                    <p className="text-white/40 text-[10px]">{programme.duration}</p>
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

          {colleges.map((college, index) => {
            const isOpen = mobileAccordion === index;
            const programmes = college.programmes.filter(
              (p) => selectedLevel === "All" || p.level === selectedLevel
            );

            if (programmes.length === 0) return null;

            return (
              <div key={college.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileAccordion(isOpen ? null : index)}
                  className="w-full flex items-center gap-3 px-4 py-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${college.icon} text-iftm-gold text-sm`} />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="text-white text-sm font-semibold block">{college.name}</span>
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
                      {programmes.map((p, i) => (
                        <Link
                          key={i}
                          href={p.href}
                          className="flex items-center gap-2 p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase text-white ${levelColors[p.level]}`}>
                            {p.level}
                          </span>
                          <span className="text-white text-xs font-medium flex-1 truncate">{p.name}</span>
                          <span className="text-white/30 text-[10px]">{p.duration}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
