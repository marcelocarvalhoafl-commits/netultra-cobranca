"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    toast("Login realizado com sucesso!", "success");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden bg-[#050505]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[440px] z-10"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center justify-center size-20 rounded-3xl bg-white/5 border border-white/10 p-4 mb-6 shadow-2xl backdrop-blur-md"
          >
            <Image
              src="https://netultra.com.br/wp-content/uploads/2022/08/LOGO-SEM-FUNDO-ILC-NINJA.png"
              alt="NetUltra Logo"
              width={64}
              height={64}
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tighter text-white mb-2"
          >
            NetUltra <span className="text-primary">Cobrança</span>
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-medium"
          >
            Gestão inteligente para empresas de alta performance.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[32px] p-8 shadow-2xl shadow-black/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Usuário"
              placeholder="Digite seu usuário ou e-mail"
              icon={<User className="size-4" />}
              required
            />
            <div className="relative">
              <Input
                label="Senha"
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha de acesso"
                icon={<Lock className="size-4" />}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="size-4 rounded border-slate-700 bg-slate-800 text-primary focus:ring-primary focus:ring-offset-slate-900"
                />
                <span className="text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                  Lembrar acesso
                </span>
              </label>
              <button type="button" className="text-xs font-bold text-primary hover:text-blue-400 transition-colors">
                Esqueceu a senha?
              </button>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base"
              isLoading={isLoading}
            >
              Entrar no Sistema
              {!isLoading && <ArrowRight className="ml-2 size-5" />}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-slate-500">
            <ShieldCheck className="size-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Acesso Seguro SSL 256-bit</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-slate-600 text-xs font-bold"
        >
          © 2024 NetUltra Tecnologia. Todos os direitos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
}
