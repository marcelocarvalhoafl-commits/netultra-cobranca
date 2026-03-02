"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-2 group">
        {label && (
          <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full bg-slate-900/50 border border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all",
              icon ? "pl-12 pr-4" : "px-4",
              error ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500" : "",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs font-bold text-rose-500 ml-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
