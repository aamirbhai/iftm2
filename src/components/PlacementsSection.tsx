"use client";

const stats = [
  { value: "500+", label: "Recruiting Partners", icon: "fa-building" },
  { value: "90%+", label: "Placement Rate", icon: "fa-chart-line" },
  { value: "₹12 LPA", label: "Highest Package", icon: "fa-trophy" },
  { value: "₹4.5 LPA", label: "Average Package", icon: "fa-coins" },
];

const topRecruiters = [
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Cognizant",
  "Capgemini", "Accenture", "IBM", "Amazon", "BYJU'S", "WNS",
  "Cipla", "Sun Pharma", "Lupin", "Dr. Reddy's", "HDFC Bank", "ICICI Bank",
];

export default function PlacementsSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Career Opportunities
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Placements & <span className="text-iftm-primary">Recruiters</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-iftm-navy to-[#1a1040] rounded-xl p-5 text-center"
            >
              <i className={`fas ${stat.icon} text-iftm-gold text-xl mb-2`} />
              <p className="text-white font-extrabold text-2xl">{stat.value}</p>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recruiter logos grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {topRecruiters.map((company, index) => (
            <div
              key={index}
              className="bg-iftm-light rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-md transition-all"
            >
              <span className="text-iftm-text font-bold text-sm text-center">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
