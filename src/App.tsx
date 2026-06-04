import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Story from "@/sections/Story";
import Portfolio from "@/sections/Portfolio";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Story />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
