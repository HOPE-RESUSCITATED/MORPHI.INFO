import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GradientText from "@/components/GradientText";

gsap.registerPlugin(ScrollTrigger);

const businessTypes = [
  "Coffee Shop",
  "Medical / Dental Office",
  "Restaurant",
  "Wellness / Spa",
  "Retail",
  "Professional Services",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    vision: "",
  });

  useGSAP(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-bg-primary"
    >
      <div className="max-w-[600px] mx-auto px-6">
        <div ref={contentRef} className="text-center mb-12">
          <SectionLabel text="Get Started" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's build something{" "}
            <GradientText>worth talking about.</GradientText>
          </h2>
          <p className="text-text-secondary">
            Tell us about your business and what you're hoping to create. We'll
            reach out within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-bg-card border border-accent-cyan/20 rounded-2xl p-10 text-center shadow-glow-sm animate-float">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mx-auto mb-6 shadow-glow relative">
              <div className="absolute inset-0 rounded-full bg-accent-cyan/10 animate-ping duration-1000" />
              <Check className="w-8 h-8 text-bg-primary stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Inquiry Received!
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. We've received your vision for{" "}
              {formData.businessName ? (
                <span className="text-white font-medium">{formData.businessName}</span>
              ) : (
                "your project"
              )}{" "}
              and will get back to you shortly.
            </p>
            <div className="p-4 bg-bg-primary/50 border border-border-subtle rounded-lg inline-block text-left mb-6">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">We will contact you at:</p>
              <p className="text-sm font-semibold text-accent-cyan">{formData.email}</p>
            </div>
            <p className="text-xs text-text-muted block">
              Response time is typically under 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                  Your Name <span className="text-accent-cyan">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full bg-bg-input border border-border-subtle rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:shadow-glow-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                  Email Address <span className="text-accent-cyan">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@yourbiz.com"
                  className="w-full bg-bg-input border border-border-subtle rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:shadow-glow-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Business"
                  className="w-full bg-bg-input border border-border-subtle rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:shadow-glow-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                  Business Type <span className="text-accent-cyan">*</span>
                </label>
                <select
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-bg-input border border-border-subtle rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan focus:shadow-glow-sm transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-text-muted">
                    Select type…
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type} className="bg-bg-card">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                Tell us about your vision <span className="text-accent-cyan">*</span>
              </label>
              <textarea
                name="vision"
                required
                value={formData.vision}
                onChange={handleChange}
                placeholder="What do you want to build? What problem are you trying to solve? What does success look like for you?"
                rows={5}
                className="w-full bg-bg-input border border-border-subtle rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:shadow-glow-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full gradient-btn py-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
            >
              <Send className="w-4 h-4" />
              Send My Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
