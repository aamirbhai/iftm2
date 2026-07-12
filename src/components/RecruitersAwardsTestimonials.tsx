"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ─── Recruiters ─── */
const recruiters = [
  { name: "TCS", img: "/images/recruiters/1.jpg" },
  { name: "Infosys", img: "/images/recruiters/2.jpg" },
  { name: "Wipro", img: "/images/recruiters/3.jpg" },
  { name: "HCL", img: "/images/recruiters/4.jpg" },
  { name: "Tech Mahindra", img: "/images/recruiters/5.jpg" },
  { name: "Cognizant", img: "/images/recruiters/6.jpg" },
  { name: "IBM", img: "/images/recruiters/7.jpg" },
  { name: "Capgemini", img: "/images/recruiters/8.jpg" },
  { name: "Accenture", img: "/images/recruiters/9.jpg" },
  { name: "Amazon", img: "/images/recruiters/10.jpg" },
  { name: "WNS", img: "/images/recruiters/11.jpg" },
  { name: "BYJU'S", img: "/images/recruiters/12.jpg" },
];

/* ─── Awards (real images from old IFTM site) ─── */
const awards = [
  { img: "/images/awards/105.jpg", alt: "Shiksha Ratna Samman" },
  { img: "/images/awards/106.jpg", alt: "Dronacharya Award 2023" },
  { img: "/images/awards/107.jpg", alt: "Dronacharya Award 2023" },
  { img: "/images/awards/108.jpg", alt: "Certificate of Completion" },
  { img: "/images/awards/116.jpg", alt: "ICMCM-2025" },
  { img: "/images/awards/121.jpg", alt: "Mahatma Gandhi Global Peace Award" },
  { img: "/images/awards/122.jpg", alt: "International Women Achiever Award" },
  { img: "/images/awards/124.jpg", alt: "Leadership Award" },
  { img: "/images/awards/125.jpg", alt: "Leadership Award" },
  { img: "/images/awards/2.jpg", alt: "Best Teacher Award" },
  { img: "/images/awards/3.jpg", alt: "Certificate of Professional Member" },
  { img: "/images/awards/4.jpg", alt: "Teacher Excellence Award" },
  { img: "/images/awards/5.jpg", alt: "Rastriya Siksha Ratan Sanmaan 2021" },
  { img: "/images/awards/6.jpg", alt: "Moradabad Corona Yodhdha Sanmaan" },
  { img: "/images/awards/7.jpg", alt: "Moradabad Corona Yodhdha Sanmaan" },
  { img: "/images/awards/10.jpg", alt: "Moradabad Corona Yodhdha Sanmaan" },
  { img: "/images/awards/12.jpg", alt: "Bharat Jyoti Award" },
  { img: "/images/awards/13.jpg", alt: "Best Researcher Award" },
  { img: "/images/awards/14.jpg", alt: "Young Scientist Award" },
  { img: "/images/awards/15.jpg", alt: "Shikshak Diwas Sanmaan" },
  { img: "/images/awards/17.jpg", alt: "Certificate of Appreciation" },
  { img: "/images/awards/18.jpg", alt: "Certificate of Appreciation" },
  { img: "/images/awards/19.jpg", alt: "Certificate of Appreciation" },
  { img: "/images/awards/21.jpg", alt: "Shikshak Diwas Sanmaan" },
  { img: "/images/awards/22.jpg", alt: "Corona Yodhdha Sanmaan" },
  { img: "/images/awards/23.jpg", alt: "Certificate of Appreciation" },
  { img: "/images/awards/24.jpg", alt: "Certificate of Appreciation" },
  { img: "/images/awards/25.jpg", alt: "Certificate of Appreciation of Corona Warrior" },
  { img: "/images/awards/27.jpg", alt: "Certificate of Appreciation of Corona Warrior" },
  { img: "/images/awards/29.jpg", alt: "Certificate of Achievement" },
  { img: "/images/awards/31.jpg", alt: "Bharatjyoti Acharya Shiromani Award 2021" },
  { img: "/images/awards/32.jpg", alt: "Certificate of Merit" },
  { img: "/images/awards/34.jpg", alt: "Nation Builder Award" },
  { img: "/images/awards/35.jpg", alt: "I2OR National Award 2021 Distinguished Teacher" },
  { img: "/images/awards/36.jpg", alt: "Parent Orientation" },
  { img: "/images/awards/37.jpg", alt: "Motivational Speech on Hazrat Ali" },
  { img: "/images/awards/38.jpg", alt: "Parent Orientation" },
  { img: "/images/awards/41.jpg", alt: "Certificate of Achievement" },
  { img: "/images/awards/42.jpg", alt: "International Academic Achievers Award 2022" },
  { img: "/images/awards/43.jpg", alt: "50 Highly Effective Teachers of 2022" },
  { img: "/images/awards/44.jpg", alt: "Research Excellence Award 2022" },
  { img: "/images/awards/46.jpg", alt: "Teacher Excellence Award" },
  { img: "/images/awards/74.jpg", alt: "National Education Excellence Achievers Award" },
  { img: "/images/awards/75.jpg", alt: "GPAT Score Card" },
  { img: "/images/awards/79.jpg", alt: "India Top 100 Professors Award 2022" },
  { img: "/images/awards/80.jpg", alt: "The Real Super Woman Award 2022" },
  { img: "/images/awards/81.jpg", alt: "Best Teacher Award" },
];

