import { subDays, subHours, subMinutes } from "date-fns";

export type Status = "paid" | "pending" | "overdue" | "cancelled";

export interface Invoice {
  id: string;
  customerName: string;
  customerId: string;
  amount: number;
  dueDate: string;
  status: Status;
  createdAt: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  status: "active" | "inactive";
  totalSpent: number;
  lastPayment: string;
  tags: string[];
  notes: string;
}

export interface Activity {
  id: string;
  type: "payment" | "reminder" | "overdue" | "error";
  title: string;
  description: string;
  timestamp: string;
  amount?: number;
}

export interface Template {
  id: string;
  title: string;
  content: string;
  type: "whatsapp" | "email" | "sms";
  version: string;
  lastUpdated: string;
}

export interface Rule {
  id: string;
  name: string;
  trigger: string;
  delay: number;
  type: "whatsapp" | "email" | "sms";
  active: boolean;
  sendTime: string;
}

export interface Log {
  id: string;
  user: string;
  action: string;
  entity: string;
  timestamp: string;
  details: string;
}

const now = new Date();

export const mockInvoices: Invoice[] = [
  { id: "INV-001", customerName: "João Silva", customerId: "CUST-001", amount: 450.00, dueDate: subDays(now, 2).toISOString(), status: "paid", createdAt: subDays(now, 10).toISOString(), description: "Mensalidade Internet - Janeiro" },
  { id: "INV-002", customerName: "Maria Oliveira", customerId: "CUST-002", amount: 1200.00, dueDate: subDays(now, 1).toISOString(), status: "overdue", createdAt: subDays(now, 15).toISOString(), description: "Serviço de Consultoria" },
  { id: "INV-003", customerName: "Pedro Santos", customerId: "CUST-003", amount: 89.90, dueDate: now.toISOString(), status: "pending", createdAt: subDays(now, 5).toISOString(), description: "Plano Mobile" },
  { id: "INV-004", customerName: "Ana Costa", customerId: "CUST-004", amount: 2500.00, dueDate: subDays(now, 5).toISOString(), status: "paid", createdAt: subDays(now, 20).toISOString(), description: "Desenvolvimento Web" },
  { id: "INV-005", customerName: "Lucas Lima", customerId: "CUST-005", amount: 150.00, dueDate: subDays(now, 10).toISOString(), status: "overdue", createdAt: subDays(now, 25).toISOString(), description: "Hospedagem de Site" },
  { id: "INV-006", customerName: "Beatriz Silva", customerId: "CUST-006", amount: 300.00, dueDate: subDays(now, 3).toISOString(), status: "pending", createdAt: subDays(now, 12).toISOString(), description: "Manutenção Preventiva" },
];

export const mockCustomers: Customer[] = [
  { id: "CUST-001", name: "João Silva", email: "joao@email.com", phone: "(11) 98765-4321", document: "123.456.789-00", status: "active", totalSpent: 4500.00, lastPayment: subDays(now, 2).toISOString(), tags: ["VIP", "Antigo"], notes: "Cliente prefere contato via WhatsApp." },
  { id: "CUST-002", name: "Maria Oliveira", email: "maria@email.com", phone: "(11) 91234-5678", document: "987.654.321-11", status: "active", totalSpent: 12000.00, lastPayment: subDays(now, 15).toISOString(), tags: ["Corporativo"], notes: "Empresa de tecnologia." },
  { id: "CUST-003", name: "Pedro Santos", email: "pedro@email.com", phone: "(11) 95555-4444", document: "456.789.123-22", status: "active", totalSpent: 890.00, lastPayment: subDays(now, 30).toISOString(), tags: ["Novo"], notes: "" },
  { id: "CUST-004", name: "Ana Costa", email: "ana@email.com", phone: "(11) 93333-2222", document: "321.654.987-33", status: "active", totalSpent: 25000.00, lastPayment: subDays(now, 5).toISOString(), tags: ["VIP"], notes: "Pagadora pontual." },
];

export const mockActivities: Activity[] = [
  { id: "ACT-001", type: "payment", title: "Pagamento Confirmado", description: "Cliente João Silva - R$ 450,00", timestamp: subMinutes(now, 5).toISOString(), amount: 450.00 },
  { id: "ACT-002", type: "reminder", title: "Lembrete Enviado", description: "SMS enviado para Beatriz Silva", timestamp: subMinutes(now, 12).toISOString() },
  { id: "ACT-003", type: "overdue", title: "Fatura Vencida", description: "Marcos Pereira - R$ 1.200,00", timestamp: subMinutes(now, 45).toISOString(), amount: 1200.00 },
  { id: "ACT-004", type: "error", title: "Erro no Envio", description: "Falha ao notificar Cliente #3011", timestamp: subHours(now, 1).toISOString() },
];

export const mockTemplates: Template[] = [
  { id: "TMP-001", title: "Lembrete de Vencimento (D-3)", content: "Olá {{nome}}, sua fatura no valor de {{valor}} vence em 3 dias. Evite multas.", type: "whatsapp", version: "1.2", lastUpdated: subDays(now, 2).toISOString() },
  { id: "TMP-002", title: "Aviso de Fatura Vencida (D+1)", content: "Olá {{nome}}, identificamos que sua fatura de {{valor}} venceu ontem. Regularize agora.", type: "email", version: "2.0", lastUpdated: subDays(now, 5).toISOString() },
  { id: "TMP-003", title: "Confirmação de Pagamento", content: "Recebemos seu pagamento de {{valor}}. Obrigado!", type: "sms", version: "1.0", lastUpdated: subDays(now, 10).toISOString() },
];

export const mockRules: Rule[] = [
  { id: "RUL-001", name: "Lembrete Antecipado", trigger: "3 dias antes do vencimento", delay: -3, type: "whatsapp", active: true, sendTime: "09:00" },
  { id: "RUL-002", name: "Aviso de Atraso", trigger: "1 dia após o vencimento", delay: 1, type: "email", active: true, sendTime: "10:00" },
  { id: "RUL-003", name: "Cobrança Intensiva", trigger: "5 dias após o vencimento", delay: 5, type: "sms", active: false, sendTime: "14:00" },
];

export const mockLogs: Log[] = [
  { id: "LOG-001", user: "Ricardo Souza", action: "Login", entity: "Sistema", timestamp: subMinutes(now, 10).toISOString(), details: "IP: 192.168.1.1" },
  { id: "LOG-002", user: "IA System", action: "Envio Automático", entity: "WhatsApp", timestamp: subMinutes(now, 5).toISOString(), details: "Enviado para 45 clientes" },
  { id: "LOG-003", user: "Ricardo Souza", action: "Edição", entity: "Template #001", timestamp: subHours(now, 2).toISOString(), details: "Alteração no texto de saudação" },
];
