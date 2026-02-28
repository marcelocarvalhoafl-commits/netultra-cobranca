"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Faturas", href: "/faturas", icon: "receipt_long" },
    { name: "Regras", href: "/regras", icon: "settings_suggest" },
    { name: "Templates", href: "/templates", icon: "description" },
    { name: "Logs", href: "/logs", icon: "history" },
    { name: "Configurações", href: "/config", icon: "settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark flex flex-col">
        <div className="p-8 flex items-center gap-4">
          <div className="size-10 bg-white/5 rounded-xl flex items-center justify-center p-1.5 shadow-inner">
            <Image 
              src="https://netultra.com.br/wp-content/uploads/2022/08/LOGO-SEM-FUNDO-ILC-NINJA.png" 
              alt="NetUltra Logo" 
              width={32} 
              height={32}
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">NetUltra</h2>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Cobrança</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-primary text-white font-bold shadow-lg shadow-primary/25"
                    : "hover:bg-slate-200 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 font-semibold"
                }`}
              >
                <span className={`material-symbols-outlined transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-slate-400 group-hover:text-primary"}`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 bg-slate-200 dark:bg-slate-800/50 rounded-xl">
            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              AD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate">Admin NetUltra</p>
              <Link href="/login" className="text-[10px] text-slate-500 truncate hover:text-primary">Sair do sistema</Link>
            </div>
            <Link href="/login">
              <span className="material-symbols-outlined text-slate-400 text-[18px] hover:text-primary">logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TopNavBar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-none rounded-lg pl-10 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Buscar..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:border-slate-800"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Ricardo Souza</p>
                <p className="text-xs text-slate-500">Administrador</p>
              </div>
              <Image className="size-10 rounded-full object-cover ring-2 ring-primary/20" alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1NpNT_iclBMpbvvns1HEryfGz1mHOmLx9d349Whuzvwpkia_HpDzkdeCSiBfxN0XwsgqkTkqX95mihBRmzAtJ_8Cv22IvDth1Xlf4kI99vqMeZvT1MvWg_JrWMQmorkXfC3k0fbxOCiGTdtP-dXQrjQU-m77fuVn4DWH8abNhwCU9s9aBwZj1WsqnmxCc3isW7aGt_AI2--uM10tOKPMBN0GzaAP4jm0rBkzNqQhYykGpl2VqjH8bsqSQbFrwgKUkxdJRUhgATRrc" width={40} height={40} />
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
