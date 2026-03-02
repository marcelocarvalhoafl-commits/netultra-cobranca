"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  disabled?: boolean;
}

export function Tooltip({ content, children, side = "right", disabled = false }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  if (disabled) return <>{children}</>;

  const sideClasses = {
    top: "-top-2 left-1/2 -translate-x-1/2 -translate-y-full",
    bottom: "-bottom-2 left-1/2 -translate-x-1/2 translate-y-full",
    left: "-left-2 top-1/2 -translate-y-1/2 -translate-x-full",
    right: "left-[calc(100%+8px)] top-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={cn(
              "absolute z-[100] px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg shadow-xl pointer-events-none whitespace-nowrap",
              sideClasses[side]
            )}
          >
            <span className="text-[10px] font-black text-white uppercase tracking-widest">{content}</span>
            <div className={cn(
              "absolute size-2 bg-slate-900 border-white/10 rotate-45",
              side === "top" && "-bottom-1 left-1/2 -translate-x-1/2 border-b border-r",
              side === "bottom" && "-top-1 left-1/2 -translate-x-1/2 border-t border-l",
              side === "left" && "-right-1 top-1/2 -translate-y-1/2 border-t border-r",
              side === "right" && "-left-1 top-1/2 -translate-y-1/2 border-b border-l"
            )} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
