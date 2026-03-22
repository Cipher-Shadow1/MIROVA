import HeroSection from "../components/HeroSection";
import EditorialFeature from "../components/EditorialFeature";
import SelectedWorks from "../components/SelectedWorks";
import TestimonialsSection from "../components/TestimonialsSection";
import CraftsmanshipSection from "../components/CraftsmanshipSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Editorial Feature (Asymmetric) */}
      <div id="about">
        <EditorialFeature />
      </div>

      {/* Collection Showcase */}
      <div id="collections">
        <SelectedWorks />
      </div>

      {/* New Dark Craftsmanship Section */}
      <div id="atelier">
        <CraftsmanshipSection />
      </div>

      {/* New Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>
    </main>
  );
}
