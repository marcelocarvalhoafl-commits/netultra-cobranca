"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  MoreVertical,
  Zap,
  RefreshCw,
  Mail,
  Phone,
  Smartphone,
  Trash2
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { useToast } from "@/components/ui/Toast";
import { sleep } from "@/lib/utils";

const mockQueue = [
  { id: "MSG-001", recipient: "João Silva", type: "whatsapp", status: "sent", timestamp: "2024-02-28T10:30:00Z", content: "Lembrete de fatura vencendo hoje..." },
  { id: "MSG-002", recipient: "Maria Oliveira", type: "email", status: "pending", timestamp: "2024-02-28T11:00:00Z", content: "Sua fatura de R$ 1.200,00 está disponível..." },
  { id: "MSG-003", recipient: "Pedro Santos", type: "sms", status: "failed", timestamp: "2024-02-28T09:15:00Z", content: "Código de barras para pagamento..." },
  { id: "MSG-004", recipient: "Ana Costa", type: "whatsapp", status: "sent", timestamp: "2024-02-28T10:45:00Z", content: "Confirmação de recebimento..." },
  { id: "MSG-005", recipient: "Lucas Lima", type: "email", status: "sent", timestamp: "2024-02-28T08:00:00Z", content: "Aviso de suspensão de serviço..." },
];

export default function MessagesPage() {
  const { toast } = useToast();
  const [isSending, setIsSending] = React.useState(false);
  const [queue, setQueue] = React.useState(mockQueue);

  const handleSendAll = async () => {
    setIsSending(true);
    toast("Iniciando envio da fila de mensagens...", "info");
    await sleep(2000);
    setQueue(prev => prev.map(m => m.status === "pending" ? { ...m, status: "sent" } : m));
    setIsSending(false);
    toast("Todas as mensagens pendentes foram enviadas!", "success");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent": return <Badge variant="success"><CheckCircle2 className="size-3 mr-1" /> Enviado</Badge>;
      case "pending": return <Badge variant="warning"><Clock className="size-3 mr-1" /> Pendente</Badge>;
      case "failed": return <Badge variant="danger"><AlertCircle className="size-3 mr-1" /> Falhou</Badge>;
      default: return <Badge variant="neutral">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "whatsapp": return <MessageSquare className="size-4 text-emerald-500" />;
      case "email": return <Mail className="size-4 text-primary" />;
      case "sms": return <Smartphone className="size-4 text-amber-500" />;
      default: return <MessageSquare className="size-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Central de <span className="text-primary">Mensagens</span></h1>
          <p className="text-slate-500 font-medium mt-1">Acompanhe o status de envio de notificações via WhatsApp, E-mail e SMS.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-6">
            <RefreshCw className="mr-2 size-5" />
            Atualizar Fila
          </Button>
          <Button size="lg" className="h-14 px-8 shadow-primary/40" onClick={handleSendAll} isLoading={isSending}>
            <Zap className="mr-2 size-5" />
            Enviar Pendentes
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-emerald-500/20 bg-emerald-500/5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Enviadas Hoje</span>
            <CheckCircle2 className="size-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-black text-white tracking-tighter">1.248</p>
          <p className="text-xs text-slate-500 font-bold mt-1">98.5% de taxa de entrega</p>
        </Card>
        <Card className="p-6 border-amber-500/20 bg-amber-500/5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Aguardando Fila</span>
            <Clock className="size-5 text-amber-500" />
          </div>
          <p className="text-3xl font-black text-white tracking-tighter">12</p>
          <p className="text-xs text-slate-500 font-bold mt-1">Próximo envio em 5 min</p>
        </Card>
        <Card className="p-6 border-rose-500/20 bg-rose-500/5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Falhas de Envio</span>
            <AlertCircle className="size-5 text-rose-500" />
          </div>
          <p className="text-3xl font-black text-white tracking-tighter">3</p>
          <p className="text-xs text-slate-500 font-bold mt-1">Requer atenção manual</p>
        </Card>
      </div>

      {/* Queue Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-white tracking-tight">Fila de Notificações</h3>
          <div className="flex items-center gap-2">
            <div className="relative w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500 group-focus-within:text-primary transition-colors" />
              <input
                className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                placeholder="Buscar destinatário..."
                type="text"
              />
            </div>
            <Button variant="outline" size="icon" className="size-10 rounded-xl">
              <Filter className="size-4" />
            </Button>
          </div>
        </div>

        <Card className="p-0 overflow-hidden border-white/5">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>ID</TableHead>
                <TableHead>Destinatário</TableHead>
                <TableHead>Canal</TableHead>
                <TableHead>Mensagem</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queue.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell className="font-black text-slate-500 text-xs">{msg.id}</TableCell>
                  <TableCell className="font-bold text-white">{msg.recipient}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(msg.type)}
                      <span className="text-xs font-bold text-slate-400 capitalize">{msg.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs text-slate-500 font-medium line-clamp-1 max-w-[300px]">{msg.content}</p>
                  </TableCell>
                  <TableCell>{getStatusBadge(msg.status)}</TableCell>
                  <TableCell className="text-xs text-slate-500 font-bold">
                    {new Date(msg.timestamp).toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="size-9 rounded-xl hover:text-primary">
                        <RefreshCw className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-9 rounded-xl hover:text-rose-500">
                        <Trash2 className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-9 rounded-xl">
                        <MoreVertical className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
