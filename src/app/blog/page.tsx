export const revalidate = 3600;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | IFTM University Moradabad",
  description:
    "Latest insights, stories, and updates from IFTM University. Read about admissions, campus life, placements, and more.",
  alternates: { canonical: "https://iftmuniversity.ac.in/blog" },
};

export default async function BlogPage() {
  const { nodes: posts } = await getPosts(12);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="Blog"
          subtitle="Insights, stories, and updates from IFTM University"
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-iftm-text-light text-lg">
                  No blog posts found. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={
                          post.featuredImage?.node?.sourceUrl ||
                          "/images/buildings/7.jpg"
                        }
                        alt={
                          post.featuredImage?.node?.altText || post.title
                        }
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-iftm-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                          {post.categories?.nodes?.[0]?.name || "General"}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-iftm-text-light text-[11px] mb-2">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span>{post.author?.node?.name || "IFTM University"}</span>
                      </div>
                      <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                        {post.excerpt?.replace(/<[^>]*>/g, "") || ""}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-iftm-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read More
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
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
