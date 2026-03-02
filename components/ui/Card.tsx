"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  variant?: "glass" | "outline" | "flat";
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", hoverEffect = false, children, ...props }, ref) => {
    const variants = {
      glass: "bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 shadow-2xl shadow-black/20",
      outline: "bg-transparent border border-slate-800",
      flat: "bg-slate-900 border-none",
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={hoverEffect ? { y: -4, borderColor: "rgba(19, 91, 236, 0.3)" } : undefined}
        className={cn("rounded-2xl p-6 transition-all duration-300", variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
