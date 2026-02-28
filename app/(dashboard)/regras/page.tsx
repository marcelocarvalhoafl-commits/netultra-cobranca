export default function Regras() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Title Area */}
      <div className="pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex text-xs text-slate-500 mb-2 gap-1 items-center">
            <span className="hover:text-primary transition-colors cursor-pointer">Sistema</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-slate-400">Regras de Cobrança</span>
          </nav>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Regras de Cobrança</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gerencie fluxos automáticos de notificações e ações financeiras.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Nova Regra
        </button>
      </div>

      {/* Content Area Scrollable */}
      <div className="flex-1 overflow-y-auto pb-12 custom-scrollbar">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 mt-4">
          <button className="px-6 py-3 text-sm font-bold border-b-2 border-primary text-primary">Ativas (5)</button>
          <button className="px-6 py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Pausadas (2)</button>
          <button className="px-6 py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Arquivadas</button>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Rule Card 1: D-1 */}
          <div className="bg-white dark:bg-[#161e2e] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">schedule_send</span>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <h3 className="text-lg font-bold mb-1">D-1: Lembrete Antecipado</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">event_repeat</span>
                <span>Vencimento amanhã</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">alarm</span>
                <span>Execução às 09:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>SMS/Email Premium</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex gap-2">
              <button className="flex-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2 rounded-lg text-sm transition-colors border border-slate-200 dark:border-slate-700/50">Editar</button>
            </div>
          </div>

          {/* Rule Card 2: D0 */}
          <div className="bg-white dark:bg-[#161e2e] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">today</span>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <h3 className="text-lg font-bold mb-1">D0: Vencimento Hoje</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">event_repeat</span>
                <span>Vencimento hoje</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">alarm</span>
                <span>Execução às 08:30 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                <span>WhatsApp Urgente</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex gap-2">
              <button className="flex-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2 rounded-lg text-sm transition-colors border border-slate-200 dark:border-slate-700/50">Editar</button>
            </div>
          </div>

          {/* Rule Card 3: D+1 */}
          <div className="bg-white dark:bg-[#161e2e] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">notification_important</span>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <h3 className="text-lg font-bold mb-1">D+1: Primeiro Aviso</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">history</span>
                <span>1 dia após vencimento</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">alarm</span>
                <span>Execução às 10:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Email Cobrança 01</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex gap-2">
              <button className="flex-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2 rounded-lg text-sm transition-colors border border-slate-200 dark:border-slate-700/50">Editar</button>
            </div>
          </div>

          {/* Rule Card 4: D+3 */}
          <div className="bg-white dark:bg-[#161e2e] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">gavel</span>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <h3 className="text-lg font-bold mb-1">D+3: Notificação Jurídica</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">history</span>
                <span>3 dias após vencimento</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">alarm</span>
                <span>Execução às 09:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>Notificação Jurídica</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex gap-2">
              <button className="flex-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2 rounded-lg text-sm transition-colors border border-slate-200 dark:border-slate-700/50">Editar</button>
            </div>
          </div>

          {/* Rule Card 5: Pago */}
          <div className="bg-white dark:bg-[#161e2e] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="relative w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <h3 className="text-lg font-bold mb-1">Regra Pago: Confirmação</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span>Imediato após liquidação</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">alarm</span>
                <span>Execução Tempo Real</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                <span>Template: Recibo Digital</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex gap-2">
              <button className="flex-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2 rounded-lg text-sm transition-colors border border-slate-200 dark:border-slate-700/50">Editar</button>
            </div>
          </div>

          {/* Add New Placeholder */}
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center p-6 bg-slate-50/50 dark:bg-slate-900/20 group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">add</span>
            </div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-primary">Adicionar Nova Automação</p>
          </div>
        </div>

        {/* History Summary Section */}
        <div className="mt-12">
          <h3 className="text-lg font-bold mb-6">Resumo de Execução (Últimas 24h)</h3>
          <div className="bg-white dark:bg-[#161e2e] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Regra</th>
                  <th className="px-6 py-4">Execuções</th>
                  <th className="px-6 py-4">Sucesso</th>
                  <th className="px-6 py-4">Falhas</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Lembrete Antecipado (D-1)</td>
                  <td className="px-6 py-4">1,240</td>
                  <td className="px-6 py-4 text-emerald-500">1,238 (99.8%)</td>
                  <td className="px-6 py-4 text-slate-400">2</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Normal</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Vencimento Hoje (D0)</td>
                  <td className="px-6 py-4">845</td>
                  <td className="px-6 py-4 text-emerald-500">845 (100%)</td>
                  <td className="px-6 py-4 text-slate-400">0</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Normal</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Notificação Jurídica (D+3)</td>
                  <td className="px-6 py-4">42</td>
                  <td className="px-6 py-4 text-emerald-500">41 (97.6%)</td>
                  <td className="px-6 py-4 text-red-500">1</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Atenção</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
