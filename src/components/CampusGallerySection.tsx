"use client";

import { useState } from "react";

interface Building {
  id: string;
  name: string;
  icon: string;
  description: string;
  images: string[];
}

const buildings: Building[] = [
  {
    id: "admin",
    name: "Administrative Block",
    icon: "fa-building",
    description: "The main administrative building housing the Vice Chancellor's office, Registrar, and other administrative departments.",
    images: ["/images/buildings/campus1.jpg", "/images/buildings/1.jpg", "/images/buildings/2.jpg", "/images/buildings/3.jpg"],
  },
  {
    id: "academic",
    name: "Academic Blocks",
    icon: "fa-graduation-cap",
    description: "State-of-the-art academic buildings with smart classrooms, lecture theatres, and seminar halls for all schools.",
    images: ["/images/buildings/campus2.jpg", "/images/buildings/4.jpg", "/images/buildings/5.jpg", "/images/buildings/6.jpg"],
  },
  {
    id: "library",
    name: "Central Library",
    icon: "fa-book",
    description: "A vast library with thousands of books, digital resources, reading halls, and e-learning facilities.",
    images: ["/images/buildings/7.jpg", "/images/buildings/8.jpg", "/images/buildings/9.jpg"],
  },
  {
    id: "labs",
    name: "Laboratories",
    icon: "fa-flask",
    description: "Well-equipped laboratories for Engineering, Pharmacy, Sciences, and Computer Science departments.",
    images: ["/images/buildings/10.jpg", "/images/buildings/11.jpg", "/images/buildings/12.jpg", "/images/buildings/13.jpg"],
  },
  {
    id: "sports",
    name: "Sports Complex",
    icon: "fa-futbol",
    description: "Indoor and outdoor sports facilities including cricket ground, basketball court, gymnasium, and swimming pool.",
    images: ["/images/buildings/14.jpg", "/images/buildings/15.jpg", "/images/buildings/16.jpg"],
  },
  {
    id: "hostel",
    name: "Hostels",
    icon: "fa-hotel",
    description: "Separate hostels for boys and girls with modern amenities, Wi-Fi, mess, and 24/7 security.",
    images: ["/images/buildings/17.jpg", "/images/buildings/18.jpg", "/images/buildings/19.jpg"],
  },
  {
    id: "auditorium",
    name: "Auditorium & Seminar Halls",
    icon: "fa-theater-masks",
    description: "Air-conditioned auditorium with modern AV equipment for conferences, convocations, and cultural events.",
    images: ["/images/buildings/20.jpg", "/images/buildings/21.jpg", "/images/buildings/22.jpg"],
  },
  {
    id: "cafeteria",
    name: "Cafeteria & Mess",
    icon: "fa-utensils",
    description: "Hygienic cafeteria and mess facilities serving nutritious meals and snacks to students and staff.",
    images: ["/images/buildings/23.jpg", "/images/buildings/24.jpg", "/images/buildings/25.jpg"],
  },
  {
    id: "medical",
    name: "Medical Facility",
    icon: "fa-hospital",
    description: "On-campus medical center with qualified doctors, ambulance service, and emergency care facilities.",
    images: ["/images/buildings/26.jpg", "/images/buildings/campus3.jpg"],
  },
  {
    id: "campus",
    name: "Campus Overview",
    icon: "fa-university",
    description: "69+ acres of lush green campus with beautiful gardens, pathways, and modern infrastructure.",
    images: ["/images/buildings/campus4.jpg", "/images/buildings/campus5.jpg", "/images/buildings/campus1.jpg"],
  },
];

export default function CampusGallerySection() {
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  const active = buildings[selectedBuilding];

  return (
    <section className="py-14 md:py-20 bg-[#f5f7fa]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Campus Life
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Explore Our <span className="text-iftm-primary">Campus</span>
          </h2>
          <p className="text-iftm-text-light text-sm mt-2">69+ acres of world-class infrastructure</p>
        </div>

        {/* ═══ Desktop: Sidebar + Gallery ═══ */}
        <div className="hidden lg:grid grid-cols-[260px_1fr] gap-6">
          {/* Left Sidebar — Buildings */}
          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin">
            {buildings.map((building, index) => (
              <button
                key={building.id}
                onClick={() => {
                  setSelectedBuilding(index);
                  setSelectedImage(0);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  selectedBuilding === index
                    ? "bg-iftm-primary text-white shadow-lg shadow-iftm-primary/30"
                    : "bg-white text-iftm-dark hover:bg-iftm-light border border-iftm-border"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedBuilding === index ? "bg-white/20" : "bg-iftm-primary/10"
                }`}>
                  <i className={`fas ${building.icon} text-sm ${
                    selectedBuilding === index ? "text-white" : "text-iftm-primary"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-semibold truncate block">{building.name}</span>
                  <span className={`text-[10px] ${
                    selectedBuilding === index ? "text-white/70" : "text-iftm-text-light"
                  }`}>{building.images.length} Photos</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right — Gallery */}
          <div>
            {/* Building info */}
            <div className="mb-4">
              <h3 className="text-iftm-dark font-bold text-lg">{active.name}</h3>
              <p className="text-iftm-text-light text-sm mt-1">{active.description}</p>
            </div>

            {/* Main large image */}
            <div className="relative rounded-xl overflow-hidden h-[320px] mb-3 group">
              <img
                src={active.images[selectedImage]}
                alt={active.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Nav arrows on main image */}
              {active.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev - 1 + active.images.length) % active.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-iftm-dark hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev + 1) % active.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-iftm-dark hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
                {selectedImage + 1} / {active.images.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {active.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-iftm-primary shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ Mobile: Accordion + Gallery ═══ */}
        <div className="lg:hidden space-y-3">
          {buildings.map((building, index) => {
            const isOpen = mobileOpen === index;

            return (
              <div key={building.id} className="bg-white rounded-xl border border-iftm-border overflow-hidden">
                <button
                  onClick={() => setMobileOpen(isOpen ? null : index)}
                  className="w-full flex items-center gap-3 px-4 py-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${building.icon} text-iftm-primary text-sm`} />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="text-iftm-dark text-sm font-semibold block">{building.name}</span>
                    <span className="text-iftm-text-light text-[11px]">{building.images.length} Photos</span>
                  </div>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className={`text-iftm-text-light transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4">
                    <p className="text-iftm-text-light text-xs mb-3">{building.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {building.images.map((img, i) => (
                        <div key={i} className="rounded-lg overflow-hidden h-[120px]">
                          <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
