import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNewsBySlug, getNewsSlugs } from "@/lib/wordpress";

export const revalidate = 60;

type NewsParams = { slug: string };

export async function generateStaticParams() {
  const slugs = await getNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<NewsParams> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return { title: "News Article Not Found" };

  const plainContent = article.content?.replace(/<[^>]*>/g, "") || "";

  return {
    title: `${article.title} | IFTM University News`,
    description: plainContent.substring(0, 160),
    alternates: { canonical: `https://iftmuniversity.ac.in/news/${slug}` },
    openGraph: {
      title: article.title,
      description: plainContent.substring(0, 160),
      type: "article",
      publishedTime: article.date,
      images: article.featuredImage?.node?.sourceUrl
        ? [{ url: article.featuredImage.node.sourceUrl, width: 1200, height: 630 }]
        : [],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<NewsParams> }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) notFound();

  const imageUrl = article.featuredImage?.node?.sourceUrl || "/images/gallery/campus1.jpg";
  const department = article.acf?.department || "University";
  const formattedDate = new Date(article.date).toLocaleDateString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: article.featuredImage?.node?.sourceUrl || "",
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "IFTM University" },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-[90px] md:pt-[110px]">
          <div className="absolute inset-0">
            <img src={imageUrl} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/news" className="hover:text-iftm-gold transition-colors">News</Link></li>
                <li>/</li>
                <li className="text-iftm-gold">Article</li>
              </ol>
            </nav>

            <span className="inline-block bg-iftm-navy text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              Official News
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{department}</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              <article
                className="prose prose-lg max-w-none
                  prose-headings:text-iftm-dark prose-headings:font-bold
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:text-iftm-text prose-p:leading-relaxed
                  prose-li:text-iftm-text"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Notice Board */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Notice Board
                    </h3>
                    <div className="space-y-3">
                      {[
                        { date: "10 Jul", title: "Exam Schedule Released", dept: "Examination Cell" },
                        { date: "05 Jul", title: "Scholarship Applications Open", dept: "Scholarship Cell" },
                        { date: "01 Jul", title: "Hostel Allotment Notice", dept: "Hostel Office" },
                      ].map((notice, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 border border-iftm-border">
                          <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-10 h-10 bg-iftm-primary/10 rounded-lg flex flex-col items-center justify-center">
                              <span className="text-iftm-primary font-bold text-xs leading-none">{notice.date.split(" ")[0]}</span>
                              <span className="text-iftm-primary/70 text-[8px] uppercase">{notice.date.split(" ")[1]}</span>
                            </div>
                            <div>
                              <h4 className="text-iftm-dark font-semibold text-sm line-clamp-1">{notice.title}</h4>
                              <span className="text-iftm-primary/60 text-[10px]">{notice.dept}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/notices" className="block text-center text-iftm-primary text-sm font-semibold hover:underline mt-4">
                      View All Notices →
                    </Link>
                  </div>

                  {/* Related News placeholder */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Related News
                    </h3>
                    <p className="text-iftm-text-light text-sm">
                      Visit the <Link href="/news" className="text-iftm-primary hover:underline">News page</Link> for more articles.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
