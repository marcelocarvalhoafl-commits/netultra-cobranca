export default function ConfigPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-8">
      {/* Sidebar / Settings Navigation */}
      <aside className="w-full lg:w-64 flex flex-col gap-2">
        <div className="mb-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Menu</h3>
        </div>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group" href="#">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">settings</span>
          <span className="text-sm font-semibold">Geral</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-all border border-primary/20" href="#">
          <span className="material-symbols-outlined">api</span>
          <span className="text-sm font-bold">Integrações</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group" href="#">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">sms</span>
          <span className="text-sm font-semibold">Notificações</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group" href="#">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">security</span>
          <span className="text-sm font-semibold">Segurança</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group" href="#">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">credit_card</span>
          <span className="text-sm font-semibold">Assinatura</span>
        </a>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 max-w-4xl">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Configurações do Sistema</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">Gerencie suas chaves de API, tokens de acesso e integrações de comunicação.</p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Section: Integração IXC */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <span className="material-symbols-outlined text-blue-500">hub</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-none">Integração IXC Soft</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Conecte sua base de dados IXC para sincronização de faturas.</p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  URL da Base IXC
                  <span className="material-symbols-outlined text-xs text-slate-400 cursor-help" title="A URL completa do seu sistema IXC">info</span>
                </label>
                <input className="form-input w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 outline-none" placeholder="https://exemplo.ixcsoft.com.br" type="text" defaultValue="" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Token de Acesso</label>
                <div className="relative">
                  <input className="form-input w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 pr-10 outline-none" placeholder="Insira o Token de API IXC" type="password" defaultValue="••••••••••••••••" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section: API WhatsApp */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <span className="material-symbols-outlined text-emerald-500">chat_bubble</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-none">WhatsApp API (Meta Business)</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Configurações para envio automático de cobranças e notificações.</p>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">ID do Número de Telefone</label>
                  <input className="form-input w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 outline-none" placeholder="Ex: 109324823948239" type="text" defaultValue="" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">ID da Conta de Negócio</label>
                  <input className="form-input w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 outline-none" placeholder="Ex: 239482394823948" type="text" defaultValue="" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Token de Acesso Permanente</label>
                <textarea className="form-input w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:border-primary focus:ring-primary p-4 min-h-[100px] outline-none" placeholder="Insira o System User Access Token da Meta"></textarea>
              </div>

              {/* Test Connectivity */}
              <div className="mt-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">open_run</span>
                  Testar Conectividade
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                      <span className="text-sm font-medium">+55</span>
                    </div>
                    <input className="form-input w-full bg-slate-100 dark:bg-slate-950 border-transparent rounded-lg text-slate-900 dark:text-white focus:ring-primary h-11 pl-12 pr-4 outline-none" placeholder="(00) 00000-0000" type="text" />
                  </div>
                  <button className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-xl">send</span>
                    Enviar Teste
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-2">Envie uma mensagem de teste para verificar se as chaves da API do WhatsApp estão corretas.</p>
              </div>
            </div>
          </section>

          {/* Save Action */}
          <div className="flex items-center justify-between p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">info</span>
              <p className="text-sm text-slate-600 dark:text-slate-400">As alterações entrarão em vigor imediatamente após salvar.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 text-slate-600 dark:text-slate-400 font-bold text-sm hover:text-slate-900 dark:hover:text-white transition-colors">
                Descartar
              </button>
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
                <span className="material-symbols-outlined text-xl">save</span>
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
