"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, LayoutDashboard, Users, Receipt, MessageSquare, FileText, Zap, History, Settings, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, category: "Navegação" },
  { name: "Clientes", href: "/clientes", icon: Users, category: "Navegação" },
  { name: "Faturas", href: "/faturas", icon: Receipt, category: "Navegação" },
  { name: "Mensagens", href: "/mensagens", icon: MessageSquare, category: "Comunicação" },
  { name: "Templates", href: "/templates", icon: FileText, category: "Comunicação" },
  { name: "Regras", href: "/regras", icon: Zap, category: "Comunicação" },
  { name: "Logs", href: "/logs", icon: History, category: "Sistema" },
  { name: "Configurações", href: "/config", icon: Settings, category: "Sistema" },
];

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // This logic is handled by the parent, but we can trigger it here if we had a toggle
      }

      if (!isOpen) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filteredCommands[selectedIndex];
        if (cmd) {
          router.push(cmd.href);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredCommands, selectedIndex, router]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[24px] shadow-2xl overflow-hidden relative z-10"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <Search className="size-5 text-slate-500" />
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="O que você está procurando? (Navegação, ações, clientes...)"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-600 text-lg"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/5">
                <span className="text-[10px] font-black text-slate-500">ESC</span>
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto p-2 custom-scrollbar">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-slate-500 font-bold">Nenhum resultado encontrado para &quot;{search}&quot;</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredCommands.map((cmd, i) => (
                    <button
                      key={cmd.href}
                      onClick={() => {
                        router.push(cmd.href);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-xl transition-all group",
                        selectedIndex === i ? "bg-primary text-white" : "hover:bg-white/5 text-slate-400"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "size-10 rounded-lg flex items-center justify-center transition-colors",
                          selectedIndex === i ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"
                        )}>
                          <cmd.icon className="size-5" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold">{cmd.name}</p>
                          <p className={cn(
                            "text-[10px] font-black uppercase tracking-widest",
                            selectedIndex === i ? "text-white/60" : "text-slate-600"
                          )}>
                            {cmd.category}
                          </p>
                        </div>
                      </div>
                      {selectedIndex === i && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Ir para</span>
                          <ArrowRight className="size-4" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5 bg-black/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-[10px] text-slate-500 font-black">↑↓</div>
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Navegar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-[10px] text-slate-500 font-black">ENTER</div>
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Selecionar</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-3 text-primary" />
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">NetUltra Quick Actions</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