/* ─── Testimonials (from old IFTM site - real student data, local images) ─── */
const testimonials = [
  {
    name: "Akansha Gupta",
    course: "B.Com (Hons) 2017-2020",
    img: "/images/alumni-cutout/45.png",
    imgOriginal: "/images/alumni/45.jpg",
    text: "My journey in IFTM University was a perfect blend of discipline, motivation, academic growth, practical experiences and above all an exposure to a new world. Here, I was able to bring out a better version of myself by exploring my strengths and passion and developing panache.",
    color: "bg-iftm-primary",
  },
  {
    name: "Arvind Raghav",
    course: "B.Pharm 2016-2020",
    img: "/images/alumni-cutout/46.png",
    imgOriginal: "/images/alumni/46.jpg",
    text: "The School of Pharmaceutical Sciences is providing excellent infrastructure and facilities to impart quality education to the students. The School is one of the best institutes where I received industry oriented teaching learning from the experienced faculty members.",
    color: "bg-iftm-navy",
  },
  {
    name: "Vishakha Rastogi",
    course: "B.Pharm 2016-2020",
    img: "/images/alumni-cutout/47.png",
    imgOriginal: "/images/alumni/47.jpg",
    text: "IFTM university is a place where we find mingling of learning, fun, culture, sports and many more life and personality brightening activities. The friendly attitude of the professors and their willingness to offer a helping hand has made me feel a part of the IFTM University family.",
    color: "bg-emerald-700",
  },
  {
    name: "Siddharth Srivastava",
    course: "MBA 2018-2020",
    img: "/images/alumni-cutout/53.png",
    imgOriginal: "/images/alumni/53.jpg",
    text: "I feel honored to be a part of IFTM University. The environment and the quality of education which is being provided by the University is above the mark. I am thankful to Training & Placement Dept. for personality enhancement program which helped me groom myself.",
    color: "bg-amber-700",
  },
  {
    name: "Manisha Rastogi",
    course: "B.Tech (CS) 2016-2020",
    img: "/images/alumni-cutout/52.png",
    imgOriginal: "/images/alumni/52.jpg",
    text: "Being an IFTMian was an amazing experience. I got a chance to formulate my future goals in IFTM. Every person in the University is supportive and kind. I learned a lot and got so many experiences. Thanks to IFTM University.",
    color: "bg-purple-700",
  },
  {
    name: "Diksha Chanchal",
    course: "BCA 2019-2022",
    img: "/images/alumni-cutout/54.png",
    imgOriginal: "/images/alumni/54.jpg",
    text: "IFTM University provides a very good environment for all who wants to study. I am highly satisfied with all faculty as all of them are highly experienced. This is one of the best University in entire Northern India.",
    color: "bg-rose-700",
  },
  {
    name: "Ankit Goel",
    course: "B.Pharm 2016-2020",
    img: "/images/alumni-cutout/48.png",
    imgOriginal: "/images/alumni/48.jpg",
    text: "In IFTM University, there is a good environment for the students. The university provides various facilities which help us to learn many things. I am full of confidence and have a strong career foundation thanks to the Pharmacy Academy department.",
    color: "bg-sky-700",
  },
  {
    name: "Tushar",
    course: "B.Tech BT 2017-2021",
    img: "/images/alumni-cutout/56.png",
    imgOriginal: "/images/alumni/56.jpg",
    text: "I feel proud to be an IFTM student. It's truly a university which cares for its students and strives to build a better future. Our university has a beautiful campus with interesting insights and academic thinking.",
    color: "bg-teal-700",
  },
];

