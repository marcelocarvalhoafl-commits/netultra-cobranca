"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Settings,
  Bell,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Database,
  Lock,
  Save,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
  Mail,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { sleep, cn } from "@/lib/utils";

export default function ConfigPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await sleep(1500);
    setIsLoading(false);
    toast("Configurações do sistema atualizadas!", "success");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Configurações do <span className="text-primary">Sistema</span></h1>
          <p className="text-slate-500 font-medium mt-1">Gerencie as preferências globais, integrações e limites da NetUltra.</p>
        </div>
        <Button size="lg" className="h-14 px-8 shadow-primary/40" onClick={handleSave} isLoading={isLoading}>
          <Save className="mr-2 size-5" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation */}
        <div className="space-y-4">
          {[
            { id: "geral", label: "Geral", icon: Globe, active: true },
            { id: "notificacoes", label: "Notificações", icon: Bell, active: false },
            { id: "seguranca", label: "Segurança", icon: Shield, active: false },
            { id: "integracoes", label: "Integrações", icon: Zap, active: false },
            { id: "limites", label: "Limites e Cotas", icon: Database, active: false },
          ].map((item) => (
            <button
              key={item.id}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
                item.active 
                  ? "bg-primary/10 border border-primary/20 text-primary" 
                  : "bg-white/5 border border-transparent text-slate-500 hover:bg-white/10 hover:text-slate-300"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="size-5" />
                <span className="text-sm font-bold">{item.label}</span>
              </div>
              <ChevronRight className={cn("size-4 opacity-0 group-hover:opacity-100 transition-all", item.active && "opacity-100")} />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-6">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Preferências Gerais</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Configurações básicas de funcionamento.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Fuso Horário</label>
                <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                  <option>(GMT-03:00) Brasília</option>
                  <option>(GMT-04:00) Manaus</option>
                  <option>(GMT-05:00) Nova York</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Moeda Padrão</label>
                <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                  <option>Real Brasileiro (BRL)</option>
                  <option>Dólar Americano (USD)</option>
                  <option>Euro (EUR)</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Horário de Funcionamento da IA</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Início dos Envios" type="time" defaultValue="08:00" />
                <Input label="Término dos Envios" type="time" defaultValue="18:00" />
              </div>
              <p className="text-xs text-slate-500 font-medium">A IA não enviará mensagens fora deste intervalo para evitar incômodos aos clientes.</p>
            </div>
          </Card>

          <Card className="p-8 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-6">
              <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Zap className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Integrações Ativas</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Conexões com serviços externos.</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: "IXC Soft", status: "Conectado", icon: Database, color: "text-emerald-500" },
                { name: "WhatsApp Business API", status: "Conectado", icon: MessageSquare, color: "text-emerald-500" },
                { name: "SendGrid (E-mail)", status: "Conectado", icon: Mail, color: "text-emerald-500" },
                { name: "Twilio (SMS)", status: "Erro de Conexão", icon: Smartphone, color: "text-rose-500" },
              ].map((int, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                      <int.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{int.name}</p>
                      <p className={cn("text-[10px] font-black uppercase tracking-widest", int.color)}>{int.status}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-9 px-4 text-xs font-bold">
                    Configurar <ExternalLink className="ml-2 size-3" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
