"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const imageVariants = {
  enter: { scale: 0.8, opacity: 0 },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: {
    scale: 1.1,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
};

const textVariants = {
  enter: { y: 20, opacity: 0 },
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.15, ease: "easeOut" as const },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

export default function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_INTERVAL = 6000;

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      setProgress(0);
    },
    [activeIndex]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % leaders.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            University Leadership
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Message from Leadership
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="max-w-[1000px] mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Progress Bar */}
          <div className="absolute -top-1 left-0 right-0 h-1 bg-iftm-border/30 rounded-full overflow-hidden z-10">
            <motion.div
              className="h-full bg-iftm-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-iftm-border/50">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3"
              >
                {/* Left - Image */}
                <div
                  className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
                  style={{ background: leaders[activeIndex].gradient }}
                >
                  {/* Background decorative circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-2 border-white"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`img-${activeIndex}`}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-4 relative z-10"
                    >
                      <Image
                        src={leaders[activeIndex].image}
                        alt={leaders[activeIndex].name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`name-${activeIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <h3 className="text-white font-bold text-lg mb-1">
                        {leaders[activeIndex].name}
                      </h3>
                      <p className="text-white/70 text-xs uppercase tracking-wider font-medium">
                        {leaders[activeIndex].role}
                      </p>
                      <p className="text-white/50 text-xs mt-1">
                        IFTM University
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right - Message */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`text-${activeIndex}`}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <h5 className="text-iftm-text-light text-xs uppercase tracking-wider mb-1">
                        Message from
                      </h5>
                      <h4 className="text-iftm-dark font-bold text-xl mb-5">
                        {leaders[activeIndex].role}
                      </h4>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-iftm-primary/10 mb-3"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-iftm-text text-sm md:text-base leading-relaxed mb-6">
                        {leaders[activeIndex].message}
                      </p>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-iftm-primary font-semibold text-sm hover:text-iftm-primary-dark transition-colors group"
                      >
                        Read More
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </motion.svg>
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-iftm-primary hover:text-white hover:scale-110 transition-all z-20 border border-iftm-border group"
            aria-label="Previous leader"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-iftm-primary hover:text-white hover:scale-110 transition-all z-20 border border-iftm-border group"
            aria-label="Next leader"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots with Leader Names */}
        <div className="flex justify-center gap-3 mt-8">
          {leaders.map((leader, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-iftm-primary text-white shadow-md"
                  : "bg-white text-iftm-text-light hover:bg-iftm-primary/10 border border-iftm-border"
              }`}
              aria-label={`Go to ${leader.role}`}
            >
              <div
                className={`w-6 h-6 rounded-full overflow-hidden border-2 ${
                  index === activeIndex ? "border-white/40" : "border-iftm-border"
                }`}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium hidden sm:inline">
                {leader.role}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
