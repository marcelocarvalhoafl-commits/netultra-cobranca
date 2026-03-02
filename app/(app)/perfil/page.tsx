"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  User,
  Mail,
  Shield,
  Key,
  LogOut,
  Camera,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Smartphone,
  Globe,
  Save,
  Copy
} from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { sleep } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await sleep(1500);
    setIsLoading(false);
    toast("Perfil atualizado com sucesso!", "success");
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText("nt_live_51Mv8X2L9zQ7W4K1J0P3N6B9V8C7X6Z5M4L3K2J1H0G9F8D7S6A5");
    toast("Chave de API copiada!", "success");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Meu <span className="text-primary">Perfil</span></h1>
          <p className="text-slate-500 font-medium mt-1">Gerencie suas informações pessoais, segurança e chaves de acesso.</p>
        </div>
        <Button size="lg" className="h-14 px-8 shadow-primary/40" onClick={handleSave} isLoading={isLoading}>
          <Save className="mr-2 size-5" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Photo & Basic Info */}
        <div className="space-y-8">
          <Card className="p-10 text-center space-y-6 relative overflow-hidden">
            <div className="relative inline-block group">
              <div className="size-32 rounded-[40px] bg-slate-800 border-4 border-white/5 overflow-hidden group-hover:border-primary/50 transition-all">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1NpNT_iclBMpbvvns1HEryfGz1mHOmLx9d349Whuzvwpkia_HpDzkdeCSiBfxN0XwsgqkTkqX95mihBRmzAtJ_8Cv22IvDth1Xlf4kI99vqMeZvT1MvWg_JrWMQmorkXfC3k0fbxOCiGTdtP-dXQrjQU-m77fuVn4DWH8abNhwCU9s9aBwZj1WsqnmxCc3isW7aGt_AI2--uM10tOKPMBN0GzaAP4jm0rBkzNqQhYykGpl2VqjH8bsqSQbFrwgKUkxdJRUhgATRrc"
                  alt="User Avatar"
                  width={128}
                  height={128}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="absolute bottom-2 right-2 size-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/40 hover:scale-110 transition-transform">
                <Camera className="size-5" />
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Ricardo Souza</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">Administrador Geral</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="primary" className="bg-primary/5 border-primary/20">Admin</Badge>
              <Badge variant="success" className="bg-emerald-500/5 border-emerald-500/20">Verificado</Badge>
            </div>
            <div className="pt-6 border-t border-white/5">
              <Button variant="ghost" className="w-full h-12 text-rose-500 hover:bg-rose-500/10" onClick={() => router.push("/login")}>
                <LogOut className="mr-2 size-4" /> Sair do Sistema
              </Button>
            </div>
            <div className="absolute -left-10 -bottom-10 size-32 bg-primary/5 rounded-full blur-3xl" />
          </Card>

          <Card className="p-8 space-y-6">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Segurança da Conta</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3">
                  <Smartphone className="size-5 text-slate-400" />
                  <span className="text-sm font-bold text-white">2FA Ativado</span>
                </div>
                <CheckCircle2 className="size-5 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-slate-400" />
                  <span className="text-sm font-bold text-white">Sessão Segura</span>
                </div>
                <Badge variant="success">Ativo</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Forms */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-10 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-6">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <User className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Informações Pessoais</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Dados básicos da sua conta.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="Nome Completo" defaultValue="Ricardo Souza" />
              <Input label="E-mail" defaultValue="ricardo.souza@netultra.com.br" icon={<Mail className="size-4" />} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="Telefone" defaultValue="(11) 98765-4321" icon={<Smartphone className="size-4" />} />
              <Input label="Cargo" defaultValue="Diretor de Operações" />
            </div>
          </Card>

          <Card className="p-10 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-6">
              <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Key className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Desenvolvedor & API</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Chaves de acesso para integrações externas.</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Chave de API (Live)</label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-400 overflow-hidden truncate">
                  nt_live_51Mv8X2L9zQ7W4K1J0P3N6B9V8C7X6Z5M4L3K2J1H0G9F8D7S6A5
                </div>
                <Button variant="outline" size="icon" className="size-12 rounded-xl" onClick={copyApiKey}>
                  <Copy className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Nunca compartilhe sua chave de API. Ela dá acesso total aos dados de cobrança da sua conta.
              </p>
            </div>
          </Card>

          <Card className="p-10 space-y-8 border-rose-500/20 bg-rose-500/5">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <AlertCircle className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Zona de Perigo</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Ações irreversíveis na sua conta.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-white">Desativar Conta</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Sua conta será suspensa e todas as automações serão pausadas.</p>
              </div>
              <Button variant="danger" className="w-full sm:w-auto">Desativar Agora</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
