import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GradientText from "@/components/GradientText";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "assets/hope-resuscitated.jpg",
    title: "Hope Resuscitated",
    category: "Nonprofit Organization",
    description:
      "A mission-driven overdose prevention nonprofit. Full website with Narcan distribution tracking, educational resources, event management, and grant integration — built to save lives across Louisiana.",
    tags: ["Web Design", "Donation System", "Narcan Distribution", "Grant Integration"],
    link: "https://hope-resuscitated.org",
    stats: "1,213+ Narcan doses distributed",
  },
  {
    image: "assets/community-health.jpg",
    title: "Community First Primary Care",
    category: "Medical Practice",
    description:
      "A complete digital presence for Kristin K. Manuel, NP — featuring appointment booking, service showcases, patient education, and a trustworthy brand identity for a rural Louisiana primary care practice.",
    tags: ["Web Design", "Branding", "Booking System", "Patient Portal"],
    link: "https://communityhealth.base44.app",
    stats: "Full-scope NP authority practice",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative pt-12 md:pt-16 pb-24 md:pb-32 bg-bg-primary"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <SectionLabel text="Our Work" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Real projects,{" "}
                <GradientText>real impact.</GradientText>
              </h2>
            </div>
            <p className="text-text-secondary max-w-md lg:text-right">
              We build digital experiences for businesses and organizations
              that make a difference. Here's what we've created together.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden cursor-pointer block border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {project.category}
                  </p>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-cyan transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-border-subtle text-text-secondary bg-bg-primary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border-subtle/50">
                  <p className="text-xs text-accent-cyan font-medium">
                    {project.stats}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
