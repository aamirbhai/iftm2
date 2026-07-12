"use client";

import Link from "next/link";

const events = [
  {
    date: "15",
    month: "Aug",
    title: "Independence Day Celebration",
    description: "Flag hoisting ceremony and cultural programme celebrating India's Independence Day at IFTM campus.",
    href: "/events",
  },
  {
    date: "05",
    month: "Sep",
    title: "Teachers' Day Celebration",
    description: "Honouring our dedicated faculty members on Teachers' Day with awards and cultural events.",
    href: "/events",
  },
  {
    date: "02",
    month: "Oct",
    title: "Gandhi Jayanti & Swachh Bharat",
    description: "Celebrating Gandhi Jayanti with cleanliness drive and social awareness programmes on campus.",
    href: "/events",
  },
];

export default function EventsSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Events
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Upcoming <span className="text-iftm-primary">Events</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {events.map((event, index) => (
            <Link
              key={index}
              href={event.href}
              className="flex gap-4 p-5 rounded-xl border border-iftm-border hover:border-iftm-primary hover:shadow-lg transition-all group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-iftm-primary rounded-lg flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold leading-none">
                  {event.date}
                </span>
                <span className="text-xs uppercase">{event.month}</span>
              </div>
              <div>
                <h3 className="text-iftm-dark font-bold text-[15px] mb-1 group-hover:text-iftm-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-iftm-text-light text-sm">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
