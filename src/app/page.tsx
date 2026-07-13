export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProgramsSection from "@/components/ProgramsSection";
import FounderLeadershipSection from "@/components/FounderLeadershipSection";
import RecruitersAwardsTestimonials from "@/components/RecruitersAwardsTestimonials";
import NewsSection from "@/components/NewsSection";
import CampusGallerySection from "@/components/CampusGallerySection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <FounderLeadershipSection />
      <ProgramsSection />
      <RecruitersAwardsTestimonials />
      <NewsSection />
      <CampusGallerySection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
