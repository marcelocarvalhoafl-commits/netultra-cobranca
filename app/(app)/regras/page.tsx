"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  Plus,
  MoreVertical,
  Clock,
  Calendar,
  MessageSquare,
  Mail,
  Smartphone,
  CheckCircle2,
  X,
  Save,
  ArrowLeft,
  ChevronRight,
  Settings,
  ToggleLeft,
  ToggleRight,
  Trash2,
  Edit2,
  Play
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Skeleton } from "@/components/ui/Skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { useToast } from "@/components/ui/Toast";
import { mockRules, Rule } from "@/lib/mock";
import { sleep, cn } from "@/lib/utils";

export default function RulesPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedRule, setSelectedRule] = React.useState<Rule | null>(null);
  const [rules, setRules] = React.useState(mockRules);

  React.useEffect(() => {
    const loadData = async () => {
      await sleep(1000);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleToggle = (id: string) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, active: !r.active } : r));
    const rule = rules.find(r => r.id === id);
    toast(`Regra ${rule?.name} ${rule?.active ? "desativada" : "ativada"}!`, "info");
  };

  const handleEdit = (rule: Rule) => {
    setSelectedRule(rule);
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    await sleep(1500);
    setIsLoading(false);
    setIsEditing(false);
    toast("Regra de automação salva com sucesso!", "success");
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "whatsapp": return <MessageSquare className="size-4 text-emerald-500" />;
      case "email": return <Mail className="size-4 text-primary" />;
      case "sms": return <Smartphone className="size-4 text-amber-500" />;
      default: return <Zap className="size-4" />;
    }
  };

  if (isEditing && selectedRule) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="size-10 rounded-xl" onClick={() => setIsEditing(false)}>
              <ArrowLeft className="size-4" />
            </Button>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <span className="hover:text-primary cursor-pointer" onClick={() => setIsEditing(false)}>Regras</span>
              <ChevronRight className="size-4" />
              <span className="text-white">Editar Regra</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="h-11" onClick={() => setIsEditing(false)}>Cancelar</Button>
            <Button className="h-11 shadow-primary/40" onClick={handleSave} isLoading={isLoading}>
              <Save className="mr-2 size-4" /> Salvar Regra
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Settings className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight">Configuração da Automação</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Defina quando e como a mensagem será enviada.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Nome da Regra" defaultValue={selectedRule.name} />
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Canal de Envio</label>
                  <div className="flex items-center gap-2 p-3 bg-slate-900/50 border border-slate-800 rounded-xl">
                    {getTypeIcon(selectedRule.type)}
                    <span className="text-sm font-bold text-white capitalize">{selectedRule.type}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Gatilho (Trigger)</label>
                  <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option>Antes do vencimento</option>
                    <option>No dia do vencimento</option>
                    <option>Após o vencimento</option>
                    <option>Ao confirmar pagamento</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Dias de Atraso/Antecedência</label>
                  <Input type="number" defaultValue={Math.abs(selectedRule.delay)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Horário de Envio</label>
                  <Input type="time" defaultValue={selectedRule.sendTime} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Template Associado</label>
                  <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option>Lembrete de Vencimento (D-3)</option>
                    <option>Aviso de Fatura Vencida (D+1)</option>
                    <option>Confirmação de Pagamento</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 space-y-6">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Resumo da Regra</h4>
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Play className="size-5" />
                  </div>
                  <p className="text-sm font-bold text-white">Fluxo Ativo</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Esta regra enviará uma mensagem via <span className="text-white font-bold">{selectedRule.type}</span> para todos os clientes com faturas <span className="text-white font-bold">{selectedRule.trigger}</span>, todos os dias às <span className="text-white font-bold">{selectedRule.sendTime}</span>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Status da Automação</span>
                  <button onClick={() => handleToggle(selectedRule.id)}>
                    {selectedRule.active ? <ToggleRight className="size-8 text-primary" /> : <ToggleLeft className="size-8 text-slate-700" />}
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Regras de <span className="text-primary">Automação</span></h1>
          <p className="text-slate-500 font-medium mt-1">Configure o comportamento inteligente do sistema de cobrança.</p>
        </div>
        <Button size="lg" className="h-14 px-8 shadow-primary/40">
          <Plus className="mr-2 size-5" />
          Nova Regra
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-[32px]" />
          ))
        ) : (
          rules.map((rule) => (
            <Card key={rule.id} hoverEffect className={cn("p-8 group relative overflow-hidden", !rule.active && "opacity-60 grayscale")}>
              {!rule.active && <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />}
              <div className="relative z-20 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    {getTypeIcon(rule.type)}
                  </div>
                  <button onClick={() => handleToggle(rule.id)}>
                    {rule.active ? <ToggleRight className="size-8 text-primary" /> : <ToggleLeft className="size-8 text-slate-700" />}
                  </button>
                </div>
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-primary transition-colors">{rule.name}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="neutral" className="bg-white/5 border-none lowercase tracking-normal font-bold">
                      <Clock className="size-3 mr-1" /> {rule.sendTime}
                    </Badge>
                    <Badge variant="primary" className="bg-primary/5 border-none lowercase tracking-normal font-bold">
                      {rule.trigger}
                    </Badge>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="size-9 rounded-xl" onClick={() => handleEdit(rule)}>
                      <Edit2 className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-9 rounded-xl hover:text-rose-500">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-9 px-4 text-xs font-bold" onClick={() => handleEdit(rule)}>
                    Configurar Gatilho
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
