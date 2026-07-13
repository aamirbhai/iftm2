"use client";

import { useState } from "react";
import Link from "next/link";

export default function StickySidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      label: "360° View",
      icon: "fa-panorama",
      href: "/360-view",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/40",
    },
    {
      label: "Admission",
      icon: "fa-graduation-cap",
      href: "/admissions",
      color: "from-iftm-primary to-red-700",
      shadow: "shadow-iftm-primary/40",
    },
    {
      label: "Alumni",
      icon: "fa-user-graduate",
      href: "/alumni",
      color: "from-iftm-gold to-amber-600",
      shadow: "shadow-iftm-gold/40",
    },
  ];

  return (
    <div className="fixed right-4 bottom-24 z-[999] flex flex-col items-end gap-3 md:right-6 md:bottom-28">
      {/* Menu Items */}
      {isOpen &&
        items.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-2.5 group`}
            style={{ animationDelay: `${index * 80}ms` }}
            onClick={() => setIsOpen(false)}
          >
            <span className="bg-white/90 backdrop-blur-md text-iftm-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-white/80">
              {item.label}
            </span>
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-xl ${item.shadow} hover:scale-110 transition-all duration-300 animate-slide-in`}
            >
              <i className={`fas ${item.icon} text-base`} />
            </div>
          </Link>
        ))}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center text-white shadow-xl shadow-iftm-primary/40 hover:scale-110 transition-all duration-300 ${
          isOpen ? "rotate-45" : ""
        }`}
        aria-label="Quick menu"
      >
        <i
          className={`fas ${
            isOpen ? "fa-times" : "fa-ellipsis-v"
          } text-lg transition-transform duration-300`}
        />

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-iftm-primary/30 animate-ping" />
        )}
      </button>

      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(20px) scale(0.8); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
