"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const founder = {
  name: "Shri Onkar Saran Kothiwal",
  quote: "Keep pace with the time for Strong and Dynamic nation...",
  description: "Philosopher, philanthropist, legislature and believer of guiding principles of \"Trust Based Management\"",
  image: "/images/leadership/founder.png",
};

const leaders = [
  { name: "Rajiv Kothiwal", role: "Chancellor", message: "The fast-changing world of tomorrow will be an exciting place where only people who adopt themselves will succeed.", image: "/images/leadership/chancellor.png" },
  { name: "Abhinav Kothiwal", role: "Pro Chancellor", message: "We believe in providing truly value based education to develop good professionals ready to excel.", image: "/images/leadership/prochancellor.png" },
  { name: "Prof. M. P. Pandey", role: "Vice Chancellor", message: "Education is the driving force that brings change in a person, community, society, and nation.", image: "/images/leadership/vicechancellor.png" },
  { name: "Prof. Sanjeev Agarwal", role: "Registrar", message: "Global education scenario is in transition to transform it to job-oriented education.", image: "/images/leadership/registrar.png" },
];

export default function FounderLeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => setActiveIndex((p) => (p + 1) % leaders.length), []);
  const prevSlide = useCallback(() => setActiveIndex((p) => (p - 1 + leaders.length) % leaders.length), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT: Founder */}
        <div className="py-14 px-6 md:px-10 bg-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-[200px] h-[200px] rounded-full bg-iftm-primary/5 blur-2xl" />
          <div className="relative z-10 max-w-[500px] mx-auto lg:mx-0 text-center lg:text-left">
            <span className="text-iftm-primary text-[10px] font-bold uppercase tracking-[3px] mb-4 block">In Loving Memory</span>

            <div className="flex flex-col items-center lg:flex-row gap-6">
              {/* Image */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-br from-iftm-primary/20 to-iftm-gold/20 rounded-2xl blur-md" />
                <div className="relative w-[160px] h-[200px] rounded-xl overflow-hidden border-2 border-iftm-gold/30 shadow-lg">
                  <Image src={founder.image} alt={founder.name} width={160} height={200} className="w-full h-full object-cover" priority />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-iftm-primary text-white text-[8px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                  In Loving Memory
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <blockquote className="text-iftm-dark text-lg font-semibold italic leading-relaxed mb-3">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-[1px] w-8 bg-iftm-primary/30" />
                  <p className="text-iftm-primary font-bold text-xs">— {founder.name}</p>
                </div>
                <p className="text-iftm-text-light text-xs">{founder.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Leadership */}
        <div
          className="py-14 px-6 md:px-10 bg-gradient-to-br from-red-950 via-red-900 to-red-800 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/3 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-[500px] mx-auto lg:mx-0">
            <span className="text-iftm-gold text-[10px] font-bold uppercase tracking-[3px] mb-2 block">University Leadership</span>
            <h2 className="text-2xl font-bold text-white mb-6">
              Message from <span className="text-iftm-gold">Leadership</span>
            </h2>

            {/* Card */}
            <div key={activeIndex} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-5 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-iftm-gold to-iftm-primary rounded-full opacity-50" />
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                    <Image src={leaders[activeIndex].image} alt={leaders[activeIndex].name} width={56} height={56} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-3">{leaders[activeIndex].message}</p>
                  <div className="h-[1px] bg-white/10 mb-3" />
                  <p className="text-white font-bold text-sm">{leaders[activeIndex].name}</p>
                  <p className="text-iftm-gold text-xs">{leaders[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2">
                {leaders.map((l, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)} className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${i === activeIndex ? "border-iftm-gold scale-110" : "border-white/20 opacity-50 hover:opacity-80"}`}>
                    <Image src={l.image} alt={l.name} width={40} height={40} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prevSlide} className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button onClick={nextSlide} className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes fade-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in{animation:fade-in .4s ease-out}`}</style>
    </section>
  );
}
