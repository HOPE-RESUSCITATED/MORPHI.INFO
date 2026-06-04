import { cn } from "@/lib/utils";

interface StoryCardProps {
  step: string;
  title: string;
  description: string;
  index: number;
}

export default function StoryCard({ step, title, description, index }: StoryCardProps) {
  const gradientColors = [
    "from-accent-cyan to-accent-purple",
    "from-accent-purple to-accent-pink",
    "from-accent-pink to-accent-cyan",
    "from-accent-cyan to-accent-purple",
  ];

  return (
    <div className="relative pl-6 pb-8 last:pb-0">
      <div className={cn("absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b", gradientColors[index % gradientColors.length])} />
      <div className={cn("absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[3px] bg-gradient-to-r", gradientColors[index % gradientColors.length])} />
      <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{step}</p>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}