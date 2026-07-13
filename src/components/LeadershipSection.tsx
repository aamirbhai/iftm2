"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const leaders = [
  {
    name: "Rajiv Kothiwal",
    role: "Chancellor",
    message:
      "The fast-changing world of tomorrow will be an exciting and a challenging place to live, where only the people who adopt themselves to the situation, keep pace with upcoming technologies and have the ability to align their ideas will succeed. At IFTM University, we are committed to preparing our students for this dynamic future.",
    image: "/images/leadership/chancellor.png",
    gradient: "linear-gradient(135deg, #950000, #7a0000)",
  },
  {
    name: "Abhinav Kothiwal",
    role: "Pro Chancellor",
    message:
      "At IFTM University, Moradabad, we believe in providing a truly value based education to develop good professionals, ready to excel in any career, they wish to pursue. We know that the world has become more complex and in order to be successful, one needs to be multi-skilled and versatile.",
    image: "/images/leadership/prochancellor.png",
    gradient: "linear-gradient(135deg, #1b1f52, #2d337b)",
  },
  {
    name: "Prof. M. P. Pandey",
    role: "Vice Chancellor",
    message:
      "Education is the driving force that brings change in a person, community, society, and nation. It breaks the barriers of caste, creed, ethnicity and religion by training the minds to think logically; envision, innovate, invent and discover methods for creating a harmonious and sustainable society with skills.",
    image: "/images/leadership/vicechancellor.png",
    gradient: "linear-gradient(135deg, #7a0000, #950000)",
  },
  {
    name: "Prof. Sanjeev Agarwal",
    role: "Registrar",
    message:
      "Global education scenario is in transition state to transform it to job-oriented education, which is the need of the hour. The employability depends upon the education and training imparted to the future workforce. Education need to be fully balanced between theoretical knowledge and practical skills.",
    image: "/images/leadership/registrar.png",
    gradient: "linear-gradient(135deg, #2d337b, #950000)",
  },
];

export default function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_INTERVAL = 6000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % leaders.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
    setProgress(0);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Progress bar
  useEffect(() => {
    if (isPaused) return;
    const step = 50;
    const increment = (step / SLIDE_INTERVAL) * 100;
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + increment;
      });
    }, step);
    return () => clearInterval(progressTimer);
  }, [isPaused, activeIndex]);

  return (
    <section className="py-20 bg-iftm-light overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            University Leadership
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Message from Leadership
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-[1000px] mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Progress Bar */}
          <div className="absolute -top-1 left-0 right-0 h-1 bg-iftm-border/30 rounded-full overflow-hidden z-10">
            <div
              className="h-full bg-iftm-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-iftm-border/50">
            <div key={activeIndex} className="grid grid-cols-1 md:grid-cols-3 animate-slide-in">
              {/* Left - Image */}
              <div
                className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
                style={{ background: leaders[activeIndex].gradient }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-2 border-white opacity-10" />

                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-4 relative z-10">
                  <Image
                    src={leaders[activeIndex].image}
                    alt={leaders[activeIndex].name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {leaders[activeIndex].name}
                  </h3>
                  <p className="text-white/70 text-xs uppercase tracking-wider font-medium">
                    {leaders[activeIndex].role}
                  </p>
                  <p className="text-white/50 text-xs mt-1">IFTM University</p>
                </div>
              </div>

              {/* Right - Message */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center min-h-[300px]">
                <div>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-iftm-primary/20 mb-4">
                    <path d="M10 8c-1.1 0-2 .9-2 2v4h4v-4H8c0-1.1.9-2 2-2V6c-2.2 0-4 1.8-4 4v8h8v-8c0-1.1-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2v4h4v-4h-4c0-1.1.9-2 2-2V6c-2.2 0-4 1.8-4 4v8h8v-8c0-1.1-.9-2-2-2z" fill="currentColor" />
                  </svg>
                  <p className="text-iftm-text leading-relaxed text-base md:text-lg">
                    {leaders[activeIndex].message}
                  </p>
                  <div className="mt-6 pt-4 border-t border-iftm-border">
                    <p className="text-iftm-dark font-semibold">{leaders[activeIndex].name}</p>
                    <p className="text-iftm-primary text-sm">{leaders[activeIndex].role}, IFTM University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-iftm-dark hover:bg-iftm-primary hover:text-white transition-all z-20"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-iftm-dark hover:bg-iftm-primary hover:text-white transition-all z-20"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {leaders.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setProgress(0);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-iftm-primary w-8" : "bg-iftm-border w-2 hover:bg-iftm-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
