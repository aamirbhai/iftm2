export const revalidate = 3600;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgrammeBySlug, getProgrammeSlugs } from "@/lib/wordpress";
import ProgrammeTabs from "./ProgrammeTabs";

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

type ProgrammeParams = { slug: string };

export async function generateMetadata({ params }: { params: Promise<ProgrammeParams> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);
  if (!programme) return { title: "Programme Not Found" };

  return {
    title: `${programme.title} | IFTM University Programmes`,
    description: programme.content?.replace(/<[^>]*>/g, "").substring(0, 160) ?? `${programme.title} at IFTM University`,
    alternates: { canonical: `https://iftmuniversity.ac.in/programmes/${slug}` },
  };
}

export default async function ProgrammeDetailPage({ params }: { params: Promise<ProgrammeParams> }) {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);

  if (!programme) notFound();

  const level = "UG";
  const duration = "";
  const fee = "";
  const eligibility = "";
  const school = "";

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
                <li className="text-iftm-gold">{programme.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase text-white ${levelColors[level]}`}>
                {level}
              </span>
              {school && <span className="text-white/60 text-sm">{school}</span>}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {programme.title}
            </h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Duration", value: duration },
                { label: "Level", value: level },
                { label: "Fee", value: fee },
                { label: "Eligibility", value: eligibility.split("with")[0] || eligibility },
              ].filter((stat) => stat.value).map((stat, index) => (
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
                <ProgrammeTabs
                  overview={programme.content}
                  curriculum={programme.content}
                  career={programme.content}
                />
              </div>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Eligibility Card */}
                  {eligibility && (
                    <div className="bg-iftm-light rounded-xl p-6">
                      <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                        Eligibility
                      </h3>
                      <p className="text-iftm-text text-sm">{eligibility}</p>
                    </div>
                  )}

                  {/* Fee Card */}
                  {fee && (
                    <div className="bg-iftm-light rounded-xl p-6">
                      <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                        Fee Structure
                      </h3>
                      <p className="text-iftm-primary font-bold text-2xl">{fee}</p>
                      <p className="text-iftm-text-light text-xs mt-1">*Additional fees may apply</p>
                    </div>
                  )}

                  {/* Apply CTA */}
                  <div className="bg-gradient-to-br from-iftm-primary to-iftm-primary-dark rounded-xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">Ready to Apply?</h3>
                    <p className="text-white/80 text-sm mb-4">Start your application for {programme.title}</p>
                    <a
                      href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-white text-iftm-primary font-bold text-center rounded-lg hover:bg-iftm-gold transition-colors"
                    >
                      Apply Now
                    </a>
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
              <p className="text-iftm-dark font-semibold text-sm">{programme.title}</p>
              {fee && <p className="text-iftm-primary font-bold">{fee}</p>}
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
