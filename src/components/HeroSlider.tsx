"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Slide Data ─── */
const slides = [
  {
    title: "Best Education",
    highlight: "in Moradabad",
    description:
      "NAAC A Grade accredited university with 90%+ placement record. 54+ programs in Pharmacy, Engineering, Management, Law & more.",
    cta: { label: "Apply Now", href: "https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" },
    cta2: { label: "About IFTM", href: "/about" },
  },
  {
    title: "Excellence in",
    highlight: "Research & Innovation",
    description:
      "State-of-the-art laboratories, experienced faculty, and industry collaborations for cutting-edge research.",
    cta: { label: "Apply Now", href: "https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" },
    cta2: { label: "Explore Programmes", href: "/programmes" },
  },
  {
    title: "Global Placements",
    highlight: "Top Recruiters",
    description:
      "Our students placed in Google, Microsoft, Amazon, TCS, Infosys, and 500+ leading companies worldwide.",
    cta: { label: "View Placements", href: "/placements" },
    cta2: { label: "Apply Now", href: "https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" },
  },
  {
    title: "Campus Life",
    highlight: "Beyond Classroom",
    description:
      "World-class infrastructure, sports facilities, hostels, and vibrant student community for holistic development.",
    cta: { label: "Explore Campus", href: "/campus-life" },
    cta2: { label: "Apply Now", href: "https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" },
  },
];

/* ─── Stats Data (TMU style) ─── */
const stats = [
  { icon: "fa-user-graduate", value: 10000, suffix: "+", label: "Students" },
  { icon: "fa-briefcase", value: 25, suffix: " Years", label: "of Excellence" },
  { icon: "fa-chart-line", value: 90, suffix: "%+", label: "Placement Rate" },
  { icon: "fa-handshake", value: 100, suffix: "+", label: "Collaborations" },
];

/* ─── Banner Slides ─── */
const bannerSlides = [
  { title: "Admissions Open 2025-26", subtitle: "Apply now for UG, PG & Diploma programmes", color: "from-iftm-primary to-red-900" },
  { title: "NAAC 'A' Grade Accredited", subtitle: "Recognized for academic excellence and infrastructure", color: "from-iftm-navy to-blue-900" },
  { title: "90%+ Placement Record", subtitle: "Top recruiters: Google, Microsoft, Amazon, TCS & more", color: "from-green-800 to-emerald-900" },
  { title: "69+ Acres Green Campus", subtitle: "World-class infrastructure with modern facilities", color: "from-amber-700 to-orange-900" },
];

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-number)] text-2xl md:text-3xl font-bold text-white leading-none">
      {count.toLocaleString()}
    </span>
  );
}

/* ─── Main Component ─── */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [bannerCurrent, setBannerCurrent] = useState(0);

  /* Auto-rotate hero slides */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  /* Auto-rotate banner slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerCurrent((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO with HLS Video BG
          ═══════════════════════════════════════════ */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-iftm-dark">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/slide-1.jpg"
        >
          <source src="/videos/campus.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-iftm-navy/40 to-transparent" />

        {/* Slide Content - Centered */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full text-center">
            <div
              key={current}
              className="max-w-[800px] mx-auto animate-fade-in"
            >
                {/* Skewed badge */}
                <div className="inline-block mb-4">
                  <div
                    className="bg-iftm-primary px-6 py-1.5 inline-block"
                    style={{ transform: "skewX(-12deg)" }}
                  >
                    <span
                      className="text-white font-bold text-sm uppercase tracking-widest"
                      style={{ transform: "skewX(12deg)", display: "inline-block" }}
                    >
                      IFTM University
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-5">
                  {slides[current].title}{" "}
                  <span className="text-iftm-gold block">
                    {slides[current].highlight}
                  </span>
                </h1>
                <p className="text-white/80 text-base md:text-lg mb-8 max-w-[600px] mx-auto">
                  {slides[current].description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={slides[current].cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-iftm-primary text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-iftm-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-primary/30"
                  >
                    {slides[current].cta.label}
                  </a>
                  <Link
                    href={slides[current].cta2.href}
                    className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-iftm-dark transition-all"
                  >
                    {slides[current].cta2.label}
                  </Link>
                </div>
            </div>

            {/* Slide Indicators - Centered */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-iftm-gold w-10"
                      : "bg-white/40 w-4 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: STATS - Premium Centered Design
          ═══════════════════════════════════════════ */}
      <section className="relative -mt-1 z-30">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e2a] via-[#111640] to-[#0a0e2a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.06),transparent_70%)]" />
        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-iftm-gold/40 to-transparent" />

        <div className="relative max-w-[1100px] mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="relative group text-center">
                {/* Vertical divider (desktop) */}
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-14 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                )}

                <div className="flex flex-col items-center gap-2.5 px-4">
                  {/* Icon with glow ring */}
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-iftm-gold/30 group-hover:bg-iftm-gold/10 transition-all duration-300">
                      <i className={`fas ${stat.icon} text-iftm-gold text-lg md:text-xl`} />
                    </div>
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-iftm-gold/0 group-hover:bg-iftm-gold/10 blur-lg transition-all duration-300" />
                  </div>

                  {/* Number */}
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-[family-name:var(--font-number)] text-3xl md:text-4xl font-bold text-white leading-none">
                      <AnimatedCounter value={stat.value} suffix="" />
                    </span>
                    <span className="text-iftm-gold text-sm md:text-base font-bold">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-iftm-gold/40 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: BANNER SLIDER
          ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div
              key={bannerCurrent}
              className={`bg-gradient-to-r ${bannerSlides[bannerCurrent].color} px-8 md:px-16 py-12 md:py-16 animate-fade-in`}
            >
              <div className="max-w-[600px]">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                  {bannerSlides[bannerCurrent].title}
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-6">
                  {bannerSlides[bannerCurrent].subtitle}
                </p>
                <a
                  href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-white text-iftm-dark font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-iftm-gold hover:text-iftm-dark transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBannerCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === bannerCurrent
                      ? "bg-white w-8"
                      : "bg-white/40 w-3 hover:bg-white/60"
                  }`}
                  aria-label={`Banner ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <button
              onClick={() => setBannerCurrent((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous banner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setBannerCurrent((prev) => (prev + 1) % bannerSlides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next banner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
