"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <div className="tech-pattern fixed inset-0 z-0" />
      <header className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6 border-b border-slate-200/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-lg bg-white/5 p-1">
            <Image 
              src="https://netultra.com.br/wp-content/uploads/2022/08/LOGO-SEM-FUNDO-ILC-NINJA.png" 
              alt="NetUltra Logo" 
              width={32} 
              height={32}
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-100">
            NetUltra <span className="text-primary">Cobrança</span>
          </h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-semibold text-slate-200">
          <span className="material-symbols-outlined text-sm">support_agent</span>
          Suporte
        </button>
      </header>
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center h-24 w-full mb-4">
              <Image 
                src="https://netultra.com.br/wp-content/uploads/2022/08/LOGO-SEM-FUNDO-ILC-NINJA.png" 
                alt="NetUltra Logo Large" 
                width={200} 
                height={80}
                className="object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Acesse sua conta</h1>
            <p className="text-slate-400">Gestão de cobrança inteligente e segura para sua empresa</p>
          </div>
          <div className="glass-card p-8 rounded-2xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300 ml-1">Usuário</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">person</span>
                  <input className="w-full bg-slate-900/50 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 outline-none transition-all" placeholder="Seu usuário ou e-mail" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300 ml-1">Senha</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">lock</span>
                  <input className="w-full bg-slate-900/50 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-slate-600 outline-none transition-all" placeholder="Sua senha de acesso" type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input className="peer h-5 w-5 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary focus:ring-offset-slate-900" type="checkbox" />
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Lembrar de mim</span>
                </label>
                <Link href="#" className="text-sm font-semibold text-primary hover:text-blue-400 transition-colors">Esqueceu a senha?</Link>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group">
                Acessar Sistema
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>
          <footer className="text-center">
            <p className="text-slate-500 text-sm">
              © 2024 NetUltra Cobrança. Todos os direitos reservados.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
