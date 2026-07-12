import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | IFTM University Moradabad",
  description:
    "Latest insights, stories, and updates from IFTM University. Read about admissions, campus life, placements, and more.",
  alternates: { canonical: "https://iftmuniversity.ac.in/blog" },
};

const blogs = [
  {
    title: "Top Career Options After B.Pharm in 2026",
    excerpt:
      "Discover the best career opportunities available after completing B.Pharm including pharma industry, research, government jobs, and higher studies.",
    date: "10 Jul 2026",
    category: "Pharmacy",
    img: "/images/buildings/7.jpg",
    slug: "career-after-bpharm",
    author: "Dr. Rajesh Kumar",
  },
  {
    title: "Why Choose IFTM for Engineering? A Complete Guide",
    excerpt:
      "Learn why IFTM University is the best choice for engineering aspirants with NAAC A Grade, industry partnerships, and excellent placements.",
    date: "05 Jul 2026",
    category: "Engineering",
    img: "/images/buildings/4.jpg",
    slug: "why-iftm-engineering",
    author: "Prof. Anita Sharma",
  },
  {
    title: "NEP 2020: How IFTM is Transforming Education",
    excerpt:
      "IFTM University is at the forefront of implementing the National Education Policy 2020 with multidisciplinary approach and outcome-based education.",
    date: "28 Jun 2026",
    category: "Education",
    img: "/images/buildings/campus2.jpg",
    slug: "nep-2020-iftm",
    author: "Dr. Priya Singh",
  },
  {
    title: "Campus Life at IFTM: Beyond Academics",
    excerpt:
      "Explore the vibrant campus life at IFTM with sports, cultural events, student clubs, and holistic development opportunities.",
    date: "20 Jun 2026",
    category: "Campus Life",
    img: "/images/buildings/14.jpg",
    slug: "campus-life-iftm",
    author: "Student Council",
  },
  {
    title: "IFTM Placement Records: Top Recruiters & Packages",
    excerpt:
      "A detailed look at IFTM's placement statistics, top recruiting companies, and the highest packages offered to students.",
    date: "15 Jun 2026",
    category: "Placements",
    img: "/images/buildings/campus1.jpg",
    slug: "placement-records",
    author: "Training & Placement Cell",
  },
  {
    title: "Scholarship Opportunities at IFTM University 2026-27",
    excerpt:
      "Complete guide to merit-based, need-based, and government scholarships available for IFTM students in the upcoming academic session.",
    date: "10 Jun 2026",
    category: "Admissions",
    img: "/images/buildings/campus5.jpg",
    slug: "scholarships-2026",
    author: "Admissions Office",
  },
];

export default function BlogPage() {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-iftm-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-iftm-text-light text-[11px] mb-2">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.author}</span>
                    </div>
                    <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                      {blog.excerpt}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
