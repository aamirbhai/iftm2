export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { getProgrammes } from "@/lib/wordpress";
import type { WordPressProgramme } from "@/types/wordpress";

export const metadata: Metadata = {
  title: "Programmes Offered | IFTM University Moradabad",
  description: "Explore 130+ programmes across Engineering, Pharmacy, Management, Law, Sciences, and more at IFTM University.",
  alternates: { canonical: "https://iftmuniversity.ac.in/programmes" },
};

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

const schoolIcons: Record<string, string> = {
  "School of Engineering & Technology": "fa-cogs",
  "School of Pharmaceutical Sciences": "fa-pills",
  "School of Business Management": "fa-briefcase",
  "School of Computer Science": "fa-laptop-code",
  "School of Law": "fa-gavel",
  "School of Sciences": "fa-flask",
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
    programmes: items,
  }));
}

export default async function ProgrammesPage() {
  const programmes = await getProgrammes();
  const schools = groupBySchool(programmes);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ═══ Attractive Hero Section ═══ */}
        <section className="relative pt-[72px] md:pt-[80px] overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0a0f2e] to-[#151b4a]" />
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-iftm-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-iftm-gold/5 rounded-full blur-[120px]" />
          <div className="absolute top-40 right-40 w-20 h-20 border border-white/10 rounded-full" />
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-iftm-gold/20 rounded-full" />

          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-iftm-gold/20 text-iftm-gold text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Admissions Open 2026-27
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Explore Our{" "}
                  <span className="text-iftm-gold">Programmes</span>
                </h1>
                <p className="text-white/70 text-lg mb-8 max-w-lg">
                  Discover {programmes.length}+ programmes across {schools.length} schools designed to shape your future and career.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { value: `${programmes.length}+`, label: "Programmes" },
                    { value: `${schools.length}`, label: "Schools" },
                    { value: "130+", label: "Courses" },
                    { value: "90%+", label: "Placement" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-iftm-gold font-bold text-2xl md:text-3xl">{stat.value}</p>
                      <p className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-iftm-primary text-white font-bold rounded-xl hover:bg-iftm-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-primary/30"
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

              {/* Right - Student Image */}
              <div className="hidden lg:block relative">
                <div className="relative">
                  {/* Image with clip-path */}
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                    <img
                      src="/images/student-hero.jpg"
                      alt="IFTM University Student"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-iftm-navy/50 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Badge 1 */}
                  <div className="absolute -left-4 top-20 bg-white rounded-xl p-4 shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-iftm-dark font-bold text-sm">NAAC</p>
                        <p className="text-iftm-primary font-black text-lg leading-none">A Grade</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -right-4 bottom-20 bg-white rounded-xl p-4 shadow-xl animate-float-delayed">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-iftm-primary/10 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-iftm-dark font-bold text-sm">UGC</p>
                        <p className="text-iftm-text-light text-xs">Recognized</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* ═══ Programmes List ═══ */}
        <section id="programmes-list" className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark mb-2">
                Our <span className="text-iftm-primary">Schools</span>
              </h2>
              <p className="text-iftm-text-light">Choose from our diverse range of academic departments</p>
            </div>

            {programmes.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-iftm-dark mb-2">No Programmes Found</h3>
                <p className="text-iftm-text-light">Programme information will be available soon.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {schools.map((school) => (
                  <div key={school.name} className="bg-iftm-light rounded-2xl p-6 md:p-8 border border-iftm-border hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-iftm-primary/10 rounded-2xl flex items-center justify-center">
                        <i className={`fas ${schoolIcons[school.name] ?? "fa-graduation-cap"} text-iftm-primary text-2xl`} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-iftm-dark">{school.name}</h3>
                        <p className="text-iftm-text-light text-sm">{school.programmes.length} Programmes Available</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {school.programmes.map((programme) => {
                        const pLevel = programme.programmeDetails?.level?.[0] || programme.programmeFields?.level || guessLevel(programme.title);
                        const pDuration = programme.programmeDetails?.duration || "";
                        const pImage = programme.featuredImage?.node?.sourceUrl;
                        return (
                          <Link
                            key={programme.slug}
                            href={`/programmes/${programme.slug}`}
                            className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                          >
                            {pImage && (
                              <div className="relative h-[160px] overflow-hidden">
                                <img
                                  src={pImage}
                                  alt={programme.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  loading="lazy"
                                />
                                <div className="absolute top-3 left-3">
                                  <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase text-white ${levelColors[pLevel] || levelColors["UG"]}`}>
                                    {pLevel}
                                  </span>
                                </div>
                              </div>
                            )}
                            <div className="p-4">
                              {!pImage && (
                                <span className={`inline-block px-2 py-1 rounded text-[9px] font-bold uppercase text-white mb-2 ${levelColors[pLevel] || levelColors["UG"]}`}>
                                  {pLevel}
                                </span>
                              )}
                              <h4 className="text-iftm-dark text-sm font-semibold group-hover:text-iftm-primary transition-colors line-clamp-2">
                                {programme.title}
                              </h4>
                              {pDuration && (
                                <p className="text-iftm-text-light text-xs mt-1 flex items-center gap-1">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  {pDuration}
                                </p>
                              )}
                              <div className="flex items-center gap-1 text-iftm-primary text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                                View Details
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
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
              Join IFTM University and unlock your potential with world-class education and industry-ready skills.
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

      {/* Floating animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
      `}</style>
    </>
  );
}
