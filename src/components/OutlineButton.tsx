import { cn } from "@/lib/utils";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function OutlineButton({ children, onClick, className }: OutlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium text-white border border-border-subtle bg-transparent transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
