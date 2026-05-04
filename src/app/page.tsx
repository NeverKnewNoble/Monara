import Hero from "@/components/uiComponents/home/hero";
import Stats from "@/components/uiComponents/home/stats";
import Features from "@/components/uiComponents/home/features";
import Waitlist from "@/components/uiComponents/home/waitlist";
import Footer from "@/components/uiComponents/home/footer";

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
