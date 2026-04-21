import Header from "@/components/navigation/header";
import HeroSection from "@/components/sections/hero-section";
import MetricsSection from "@/components/sections/metrics-section";
import HomeStory from "@/components/sections/home-story";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        <HeroSection />
        <MetricsSection />
        <HomeStory />
        <div id="resources">
          <Footer />
        </div>
      </main>
    </>
  );
}
