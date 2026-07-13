export const revalidate = 3600;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgrammeBySlug, getProgrammeSlugs } from "@/lib/wordpress";

type ProgrammeParams = { slug: string };

export async function generateMetadata({ params }: { params: Promise<ProgrammeParams> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);
  if (!programme) return { title: "Programme Not Found" };

  const description = programme.content?.replace(/<[^>]*>/g, "").substring(0, 160) ?? "";

  return {
    title: `${programme.title} | IFTM University Moradabad`,
    description,
    alternates: { canonical: `https://iftmuniversity.ac.in/programmes/${slug}` },
    openGraph: {
      title: `${programme.title} | IFTM University`,
      description,
      type: "website",
      images: programme.featuredImage?.node?.sourceUrl ? [{ url: programme.featuredImage.node.sourceUrl, width: 1200, height: 630 }] : [],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getProgrammeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProgrammeDetailPage({ params }: { params: Promise<ProgrammeParams> }) {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);

  if (!programme) notFound();

  const details = programme.programmeDetails;
  const school = details?.school || "IFTM University";
  const duration = details?.duration || "";
  const fee = details?.fee || "";
  const level = details?.level?.[0] || "UG";
  const bannerImage = programme.featuredImage?.node?.sourceUrl || "/images/buildings/7.jpg";
  const plainContent = programme.content?.replace(/<[^>]*>/g, "") || "";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ═══ Hero Banner ═══ */}
        <section className="relative pt-[90px] md:pt-[110px]">
          <div className="absolute inset-0">
            <img src={bannerImage} alt={programme.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/programmes" className="hover:text-iftm-gold transition-colors">Programmes</Link></li>
                <li>/</li>
                <li className="text-iftm-gold truncate max-w-[200px]">{programme.title}</li>
              </ol>
            </nav>

            <span className="inline-block bg-iftm-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              {level}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {programme.title}
            </h1>
            {school && (
              <p className="text-white/80 text-sm mb-6">{school}</p>
            )}

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3 mb-8">
              {duration && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <span className="text-white/60 text-[10px] uppercase tracking-wider block">Duration</span>
                  <p className="text-white font-semibold text-sm">{duration}</p>
                </div>
              )}
              {fee && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <span className="text-white/60 text-[10px] uppercase tracking-wider block">Fee</span>
                  <p className="text-white font-semibold text-sm">{fee}</p>
                </div>
              )}
              {level && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <span className="text-white/60 text-[10px] uppercase tracking-wider block">Level</span>
                  <p className="text-white font-semibold text-sm">{level}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-iftm-primary text-white font-bold rounded-lg hover:bg-iftm-primary-dark transition-colors"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* ═══ About Programme ═══ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
              {/* Main Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark mb-2">
                  About <span className="text-iftm-primary">{programme.title}</span>
                </h2>
                <p className="text-iftm-text-light text-sm mb-8">
                  Discover how the {programme.title} programme at IFTM University can shape your future.
                </p>

                {/* Programme Content */}
                {programme.content && (
                  <article
                    className="prose prose-lg max-w-none mb-10
                      prose-headings:text-iftm-dark prose-headings:font-bold
                      prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-iftm-border prose-h2:pb-2
                      prose-p:text-iftm-text prose-p:leading-relaxed
                      prose-li:text-iftm-text
                      prose-a:text-iftm-primary prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: programme.content }}
                  />
                )}

                {/* Programme Highlights */}
                <div className="bg-iftm-light rounded-2xl p-6 md:p-8 mt-8">
                  <h3 className="text-xl font-bold text-iftm-dark mb-6">Programme Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "🎓", label: "Programme Name", value: programme.title },
                      { icon: "🏫", label: "Offered By", value: "IFTM University, Moradabad" },
                      { icon: "⏱️", label: "Duration", value: duration || "As per UGC norms" },
                      { icon: "📊", label: "Level", value: level },
                      { icon: "🏛️", label: "School", value: school },
                      { icon: "💰", label: "Fee", value: fee || "Contact for details" },
                    ].filter(h => h.value).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-iftm-border">
                        <span className="text-2xl">{highlight.icon}</span>
                        <div>
                          <span className="text-iftm-text-light text-xs uppercase tracking-wider">{highlight.label}</span>
                          <p className="text-iftm-dark font-semibold text-sm">{highlight.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-iftm-dark mb-4">
                    Career Opportunities After {programme.title}
                  </h3>
                  <p className="text-iftm-text mb-4">
                    Graduates of this programme can explore diverse career paths in both public and private sectors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Industry Professional",
                      "Higher Studies (PG/Ph.D.)",
                      "Research & Development",
                      "Government Services",
                      "Entrepreneurship",
                      "Consulting",
                    ].map((career, i) => (
                      <div key={i} className="flex items-center gap-2 text-iftm-text text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-iftm-primary flex-shrink-0">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {career}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-iftm-dark mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {[
                      { q: `What is the duration of ${programme.title}?`, a: duration ? `The programme duration is ${duration}.` : "Please contact the admission office for details." },
                      { q: "What are the eligibility criteria?", a: "Candidates must meet the minimum academic requirements as per UGC/university norms. Contact admissions for specific criteria." },
                      { q: "Is scholarship available?", a: "Yes, IFTM University offers merit-based and need-based scholarships. Visit the scholarship page for details." },
                      { q: "How to apply?", a: "You can apply online through the university admission portal or visit the campus directly." },
                    ].map((faq, i) => (
                      <details key={i} className="bg-iftm-light rounded-xl border border-iftm-border group">
                        <summary className="flex items-center justify-between p-4 cursor-pointer text-iftm-dark font-semibold text-sm hover:text-iftm-primary transition-colors">
                          {faq.q}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-iftm-text-light group-open:rotate-180 transition-transform flex-shrink-0 ml-2">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 text-iftm-text text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Apply Card */}
                  <div className="bg-gradient-to-br from-iftm-primary to-iftm-primary-dark rounded-2xl p-6 text-white">
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

                  {/* Quick Info */}
                  <div className="bg-iftm-light rounded-2xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Quick Information
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "School", value: school },
                        { label: "Duration", value: duration },
                        { label: "Level", value: level },
                        { label: "Fee", value: fee },
                      ].filter(item => item.value).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-iftm-border last:border-0">
                          <span className="text-iftm-text-light text-sm">{item.label}</span>
                          <span className="text-iftm-dark font-semibold text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-iftm-light rounded-2xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Need Help?
                    </h3>
                    <p className="text-iftm-text text-sm mb-3">Contact our admission office</p>
                    <a
                      href="tel:+919639004077"
                      className="flex items-center gap-2 text-iftm-primary font-semibold text-sm"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      +91-9639004077
                    </a>
                  </div>

                  {/* Download Brochure */}
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-iftm-navy text-white font-semibold rounded-xl hover:bg-iftm-navy-light transition-colors text-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download Brochure
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ═══ Related Programmes ═══ */}
        <RelatedProgrammes currentSlug={slug} />

        {/* Sticky Apply Bar (Mobile) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-iftm-border p-4 z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-iftm-dark font-semibold text-sm truncate max-w-[200px]">{programme.title}</p>
              {fee && <p className="text-iftm-primary font-bold text-sm">{fee}</p>}
            </div>
            <a
              href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-iftm-primary text-white font-bold text-sm rounded-lg flex-shrink-0"
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

/* ═══ Related Programmes Component ═══ */
async function RelatedProgrammes({ currentSlug }: { currentSlug: string }) {
  const { getProgrammes } = await import("@/lib/wordpress");
  const allProgrammes = await getProgrammes(10);
  const related = allProgrammes.filter((p) => p.slug !== currentSlug).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-iftm-light">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark mb-8 text-center">
          Explore <span className="text-iftm-primary">Related Programmes</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/programmes/${p.slug}`}
              className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={p.featuredImage?.node?.sourceUrl || "/images/buildings/7.jpg"}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-iftm-primary/10 text-iftm-primary text-[10px] font-bold uppercase px-2 py-1 rounded-full mb-2">
                  {p.programmeDetails?.level?.[0] || "UG"}
                </span>
                <h3 className="text-iftm-dark font-bold text-sm group-hover:text-iftm-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
                {p.programmeDetails?.duration && (
                  <p className="text-iftm-text-light text-xs mt-1">{p.programmeDetails.duration}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
