"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Copy,
  Trash2,
  Eye,
  MessageSquare,
  Mail,
  Smartphone,
  CheckCircle2,
  X,
  Save,
  ArrowLeft,
  ChevronRight,
  History
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Skeleton } from "@/components/ui/Skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { useToast } from "@/components/ui/Toast";
import { mockTemplates, Template } from "@/lib/mock";
import { formatDate, sleep } from "@/lib/utils";

export default function TemplatesPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React.useState<Template | null>(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const loadData = async () => {
      await sleep(1000);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleEdit = (template: Template) => {
    setSelectedTemplate(template);
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    await sleep(1500);
    setIsLoading(false);
    setIsEditing(false);
    toast("Template salvo com sucesso!", "success");
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "whatsapp": return <MessageSquare className="size-4 text-emerald-500" />;
      case "email": return <Mail className="size-4 text-primary" />;
      case "sms": return <Smartphone className="size-4 text-amber-500" />;
      default: return <FileText className="size-4" />;
    }
  };

  const filteredTemplates = mockTemplates.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isEditing && selectedTemplate) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="size-10 rounded-xl" onClick={() => setIsEditing(false)}>
              <ArrowLeft className="size-4" />
            </Button>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <span className="hover:text-primary cursor-pointer" onClick={() => setIsEditing(false)}>Templates</span>
              <ChevronRight className="size-4" />
              <span className="text-white">Editar Template</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="h-11" onClick={() => setIsEditing(false)}>Cancelar</Button>
            <Button className="h-11 shadow-primary/40" onClick={handleSave} isLoading={isLoading}>
              <Save className="mr-2 size-4" /> Salvar Alterações
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 space-y-6">
              <h3 className="text-xl font-black text-white tracking-tight">Configurações do Template</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Título do Template" defaultValue={selectedTemplate.title} />
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Canal de Envio</label>
                  <div className="flex items-center gap-2 p-3 bg-slate-900/50 border border-slate-800 rounded-xl">
                    {getTypeIcon(selectedTemplate.type)}
                    <span className="text-sm font-bold text-white capitalize">{selectedTemplate.type}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Conteúdo da Mensagem</label>
                <textarea 
                  className="w-full h-48 bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  defaultValue={selectedTemplate.content}
                />
                <p className="text-[10px] font-bold text-slate-500 mt-2">
                  Variáveis disponíveis: <span className="text-primary">{"{{nome}}"}</span>, <span className="text-primary">{"{{valor}}"}</span>, <span className="text-primary">{"{{vencimento}}"}</span>, <span className="text-primary">{"{{link_fatura}}"}</span>
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white tracking-tight">Histórico de Versões</h3>
                <Badge variant="neutral">v{selectedTemplate.version}</Badge>
              </div>
              <div className="space-y-4">
                {[
                  { v: "1.2", date: "2024-02-20", user: "Ricardo Souza", desc: "Ajuste no link de pagamento" },
                  { v: "1.1", date: "2024-02-15", user: "Ricardo Souza", desc: "Correção de gramática" },
                  { v: "1.0", date: "2024-02-01", user: "Sistema", desc: "Versão inicial" },
                ].map((v, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                        <History className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Versão {v.v}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{v.user} • {v.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">Restaurar</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 space-y-6">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Preview em Tempo Real</h4>
              <div className="bg-slate-900 rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">NetUltra Cobrança</p>
                    <p className="text-[10px] text-emerald-500 font-bold">Online</p>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed relative">
                  <div className="absolute -left-2 top-4 size-4 bg-slate-800/50 rotate-45" />
                  Olá <span className="text-primary font-bold">João Silva</span>, sua fatura no valor de <span className="text-primary font-bold">R$ 450,00</span> vence em 3 dias. Evite multas e juros pagando agora pelo link: <span className="text-blue-400 underline">netultra.com/f/4920</span>
                </div>
                <p className="text-[10px] text-slate-600 text-right mt-2">10:30 AM</p>
              </div>
              <p className="text-xs text-slate-500 font-medium text-center">O preview acima é uma simulação de como o cliente receberá a mensagem no WhatsApp.</p>
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
          <h1 className="text-4xl font-black tracking-tighter text-white">Biblioteca de <span className="text-primary">Templates</span></h1>
          <p className="text-slate-500 font-medium mt-1">Gerencie os modelos de mensagens enviados automaticamente pelo sistema.</p>
        </div>
        <Button size="lg" className="h-14 px-8 shadow-primary/40">
          <Plus className="mr-2 size-5" />
          Novo Template
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full lg:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-500 group-focus-within:text-primary transition-colors" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
            placeholder="Buscar templates..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-12">WhatsApp</Button>
          <Button variant="outline" className="h-12">E-mail</Button>
          <Button variant="outline" className="h-12">SMS</Button>
        </div>
      </Card>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-[32px]" />
          ))
        ) : filteredTemplates.length === 0 ? (
          <div className="col-span-full h-64 flex items-center justify-center text-slate-500 font-bold">Nenhum template encontrado.</div>
        ) : (
          filteredTemplates.map((t) => (
            <Card key={t.id} hoverEffect className="flex flex-col justify-between p-8 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    {getTypeIcon(t.type)}
                  </div>
                  <Badge variant="neutral">v{t.version}</Badge>
                </div>
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-primary transition-colors">{t.title}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Atualizado em {formatDate(t.lastUpdated)}</p>
                </div>
                <p className="text-sm text-slate-400 font-medium line-clamp-3 leading-relaxed">
                  {t.content}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="size-9 rounded-xl" onClick={() => handleEdit(t)}>
                    <Edit2 className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-9 rounded-xl">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-9 rounded-xl hover:text-rose-500">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-9 px-4 text-xs font-bold" onClick={() => handleEdit(t)}>
                  <Eye className="mr-2 size-4" /> Preview
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
