export const revalidate = 3600;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getPostSlugs, getPosts } from "@/lib/wordpress";

type BlogParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Blog Post Not Found" };

  const description =
    post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) || "";
  const imageUrl = post.featuredImage?.node?.sourceUrl;

  return {
    title: `${post.title} | IFTM University Blog`,
    description,
    alternates: { canonical: `https://iftmuniversity.ac.in/blog/${slug}` },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.node?.name || "IFTM University"],
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<BlogParams>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const imageUrl =
    post.featuredImage?.node?.sourceUrl || "/images/buildings/7.jpg";
  const category = post.categories?.nodes?.[0]?.name || "General";
  const authorName = post.author?.node?.name || "IFTM University";
  const readTime = "";
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { nodes: allPosts } = await getPosts(6);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: imageUrl,
    datePublished: post.date,
    author: { "@type": "Person", name: authorName },
    publisher: { "@type": "Organization", name: "IFTM University" },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-[90px] md:pt-[110px]">
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-iftm-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-iftm-gold transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-iftm-gold">{category}</li>
              </ol>
            </nav>

            <span className="inline-block bg-iftm-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              {category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{authorName}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              {readTime && (
                <>
                  <span>•</span>
                  <span>{readTime}</span>
                </>
              )}
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
                  prose-li:text-iftm-text
                  prose-a:text-iftm-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Recent Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="bg-iftm-light rounded-xl p-6">
                      <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                        Recent Posts
                      </h3>
                      <div className="space-y-4">
                        {relatedPosts.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/blog/${related.slug}`}
                            className="flex gap-3 group"
                          >
                            <img
                              src={
                                related.featuredImage?.node?.sourceUrl ||
                                "/images/buildings/4.jpg"
                              }
                              alt={related.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div>
                              <span className="text-iftm-primary text-[10px] font-semibold uppercase">
                                {related.categories?.nodes?.[0]?.name ||
                                  "General"}
                              </span>
                              <h4 className="text-iftm-dark text-sm font-semibold line-clamp-2 group-hover:text-iftm-primary transition-colors">
                                {related.title}
                              </h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Categories */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Pharmacy",
                        "Engineering",
                        "Education",
                        "Campus Life",
                        "Placements",
                        "Admissions",
                      ].map((cat) => (
                        <Link
                          key={cat}
                          href={`/blog?category=${cat.toLowerCase()}`}
                          className="px-3 py-1.5 bg-white text-iftm-text text-xs font-medium rounded-full hover:bg-iftm-primary hover:text-white transition-colors"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-iftm-light">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-iftm-dark mb-8">
                Related <span className="text-iftm-primary">Articles</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-[180px] overflow-hidden">
                      <img
                        src={
                          related.featuredImage?.node?.sourceUrl ||
                          "/images/buildings/4.jpg"
                        }
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-iftm-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                          {related.categories?.nodes?.[0]?.name || "General"}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-iftm-dark font-bold text-[15px] group-hover:text-iftm-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
