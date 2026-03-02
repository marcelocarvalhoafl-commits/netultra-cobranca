"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white p-6 text-center">
      <h2 className="text-3xl font-black tracking-tighter mb-4">Algo deu errado!</h2>
      <p className="text-slate-400 mb-8 max-w-md">
        Ocorreu um erro inesperado ao carregar esta página. Isso pode ser um problema temporário de cache.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          Tentar Novamente
        </Button>
        <Button onClick={() => window.location.reload()} variant="outline">
          Recarregar Página
        </Button>
      </div>
    </div>
  );
}
