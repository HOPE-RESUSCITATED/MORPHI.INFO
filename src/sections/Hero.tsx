import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OutlineButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        badgeRef.current,
        { opacity: 0, y: 20, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      .from(
        headlineRef.current,
        { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      )
      .from(
        subheadRef.current,
        { opacity: 0, y: 20, duration: 0.4, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        buttonsRef.current,
        { opacity: 0, y: 20, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      .from(
        statsRef.current,
        { opacity: 0, y: 20, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      .from(
        scrollIndicatorRef.current,
        { opacity: 0, duration: 0.4 },
        "-=0.1"
      );
  }, { scope: sectionRef });

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <ParticleCanvas />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
            <div ref={logoRef} className="mb-8 flex justify-center"></div>          <img
            src="assets/hero-logo.png"
            alt="Morphi Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
          />
        </div>

        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-secondary/80 mb-6"
        >
          <span className="text-accent-cyan">&#10022;</span>
          <span className="text-xs text-text-secondary uppercase tracking-wider">
            Digital Experiences for Real Businesses
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Your vision,{" "}
          <span className="gradient-text">brought to life.</span>
        </h1>

        <p
          ref={subheadRef}
          className="text-base md:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
        >
          We build immersive websites, bold visuals, and story-driven digital
          worlds for organizations that make a difference — from nonprofits
          saving lives to medical practices serving their communities.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-12">
          <GradientButton
            onClick={() => scrollToSection("#contact")}
            icon
          >
            Start Your Project
          </GradientButton>
          <OutlineButton onClick={() => scrollToSection("#portfolio")}>
            See Our Work
          </OutlineButton>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">2</p>
            <p className="text-xs md:text-sm text-text-secondary mt-1">
              Live Projects
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold gradient-text">1,213+</p>
            <p className="text-xs md:text-sm text-text-secondary mt-1">
              Lives Impacted
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">100%</p>
            <p className="text-xs md:text-sm text-text-secondary mt-1">
              Custom Designs
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">LA</p>
            <p className="text-xs md:text-sm text-text-secondary mt-1">
              Rooted in Louisiana
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("#services")}
      >
        <span className="text-xs text-text-muted uppercase tracking-wider">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-text-muted animate-bounce-subtle" />
      </div>
    </section>
  );
}
