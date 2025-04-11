import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Features from "@/app/components/Features";
import PricingSection from "@/app/components/PricingSection";
import SimpleStepsSection from "@/app/components/SimpleStepsSection";
import FlexibleTradingSection  from "@/app/components/FlexibleTradingSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <PricingSection />
      <FlexibleTradingSection />
      <SimpleStepsSection />
      

    </div>
  );
}
