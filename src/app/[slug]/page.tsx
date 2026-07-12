export const runtime = 'edge';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageBySlug, getPageSlugs } from "@/lib/wordpress";

export const revalidate = 60;

// Static sidebar links per page slug
const sidebarLinks: Record<string, { label: string; href: string }[]> = {
  about: [
    { label: "Salient Features", href: "/salient-features" },
    { label: "Approvals & Rankings", href: "/approvals" },
    { label: "Administration", href: "/administration" },
    { label: "University Governance", href: "/governance" },
    { label: "Contact Us", href: "/contact" },
  ],
  contact: [
    { label: "How to Reach", href: "/how-to-reach" },
    { label: "Enquiry Form", href: "/enquire" },
    { label: "Feedback", href: "/feedback" },
  ],
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: `${page.title} | IFTM University Moradabad`,
    description: page.content?.replace(/<[^>]*>/g, "").substring(0, 160) ?? "",
    alternates: { canonical: `https://iftmuniversity.ac.in/${slug}` },
  };
}

export default async function GenericPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  const links = sidebarLinks[slug] ?? [];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title={page.title}
          breadcrumbs={[{ label: page.title, href: `/${slug}` }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              {/* Main Content */}
              <article
                className="prose prose-lg max-w-none
                  prose-headings:text-iftm-dark prose-headings:font-bold
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-iftm-border prose-h2:pb-2
                  prose-p:text-iftm-text prose-p:leading-relaxed
                  prose-li:text-iftm-text
                  prose-a:text-iftm-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: page.content ?? "" }}
              />

              {/* Sidebar */}
              <aside>
                <div className="bg-iftm-light rounded-xl p-6 sticky top-24">
                  {links.length > 0 && (
                    <>
                      <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                        Quick Links
                      </h3>
                      <ul className="space-y-2">
                        {links.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className="flex items-center gap-2 py-2 px-3 text-iftm-text hover:text-iftm-primary hover:bg-white rounded-lg transition-all text-sm"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Contact Card */}
                  <div className="mt-6 p-4 bg-iftm-primary/10 rounded-lg border border-iftm-primary/20">
                    <h4 className="text-iftm-dark font-semibold text-sm mb-2">Need Help?</h4>
                    <p className="text-iftm-text text-xs mb-3">Contact our admission office</p>
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
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
