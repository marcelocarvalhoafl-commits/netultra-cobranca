"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Receipt,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  Calendar,
  Download,
  Plus,
  Send,
  X,
  Info
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { mockActivities } from "@/lib/mock";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import Link from "next/link";

const chartData = [
  { name: "Seg", faturamento: 4000, cobranca: 2400 },
  { name: "Ter", faturamento: 3000, cobranca: 1398 },
  { name: "Qua", faturamento: 2000, cobranca: 9800 },
  { name: "Qui", faturamento: 2780, cobranca: 3908 },
  { name: "Sex", faturamento: 1890, cobranca: 4800 },
  { name: "Sab", faturamento: 2390, cobranca: 3800 },
  { name: "Dom", faturamento: 3490, cobranca: 4300 },
];

export default function DashboardPage() {
  const [showTour, setShowTour] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setShowTour(true);
    }
  }, []);

  const closeTour = () => {
    setShowTour(false);
    localStorage.setItem("hasSeenTour", "true");
  };

  return (
    <div className="space-y-10">
      {/* Welcome & Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black tracking-tighter text-white"
          >
            Dashboard de <span className="text-primary">Cobrança</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium mt-1"
          >
            Bem-vindo de volta, Ricardo! Aqui está o resumo financeiro da NetUltra para hoje.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          <Button variant="outline" className="h-11">
            <Calendar className="mr-2 size-4" />
            Últimos 7 dias
          </Button>
          <Button variant="outline" className="h-11">
            <Download className="mr-2 size-4" />
            Exportar
          </Button>
          <Button className="h-11 shadow-primary/40">
            <Plus className="mr-2 size-4" />
            Nova Cobrança
          </Button>
        </motion.div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Vencendo Hoje", value: "128", trend: "+5%", up: true, icon: Calendar, color: "text-primary", bg: "bg-primary/10" },
          { label: "Inadimplência", value: "4.2%", trend: "+0.2%", up: false, icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-500/10" },
          { label: "Pagas Hoje", value: "89", trend: "+12%", up: true, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Recuperado", value: "R$ 12.4k", trend: "+R$ 2k", up: true, icon: Zap, color: "text-blue-400", bg: "bg-blue-400/10" },
        ].map((kpi, i) => (
          <Card key={kpi.label} hoverEffect className="group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{kpi.label}</span>
              <div className={cn("size-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", kpi.bg, kpi.color)}>
                <kpi.icon className="size-5" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-black text-white tracking-tighter">{kpi.value}</p>
                <div className={cn("flex items-center gap-1 text-[10px] font-black mt-1", kpi.up ? "text-emerald-500" : "text-rose-500")}>
                  {kpi.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                  {kpi.trend} vs ontem
                </div>
              </div>
              <ArrowUpRight className="size-4 text-slate-700 group-hover:text-primary transition-colors" />
            </div>
          </Card>
        ))}
      </div>

      {/* Main Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <Card className="lg:col-span-2 p-8 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">Fluxo de Recebimento</h3>
              <p className="text-sm text-slate-500 font-medium">Comparativo entre faturamento e cobrança efetivada</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="primary" className="px-3 py-1">Semana</Badge>
              <Badge variant="neutral" className="px-3 py-1 cursor-pointer hover:bg-slate-700">Mês</Badge>
            </div>
          </div>
          <div className="h-[350px] w-full -ml-6">
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorFaturamento" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#135bec" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#135bec" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12, fontWeight: 700 }}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "16px",
                      color: "#fff",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                    itemStyle={{ color: "#fff", fontWeight: 700 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="faturamento"
                    stroke="#135bec"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorFaturamento)"
                  />
                  <Area
                    type="monotone"
                    dataKey="cobranca"
                    stroke="#10b981"
                    strokeWidth={3}
                    fillOpacity={0}
                    strokeDasharray="8 8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
          <div className="mt-8 flex items-center gap-8 justify-center border-t border-white/5 pt-6">
            <div className="flex items-center gap-2.5">
              <div className="size-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,91,236,0.5)]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Faturamento</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="size-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cobrança Efetiva</span>
            </div>
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white tracking-tight">Atividades</h3>
            <Link href="/logs" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Ver Todos</Link>
          </div>
          <div className="space-y-6">
            {mockActivities.map((act, i) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className={cn(
                  "size-10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                  act.type === "payment" && "bg-emerald-500/10 text-emerald-500",
                  act.type === "reminder" && "bg-blue-500/10 text-blue-400",
                  act.type === "overdue" && "bg-rose-500/10 text-rose-500",
                  act.type === "error" && "bg-amber-500/10 text-amber-500"
                )}>
                  {act.type === "payment" && <CheckCircle2 className="size-5" />}
                  {act.type === "reminder" && <Send className="size-5" />}
                  {act.type === "overdue" && <AlertCircle className="size-5" />}
                  {act.type === "error" && <Info className="size-5" />}
                </div>
                <div className="flex-1 border-b border-white/5 pb-4 group-last:border-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{act.title}</p>
                    <span className="text-[10px] font-black text-slate-600 uppercase whitespace-nowrap ml-2">
                      {act.timestamp.split('T')[1].substring(0, 5)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-1">{act.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-6 h-12">Ver Histórico Completo</Button>
        </Card>
      </div>

      {/* Quick Actions Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-primary/5 rounded-[32px] p-10 border border-primary/10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden"
      >
        <div className="flex items-center gap-6 relative z-10">
          <div className="size-16 rounded-3xl bg-primary/20 flex items-center justify-center text-primary shadow-2xl shadow-primary/20">
            <Zap className="size-8" />
          </div>
          <div>
            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Status da Operação</p>
            <h3 className="text-3xl font-black text-white tracking-tighter">R$ 142.580,00 <span className="text-lg text-slate-500 font-bold ml-2">recuperados este mês</span></h3>
          </div>
        </div>
        <div className="flex items-center gap-8 relative z-10 w-full lg:w-auto">
          <div className="flex-1 lg:w-48">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Meta Mensal</span>
              <span className="text-sm font-black text-primary">75%</span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary shadow-[0_0_12px_rgba(19,91,236,0.6)]"
              />
            </div>
          </div>
          <Button size="lg" className="h-14 px-10 shadow-primary/40">
            <Send className="mr-2 size-5" />
            Enviar Lembretes
          </Button>
        </div>
        <div className="absolute -right-20 -bottom-20 size-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      </motion.div>

      {/* Tour Modal */}
      <AnimatePresence>
        {showTour && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTour}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-[500px] bg-slate-900 border border-white/10 rounded-[40px] p-10 relative z-10 shadow-2xl"
            >
              <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 mx-auto">
                <Zap className="size-10" />
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-black text-white tracking-tighter">Bem-vindo à Nova Era NetUltra</h2>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Redesenhamos toda a experiência de cobrança para ser mais rápida, inteligente e visual. 
                  Navegue pelo menu lateral para explorar as novas funcionalidades de automação e relatórios.
                </p>
              </div>
              <div className="mt-10 space-y-3">
                <Button onClick={closeTour} className="w-full h-14 text-base">Começar a Explorar</Button>
                <Button variant="ghost" onClick={closeTour} className="w-full h-12 text-slate-500">Pular Tour</Button>
              </div>
              <button onClick={closeTour} className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors">
                <X className="size-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
