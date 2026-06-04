import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/SectionLabel";
import GradientText from "@/components/GradientText";
import StoryCard from "@/components/StoryCard";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    step: "The Problem",
    title: "Great causes deserve great digital presence",
    description:
      "Hope Resuscitated was saving lives but needed a website that matched their mission. Community First Primary Care needed patients to find them online. Both had vision — but no digital infrastructure to match it.",
  },
  {
    step: "The Vision",
    title: "Understanding what matters most",
    description:
      "For Hope Resuscitated, it was about removing barriers to Narcan access and building trust with teens and rural communities. For Community First, it was creating a warm, professional presence that reflects Kristin Manuel's compassionate care.",
  },
  {
    step: "The Build",
    title: "Every pixel with purpose",
    description:
      "We designed immersive, scroll-driven experiences with real functionality — Narcan distribution tracking, educational resources, appointment systems, and brand identities that resonate with the people they serve.",
  },
  {
    step: "The Impact",
    title: "Digital worlds that drive real results",
    description:
      "Hope Resuscitated has distributed over 1,213 Narcan doses and secured grant funding. Community First now has a digital presence that matches the quality of care they provide. Both are growing and reaching more people every day.",
  },
];

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(leftRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    const cards = rightRef.current?.children;
    if (cards) {
      gsap.from(cards, {
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative pt-24 md:pt-32 pb-12 md:pb-16 bg-bg-primary"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div ref={leftRef}>
            <SectionLabel text="Our Story" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Built for organizations{" "}
              <GradientText>that change lives.</GradientText>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We don't just build websites — we build digital foundations for
              organizations doing meaningful work. From overdose prevention
              nonprofits to primary care practices, we create experiences
              that match the impact of the work being done.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Every color, animation, interaction, and word is designed
              intentionally. Because when your mission matters, your digital
              presence should too.
            </p>
          </div>

          <div ref={rightRef} className="lg:pt-8">
            {storySteps.map((step, index) => (
              <StoryCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
