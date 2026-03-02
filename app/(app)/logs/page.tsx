"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  History,
  Search,
  Filter,
  Download,
  User,
  ShieldCheck,
  Zap,
  FileText,
  AlertCircle,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Calendar
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { mockLogs } from "@/lib/mock";
import { sleep } from "@/lib/utils";

export default function LogsPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const loadData = async () => {
      await sleep(1000);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const filteredLogs = mockLogs.filter(log => 
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.entity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getActionIcon = (action: string) => {
    switch (action) {
      case "Login": return <User className="size-4 text-primary" />;
      case "Envio Automático": return <Zap className="size-4 text-emerald-500" />;
      case "Edição": return <FileText className="size-4 text-blue-400" />;
      default: return <AlertCircle className="size-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Auditoria do <span className="text-primary">Sistema</span></h1>
          <p className="text-slate-500 font-medium mt-1">Acompanhe todas as ações realizadas por usuários e processos automáticos.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-6">
            <Calendar className="mr-2 size-5" />
            Período
          </Button>
          <Button variant="outline" className="h-14 px-8">
            <Download className="mr-2 size-5" />
            Exportar Logs
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full lg:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-500 group-focus-within:text-primary transition-colors" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
            placeholder="Buscar por usuário, ação ou entidade..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-12">Usuários</Button>
          <Button variant="outline" className="h-12">IA System</Button>
          <Button variant="outline" className="h-12">Erros</Button>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-0 overflow-hidden border-white/5">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Usuário</TableHead>
              <TableHead>Ação</TableHead>
              <TableHead>Entidade</TableHead>
              <TableHead>Detalhes</TableHead>
              <TableHead>Data/Hora</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-10 w-40 rounded-xl" /></TableCell>
                  <TableCell><Skeleton className="h-10 w-32 rounded-xl" /></TableCell>
                  <TableCell><Skeleton className="h-10 w-32 rounded-xl" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-64" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-8 w-8 rounded-lg ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : filteredLogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-64 text-center">Nenhum log encontrado.</TableCell>
              </TableRow>
            ) : (
              filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 border border-white/5">
                        <User className="size-4" />
                      </div>
                      <span className="text-sm font-bold text-white">{log.user}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(log.action)}
                      <span className="text-xs font-bold text-slate-400 capitalize">{log.action}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="neutral" className="bg-white/5 border-none lowercase tracking-normal font-bold">
                      {log.entity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs text-slate-500 font-medium line-clamp-1 max-w-[300px]">{log.details}</p>
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 font-bold">
                    {new Date(log.timestamp).toLocaleString('pt-BR')}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="size-9 rounded-xl">
                      <MoreVertical className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {!isLoading && filteredLogs.length > 0 && (
          <div className="p-6 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total: {filteredLogs.length} registros</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="size-10 p-0 rounded-xl" disabled>
                <ChevronLeft className="size-4" />
              </Button>
              <Button variant="outline" size="sm" className="size-10 p-0 rounded-xl">
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
