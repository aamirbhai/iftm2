"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "About Us",
    children: [
      {
        title: "About Us",
        links: [
          { label: "About University", href: "/about" },
          { label: "Salient Features", href: "/salient-features" },
          { label: "Approvals", href: "/approvals" },
          { label: "Administration", href: "/administration" },
          { label: "University Governance", href: "/governance" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      {
        title: "Awards & Certification",
        links: [
          { label: "Awards by University", href: "/awards/university" },
          { label: "Awards by Faculties", href: "/awards/faculty" },
          { label: "Achievements by Students", href: "/awards/students" },
          { label: "Certification", href: "/certification" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    children: [
      {
        title: "Schools",
        links: [
          { label: "Business Management", href: "/schools/sbm" },
          { label: "Pharmaceutical Sciences", href: "/schools/sps" },
          { label: "Computer Science", href: "/schools/sca" },
          { label: "Engineering & Technology", href: "/schools/set" },
          { label: "Biotechnology", href: "/schools/sbt" },
          { label: "Sciences", href: "/schools/sos" },
          { label: "Law", href: "/schools/sol" },
        ],
      },
      {
        title: "Programmes",
        links: [
          { label: "Programmes @ Glance", href: "/programmes" },
          { label: "Diploma Programmes", href: "/diploma" },
          { label: "UG Programmes", href: "/ug" },
          { label: "PG Programmes", href: "/pg" },
          { label: "Doctoral Programme", href: "/doctoral" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "IFTM LMS", href: "/lms" },
          { label: "ABC/NAD", href: "/abc-nad" },
          { label: "Academic Calendar", href: "/academic-calendar" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    children: [
      {
        title: "Programmes",
        links: [
          { label: "Diploma Programmes", href: "/diploma" },
          { label: "UG Programmes", href: "/ug" },
          { label: "PG Programmes", href: "/pg" },
          { label: "Doctoral Programme", href: "/doctoral" },
        ],
      },
      {
        title: "Admissions",
        links: [
          { label: "How to Apply", href: "/apply" },
          { label: "Fee & Payment", href: "/fee" },
          { label: "Scholarship", href: "/scholarship" },
          { label: "Loan Facility", href: "/loan" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Online Fee", href: "/online-fee" },
          { label: "ERP Login", href: "/erp" },
          { label: "Enquire Now", href: "/enquire" },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    children: [
      {
        title: "Campus Life",
        links: [
          { label: "Hostel", href: "/hostel" },
          { label: "Sports", href: "/sports" },
          { label: "Library", href: "/library" },
          { label: "Gymnasium", href: "/gym" },
          { label: "Canteen", href: "/canteen" },
        ],
      },
      {
        title: "Facilities",
        links: [
          { label: "IT Facilities", href: "/it-facilities" },
          { label: "Academic Facilities", href: "/academic-facilities" },
          { label: "Dispensary", href: "/health" },
          { label: "Banks & ATM", href: "/bank" },
        ],
      },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Research", href: "/research" },
  { label: "Explore Programmes", href: "/programmes" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header - Fixed, transparent to solid on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative">
          {/* Logo - spans full height from top to bottom */}
          <Link href="/" className="absolute left-4 md:left-6 top-0 bottom-0 flex items-center gap-2 md:gap-3 z-10">
            <Image
              src="/images/newlogo.png"
              alt="IFTM University Logo"
              width={180}
              height={55}
              className="transition-all duration-300"
              style={{ width: "auto", height: isScrolled ? "40px" : "65px" }}
              priority
            />
            <div className={`flex items-center gap-1 transition-all duration-300 ${isScrolled ? "scale-75" : "scale-100"}`}>
              <div className="flex flex-col items-center leading-tight">
                <span className="text-white font-bold text-[10px] md:text-base">NAAC</span>
                <span className="text-white font-medium text-[8px] md:text-[10px]">GRADE</span>
              </div>
              <span className="text-iftm-gold font-black text-2xl md:text-4xl leading-none">A</span>
            </div>
          </Link>

          <div className={`transition-all duration-300 ${isScrolled ? "h-[50px]" : "h-[70px] md:h-[90px]"}`}>
            {/* Topbar - right aligned, top portion - hidden on mobile */}
            <div className={`hidden md:flex text-white text-[11px] transition-all duration-300 items-center justify-end gap-3 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-[20px]"}`}>
              <Link href="/online-fee" className="hover:text-iftm-gold transition-colors">Online Fee</Link>
              <span className="text-white/40">|</span>
              <Link href="/erp" className="hover:text-iftm-gold transition-colors">ERP Login</Link>
              <span className="text-white/40">|</span>
              <Link href="/library" className="hover:text-iftm-gold transition-colors">Library</Link>
              <span className="text-white/40">|</span>
              <Link href="/career" className="hover:text-iftm-gold transition-colors">Career</Link>
              <span className="text-white/40">|</span>
              <Link href="/enquire" className="hover:text-iftm-gold transition-colors">Enquire</Link>
              <span className="text-white/40">|</span>
              <Link href="/iqac" className="hover:text-iftm-gold transition-colors">IQAC</Link>
              <span className="text-white/40">|</span>
              <Link href="/grievance" className="hover:text-iftm-gold transition-colors">Grievance</Link>
              <span className="text-white/40">|</span>
              <Link href="/feedback" className="hover:text-iftm-gold transition-colors">Feedback</Link>
              <span className="text-white/40">|</span>
              <Link href="/profile" className="hover:text-iftm-gold transition-colors">Profile</Link>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-3">
                <a href="https://api.whatsapp.com/send/?phone=919639004077" target="_blank" rel="noopener noreferrer" className="hover:text-iftm-gold transition-colors" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                <a href="tel:+919639004077" className="hover:text-iftm-gold transition-colors" title="Call"><i className="fas fa-phone"></i></a>
                <a href="mailto:info@iftm.ac.in" className="hover:text-iftm-gold transition-colors" title="Email"><i className="fas fa-envelope"></i></a>
                <Link href="/search" className="hover:text-iftm-gold transition-colors" title="Search"><i className="fas fa-search"></i></Link>
                <span className="text-white/40">|</span>
                <a href="https://www.facebook.com/iftmuniv" target="_blank" rel="noopener noreferrer" className="hover:text-iftm-gold transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/IFTMUni" target="_blank" rel="noopener noreferrer" className="hover:text-iftm-gold transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/iftmuniversity/" target="_blank" rel="noopener noreferrer" className="hover:text-iftm-gold transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCYAp-IfRk0ckvrvxFS9hKgQ" target="_blank" rel="noopener noreferrer" className="hover:text-iftm-gold transition-colors"><i className="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/in/iftm-university-04006a245/" target="_blank" rel="noopener noreferrer" className="hover:text-iftm-gold transition-colors"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            {/* Nav row - bottom portion */}
            <div className="flex items-center justify-between h-[50px] md:h-[65px]">
              {/* Spacer for logo */}
              <div className="w-[140px] md:w-[250px]"></div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="px-3 py-3 text-[12px] font-semibold uppercase tracking-wide transition-colors border-b-[2px] text-white/90 border-transparent hover:text-white hover:border-iftm-gold"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="px-3 py-3 text-[12px] font-semibold uppercase tracking-wide transition-colors border-b-[2px] text-white/90 border-transparent hover:text-white hover:border-iftm-gold"
                    >
                      {item.label}
                    </button>
                  )}

                  {/* Mega Menu */}
                  {item.children && activeDropdown === index && (
                    <div className="absolute top-full left-0 min-w-[600px] bg-white rounded-b-xl shadow-xl border-t-[3px] border-iftm-primary p-6 z-50">
                      <div className="grid grid-cols-3 gap-6">
                        {item.children.map((section, sIndex) => (
                          <div key={sIndex}>
                            <h3 className="text-iftm-dark font-bold text-[14px] uppercase tracking-wide mb-3 pb-2 border-b-2 border-iftm-primary">
                              {section.title}
                            </h3>
                            <ul className="space-y-1">
                              {section.links.map((link, lIndex) => (
                                <li key={lIndex}>
                                  <Link
                                    href={link.href}
                                    className="block py-1 text-[13px] text-iftm-text hover:text-iftm-primary hover:pl-2 transition-all"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Search Icon */}
              <Link
                href="/search"
                className="ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/10 text-white hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </Link>

              {/* Apply Now Button */}
              <a
                href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2.5 bg-iftm-primary text-white text-[12px] font-semibold uppercase tracking-wider rounded-md hover:bg-iftm-primary-dark transition-colors"
              >
                Apply Now
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span
                    className={`block h-[3px] rounded-full transition-all bg-white ${
                      isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[3px] rounded-full transition-all bg-white ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[3px] rounded-full transition-all bg-white ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-iftm-navy border-t border-white/10">
            <div className="px-4 py-4">
              {/* Quick Access Row: Admissions, Placements, Explore Programmes */}
              <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-white/10">
                <Link
                  href="/admissions"
                  className="flex flex-col items-center justify-center py-3 px-2 bg-white/10 rounded-lg text-white text-[11px] font-semibold uppercase hover:bg-white/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                  Admissions
                </Link>
                <Link
                  href="/placements"
                  className="flex flex-col items-center justify-center py-3 px-2 bg-white/10 rounded-lg text-white text-[11px] font-semibold uppercase hover:bg-white/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  Placements
                </Link>
                <Link
                  href="/programmes"
                  className="flex flex-col items-center justify-center py-3 px-2 bg-white/10 rounded-lg text-white text-[11px] font-semibold uppercase hover:bg-white/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                  </svg>
                  Explore Programmes
                </Link>
              </div>

              {/* Accordion Menu for remaining items */}
              <div className="space-y-1">
                {navItems
                  .filter((item) => !["Admissions", "Placements", "Explore Programmes"].includes(item.label))
                  .map((item, filteredIndex) => {
                    const originalIndex = navItems.findIndex((n) => n.label === item.label);
                    return (
                      <div key={filteredIndex} className="border-b border-white/10">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="block py-3 text-white/90 text-[14px] font-semibold uppercase"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <>
                            <button
                              className="w-full flex items-center justify-between py-3 text-white/90 text-[14px] font-semibold uppercase"
                              onClick={() =>
                                setMobileAccordion(
                                  mobileAccordion === originalIndex ? null : originalIndex
                                )
                              }
                            >
                              {item.label}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${
                                  mobileAccordion === originalIndex ? "rotate-180" : ""
                                }`}
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                            {mobileAccordion === originalIndex && item.children && (
                              <div className="pb-3 pl-2 space-y-3">
                                {item.children.map((section, sIndex) => (
                                  <div key={sIndex}>
                                    <h4 className="text-iftm-gold text-[12px] font-bold uppercase tracking-wide mb-1">
                                      {section.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {section.links.map((link, lIndex) => (
                                        <li key={lIndex}>
                                          <Link
                                            href={link.href}
                                            className="block py-1.5 text-white/70 text-[13px] hover:text-white hover:pl-1 transition-all"
                                          >
                                            {link.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Apply Now Button */}
              <a
                href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-5 py-3 bg-iftm-primary text-white text-center text-[13px] font-semibold uppercase rounded-md hover:bg-iftm-primary-dark transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
