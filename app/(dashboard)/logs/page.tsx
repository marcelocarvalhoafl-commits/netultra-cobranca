export default function Logs() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
      {/* Header Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">Logs de Envio</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Histórico detalhado de notificações de faturamento enviadas via WhatsApp API.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            Exportar CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">sync</span>
            Atualizar
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
        <div className="relative col-span-1 md:col-span-2">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Buscar por cliente, ID da fatura ou telefone..." type="text" />
        </div>
        <div className="relative">
          <select className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary appearance-none cursor-pointer outline-none">
            <option>Todos os Status</option>
            <option>Sucesso</option>
            <option>Falha</option>
            <option>Pendente</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
        </div>
        <div className="relative">
          <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary cursor-pointer outline-none" type="date" />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fatura ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Mensagem de Erro</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Data / Hora</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Sucesso
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-slate-900 dark:text-slate-100">João da Silva Pereira</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400 font-mono text-xs">#FT-2024-0982</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-400 dark:text-slate-600">—</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-400 text-sm">24/05/2024, 14:30:12</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-primary hover:underline text-sm font-bold">Reenviar</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    Falha
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-slate-900 dark:text-slate-100">Maria Oliveira Santos</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400 font-mono text-xs">#FT-2024-0981</td>
                <td className="px-6 py-4 whitespace-nowrap text-rose-600 dark:text-rose-400 text-sm font-medium">Número inválido (404)</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-400 text-sm">24/05/2024, 14:15:05</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Sucesso
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-slate-900 dark:text-slate-100">Tech Solutions LTDA</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400 font-mono text-xs">#FT-2024-0980</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-400 dark:text-slate-600">—</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-400 text-sm">24/05/2024, 13:55:42</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-primary hover:underline text-sm font-bold">Reenviar</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    <span className="material-symbols-outlined text-[14px]">pending</span>
                    Pendente
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-slate-900 dark:text-slate-100">Ricardo Almeida G.</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400 font-mono text-xs">#FT-2024-0979</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-400 dark:text-slate-600">Aguardando fila API</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-400 text-sm">24/05/2024, 13:40:00</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-rose-500 hover:underline text-sm font-bold">Cancelar</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    Falha
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-slate-900 dark:text-slate-100">Condomínio Mirante</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400 font-mono text-xs">#FT-2024-0978</td>
                <td className="px-6 py-4 whitespace-nowrap text-rose-600 dark:text-rose-400 text-sm font-medium">API Offline (503)</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-400 text-sm">24/05/2024, 13:10:15</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-primary hover:underline text-sm font-bold">Tentar novamente</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mostrando <span className="font-bold">1</span> a <span className="font-bold">5</span> de <span className="font-bold">1,240</span> resultados
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-sm leading-none">chevron_left</span>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-primary text-white font-bold text-sm">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-sm leading-none">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info / Stats */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-600 uppercase">Sucesso Total</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">98.4%</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500">
              <span className="material-symbols-outlined">error_med</span>
            </div>
            <div>
              <p className="text-xs font-bold text-rose-600 uppercase">Falhas (24h)</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">12 envios</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase">Em Fila</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">3 envios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
