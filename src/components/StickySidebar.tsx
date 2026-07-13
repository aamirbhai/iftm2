"use client";

import Link from "next/link";

export default function StickySidebar() {
  const items = [
    {
      label: "360° View",
      icon: null,
      text: "360°",
      href: "/360-view",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/40",
    },
    {
      label: "Admission",
      icon: "fa-graduation-cap",
      text: null,
      href: "/admissions",
      color: "from-iftm-primary to-red-700",
      shadow: "shadow-iftm-primary/40",
    },
    {
      label: "Alumni",
      icon: "fa-user-graduate",
      text: null,
      href: "/alumni",
      color: "from-iftm-gold to-amber-600",
      shadow: "shadow-iftm-gold/40",
    },
  ];

  return (
    <div className="fixed right-4 bottom-24 z-[999] flex flex-col items-end gap-3 md:right-6 md:bottom-28">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-2.5 group"
        >
          {/* Label on hover */}
          <span className="bg-white/90 backdrop-blur-md text-iftm-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-white/80">
            {item.label}
          </span>

          {/* Circle button */}
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-xl ${item.shadow} hover:scale-110 transition-all duration-300`}
          >
            {item.text ? (
              <span className="text-sm font-extrabold leading-none">{item.text}</span>
            ) : (
              <i className={`fas ${item.icon} text-lg`} />
            )}
          </div>
        </Link>
      ))}

      {/* Pulse ring animation */}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
