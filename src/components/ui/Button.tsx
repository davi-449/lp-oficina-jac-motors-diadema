import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', glow = false, children, ...props }, ref) => {
    const baseStyle = "relative inline-flex items-center justify-center font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-full overflow-hidden transition-colors w-full sm:w-auto cursor-pointer";
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "text-zinc-300 hover:text-white hover:bg-white/5"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyle, variants[variant], className)}
        {...props}
      >
        {glow && (
          <span className="absolute inset-0 rounded-full blur-xl bg-primary/40 -z-10 group-hover:bg-primary/60 transition-colors" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children as React.ReactNode}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";
