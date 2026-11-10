"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { logros, type LogroId } from "@/data/portfolio";

type Ctx = { desbloquear: (id: LogroId) => void; conseguidos: Set<LogroId> };
const LogrosCtx = createContext<Ctx>({ desbloquear: () => {}, conseguidos: new Set() });

export const useLogros = () => useContext(LogrosCtx);

const CLAVE = "portfolio-logros";

export function LogrosProvider({ children }: { children: React.ReactNode }) {
  const [conseguidos, setConseguidos] = useState<Set<LogroId>>(new Set());
  const [toast, setToast] = useState<LogroId | null>(null);
  const [abierto, setAbierto] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const cargado = useRef(false);

  // Recupera los logros guardados en el navegador
  useEffect(() => {
    try {
      const guardados = JSON.parse(localStorage.getItem(CLAVE) ?? "[]") as LogroId[];
      setConseguidos(new Set(guardados));
    } catch {}
    cargado.current = true;
  }, []);

  const desbloquear = useCallback((id: LogroId) => {
    if (!cargado.current) {
      setTimeout(() => desbloquear(id), 50);
      return;
    }
    setConseguidos((prev) => {
      if (prev.has(id)) return prev;
      const nuevo = new Set(prev).add(id);
      try {
        localStorage.setItem(CLAVE, JSON.stringify([...nuevo]));
      } catch {}
      setToast(id);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setToast(null), 3200);
      return nuevo;
    });
  }, []);

  const reiniciar = () => {
    setConseguidos(new Set());
    try {
      localStorage.removeItem(CLAVE);
    } catch {}
  };

  const logroToast = logros.find((l) => l.id === toast);
  const total = logros.length;
  const pct = Math.round((conseguidos.size / total) * 100);

  return (
    <LogrosCtx.Provider value={{ desbloquear, conseguidos }}>
      {children}

      {/* Botón HUD de logros */}
      <button
        onClick={() => setAbierto((a) => !a)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-line bg-panel/90 py-2 pl-3 pr-4 text-sm shadow-xl backdrop-blur transition hover:border-lime"
        aria-expanded={abierto}
      >
        <span className="text-xs text-muted">Logros</span>
        <span className="font-pixel text-[10px]">
          {conseguidos.size}/{total}
        </span>
        <span className="h-1.5 w-16 overflow-hidden rounded-full bg-line">
          <span className="block h-full bg-lime transition-all duration-500" style={{ width: `${pct}%` }} />
        </span>
      </button>

      {abierto && (
        <div className="pop fixed bottom-20 right-5 z-40 w-80 rounded-2xl border border-line bg-panel p-5 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-pixel text-[11px] text-lime">LOGROS</p>
            <button onClick={reiniciar} className="text-xs text-muted hover:text-cream">
              Reiniciar
            </button>
          </div>
          <ul className="space-y-2">
            {logros.map((l) => {
              const ok = conseguidos.has(l.id);
              return (
                <li key={l.id} className={`flex items-center gap-3 rounded-lg p-2 ${ok ? "bg-lime/10" : "opacity-45"}`}>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-sm ${
                      ok ? "border-lime bg-lime text-ink" : "border-line text-muted"
                    }`}
                  >
                    {ok ? "✓" : "?"}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{ok ? l.nombre : "???"}</p>
                    <p className="text-xs text-muted">{l.texto}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Aviso de logro desbloqueado */}
      {logroToast && (
        <div
          key={logroToast.id}
          className="toast fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-lime/50 bg-panel px-5 py-3 shadow-xl"
          role="status"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime text-lg font-bold text-ink">✓</span>
          <div>
            <p className="font-pixel text-[9px] text-lime">LOGRO DESBLOQUEADO</p>
            <p className="mt-1 font-medium">{logroToast.nombre}</p>
          </div>
        </div>
      )}
    </LogrosCtx.Provider>
  );
}

/** Desbloquea un logro cuando el elemento entra en pantalla */
export function DesbloquearAlVer({ id, children }: { id: LogroId; children?: React.ReactNode }) {
  const { desbloquear } = useLogros();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        desbloquear(id);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [id, desbloquear]);
  return <div ref={ref}>{children}</div>;
}
