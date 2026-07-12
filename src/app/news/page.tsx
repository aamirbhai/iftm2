import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | IFTM University Moradabad",
  description: "Latest news, announcements, and updates from IFTM University. Stay informed about admissions, events, and achievements.",
  alternates: { canonical: "https://iftmuniversity.ac.in/news" },
};

const newsItems = [
  {
    title: "Admissions Open 2026-27 | Apply Now",
    description: "IFTM University invites applications for all UG, PG, Diploma and Ph.D. programmes. Scholarships available for meritorious students.",
    date: "15 Mar 2026",
    department: "Admissions Office",
    img: "/images/gallery/campus1.jpg",
    slug: "admissions-open-2026-27",
  },
  {
    title: "NAAC 'A' Grade Accreditation Achieved",
    description: "IFTM University has been accredited with NAAC 'A' Grade by the National Assessment and Accreditation Council for academic excellence.",
    date: "2024",
    department: "University Administration",
    img: "/images/gallery/campus2.jpg",
    slug: "naac-a-grade",
  },
  {
    title: "MoU with Leading Industry Partners",
    description: "New collaborations with TCS, Infosys, Wipro, HCL for student training, internships and placement opportunities.",
    date: "2025-26",
    department: "Training & Placement",
    img: "/images/gallery/campus3.jpg",
    slug: "mou-industry-partners",
  },
  {
    title: "Campus Infrastructure Upgraded",
    description: "New smart classrooms, advanced laboratories and modern library facilities added to enhance student learning experience.",
    date: "2025",
    department: "Campus Development",
    img: "/images/gallery/campus4.jpg",
    slug: "infrastructure-upgrade",
  },
  {
    title: "Annual Tech Fest 2026 Announced",
    description: "IFTM's annual technical festival TechnoVision 2026 will be held in March with workshops, hackathons, and guest lectures.",
    date: "Feb 2026",
    department: "Student Activities",
    img: "/images/gallery/campus1.jpg",
    slug: "tech-fest-2026",
  },
  {
    title: "Research Grant Approved by DST",
    description: "Department of Science & Technology approves research grant for advanced materials research at School of Sciences.",
    date: "Jan 2026",
    department: "Research Cell",
    img: "/images/gallery/campus2.jpg",
    slug: "dst-research-grant",
  },
];

export default function NewsPage() {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={item.img}
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
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.department}</span>
                    </div>
                    <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                      {item.description}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
