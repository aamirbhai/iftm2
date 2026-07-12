"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is IFTM University recognized by UGC?",
    answer: "Yes, IFTM University is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956. The university is also approved by AICTE, PCI, and BCI.",
  },
  {
    question: "What is IFTM University's NAAC grade?",
    answer: "IFTM University has been accredited with 'A' Grade by the National Assessment and Accreditation Council (NAAC), recognizing its excellence in academic quality, infrastructure, and research output.",
  },
  {
    question: "How many programmes does IFTM University offer?",
    answer: "IFTM University offers 130+ programmes across 12 schools covering Diploma, Undergraduate (UG), Postgraduate (PG), and Doctoral (Ph.D.) levels in Engineering, Pharmacy, Management, Law, Sciences, Education, Agriculture, and more.",
  },
  {
    question: "What is the placement rate at IFTM University?",
    answer: "IFTM University has a 90%+ placement rate with 500+ recruiting partners including TCS, Infosys, Wipro, HCL, Amazon, and more. The highest package offered is ₹12 LPA.",
  },
  {
    question: "Where is IFTM University located?",
    answer: "IFTM University is located at Lodhipur Rajput, Delhi Road, Moradabad, Uttar Pradesh - 244102, India. The campus spans over 69+ acres with modern infrastructure and facilities.",
  },
  {
    question: "How can I apply for admission to IFTM University?",
    answer: "You can apply online through the IFTM admissions portal at admissions.iftm.ac.in. The university offers admissions for the 2026-27 academic session across all programmes. Scholarships are available for meritorious students.",
  },
  {
    question: "Does IFTM University provide hostel facilities?",
    answer: "Yes, IFTM University provides separate hostel facilities for boys and girls with modern amenities including Wi-Fi, mess, 24/7 security, and recreational facilities.",
  },
  {
    question: "What approvals does IFTM University have?",
    answer: "IFTM University holds multiple approvals: NAAC 'A' Grade, UGC Recognition (Section 2(f)), AICTE Approval, PCI (Pharmacy Council of India) Approval, and BCI (Bar Council of India) Approval.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-14 md:py-20 bg-iftm-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Frequently Asked <span className="text-iftm-primary">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-iftm-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <h3 className="text-iftm-dark font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`text-iftm-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-iftm-text text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
