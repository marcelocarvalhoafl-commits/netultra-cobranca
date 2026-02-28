export default function Templates() {
  return (
    <div className="flex flex-col lg:flex-row h-full -m-6 md:-m-8">
      {/* Sidebar: Template List */}
      <aside className="w-full lg:w-80 border-r border-border-dark bg-background-dark flex flex-col">
        <div className="p-4 border-b border-border-dark">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-100">Biblioteca</h3>
            <button className="text-xs text-primary font-bold hover:underline">+ Novo</button>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">grid_view</span>
              <span className="text-sm font-medium text-slate-300">Todos os Templates</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary cursor-pointer border-l-4 border-primary">
              <span className="material-symbols-outlined text-[20px] fill-1">description</span>
              <span className="text-sm font-bold">Faturas</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">waving_hand</span>
              <span className="text-sm font-medium text-slate-300">Boas-vindas</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">schedule</span>
              <span className="text-sm font-medium text-slate-300">Lembretes</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">warning</span>
              <span className="text-sm font-medium text-slate-300">Vencidos</span>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Templates Recentes</p>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 cursor-pointer transition-all">
              <p className="text-sm font-bold text-slate-100 mb-1">Fatura do Mês</p>
              <p className="text-xs text-slate-400 truncate">Olá {'{NOME}'}, sua fatura de {'{VALOR}'}...</p>
            </div>
            <div className="p-3 rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 cursor-pointer transition-all opacity-60">
              <p className="text-sm font-bold text-slate-100 mb-1">Aviso de Vencimento</p>
              <p className="text-xs text-slate-400 truncate">Prezado cliente, identificamos que...</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Editor Area */}
      <div className="flex-1 flex flex-col lg:flex-row bg-background-dark/50">
        {/* Left Side: Config */}
        <div className="flex-1 p-6 lg:p-8 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-100 tracking-tight">Editor de Template</h1>
              <p className="text-slate-400 text-sm">Personalize sua comunicação com variáveis dinâmicas.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">Descartar</button>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">save</span>
                Salvar Template
              </button>
            </div>
          </div>

          {/* Template Content Card */}
          <div className="space-y-6">
            <section className="bg-surface-dark border border-border-dark rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-bold text-slate-200">Corpo da Mensagem</label>
                <div className="flex gap-2">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded border border-primary/30 uppercase cursor-pointer hover:bg-primary/30">{'{NOME}'}</span>
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded border border-primary/30 uppercase cursor-pointer hover:bg-primary/30">{'{VALOR}'}</span>
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded border border-primary/30 uppercase cursor-pointer hover:bg-primary/30">{'{VENCIMENTO}'}</span>
                </div>
              </div>
              <textarea 
                className="w-full bg-background-dark border border-border-dark rounded-lg p-4 text-slate-100 focus:ring-primary focus:border-primary resize-none font-display leading-relaxed outline-none" 
                placeholder="Digite sua mensagem aqui..." 
                rows={6}
                defaultValue={`Olá {NOME}, \n\nEspero que esteja bem! 👋\nEstamos enviando sua fatura com vencimento em {VENCIMENTO} no valor de {VALOR}.\n\nVocê pode realizar o pagamento através do link abaixo ou utilizando o botão 'Pagar agora' nesta mensagem.\n\nLink: {LINK}\n\nQualquer dúvida, estamos à disposição!`}
              />
              <p className="text-[11px] text-slate-500 mt-2 italic flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">info</span>
                O WhatsApp limita o corpo da mensagem a 1024 caracteres.
              </p>
            </section>

            {/* Interactive Buttons */}
            <section className="bg-surface-dark border border-border-dark rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">touch_app</span>
                Botões Interativos (Quick Replies)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-background-dark p-3 rounded-lg border border-border-dark group">
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary cursor-grab">drag_indicator</span>
                  <div className="flex-1">
                    <input className="bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-slate-100 w-full outline-none" type="text" defaultValue="Pagar agora" />
                  </div>
                  <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-1 rounded font-bold uppercase">URL</span>
                  <button className="text-slate-500 hover:text-red-400">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 bg-background-dark p-3 rounded-lg border border-border-dark group">
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary cursor-grab">drag_indicator</span>
                  <div className="flex-1">
                    <input className="bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-slate-100 w-full outline-none" type="text" defaultValue="Falar no WhatsApp" />
                  </div>
                  <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-1 rounded font-bold uppercase">Telefone</span>
                  <button className="text-slate-500 hover:text-red-400">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
                <button className="w-full border-2 border-dashed border-border-dark hover:border-primary/50 hover:bg-primary/5 py-3 rounded-lg text-slate-400 text-sm font-medium transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Adicionar Botão (Máx 3)
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Right Side: Preview */}
        <div className="lg:w-[450px] p-6 lg:p-8 bg-surface-dark/30 border-l border-border-dark flex items-center justify-center">
          <div className="w-full max-w-[320px] aspect-[9/18.5] bg-[#0b141a] rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
            {/* Phone Status Bar */}
            <div className="h-6 w-full flex justify-between items-center px-6 pt-2">
              <span className="text-[10px] text-white font-bold">14:32</span>
              <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-[12px] text-white">signal_cellular_4_bar</span>
                <span className="material-symbols-outlined text-[12px] text-white">wifi</span>
                <span className="material-symbols-outlined text-[12px] text-white">battery_full</span>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-[#202c33] p-3 flex items-center gap-3">
              <div className="size-8 rounded-full bg-slate-600 flex items-center justify-center overflow-hidden">
                <div className="bg-slate-500 w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-300 text-xl">person</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-white">NetUltra Cobrança</p>
                <p className="text-[8px] text-slate-400">Online</p>
              </div>
            </div>

            {/* Chat Background */}
            <div className="flex-1 whatsapp-bg bg-repeat relative p-3">
              <div className="max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-none p-2 shadow-sm relative mb-2">
                <p className="text-[11px] text-white whitespace-pre-wrap leading-relaxed">
                  Olá João Silva, <br/><br/>
                  Espero que esteja bem! 👋<br/>
                  Estamos enviando sua fatura com vencimento em 15/10/2023 no valor de R$ 149,90.<br/><br/>
                  Você pode realizar o pagamento através do link abaixo ou utilizando o botão &apos;Pagar agora&apos; nesta mensagem.<br/><br/>
                  Link: fatura.netultra.com/a2b3c<br/><br/>
                  Qualquer dúvida, estamos à disposição!
                </p>
                <div className="flex justify-end mt-1">
                  <span className="text-[8px] text-slate-400">14:32</span>
                </div>
              </div>

              {/* Preview Buttons */}
              <div className="space-y-1 mb-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg py-2 flex items-center justify-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-white text-[14px]">payments</span>
                  <span className="text-[11px] font-bold text-white">Pagar agora</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg py-2 flex items-center justify-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-white text-[14px]">chat_bubble</span>
                  <span className="text-[11px] font-bold text-white">Falar no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Keyboard Placeholder */}
            <div className="bg-[#202c33] p-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">add</span>
              <div className="flex-1 bg-[#2a3942] rounded-full h-8 flex items-center px-4">
                <span className="text-[10px] text-slate-500">Mensagem</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">mic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
