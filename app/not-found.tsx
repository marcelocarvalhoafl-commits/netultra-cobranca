import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white p-6">
      <h1 className="text-9xl font-black tracking-tighter text-primary/20 absolute">404</h1>
      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-4xl font-black tracking-tighter">Página não encontrada</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/dashboard"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors mt-8"
        >
          Voltar ao Dashboard
        </Link>
      </div>
    </div>
  );
}
