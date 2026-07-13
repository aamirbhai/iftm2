export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgrammesList from "@/components/ProgrammesList";
import Link from "next/link";
import type { Metadata } from "next";
import { getProgrammes } from "@/lib/wordpress";
import type { WordPressProgramme } from "@/types/wordpress";

export const metadata: Metadata = {
  title: "Programmes Offered | IFTM University Moradabad",
  description: "Explore 130+ programmes across Engineering, Pharmacy, Management, Law, Sciences, and more at IFTM University.",
  alternates: { canonical: "https://iftmuniversity.ac.in/programmes" },
};

const schoolIcons: Record<string, string> = {
  "School of Engineering & Technology": "fa-cogs",
  "School of Pharmaceutical Sciences": "fa-pills",
  "School of Business Management": "fa-briefcase",
  "School of Computer Science & Applications": "fa-laptop-code",
  "School of Computer Science": "fa-laptop-code",
  "School of Law": "fa-gavel",
  "School of Sciences": "fa-flask",
  "School of Biotechnology": "fa-dna",
  "School of Education & Humanities": "fa-chalkboard-teacher",
  "School of Agricultural Sciences": "fa-seedling",
  "IFTM University": "fa-graduation-cap",
};

function guessLevel(title: string): "Diploma" | "UG" | "PG" | "Ph.D." {
  const t = title.toLowerCase();
  if (t.includes("ph.d") || t.includes("phd")) return "Ph.D.";
  if (t.includes("m.com") || t.includes("mba") || t.includes("mca") || t.includes("m.sc") || t.includes("m.tech") || t.includes("llm") || t.includes("m.ed") || t.includes("m.pharm") || t.includes("m.lib") || t.includes("msw") || t.startsWith("m.a") || t.startsWith("ma ")) return "PG";
  if (t.includes("diploma") || t.includes("d.pharm") || t.includes("b.lib")) return "Diploma";
  return "UG";
}

function groupBySchool(programmes: WordPressProgramme[]) {
  const groups = new Map<string, WordPressProgramme[]>();
  for (const p of programmes) {
    const school = p.programmeDetails?.school || "IFTM University";
    const arr = groups.get(school) ?? [];
    arr.push(p);
    groups.set(school, arr);
  }
  return Array.from(groups.entries()).map(([name, items]) => ({
    name,
    icon: schoolIcons[name] ?? "fa-graduation-cap",
    programmes: items.map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      level: p.programmeDetails?.level?.[0] || p.programmeFields?.level || guessLevel(p.title),
      duration: p.programmeDetails?.duration || "",
    })),
  }));
}

export default async function ProgrammesPage() {
  const programmes = await getProgrammes();
  const schools = groupBySchool(programmes);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ═══ Hero Section ═══ */}
        <section className="relative pt-[72px] md:pt-[80px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0a0f2e] to-[#151b4a]" />
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-iftm-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-iftm-gold/5 rounded-full blur-[120px]" />

          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-iftm-gold/20 text-iftm-gold text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Admissions Open 2026-27
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Explore Our{" "}
                  <span className="text-iftm-gold">Programmes</span>
                </h1>
                <p className="text-white/70 text-lg mb-8 max-w-lg">
                  Discover {programmes.length}+ programmes across {schools.length} schools designed to shape your future.
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { value: `${programmes.length}+`, label: "Programmes" },
                    { value: `${schools.length}`, label: "Schools" },
                    { value: "90%+", label: "Placement" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-iftm-gold font-bold text-2xl md:text-3xl">{stat.value}</p>
                      <p className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-iftm-primary text-white font-bold rounded-xl hover:bg-iftm-primary-dark transition-all shadow-lg shadow-iftm-primary/30"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#programmes-list"
                    className="px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                  >
                    Browse All
                  </a>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
                  <img
                    src="/images/student-hero.jpg"
                    alt="IFTM University Student"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iftm-navy/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* ═══ Programmes List with Sidebar ═══ */}
        <section id="programmes-list" className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark mb-2">
                Our <span className="text-iftm-primary">Schools & Programmes</span>
              </h2>
              <p className="text-iftm-text-light">Select a school to view its programmes</p>
            </div>

            {programmes.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-iftm-dark mb-2">No Programmes Found</h3>
                <p className="text-iftm-text-light">Programme information will be available soon.</p>
              </div>
            ) : (
              <ProgrammesList schools={schools} />
            )}
          </div>
        </section>

        {/* ═══ CTA Section ═══ */}
        <section className="py-16 bg-gradient-to-br from-iftm-navy via-[#0a0f2e] to-[#151b4a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-iftm-primary/10 rounded-full blur-[150px]" />
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your <span className="text-iftm-gold">Journey</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Join IFTM University and unlock your potential with world-class education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-iftm-primary text-white font-bold rounded-xl hover:bg-iftm-primary-dark transition-all shadow-lg shadow-iftm-primary/30"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
