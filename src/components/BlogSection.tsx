"use client";

import Link from "next/link";

const blogs = [
  {
    title: "Top Career Options After B.Pharm in 2026",
    excerpt: "Discover the best career opportunities available after completing B.Pharm including pharma industry, research, government jobs, and higher studies.",
    date: "10 Jul 2026",
    category: "Pharmacy",
    img: "/images/buildings/7.jpg",
    href: "/blog/career-after-bpharm",
  },
  {
    title: "Why Choose IFTM for Engineering? A Complete Guide",
    excerpt: "Learn why IFTM University is the best choice for engineering aspirants with NAAC A Grade, industry partnerships, and excellent placements.",
    date: "05 Jul 2026",
    category: "Engineering",
    img: "/images/buildings/4.jpg",
    href: "/blog/why-iftm-engineering",
  },
  {
    title: "NEP 2020: How IFTM is Transforming Education",
    excerpt: "IFTM University is at the forefront of implementing the National Education Policy 2020 with multidisciplinary approach and outcome-based education.",
    date: "28 Jun 2026",
    category: "Education",
    img: "/images/buildings/campus2.jpg",
    href: "/blog/nep-2020-iftm",
  },
  {
    title: "Campus Life at IFTM: Beyond Academics",
    excerpt: "Explore the vibrant campus life at IFTM with sports, cultural events, student clubs, and holistic development opportunities.",
    date: "20 Jun 2026",
    category: "Campus Life",
    img: "/images/buildings/14.jpg",
    href: "/blog/campus-life-iftm",
  },
  {
    title: "IFTM Placement Records: Top Recruiters & Packages",
    excerpt: "A detailed look at IFTM's placement statistics, top recruiting companies, and the highest packages offered to students.",
    date: "15 Jun 2026",
    category: "Placements",
    img: "/images/buildings/campus1.jpg",
    href: "/blog/placement-records",
  },
  {
    title: "Scholarship Opportunities at IFTM University 2026-27",
    excerpt: "Complete guide to merit-based, need-based, and government scholarships available for IFTM students in the upcoming academic session.",
    date: "10 Jun 2026",
    category: "Admissions",
    img: "/images/buildings/campus5.jpg",
    href: "/blog/scholarships-2026",
  },
];

export default function BlogSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
              Insights & Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
              Our Latest <span className="text-iftm-primary">Blogs</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-iftm-primary text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-iftm-primary-dark transition-colors"
          >
            View All Blogs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.href}
              className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
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

              {/* Content */}
              <div className="p-5">
                <span className="text-iftm-text-light text-[11px] font-medium">
                  {blog.date}
                </span>
                <h3 className="text-iftm-dark font-bold text-[15px] mt-1 mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-1 text-iftm-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="md:hidden text-center mt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-iftm-primary text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
          >
            View All Blogs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
