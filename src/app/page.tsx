import Hero from "@/components/ui_components/home/hero";
import Stats from "@/components/ui_components/home/stats";
import Features from "@/components/ui_components/home/features";
import Waitlist from "@/components/ui_components/home/waitlist";
import Footer from "@/components/ui_components/home/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}
