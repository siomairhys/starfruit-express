import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { PurchasingSection } from "@/components/sections/PurchasingSection";
import { FulfillmentSection } from "@/components/sections/FulfillmentSection";
import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { DesignNotes } from "@/components/sections/DesignNotes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starfruit Express — Restaurant Operations, Finally Under Control" },
      { name: "description", content: "A redesign concept for Starfruit Express: purchasing intelligence + cold-chain fulfillment for Florida restaurant operators." },
      { property: "og:title", content: "Starfruit Express — Redesign Concept" },
      { property: "og:description", content: "Better purchasing. Reliable delivery. Stronger restaurant margins." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <PurchasingSection />
        <FulfillmentSection />
        <AssessmentSection />
        <DesignNotes />
      </main>
      <Footer />
    </div>
  );
}
