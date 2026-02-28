export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard de Cobrança</h1>
        <p className="text-slate-500">Bem-vindo de volta! Aqui está o resumo financeiro da NetUltra para hoje.</p>
      </div>
      
      {/* High-level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Vencendo Hoje</span>
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">event_upcoming</span>
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold tracking-tight">128</p>
            <span className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +5% vs ontem
            </span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Vencidas</span>
            <div className="size-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
              <span className="material-symbols-outlined">warning</span>
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold tracking-tight">45</p>
            <span className="text-xs font-bold text-red-500 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +2% vs ontem
            </span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Pagas Hoje</span>
            <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold tracking-tight">89</p>
            <span className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +12% vs ontem
            </span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Mensagens</span>
            <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined">send</span>
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold tracking-tight">1.240</p>
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mt-1">Estável hoje</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Erros</span>
            <div className="size-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <span className="material-symbols-outlined">error</span>
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold tracking-tight">3</p>
            <span className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">trending_down</span> -10% vs ontem
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Line Chart Placeholder */}
        <div className="lg:col-span-2 bg-background-light dark:bg-slate-900/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg">Desempenho Diário de Cobrança</h3>
              <p className="text-sm text-slate-500">Faturamento vs Cobrança efetivada</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-lg">Semana</button>
              <button className="px-3 py-1 text-xs font-semibold bg-slate-200 dark:bg-slate-800 rounded-lg">Mês</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2 border-b border-l border-slate-800">
            <div className="relative w-full h-full flex items-end">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                <path d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,5" fill="none" stroke="#135bec" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                <path d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,5 L100,40 L0,40 Z" fill="url(#grad)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#135bec", stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: "#135bec", stopOpacity: 0 }}></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-end justify-between px-2 pt-4 text-[10px] text-slate-500">
                <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activities List */}
        <div className="bg-white dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Atividades Recentes</h3>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">more_vert</span>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div className="flex-1 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold">Pagamento Confirmado</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Há 5 min</p>
                </div>
                <p className="text-xs text-slate-500 mt-1">Cliente #4920 - R$ 450,00</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="size-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">sms</span>
              </div>
              <div className="flex-1 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold">Lembrete Enviado</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Há 12 min</p>
                </div>
                <p className="text-xs text-slate-500 mt-1">SMS enviado para Beatriz Silva</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="size-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">priority_high</span>
              </div>
              <div className="flex-1 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold">Fatura Vencida</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Há 45 min</p>
                </div>
                <p className="text-xs text-slate-500 mt-1">Marcos Pereira - R$ 1.200,00</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="size-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="flex-1 pb-2">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold">Erro no Envio de E-mail</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Há 1 hora</p>
                </div>
                <p className="text-xs text-slate-500 mt-1">Falha ao notificar Cliente #3011</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-xl transition-all border border-primary/20">Ver todo o histórico</button>
        </div>
      </div>
      
      {/* Footer-style stats */}
      <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 flex flex-wrap gap-8 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
          </div>
          <div>
            <p className="text-sm text-slate-400">Total Recuperado este mês</p>
            <p className="text-2xl font-bold">R$ 142.580,00</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-sm text-slate-400">Meta Mensal</p>
            <div className="w-48 h-2 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-primary w-[75%]"></div>
            </div>
          </div>
          <span className="text-sm font-bold self-end mb-0.5">75%</span>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add_circle</span>
          Nova Cobrança
        </button>
      </div>
    </div>
  );
}
