"use client";

import { useState } from "react";
import Seccion from "./Seccion";
import { servicios, proximas, etapas, tecnologias } from "@/data/portfolio";
import { DesbloquearAlVer, useLogros } from "./Logros";

const numero = (i: number) => String(i + 1).padStart(2, "0");

export default function QueHago() {
  const { desbloquear } = useLogros();
  const [activo, setActivo] = useState(servicios[0].id);
  const [vistos, setVistos] = useState<string[]>([servicios[0].id]);

  const indice = servicios.findIndex((x) => x.id === activo);
  const s = servicios[indice];

  function elegir(id: string) {
    setActivo(id);
    if (vistos.includes(id)) return;
    const nuevos = [...vistos, id];
    setVistos(nuevos);
    if (nuevos.length === servicios.length) desbloquear("servicios");
  }

  return (
    <Seccion
      id="que-hago"
      etiqueta="03 · Servicios"
      titulo="En qué te puedo ayudar"
      subtitulo="Pulsa en cada servicio para ver qué incluye y un ejemplo real."
    >
      {/* Servicios con pestañas */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-3">
          {servicios.map((x, i) => (
            <button
              key={x.id}
              onClick={() => elegir(x.id)}
              className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                activo === x.id ? "border-lime bg-panel" : "border-line hover:border-muted"
              }`}
            >
              <span className={`font-mono text-sm ${activo === x.id ? "text-lime" : "text-muted"}`}>{numero(i)}</span>
              <span className="font-medium">{x.titulo}</span>
            </button>
          ))}
        </div>

        <div key={s.id} className="pop rounded-3xl border border-line bg-panel p-8">
          <span className="font-mono text-5xl font-bold text-lime">{numero(indice)}</span>
          <h3 className="mt-4 text-3xl font-bold">{s.titulo}</h3>
          <p className="mt-4 text-lg text-muted">{s.texto}</p>

          <p className="mt-6 text-sm text-muted">Ejemplo real</p>
          <p className="mt-1 text-lime">{s.ejemplo}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {s.tecnologias.map((id) => {
              const t = tecnologias.find((x) => x.id === id);
              if (!t) return null;
              return (
                <span key={id} className="flex items-center gap-1.5 rounded-md bg-ink px-2.5 py-1 text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
                  {t.nombre}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* En lo que estoy ahora */}
      <h3 className="mt-20 text-3xl font-bold">En lo que estoy ahora</h3>
      <DesbloquearAlVer id="futuro">
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {proximas.map((p) => (
            <div key={p.id} className="rounded-3xl border border-line bg-panel p-7">
              <h4 className="text-2xl font-bold">{p.titulo}</h4>
              <p className="mt-3 text-muted">{p.texto}</p>

              {/* Línea de etapas */}
              <div className="mt-8 flex items-center">
                {etapas.map((e, i) => (
                  <div key={e} className="flex flex-1 flex-col items-center">
                    <div className="flex w-full items-center">
                      <div className={`h-0.5 flex-1 ${i === 0 ? "opacity-0" : i <= p.etapa ? "bg-lime" : "bg-line"}`} />
                      <div
                        className={`h-4 w-4 rounded-full border-2 ${
                          i < p.etapa ? "border-lime bg-lime" : i === p.etapa ? "pulse-dot border-lime bg-ink" : "border-line bg-ink"
                        }`}
                      />
                      <div className={`h-0.5 flex-1 ${i === etapas.length - 1 ? "opacity-0" : i < p.etapa ? "bg-lime" : "bg-line"}`} />
                    </div>
                    <span className={`mt-2 text-xs ${i === p.etapa ? "font-bold text-lime" : "text-muted"}`}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DesbloquearAlVer>
    </Seccion>
  );
}
