import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { cn } from "@/utils/cn";

export const MouseFollowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative rounded-3xl bg-surface-1 border border-white/5 overflow-hidden transition-colors flex flex-col",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245,158,11,.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10 p-8 h-full flex flex-col">{children}</div>
    </div>
  );
};
