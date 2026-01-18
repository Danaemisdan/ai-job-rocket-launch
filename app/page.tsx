import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { NotebookSteps } from "@/components/notebook-steps";
import { NightModeSection } from "@/components/night-mode-section";
import { Features } from "@/components/features";
import { ComparisonSection } from "@/components/comparison-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <NightModeSection />
        <NotebookSteps />
        <Features />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />

      </div>
      <Footer />
    </main>
  );
}
