import Link from "next/link";
import { getProgrammes } from "@/lib/wordpress";
import ProgramsSectionClient from "./ProgramsSectionClient";

export default async function ProgramsSection() {
  const programmes = await getProgrammes(50);

  // If no WordPress programmes, show a message
  if (programmes.length === 0) {
    return (
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]" />
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Programmes <span className="text-iftm-gold">Offered</span>
          </h2>
          <p className="text-white/60">Programme information will be available soon.</p>
          <Link
            href="/programmes"
            className="inline-block mt-6 px-6 py-3 bg-iftm-primary text-white font-semibold rounded-lg hover:bg-iftm-primary-dark transition-colors"
          >
            View All Programmes
          </Link>
        </div>
      </section>
    );
  }

  // Transform WordPress data for the client component
  const transformedProgrammes = programmes.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    school: p.programmeDetails?.school || "IFTM University",
    level: "UG" as "Diploma" | "UG" | "PG" | "Ph.D.",
    duration: p.programmeDetails?.duration || "",
    fee: p.programmeDetails?.fee || "",
    image: p.featuredImage?.node?.sourceUrl,
  }));

  return <ProgramsSectionClient programmes={transformedProgrammes} />;
}
