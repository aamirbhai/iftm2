"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── Founder Data ─── */
const founder = {
  name: "Shri Onkar Saran Kothiwal",
  role: "Founder",
  quote: "Keep pace with the time for Strong and Dynamic nation...",
  description: "Our benevolent founder, (Late) Shri Onkar Saran Kothiwal, philosopher, philanthropist, legislature and believer of guiding principles of \"Trust Based Management\"",
  image: "/images/leadership/founder.png",
};

/* ─── Leadership Data ─── */
const leaders = [
  {
    name: "Rajiv Kothiwal",
    role: "Chancellor",
    message: "The fast-changing world of tomorrow will be an exciting and a challenging place to live, where only the people who adopt themselves to the situation, keep pace with upcoming technologies and have the ability to align their ideas will succeed.",
    image: "/images/leadership/chancellor.png",
  },
  {
    name: "Abhinav Kothiwal",
    role: "Pro Chancellor",
    message: "At IFTM University, Moradabad, we believe in providing a truly value based education to develop good professionals, ready to excel in any career, they wish to pursue.",
    image: "/images/leadership/prochancellor.png",
  },
  {
    name: "Prof. M. P. Pandey",
    role: "Vice Chancellor",
    message: "Education is the driving force that brings change in a person, community, society, and nation. It breaks the barriers of caste, creed, ethnicity and religion.",
    image: "/images/leadership/vicechancellor.png",
  },
  {
    name: "Prof. Sanjeev Agarwal",
    role: "Registrar",
    message: "Global education scenario is in transition state to transform it to job-oriented education, which is the need of the hour.",
    image: "/images/leadership/registrar.png",
  },
];

export default function FounderLeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDE_INTERVAL = 6000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % leaders.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* ═══ LEFT: Founder (Light BG) ═══ */}
          <div className="py-16 px-4 md:px-10 bg-iftm-light relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-iftm-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center lg:text-left">
            {/* Section Label */}
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
              In Loving Memory
            </span>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="relative inline-block">
                  <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden border-2 border-iftm-primary/20 shadow-xl">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={200}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-iftm-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                    In Loving Memory
                  </div>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-iftm-primary/15 mb-3">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-iftm-primary text-lg md:text-xl font-semibold italic leading-relaxed mb-4">
                  {founder.quote}
                </blockquote>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-12 bg-iftm-primary/30" />
                  <p className="text-iftm-primary font-bold text-sm">
                    — {founder.name}
                  </p>
                </div>

                <p className="text-iftm-text text-sm leading-relaxed">
                  {founder.description}
                </p>

                <p className="text-iftm-text-light text-xs italic mt-4">
                  Forever in our hearts. His legacy continues to inspire.
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* ═══ RIGHT: Leadership Carousel (Golden BG) ═══ */}
          <div
            className="py-16 px-4 md:px-10 bg-gradient-to-br from-red-900 via-red-800 to-red-700 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />
            {/* Section Label */}
            <span className="text-white/70 text-xs font-bold uppercase tracking-[2px] mb-2 block text-center lg:text-left">
              University Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left">
              Message from <span className="text-iftm-gold">Leadership</span>
            </h2>

            {/* Leadership Card */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              <div key={activeIndex} className="animate-fade-in">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
                  {/* Leader Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30">
                      <Image
                        src={leaders[activeIndex].image}
                        alt={leaders[activeIndex].name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                      &ldquo;{leaders[activeIndex].message}&rdquo;
                    </p>
                    <div>
                      <p className="text-white font-bold text-sm">{leaders[activeIndex].name}</p>
                      <p className="text-white/70 text-xs font-semibold">{leaders[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 pb-4">
                {leaders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-white w-6"
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                    aria-label={`Leader ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Leader Thumbnails */}
            <div className="flex justify-center lg:justify-start gap-3 mt-4">
              {leaders.map((leader, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                    index === activeIndex
                      ? "border-white scale-110"
                      : "border-white/30 opacity-60 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
