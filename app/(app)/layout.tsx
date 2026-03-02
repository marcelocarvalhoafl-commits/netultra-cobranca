"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Users,
  Receipt,
  MessageSquare,
  FileText,
  Settings,
  History,
  LogOut,
  Bell,
  Search,
  HelpCircle,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  UserCircle,
  Command
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";
import { CommandPalette } from "@/components/CommandPalette";

const navItems = [
  { group: "Principal", items: [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Clientes", href: "/clientes", icon: Users },
    { name: "Faturas", href: "/faturas", icon: Receipt },
  ]},
  { group: "Comunicação", items: [
    { name: "Mensagens", href: "/mensagens", icon: MessageSquare },
    { name: "Templates", href: "/templates", icon: FileText },
    { name: "Regras", href: "/regras", icon: Zap },
  ]},
  { group: "Sistema", items: [
    { name: "Logs", href: "/logs", icon: History },
    { name: "Configurações", href: "/config", icon: Settings },
  ]}
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden font-sans">
      {/* Sidebar Desktop */}
      <motion.aside
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="hidden lg:flex flex-col border-r border-white/5 bg-slate-900/20 backdrop-blur-3xl relative z-50"
      >
        <div className="p-6 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
            <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
              <Image
                src="https://netultra.com.br/wp-content/uploads/2022/08/LOGO-SEM-FUNDO-ILC-NINJA.png"
                alt="NetUltra Logo"
                width={32}
                height={32}
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <AnimatePresence mode="wait">
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col"
                >
                  <span className="text-lg font-black tracking-tighter text-white leading-none">NetUltra</span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">Cobrança</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500 transition-colors"
          >
            {isSidebarOpen ? <ChevronRight className="size-4 rotate-180" /> : <ChevronRight className="size-4" />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto custom-scrollbar">
          {navItems.map((section) => (
            <div key={section.group} className="space-y-2">
              {isSidebarOpen && (
                <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">{section.group}</p>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <Tooltip content={item.name} side="right" disabled={isSidebarOpen} key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                          isActive
                            ? "bg-primary text-white font-bold shadow-lg shadow-primary/20"
                            : "hover:bg-white/5 text-slate-500 hover:text-slate-200"
                        )}
                      >
                        <item.icon className={cn("size-5 flex-shrink-0", isActive ? "text-white" : "group-hover:text-primary")} />
                        {isSidebarOpen && <span className="text-sm">{item.name}</span>}
                        {!isSidebarOpen && isActive && (
                          <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />
                        )}
                      </Link>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className={cn(
            "flex items-center gap-3 p-3 bg-white/5 rounded-2xl",
            !isSidebarOpen && "justify-center"
          )}>
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
              RS
            </div>
            {isSidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold truncate text-white">Ricardo Souza</p>
                <p className="text-[10px] text-slate-500 truncate font-bold uppercase tracking-wider">Administrador</p>
              </div>
            )}
            {isSidebarOpen && (
              <Tooltip content="Sair do Sistema" side="top">
                <button onClick={handleLogout} className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-rose-500 transition-colors">
                  <LogOut className="size-4" />
                </button>
              </Tooltip>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-white/5 bg-slate-900/10 backdrop-blur-xl flex items-center justify-between px-8 relative z-40">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg text-slate-400"
            >
              <Menu className="size-6" />
            </button>
            <div className="relative w-full max-w-md hidden md:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-500 group-focus-within:text-primary transition-colors" />
              <input
                onFocus={() => setIsCommandPaletteOpen(true)}
                className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-12 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all cursor-pointer"
                placeholder="Buscar faturas, clientes ou logs..."
                type="text"
                readOnly
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-1 bg-white/5 border border-white/10 rounded-lg pointer-events-none">
                <Command className="size-3 text-slate-500" />
                <span className="text-[10px] font-black text-slate-500">K</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all relative">
                <Bell className="size-5" />
                <span className="absolute top-2.5 right-2.5 size-2 bg-rose-500 rounded-full border-2 border-[#050505]"></span>
              </button>
              <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                <HelpCircle className="size-5" />
              </button>
            </div>
            <div className="h-8 w-px bg-white/5"></div>
            <Link href="/perfil" className="flex items-center gap-3 group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Ricardo Souza</p>
                <div className="flex items-center justify-end gap-1.5 opacity-60">
                  <ShieldCheck className="size-3 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Admin</span>
                </div>
              </div>
              <div className="size-10 rounded-2xl bg-slate-800 border border-white/10 overflow-hidden group-hover:border-primary/50 transition-all">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1NpNT_iclBMpbvvns1HEryfGz1mHOmLx9d349Whuzvwpkia_HpDzkdeCSiBfxN0XwsgqkTkqX95mihBRmzAtJ_8Cv22IvDth1Xlf4kI99vqMeZvT1MvWg_JrWMQmorkXfC3k0fbxOCiGTdtP-dXQrjQU-m77fuVn4DWH8abNhwCU9s9aBwZj1WsqnmxCc3isW7aGt_AI2--uM10tOKPMBN0GzaAP4jm0rBkzNqQhYykGpl2VqjH8bsqSQbFrwgKUkxdJRUhgATRrc"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Mobile Menu Overlay */}
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed inset-y-0 left-0 w-[280px] bg-slate-900 z-[101] lg:hidden flex flex-col"
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://netultra.com.br/wp-content/uploads/2022/08/LOGO-SEM-FUNDO-ILC-NINJA.png"
                    alt="NetUltra Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-lg font-black text-white">NetUltra</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400">
                  <X className="size-6" />
                </button>
              </div>
              <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
                {navItems.map((section) => (
                  <div key={section.group} className="space-y-2">
                    <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest">{section.group}</p>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                              isActive ? "bg-primary text-white font-bold" : "text-slate-500"
                            )}
                          >
                            <item.icon className="size-5" />
                            <span className="text-sm">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
