import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  type?: "button" | "submit";
}

export default function GradientButton({ children, onClick, className, icon = false, type = "button" }: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "gradient-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-bg-primary cursor-pointer",
        className
      )}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
