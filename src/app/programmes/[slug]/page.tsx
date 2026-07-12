"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const runtime = 'edge';

const programmeData: Record<string, {
  name: string;
  school: string;
  level: string;
  duration: string;
  eligibility: string;
  fee: string;
  overview: string;
  curriculum: string;
  career: string;
  relatedProgrammes: { name: string; slug: string; level: string }[];
}> = {
  "btech-cse": {
    name: "B.Tech Computer Science & Engineering",
    school: "School of Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics with minimum 50% marks",
    fee: "₹85,000 per year",
    overview: `
      <p>The B.Tech Computer Science & Engineering programme at IFTM University is designed to produce industry-ready professionals equipped with strong technical skills and problem-solving abilities.</p>
      <p>Our curriculum covers the latest technologies including Artificial Intelligence, Machine Learning, Cloud Computing, and Cybersecurity.</p>
      <h3>Programme Highlights</h3>
      <ul>
        <li>Industry-aligned curriculum updated annually</li>
        <li>Hands-on experience with latest technologies</li>
        <li>Dedicated coding labs and innovation centers</li>
        <li>Internship opportunities with top tech companies</li>
        <li>90%+ placement rate with top recruiters</li>
      </ul>
    `,
    curriculum: `
      <h3>Year 1 - Foundation</h3>
      <ul>
        <li>Engineering Mathematics I & II</li>
        <li>Physics & Chemistry</li>
        <li>Programming in C</li>
        <li>Basic Electronics</li>
      </ul>
      <h3>Year 2 - Core</h3>
      <ul>
        <li>Data Structures & Algorithms</li>
        <li>Object Oriented Programming (Java)</li>
        <li>Database Management Systems</li>
        <li>Computer Organization</li>
      </ul>
      <h3>Year 3 - Advanced</h3>
      <ul>
        <li>Operating Systems</li>
        <li>Computer Networks</li>
        <li>Software Engineering</li>
        <li>Artificial Intelligence</li>
      </ul>
      <h3>Year 4 - Specialization</h3>
      <ul>
        <li>Machine Learning</li>
        <li>Cloud Computing</li>
        <li>Cybersecurity</li>
        <li>Major Project</li>
      </ul>
    `,
    career: `
      <p>B.Tech CSE graduates from IFTM University have excellent career prospects in the rapidly growing IT industry.</p>
      <h3>Job Roles</h3>
      <ul>
        <li>Software Developer/Engineer</li>
        <li>Data Scientist</li>
        <li>AI/ML Engineer</li>
        <li>Cloud Architect</li>
        <li>Cybersecurity Analyst</li>
      </ul>
      <h3>Top Recruiters</h3>
      <ul>
        <li>TCS</li>
        <li>Infosys</li>
        <li>Wipro</li>
        <li>HCL Technologies</li>
        <li>Accenture</li>
      </ul>
      <h3>Average Package</h3>
      <p>₹4.5 - 6 LPA (Freshers)<br>₹8 - 12 LPA (Experienced)</p>
    `,
    relatedProgrammes: [
      { name: "B.Tech Artificial Intelligence", slug: "btech-ai", level: "UG" },
      { name: "M.Tech Computer Science", slug: "mtech-cse", level: "PG" },
      { name: "BCA (Hons.)", slug: "bca", level: "UG" },
    ],
  },
  "bpharm": {
    name: "B.Pharm",
    school: "School of Pharmaceutical Sciences",
    level: "UG",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics with minimum 50% marks",
    fee: "₹75,000 per year",
    overview: `
      <p>The Bachelor of Pharmacy (B.Pharm) programme at IFTM University is approved by PCI (Pharmacy Council of India) and provides comprehensive education in pharmaceutical sciences.</p>
      <h3>Programme Highlights</h3>
      <ul>
        <li>PCI Approved Programme</li>
        <li>Modern pharmaceutical laboratories</li>
        <li>Industry visits and internships</li>
        <li>Research opportunities</li>
        <li>Excellent placement record</li>
      </ul>
    `,
    curriculum: `
      <h3>Year 1</h3>
      <ul>
        <li>Human Anatomy & Physiology</li>
        <li>Pharmaceutical Chemistry</li>
        <li>Pharmaceutics I</li>
        <li>Biochemistry</li>
      </ul>
      <h3>Year 2</h3>
      <ul>
        <li>Pharmacology I</li>
        <li>Pharmaceutical Chemistry II</li>
        <li>Pharmaceutics II</li>
        <li>Pathophysiology</li>
      </ul>
      <h3>Year 3</h3>
      <ul>
        <li>Pharmacology II</li>
        <li>Pharmaceutical Analysis</li>
        <li>Pharmaceutical Jurisprudence</li>
        <li>Medicinal Chemistry</li>
      </ul>
      <h3>Year 4</h3>
      <ul>
        <li>Drug Design</li>
        <li>Quality Assurance</li>
        <li>Pharmaceutical Biotechnology</li>
        <li>Project Work</li>
      </ul>
    `,
    career: `
      <p>B.Pharm graduates have diverse career opportunities in the pharmaceutical industry, healthcare sector, and research.</p>
      <h3>Job Roles</h3>
      <ul>
        <li>Pharmacist</li>
        <li>Medical Representative</li>
        <li>Quality Control Analyst</li>
        <li>Drug Inspector</li>
        <li>Research Scientist</li>
      </ul>
      <h3>Top Recruiters</h3>
      <ul>
        <li>Sun Pharma</li>
        <li>Dr. Reddy's</li>
        <li>Cipla</li>
        <li>Lupin</li>
        <li>Aurobindo Pharma</li>
      </ul>
    `,
    relatedProgrammes: [
      { name: "D.Pharm", slug: "dpharm", level: "Diploma" },
      { name: "M.Pharm Pharmaceutics", slug: "mpharm-pharmaceutics", level: "PG" },
      { name: "B.Tech Biotechnology", slug: "btech-biotech", level: "UG" },
    ],
  },
};

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

