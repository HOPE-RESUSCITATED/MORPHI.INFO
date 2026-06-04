import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PenTool } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GradientText from "@/components/GradientText";
import ServiceCard from "@/components/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "assets/globe.png",
    title: "Immersive Websites",
    description:
      "Not just pages — digital worlds. Custom-built, scroll-driven sites that make visitors stop, feel something, and take action. Built with React, Three.js, and purposeful motion design.",
  },
  {
    image: "assets/infinity.png",
    title: "Bold Visual Branding",
    description:
      "Logos, color systems, and visual identities that make your organization instantly recognizable. Every element designed to reflect your mission and connect with your audience.",
  },
  {
    icon: PenTool,
    title: "Story-Driven Copywriting",
    description:
      "Words that work. We craft messaging that helps your audience understand who you are, why you matter, and what makes you different — all in your authentic voice.",
  },
  {
    image: "assets/ai-cube.png",
    title: "Smart Automations",
    description:
      "Stop losing time to repetitive tasks. We build flows that handle follow-ups, bookings, appointment reminders, and client communications — automatically.",
  },
  {
    image: "assets/web-screens.png",
    title: "Digital Operations",
    description:
      "Replace sticky notes and spreadsheets with systems that keep your organization moving. From inventory tracking to distribution management — without the manual effort.",
  },
  {
    image: "assets/chart-bars.png",
    title: "Growth & Grant Tools",
    description:
      "Donation systems, grant reporting dashboards, analytics tracking, and tools that help you prove your impact to funders and grow your reach.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    const cards = gridRef.current?.children;
    if (cards) {
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 bg-bg-primary"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <SectionLabel text="What We Do" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Every piece,{" "}
            <GradientText>designed to work together.</GradientText>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            We don't offer templates or one-size-fits-all packages. Every
            organization gets a strategy built around their goals, their
            audience, and their mission.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
