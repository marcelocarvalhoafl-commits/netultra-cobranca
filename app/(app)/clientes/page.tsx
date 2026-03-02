"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Search,
  Plus,
  MoreVertical,
  User,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  ExternalLink,
  ShieldCheck,
  Star
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { mockCustomers } from "@/lib/mock";
import { formatCurrency, sleep } from "@/lib/utils";
import Link from "next/link";

export default function CustomersPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const loadData = async () => {
      await sleep(1000);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const filteredCustomers = mockCustomers.filter((cust) =>
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Base de <span className="text-primary">Clientes</span></h1>
          <p className="text-slate-500 font-medium mt-1">Gerencie seus pagadores e visualize o histórico de relacionamento.</p>
        </div>
        <Button size="lg" className="h-14 px-8 shadow-primary/40">
          <Plus className="mr-2 size-5" />
          Novo Cliente
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
            placeholder="Buscar por nome, e-mail ou CPF/CNPJ..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
          <Button variant="outline" size="md" className="h-12">
            <Filter className="mr-2 size-4" />
            Filtros
          </Button>
          <Button variant="outline" size="md" className="h-12">
            <Download className="mr-2 size-4" />
            Exportar
          </Button>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-0 overflow-hidden border-white/5">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Cliente</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Pago</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-12 w-48 rounded-xl" /></TableCell>
                  <TableCell><Skeleton className="h-12 w-48 rounded-xl" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-32 rounded-full" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-8 w-8 rounded-lg ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-64 text-center">
                  <p className="text-slate-500 font-bold">Nenhum cliente encontrado.</p>
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((cust) => (
                <TableRow key={cust.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 border border-white/5">
                        <User className="size-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold">{cust.name}</span>
                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{cust.document}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Mail className="size-3" /> {cust.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Phone className="size-3" /> {cust.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={cust.status === "active" ? "success" : "neutral"}>
                      {cust.status === "active" ? "Ativo" : "Inativo"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-black text-white">{formatCurrency(cust.totalSpent)}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {cust.tags.map((tag) => (
                        <Badge key={tag} variant="primary" className="bg-primary/5 border-primary/10 lowercase tracking-normal font-bold">
                          {tag === "VIP" && <Star className="size-2 mr-1 fill-primary" />}
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/clientes/${cust.id}`}>
                        <Button variant="ghost" size="icon" className="size-9 rounded-xl">
                          <ExternalLink className="size-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="size-9 rounded-xl">
                        <MoreVertical className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {!isLoading && filteredCustomers.length > 0 && (
          <div className="p-6 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total: {filteredCustomers.length} clientes</p>
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
