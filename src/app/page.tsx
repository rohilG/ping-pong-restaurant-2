import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import StorySection from "@/components/layout/StorySection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ping-pong-cream">
      <Navbar />
      <HeroSection />
      <StorySection />
      <Footer />
    </main>
  );
}
