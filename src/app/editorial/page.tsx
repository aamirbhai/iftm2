import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy | IFTM University News",
  description: "Learn about the editorial team, policies, and standards behind IFTM University's news and content. We are committed to accurate, unbiased, and timely reporting.",
  alternates: { canonical: "https://iftmuniversity.ac.in/editorial" },
  openGraph: {
    title: "Editorial Policy | IFTM University",
    description: "Learn about the editorial team, policies, and standards behind IFTM University's news.",
    type: "website",
  },
};

export default function EditorialPage() {
  return (
    <>
      <Header solid />
      <main className="min-h-screen bg-white">
        <div className="pt-[90px] md:pt-[110px]">
          <div className="max-w-[900px] mx-auto px-4 md:px-6 py-12">
            {/* Page Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-iftm-dark mb-2">
              Editorial <span className="text-iftm-primary">Policy</span>
            </h1>
            <p className="text-iftm-text-light mb-10">
              Our commitment to accurate, transparent, and responsible journalism.
            </p>

            {/* About the News Team */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-iftm-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                About Our News Team
              </h2>
              <p className="text-iftm-text leading-relaxed mb-4">
                The IFTM University News section is managed by the University&apos;s official Communications &amp; Public Relations Department. Our editorial team consists of experienced professionals dedicated to providing accurate, timely, and relevant information about university activities, achievements, admissions, and events.
              </p>
              <p className="text-iftm-text leading-relaxed">
                All content published on this platform undergoes a thorough review process to ensure factual accuracy and adherence to our editorial standards.
              </p>
            </section>

            {/* Editorial Standards */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-iftm-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                Editorial Standards
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Accuracy",
                    description: "We verify all facts, figures, and claims before publication. Statistical data is sourced from official university records and government bodies.",
                  },
                  {
                    title: "Transparency",
                    description: "We clearly distinguish between news reports, opinion pieces, and promotional content. Sponsored content is always labeled accordingly.",
                  },
                  {
                    title: "Fairness",
                    description: "We present multiple perspectives on issues and provide right of reply to parties mentioned in critical coverage.",
                  },
                  {
                    title: "Independence",
                    description: "Our editorial decisions are made independently of commercial or political influence. Advertisers do not dictate editorial content.",
                  },
                  {
                    title: "Corrections",
                    description: "We promptly correct any factual errors and clearly mark updated articles with the date of modification.",
                  },
                ].map((standard, i) => (
                  <div key={i} className="bg-iftm-light rounded-xl p-5 border border-iftm-border">
                    <h3 className="text-iftm-dark font-semibold mb-2">{standard.title}</h3>
                    <p className="text-iftm-text text-sm leading-relaxed">{standard.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Content Review Process */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-iftm-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                Content Review Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Research & Draft", desc: "Content is researched and drafted by our editorial team using verified sources." },
                  { step: "2", title: "Fact Check", desc: "All facts, statistics, and claims are verified against official records." },
                  { step: "3", title: "Editorial Review", desc: "Senior editors review content for accuracy, tone, and adherence to policy." },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 bg-iftm-light rounded-xl border border-iftm-border">
                    <div className="w-10 h-10 bg-iftm-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-iftm-dark font-semibold text-sm mb-2">{item.title}</h3>
                    <p className="text-iftm-text-light text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sources */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-iftm-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                Our Sources
              </h2>
              <p className="text-iftm-text leading-relaxed mb-4">
                We rely on the following sources for our news coverage:
              </p>
              <ul className="space-y-2">
                {[
                  "Official university press releases and announcements",
                  "Direct statements from university administration",
                  "Government regulatory bodies (UGC, AICTE, NAAC, etc.)",
                  "Verified data from university departments",
                  "On-ground reporting from campus events",
                ].map((source, i) => (
                  <li key={i} className="flex items-start gap-2 text-iftm-text text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-iftm-primary flex-shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {source}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-iftm-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                Contact Editorial Team
              </h2>
              <div className="bg-iftm-light rounded-xl p-6 border border-iftm-border">
                <p className="text-iftm-text mb-4">
                  For editorial inquiries, corrections, or feedback, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary flex-shrink-0">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                    <a href="mailto:info@iftm.ac.in" className="text-iftm-primary hover:underline">info@iftm.ac.in</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span className="text-iftm-text">+91-9639004077</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <h3 className="text-iftm-dark font-semibold text-sm mb-2">Disclaimer</h3>
              <p className="text-iftm-text text-xs leading-relaxed">
                The news and information published on this website is for general informational purposes only. While we strive for accuracy, IFTM University makes no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information on this website is at your own risk.
              </p>
            </section>

            {/* Back to News */}
            <div className="text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-iftm-primary text-white font-semibold rounded-lg hover:bg-iftm-primary-dark transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
