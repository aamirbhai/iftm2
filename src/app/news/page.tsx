export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";
import { getNews } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "News & Updates | IFTM University Moradabad",
  description: "Latest news, announcements, and updates from IFTM University. Stay informed about admissions, events, and achievements.",
  alternates: { canonical: "https://iftmuniversity.ac.in/news" },
};

export default async function NewsPage() {
  const newsData = await getNews(50);
  const newsItems = newsData.nodes;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="News & Updates"
          subtitle="Stay informed about the latest happenings at IFTM University"
          breadcrumbs={[{ label: "News", href: "/news" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {newsItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-iftm-text-light text-lg">No news articles found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={item.featuredImage?.node?.sourceUrl || "/images/gallery/campus1.jpg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-iftm-navy text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                          Official
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-iftm-text-light text-[11px] mb-2">
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>University</span>
                      </div>
                      <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                        {item.excerpt?.replace(/<[^>]*>/g, "") || ""}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-iftm-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read More
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
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
