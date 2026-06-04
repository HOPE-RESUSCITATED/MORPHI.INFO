import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  image?: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, image, title, description }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-[#0e1425] border border-border-subtle rounded-2xl p-8 transition-all duration-300 hover:border-accent-cyan/30 cursor-pointer"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {image ? (
        <div className="w-full h-40 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ transform: "translateZ(30px)" }}>
          <img
            src={image}
            alt={title}
            className="h-full w-auto object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          />
        </div>
      ) : Icon ? (
        <div className="w-full h-40 mb-5 flex items-center justify-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center group-hover:from-accent-cyan/30 group-hover:to-accent-purple/30 transition-all">
            <Icon className="w-8 h-8 text-accent-cyan" />
          </div>
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-white mb-3" style={{ transform: "translateZ(20px)" }}>
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed" style={{ transform: "translateZ(15px)" }}>
        {description}
      </p>
    </div>
  );
}
