export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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
        <PageHero
          title="Programmes Offered"
          subtitle={`Explore ${programmes.length}+ programmes across ${schools.length} schools`}
          breadcrumbs={[{ label: "Programmes", href: "/programmes" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {programmes.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-xl font-bold text-iftm-dark mb-2">No Programmes Found</h2>
                <p className="text-iftm-text-light">Programme information will be available soon.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {schools.map((school) => (
                  <div key={school.name} className="bg-iftm-light rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-iftm-primary/10 rounded-xl flex items-center justify-center">
                        <i className={`fas ${schoolIcons[school.name] ?? "fa-graduation-cap"} text-iftm-primary text-xl`} />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-iftm-dark">{school.name}</h2>
                        <p className="text-iftm-text-light text-sm">{school.programmes.length} Programmes</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {school.programmes.map((programme) => {
                        const pLevel = programme.programmeDetails?.level?.[0] || "UG";
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
                                  <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase text-white ${levelColors["UG"]}`}>
                                    {pLevel}
                                  </span>
                                </div>
                              </div>
                            )}
                            <div className="p-4">
                              {!pImage && (
                                <span className={`inline-block px-2 py-1 rounded text-[9px] font-bold uppercase text-white mb-2 ${levelColors["UG"]}`}>
                                  {pLevel}
                                </span>
                              )}
                              <h3 className="text-iftm-dark text-sm font-semibold group-hover:text-iftm-primary transition-colors line-clamp-2">
                                {programme.title}
                              </h3>
                              {pDuration && (
                                <p className="text-iftm-text-light text-xs mt-1">{pDuration}</p>
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
      </main>
      <Footer />
    </>
  );
}