export default function RecruitersAwardsTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: OUR TOP RECRUITERS
          ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
              Trusted By Industry Leaders
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
              Our Top <span className="text-iftm-primary">Recruiters</span>
            </h2>
          </div>

          {/* Scrolling marquee */}
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[120px] md:w-[140px] mx-2 p-3 bg-white border border-iftm-border rounded-xl hover:shadow-lg hover:border-iftm-primary/30 transition-all group"
                >
                  <div className="h-12 flex items-center justify-center">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="max-h-10 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/placements"
              className="inline-flex items-center gap-2 text-iftm-primary text-sm font-semibold hover:gap-3 transition-all"
            >
              View All Recruiters
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: AWARDS & ACHIEVEMENTS - Dual Row
          ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
              Recognitions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
              Awards & <span className="text-iftm-primary">Achievements</span>
            </h2>
          </div>

          {/* Row 1 — slides LEFT */}
          <div className="overflow-hidden mb-4">
            <div className="flex animate-marquee-slow">
              {[...awards.slice(0, 23), ...awards.slice(0, 23)].map((award, i) => (
                <div key={i} className="flex-shrink-0 w-[220px] md:w-[250px] mx-2 group">
                  <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative rounded-lg overflow-hidden border-2 border-[#e0e0e0] bg-gray-50">
                      <img src={award.img} alt={award.alt} className="w-full h-auto max-h-[200px] md:max-h-[220px] object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <p className="text-center text-[11px] text-iftm-dark font-medium mt-2 line-clamp-1">{award.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — slides RIGHT */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {[...awards.slice(23), ...awards.slice(23)].map((award, i) => (
                <div key={i} className="flex-shrink-0 w-[220px] md:w-[250px] mx-2 group">
                  <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative rounded-lg overflow-hidden border-2 border-[#e0e0e0] bg-gray-50">
                      <img src={award.img} alt={award.alt} className="w-full h-auto max-h-[200px] md:max-h-[220px] object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <p className="text-center text-[11px] text-iftm-dark font-medium mt-2 line-clamp-1">{award.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: STUDENT SAYS — TMU Exact Design
          ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#e8edf3] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Title */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              <span className="text-iftm-dark">Student </span>
              <span className="text-iftm-primary">Says</span>
            </h2>
          </div>

          {/* Horizontal scroll carousel */}
          <div className="relative">
            <div
              ref={(el) => {
                if (el) {
                  (window as any).__testimonialScroll = el;
                }
              }}
              className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {[...testimonials, ...testimonials].map((t, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[260px] md:w-[280px] h-[380px] md:h-[420px] bg-white relative group snap-start cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderRadius: "20px", overflow: "hidden" }}
                >
                  {/* Quotation mark watermark (behind everything) */}
                  <div
                    className="absolute top-4 left-3 z-[1] text-[120px] md:text-[140px] font-serif leading-none select-none pointer-events-none"
                    style={{ color: "rgba(200,200,200,0.15)" }}
                  >
                    &ldquo;
                  </div>

                  {/* Orange duotone ghost image — upper-right quadrant (uses original JPG for better visibility) */}
                  <div
                    className="absolute z-[2]"
                    style={{
                      top: "-10%",
                      right: "-15%",
                      width: "70%",
                      height: "65%",
                      overflow: "hidden",
                      borderRadius: "0 20px 0 0",
                    }}
                  >
                    <img
                      src={t.imgOriginal}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        filter: "sepia(100%) saturate(300%) hue-rotate(10deg) brightness(0.7)",
                        opacity: 0.35,
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Orange geometric accent — top right triangle */}
                  <div
                    className="absolute top-0 right-0 w-[90px] h-[90px] z-[3]"
                    style={{
                      background: "linear-gradient(135deg, transparent 50%, #f58220 50%)",
                    }}
                  />

                  {/* Orange name text overlay (upper-left, over white bg) */}
                  <div className="absolute top-5 left-4 z-[5] max-w-[60%]">
                    <p className="text-iftm-primary font-extrabold text-[20px] md:text-[22px] leading-tight">
                      {t.name}
                    </p>
                    <p className="text-iftm-primary/70 text-[11px] font-medium mt-1">
                      {t.course}
                    </p>
                  </div>

                  {/* Student quote text (middle area) */}
                  <p
                    className="absolute z-[5] text-iftm-text/80 text-[11px] leading-relaxed italic"
                    style={{ top: "35%", left: "12px", right: "40%", maxHeight: "35%", overflow: "hidden" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Main student photo — positioned lower-right, overlaps dark panel (uses cutout PNG) */}
                  <div className="absolute z-[6]" style={{ bottom: "15%", right: "5%", width: "55%", height: "70%" }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-contain object-bottom drop-shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Dark overlay panel at bottom — rounded top corners only */}
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#1a2036]/90 backdrop-blur-sm px-5 py-4 z-[7]"
                    style={{ borderRadius: "16px 16px 0 0" }}
                  >
                    <h4 className="text-white font-bold text-base leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-white/70 text-[12px] mt-0.5">
                      {t.course}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => {
                const el = (window as any).__testimonialScroll;
                if (el) el.scrollLeft -= 300;
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-iftm-dark hover:bg-iftm-primary hover:text-white transition-all z-30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => {
                const el = (window as any).__testimonialScroll;
                if (el) el.scrollLeft += 300;
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-iftm-dark hover:bg-iftm-primary hover:text-white transition-all z-30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