export default function ProgrammeDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  const programme = programmeData[params.slug];

  if (!programme) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-[90px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-iftm-dark mb-4">Programme Not Found</h1>
            <Link href="/programmes" className="text-iftm-primary hover:underline">
              View All Programmes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "career", label: "Career Prospects" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-[90px] md:pt-[110px] bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-10 md:py-16">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/programmes" className="hover:text-iftm-gold transition-colors">Programmes</Link></li>
                <li>/</li>
                <li className="text-iftm-gold">{programme.name}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase text-white ${levelColors[programme.level]}`}>
                {programme.level}
              </span>
              <span className="text-white/60 text-sm">{programme.school}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {programme.name}
            </h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Duration", value: programme.duration },
                { label: "Level", value: programme.level },
                { label: "Fee", value: programme.fee },
                { label: "Eligibility", value: programme.eligibility.split("with")[0] },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <span className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</span>
                  <p className="text-white font-semibold text-sm mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-iftm-primary via-iftm-gold to-iftm-primary" />
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              {/* Main Content */}
              <div>
                {/* Tabs */}
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

                {/* Tab Content */}
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-iftm-dark prose-headings:font-bold
                    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-iftm-text prose-p:leading-relaxed
                    prose-li:text-iftm-text"
                  dangerouslySetInnerHTML={{ __html: programme[activeTab as keyof typeof programme] as string }}
                />
              </div>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Eligibility Card */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Eligibility
                    </h3>
                    <p className="text-iftm-text text-sm">{programme.eligibility}</p>
                  </div>

                  {/* Fee Card */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Fee Structure
                    </h3>
                    <p className="text-iftm-primary font-bold text-2xl">{programme.fee}</p>
                    <p className="text-iftm-text-light text-xs mt-1">*Additional fees may apply</p>
                  </div>

                  {/* Apply CTA */}
                  <div className="bg-gradient-to-br from-iftm-primary to-iftm-primary-dark rounded-xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">Ready to Apply?</h3>
                    <p className="text-white/80 text-sm mb-4">Start your application for {programme.name}</p>
                    <a
                      href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-white text-iftm-primary font-bold text-center rounded-lg hover:bg-iftm-gold transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>

                  {/* Related Programmes */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Related Programmes
                    </h3>
                    <div className="space-y-3">
                      {programme.relatedProgrammes.map((related, index) => (
                        <Link
                          key={index}
                          href={`/programmes/${related.slug}`}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-iftm-border hover:border-iftm-primary/30 transition-colors group"
                        >
                          <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase text-white ${levelColors[related.level]}`}>
                            {related.level}
                          </span>
                          <span className="text-iftm-dark text-sm font-medium flex-1 truncate group-hover:text-iftm-primary transition-colors">
                            {related.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Sticky Apply Bar (Mobile) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-iftm-border p-4 z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-iftm-dark font-semibold text-sm">{programme.name}</p>
              <p className="text-iftm-primary font-bold">{programme.fee}</p>
            </div>
            <a
              href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-iftm-primary text-white font-bold text-sm rounded-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
