import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { ServicesOverview } from "@/components/ui/services-overview";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
