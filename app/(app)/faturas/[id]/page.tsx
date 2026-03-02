"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ChevronRight,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Printer,
  MoreVertical,
  User,
  Phone,
  Mail,
  FileText,
  History,
  MessageSquare,
  CreditCard,
  ExternalLink,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { mockInvoices, mockCustomers, Status } from "@/lib/mock";
import { formatCurrency, formatDate, sleep, cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

export default function InvoiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const [invoice, setInvoice] = React.useState<any>(null);
  const [customer, setCustomer] = React.useState<any>(null);

  React.useEffect(() => {
    const loadData = async () => {
      await sleep(800);
      const inv = mockInvoices.find((i) => i.id === params.id);
      if (inv) {
        setInvoice(inv);
        const cust = mockCustomers.find((c) => c.id === inv.customerId);
        setCustomer(cust);
      }
      setIsLoading(false);
    };
    loadData();
  }, [params.id]);

  const handleAction = (action: string) => {
    toast(`${action} realizado com sucesso!`, "success");
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-xl" />
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Skeleton className="h-64 w-full rounded-[32px]" />
            <Skeleton className="h-96 w-full rounded-[32px]" />
          </div>
          <Skeleton className="h-[600px] w-full rounded-[32px]" />
        </div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-6">
        <div className="size-24 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <AlertCircle className="size-12" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-black text-white">Fatura não encontrada</h2>
          <p className="text-slate-500 font-medium">O ID {params.id} não existe em nossa base.</p>
        </div>
        <Button onClick={() => router.push("/faturas")}>Voltar para Listagem</Button>
      </div>
    );
  }

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case "paid": return <Badge variant="success" className="px-4 py-1.5"><CheckCircle2 className="size-3 mr-2" /> Pago</Badge>;
      case "pending": return <Badge variant="warning" className="px-4 py-1.5"><Clock className="size-3 mr-2" /> Pendente</Badge>;
      case "overdue": return <Badge variant="danger" className="px-4 py-1.5"><AlertCircle className="size-3 mr-2" /> Vencido</Badge>;
      case "cancelled": return <Badge variant="neutral" className="px-4 py-1.5">Cancelado</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumbs & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="size-10 rounded-xl" onClick={() => router.back()}>
            <ArrowLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <span className="hover:text-primary cursor-pointer" onClick={() => router.push("/faturas")}>Faturas</span>
            <ChevronRight className="size-4" />
            <span className="text-white">{invoice.id}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="h-11" onClick={() => handleAction("Impressão")}>
            <Printer className="mr-2 size-4" /> Imprimir
          </Button>
          <Button variant="outline" className="h-11" onClick={() => handleAction("Download")}>
            <Download className="mr-2 size-4" /> Baixar PDF
          </Button>
          <Button className="h-11 shadow-primary/40" onClick={() => handleAction("Envio de lembrete")}>
            <Send className="mr-2 size-4" /> Enviar Lembrete
          </Button>
          <Button variant="ghost" size="icon" className="size-11 rounded-xl">
            <MoreVertical className="size-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-10 relative overflow-hidden">
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Status da Fatura</p>
                  {getStatusBadge(invoice.status)}
                </div>
                <div>
                  <h2 className="text-5xl font-black text-white tracking-tighter">{formatCurrency(invoice.amount)}</h2>
                  <p className="text-slate-500 font-bold mt-2 uppercase tracking-widest text-xs">Vencimento em {formatDate(invoice.dueDate)}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-white">{invoice.id}</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Emitida em {formatDate(invoice.createdAt)}</p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 size-48 bg-primary/5 rounded-full blur-3xl" />
          </Card>

          <Card className="p-10 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-6">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <History className="size-5" />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Timeline de Cobrança</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-white/5">
              {[
                { date: subDays(new Date(), 10), title: "Fatura Gerada", desc: "Sistema automático IXC Soft", icon: FileText, color: "bg-slate-800 text-slate-400" },
                { date: subDays(new Date(), 3), title: "Lembrete Enviado (D-3)", desc: "WhatsApp enviado com sucesso", icon: MessageSquare, color: "bg-blue-500/10 text-blue-400" },
                { date: subDays(new Date(), 1), title: "Aviso de Vencimento (D+1)", desc: "E-mail enviado para o cliente", icon: Mail, color: "bg-amber-500/10 text-amber-500" },
                { date: new Date(), title: "Tentativa de Pagamento", desc: "Cartão recusado (Saldo insuficiente)", icon: CreditCard, color: "bg-rose-500/10 text-rose-500" },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className={cn("size-10 rounded-2xl flex items-center justify-center z-10", step.color)}>
                    <step.icon className="size-5" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-white">{step.title}</p>
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{formatDate(step.date)}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <Card className="p-8 space-y-8">
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
              <div className="size-14 rounded-3xl bg-slate-800 flex items-center justify-center text-slate-400 overflow-hidden border border-white/10">
                <User className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">{customer?.name}</h3>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">{customer?.id}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">E-mail</p>
                  <p className="text-sm font-bold text-slate-300">{customer?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Telefone</p>
                  <p className="text-sm font-bold text-slate-300">{customer?.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                  <FileText className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Documento</p>
                  <p className="text-sm font-bold text-slate-300">{customer?.document}</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full h-12" onClick={() => router.push(`/clientes/${customer?.id}`)}>
              Ver Perfil Completo <ExternalLink className="ml-2 size-4" />
            </Button>
          </Card>

          <Card className="p-8 space-y-6 bg-slate-900/20">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Ações Rápidas</h4>
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" className="justify-start h-12 border-white/5 hover:border-emerald-500/30 hover:text-emerald-500" onClick={() => handleAction("Pagamento manual")}>
                <CheckCircle2 className="mr-3 size-4" /> Marcar como Pago
              </Button>
              <Button variant="outline" className="justify-start h-12 border-white/5 hover:border-blue-500/30 hover:text-blue-400" onClick={() => handleAction("Prorrogação")}>
                <Clock className="mr-3 size-4" /> Prorrogar Vencimento
              </Button>
              <Button variant="outline" className="justify-start h-12 border-white/5 hover:border-rose-500/30 hover:text-rose-500" onClick={() => handleAction("Cancelamento")}>
                <Trash2 className="mr-3 size-4" /> Cancelar Fatura
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function subDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}
