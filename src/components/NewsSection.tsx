"use client";

import Link from "next/link";

const newsItems = [
  {
    date: "15 Mar 2026",
    title: "Admissions Open 2026-27 | Apply Now",
    description: "IFTM University invites applications for all UG, PG, Diploma and Ph.D. programmes. Scholarships available for meritorious students.",
    href: "https://admissions.iftm.ac.in",
    img: "/images/gallery/campus1.jpg",
  },
  {
    date: "2024",
    title: "NAAC 'A' Grade Accreditation Achieved",
    description: "IFTM University has been accredited with NAAC 'A' Grade by the National Assessment and Accreditation Council for academic excellence.",
    href: "/naac",
    img: "/images/gallery/campus2.jpg",
  },
  {
    date: "2025-26",
    title: "MoU with Leading Industry Partners",
    description: "New collaborations with TCS, Infosys, Wipro, HCL for student training, internships and placement opportunities.",
    href: "/mou",
    img: "/images/gallery/campus3.jpg",
  },
  {
    date: "2025",
    title: "Campus Infrastructure Upgraded",
    description: "New smart classrooms, advanced laboratories and modern library facilities added to enhance student learning experience.",
    href: "/news",
    img: "/images/gallery/campus4.jpg",
  },
];

const noticeItems = [
  {
    date: "10 Jul 2026",
    title: "Examination Schedule Released",
    description: "End semester examination schedule for all programmes has been released. Check the ERP portal for details.",
    dept: "Examination Cell",
  },
  {
    date: "05 Jul 2026",
    title: "Scholarship Applications Open",
    description: "Merit-based and need-based scholarship applications are now open for the 2026-27 academic session.",
    dept: "Scholarship Cell",
  },
  {
    date: "01 Jul 2026",
    title: "Hostel Allotment Notice",
    description: "Hostel room allotment for new students will begin from 15th July. Apply through the student portal.",
    dept: "Hostel Office",
  },
  {
    date: "28 Jun 2026",
    title: "Library New Timing",
    description: "Library will remain open from 8 AM to 10 PM during the examination period for student convenience.",
    dept: "Central Library",
  },
  {
    date: "25 Jun 2026",
    title: "Placement Drive Notice",
    description: "TCS campus placement drive scheduled for B.Tech/MCA students. Register on the CRC portal before 30th June.",
    dept: "Training & Placement",
  },
];

export default function NewsSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* ═══ Desktop: 2-column layout ═══ */}
        <div className="hidden lg:grid grid-cols-[1fr_380px] gap-8">
          {/* LEFT: News */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
                Latest <span className="text-iftm-primary">News</span>
              </h2>
              <Link
                href="/news"
                className="text-iftm-primary text-sm font-semibold hover:underline flex items-center gap-1"
              >
                View All
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Featured news (first item - large) */}
              <Link
                href={newsItems[0].href}
                className="col-span-2 relative rounded-xl overflow-hidden h-[220px] group"
              >
                <img
                  src={newsItems[0].img}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-iftm-gold text-[11px] font-semibold uppercase tracking-wider">
                    {newsItems[0].date}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 group-hover:text-iftm-gold transition-colors">
                    {newsItems[0].title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 line-clamp-2">
                    {newsItems[0].description}
                  </p>
                </div>
              </Link>

              {/* Other news cards */}
              {newsItems.slice(1).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative rounded-xl overflow-hidden h-[180px] group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-iftm-gold text-[10px] font-semibold uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-white font-bold text-sm mt-1 group-hover:text-iftm-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Notice Board */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
                Notice <span className="text-iftm-primary">Board</span>
              </h2>
            </div>

            <div className="bg-iftm-light rounded-xl p-4 space-y-3">
              {noticeItems.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-iftm-border hover:border-iftm-primary/30 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-iftm-primary/10 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-iftm-primary font-bold text-sm leading-none">
                        {notice.date.split(" ")[0]}
                      </span>
                      <span className="text-iftm-primary/70 text-[9px] uppercase">
                        {notice.date.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-iftm-dark font-semibold text-sm line-clamp-1">
                        {notice.title}
                      </h4>
                      <p className="text-iftm-text-light text-xs mt-0.5 line-clamp-2">
                        {notice.description}
                      </p>
                      <span className="text-iftm-primary/60 text-[10px] mt-1 inline-block">
                        {notice.dept}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/notices"
                className="block text-center text-iftm-primary text-sm font-semibold hover:underline pt-2"
              >
                View All Notices →
              </Link>
            </div>
          </div>
        </div>

        {/* ═══ Mobile: Stacked layout ═══ */}
        <div className="lg:hidden space-y-10">
          {/* News */}
          <div>
            <h2 className="text-2xl font-bold text-iftm-dark mb-5">
              Latest <span className="text-iftm-primary">News</span>
            </h2>
            <div className="space-y-3">
              {newsItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex gap-3 bg-iftm-light rounded-xl overflow-hidden group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-28 h-24 object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="py-2 pr-3">
                    <span className="text-iftm-primary text-[10px] font-semibold uppercase">
                      {item.date}
                    </span>
                    <h3 className="text-iftm-dark font-bold text-sm line-clamp-2 group-hover:text-iftm-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Notice Board */}
          <div>
            <h2 className="text-2xl font-bold text-iftm-dark mb-5">
              Notice <span className="text-iftm-primary">Board</span>
            </h2>
            <div className="space-y-2">
              {noticeItems.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 border border-iftm-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-iftm-primary/10 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-iftm-primary font-bold text-xs leading-none">
                        {notice.date.split(" ")[0]}
                      </span>
                      <span className="text-iftm-primary/70 text-[8px] uppercase">
                        {notice.date.split(" ")[1]}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-iftm-dark font-semibold text-sm line-clamp-1">
                        {notice.title}
                      </h4>
                      <p className="text-iftm-text-light text-xs line-clamp-1">
                        {notice.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
