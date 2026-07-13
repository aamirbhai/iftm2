"use client";

import Link from "next/link";

export default function StickySidebar() {
  return (
    <>
      {/* ─── Left Sidebar: 360° + WhatsApp (Circles) ─── */}
      <div className="fixed left-4 bottom-28 z-[999] flex flex-col items-center gap-3">
        {/* 360° View - Circle */}
        <Link
          href="/360-view"
          className="w-14 h-14 rounded-full bg-iftm-navy/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-iftm-navy/30 hover:bg-iftm-primary hover:scale-110 transition-all duration-300 border border-white/10"
          title="360° Campus View"
        >
          <span className="text-sm font-extrabold leading-none">360°</span>
        </Link>

        {/* WhatsApp - Circle */}
        <a
          href="https://api.whatsapp.com/send/?phone=919639004077&text=Hello%20IFTM%2C%20I%20am%20seeking%20admission-related%20information.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:scale-110 transition-all duration-300 border border-white/10"
          title="WhatsApp Chat"
        >
          <i className="fab fa-whatsapp text-2xl" />
        </a>
      </div>

      {/* ─── Right Sidebar: Admissions Open (TMU-style vertical) ─── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] hidden md:block">
        <Link
          href="/admissions"
          className="group flex items-center bg-iftm-primary hover:bg-iftm-primary-dark transition-colors duration-300 shadow-lg shadow-iftm-primary/30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-white font-bold text-xs uppercase tracking-[0.2em] px-3 py-5">
            Admissions Open
          </span>
          <div className="bg-iftm-gold text-iftm-dark px-2 py-2">
            <i className="fas fa-arrow-right text-xs rotate-90" />
          </div>
        </Link>
      </div>

      {/* ─── Mobile Bottom Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] md:hidden bg-white/95 backdrop-blur-lg border-t border-iftm-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-0">
          {/* 360° View */}
          <Link
            href="/360-view"
            className="flex flex-col items-center justify-center py-3 text-iftm-navy hover:bg-iftm-light transition-colors"
          >
            <span className="text-base font-extrabold leading-none">360°</span>
            <span className="text-[9px] uppercase tracking-wider mt-0.5 text-iftm-text-light">View</span>
          </Link>

          {/* Admission */}
          <Link
            href="/admissions"
            className="flex flex-col items-center justify-center py-3 bg-iftm-primary text-white"
          >
            <i className="fas fa-graduation-cap text-base mb-0.5" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Admission</span>
          </Link>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=919639004077&text=Hello%20IFTM%2C%20I%20am%20seeking%20admission-related%20information.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 text-green-600 hover:bg-green-50 transition-colors"
          >
            <i className="fab fa-whatsapp text-xl mb-0.5" />
            <span className="text-[9px] uppercase tracking-wider text-iftm-text-light">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
}
