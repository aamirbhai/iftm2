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

/* ─── Awards ─── */
const awards = [
  { title: "Shiksha Ratna Samman", icon: "fa-award", color: "from-amber-500 to-orange-600" },
  { title: "Dronacharya Award 2023", icon: "fa-trophy", color: "from-yellow-500 to-amber-600" },
  { title: "Mahatma Gandhi Global Peace Award", icon: "fa-dove", color: "from-green-500 to-emerald-600" },
  { title: "International Women Achiever Award", icon: "fa-star", color: "from-pink-500 to-rose-600" },
  { title: "Leadership Award", icon: "fa-medal", color: "from-blue-500 to-indigo-600" },
  { title: "Best Teacher Award", icon: "fa-chalkboard-teacher", color: "from-purple-500 to-violet-600" },
  { title: "Teacher Excellence Award", icon: "fa-user-tie", color: "from-teal-500 to-cyan-600" },
  { title: "Rastriya Siksha Ratan Sanmaan", img: "https://iftmuniversity.ac.in/wp-content/images/awards/5.jpg" },
  { title: "Bharat Jyoti Award", icon: "fa-globe", color: "from-red-500 to-rose-600" },
  { title: "Best Researcher Award", icon: "fa-flask", color: "from-indigo-500 to-blue-600" },
  { title: "Young Scientist Award", icon: "fa-atom", color: "from-orange-500 to-amber-600" },
  { title: "Nation Builder Award", icon: "fa-flag", color: "from-green-600 to-teal-700" },
  { title: "Rastriya Siksha Ratan", icon: "fa-graduation-cap", color: "from-red-600 to-rose-700" },
  { title: "Corona Yodhdha Samman", icon: "fa-shield-virus", color: "from-blue-600 to-cyan-700" },
  { title: "Research Excellence Award", icon: "fa-microscope", color: "from-violet-500 to-purple-600" },
  { title: "National Education Award", icon: "fa-school", color: "from-emerald-500 to-green-600" },
  { title: "Super Woman Award 2022", icon: "fa-heart", color: "from-pink-500 to-fuchsia-600" },
];

/* ─── Testimonials (from old IFTM site - real student data) ─── */
const testimonials = [
  {
    name: "Akansha Gupta",
    course: "B.Com (Hons) 2017-2020",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/45.jpg",
    text: "My journey in IFTM University was a perfect blend of discipline, motivation, academic growth, practical experiences and above all an exposure to a new world. Here, I was able to bring out a better version of myself by exploring my strengths and passion and developing panache.",
    color: "bg-iftm-primary",
  },
  {
    name: "Arvind Raghav",
    course: "B.Pharm 2016-2020",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/46.jpg",
    text: "The School of Pharmaceutical Sciences is providing excellent infrastructure and facilities to impart quality education to the students. The School is one of the best institutes where I received industry oriented teaching learning from the experienced faculty members.",
    color: "bg-iftm-navy",
  },
  {
    name: "Vishakha Rastogi",
    course: "B.Pharm 2016-2020",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/47.jpg",
    text: "IFTM university is a place where we find mingling of learning, fun, culture, sports and many more life and personality brightening activities. The friendly attitude of the professors and their willingness to offer a helping hand has made me feel a part of the IFTM University family.",
    color: "bg-emerald-700",
  },
  {
    name: "Siddharth Srivastava",
    course: "MBA 2018-2020",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/53.jpg",
    text: "I feel honored to be a part of IFTM University. The environment and the quality of education which is being provided by the University is above the mark. I am thankful to Training & Placement Dept. for personality enhancement program which helped me groom myself.",
    color: "bg-amber-700",
  },
  {
    name: "Manisha Rastogi",
    course: "B.Tech (CS) 2016-2020",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/52.jpg",
    text: "Being an IFTMian was an amazing experience. I got a chance to formulate my future goals in IFTM. Every person in the University is supportive and kind. I learned a lot and got so many experiences. Thanks to IFTM University.",
    color: "bg-purple-700",
  },
  {
    name: "Diksha Chanchal",
    course: "BCA 2019-2022",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/54.jpg",
    text: "IFTM University provides a very good environment for all who wants to study. I am highly satisfied with all faculty as all of them are highly experienced. This is one of the best University in entire Northern India.",
    color: "bg-rose-700",
  },
  {
    name: "Ankit Goel",
    course: "B.Pharm 2016-2020",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/48.jpg",
    text: "In IFTM University, there is a good environment for the students. The university provides various facilities which help us to learn many things. I am full of confidence and have a strong career foundation thanks to the Pharmacy Academy department.",
    color: "bg-sky-700",
  },
  {
    name: "Tushar",
    course: "B.Tech BT 2017-2021",
    img: "https://iftmuniversity.ac.in/assets/images/alumni/56.jpg",
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
          SECTION 2: AWARDS & ACHIEVEMENTS
          ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-18 bg-iftm-light">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
                Recognitions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
                Awards & <span className="text-iftm-primary">Achievements</span>
              </h2>
            </div>
            <Link
              href="/awards"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-iftm-primary text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-iftm-primary-dark transition-colors"
            >
              View All
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-iftm-border p-5 hover:shadow-xl hover:-translate-y-1 transition-all group text-center"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${award.icon} text-white text-lg`} />
                </div>
                <h4 className="text-iftm-dark text-[11px] font-semibold leading-tight">
                  {award.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: STUDENT SAYS
          ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-18 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
              Student <span className="text-iftm-primary">Says</span>
            </h2>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-iftm-border overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`h-1.5 ${t.color}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-iftm-border"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div>
                      <h4 className="text-iftm-dark font-semibold text-sm">{t.name}</h4>
                      <p className="text-iftm-text-light text-[11px]">{t.course}</p>
                    </div>
                  </div>
                  <p className="text-iftm-text text-[13px] leading-relaxed line-clamp-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div>
              {testimonials.map((t, index) => (
                <div key={index} className={index === currentTestimonial ? "block" : "hidden"}>
                  <div className="bg-white rounded-2xl border border-iftm-border overflow-hidden">
                    <div className={`h-1.5 ${t.color}`} />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-iftm-border"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        <div>
                          <h4 className="text-iftm-dark font-semibold text-sm">{t.name}</h4>
                          <p className="text-iftm-text-light text-[11px]">{t.course}</p>
                        </div>
                      </div>
                      <p className="text-iftm-text text-[13px] leading-relaxed">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex gap-0.5 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-iftm-primary w-6" : "bg-iftm-border w-3"
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/studenttestimonial"
              className="inline-flex items-center gap-2 text-iftm-primary text-sm font-semibold hover:gap-3 transition-all"
            >
              View All Testimonials
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
