export default function Faturas() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <section className="flex flex-wrap justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Gestão de Faturas</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Visualize e gerencie o status de cobrança de todos os seus clientes NetUltra.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined mr-2 text-sm">download</span>
            Exportar CSV
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined mr-2 text-sm">add</span>
            Nova Fatura
          </button>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[300px]">
            <label className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
              <input className="w-full h-11 pl-10 pr-4 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Buscar por Nome ou Telefone" type="text" />
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <button className="flex h-11 items-center justify-between gap-x-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <span className="text-slate-500 dark:text-slate-400">Status:</span>
                <span>Todos</span>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </button>
            </div>
            <div className="relative">
              <button className="flex h-11 items-center justify-between gap-x-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <span className="material-symbols-outlined text-slate-400 text-sm">calendar_today</span>
                <span>Últimos 30 dias</span>
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </button>
            </div>
            <button className="h-11 px-4 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">
              Limpar filtros
            </button>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-bold border border-yellow-500/20 flex items-center gap-1">
            Pendente: 12
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
            Pago: 45
          </span>
          <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold border border-rose-500/20 flex items-center gap-1">
            Atrasado: 8
          </span>
        </div>
      </section>

      <section className="overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Cliente</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Telefone</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Vencimento</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Valor</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">RS</div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Ricardo Silva</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">(11) 98765-4321</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">10 Out, 2023</td>
                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">R$ 149,90</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                    Pago
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">send</span></button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 font-bold text-xs">MA</div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Mariana Almeida</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">(21) 97766-5544</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">15 Out, 2023</td>
                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">R$ 299,00</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1.5"></span>
                    Pendente
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="text-xs font-bold text-primary hover:underline">Ver detalhes</button>
                    <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-all">Enviar agora</button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-600 font-bold text-xs">FB</div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Fábio Baptista</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">(31) 98877-6655</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">05 Out, 2023</td>
                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">R$ 89,90</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5"></span>
                    Atrasado
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="text-xs font-bold text-primary hover:underline">Ver detalhes</button>
                    <button className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded hover:bg-rose-600 transition-all">Cobrar Urgente</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
          <p className="text-sm text-slate-500 dark:text-slate-400">Mostrando 1 a 4 de 65 resultados</p>
          <div className="flex gap-2">
            <button className="flex items-center justify-center h-8 w-8 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-400 hover:text-primary transition-all">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="flex items-center justify-center h-8 w-8 rounded bg-primary text-white text-sm font-bold">1</button>
            <button className="flex items-center justify-center h-8 w-8 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all font-medium">2</button>
            <button className="flex items-center justify-center h-8 w-8 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-all font-medium">3</button>
            <button className="flex items-center justify-center h-8 w-8 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-400 hover:text-primary transition-all">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Volume Mensal</h3>
            <span className="material-symbols-outlined text-primary">bar_chart</span>
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white">R$ 145.680,00</p>
          <div className="mt-2 flex items-center text-xs font-bold text-emerald-500">
            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
            +12.5% em relação ao mês anterior
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Inadimplência</h3>
            <span className="material-symbols-outlined text-rose-500">warning</span>
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white">4.2%</p>
          <div className="mt-2 flex items-center text-xs font-bold text-rose-500">
            <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
            -0.8% meta de redução atingida
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Faturas Pagas</h3>
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white">88%</p>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-primary h-full w-[88%]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
