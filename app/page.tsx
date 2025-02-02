import Classes from "@/components/classes";
import Gallery from "@/components/gallery";
import { HeroSection } from "@/components/hero-section";
import PricingPlans from "@/components/pricing-plans";
import Team from "@/components/teams";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <Classes />
      <PricingPlans />
      <Gallery />
      <Team />
    </main>
  );
}
