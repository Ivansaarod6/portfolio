"use client";

import { useState } from "react";
import Seccion from "./Seccion";
import { proyectos, tecnologias, type Rareza, type Tipo } from "@/data/portfolio";
import { useLogros } from "./Logros";

const rarezas: Record<Rareza, { nombre: string; color: string; texto: string }> = {
  legendaria: { nombre: "Legendaria", color: "#ff9d2e", texto: "Mi stack principal, lo uso a diario" },
  epica: { nombre: "Épica", color: "#a970ff", texto: "La uso en proyectos reales" },
  rara: { nombre: "Rara", color: "#3ea6ff", texto: "Usada en formación y prácticas" },
  comun: { nombre: "Común", color: "#8f8aa3", texto: "Sistemas y administración" },
};

const tipos: ("Todo" | Tipo)[] = ["Todo", "Frontend", "Backend y datos", "Despliegue", "Sistemas"];

export default function Inventario() {
  const { desbloquear } = useLogros();
  const [tipo, setTipo] = useState<(typeof tipos)[number]>("Todo");
  const [sel, setSel] = useState(tecnologias[0].id);
  const [vistos, setVistos] = useState<Set<string>>(new Set());

  const visibles = tecnologias.filter((t) => tipo === "Todo" || t.tipo === tipo);
  const t = tecnologias.find((x) => x.id === sel) ?? tecnologias[0];
  const r = rarezas[t.rareza];
  const usadaEn = proyectos.filter((p) => p.tecnologias.includes(t.id));

  function examinar(id: string) {
    setSel(id);
    const item = tecnologias.find((x) => x.id === id);
    if (item?.rareza === "legendaria") desbloquear("legendaria");
    const nuevos = new Set(vistos).add(id);
    setVistos(nuevos);
    if (nuevos.size >= 5) desbloquear("inventario");
  }

  return (
    <Seccion
      id="stack"
      etiqueta="02 · Tecnologías"
      titulo="Las tecnologías que domino"
      subtitulo="Cada tecnología es un objeto del inventario. El color indica cuánto la uso: pasa el ratón o pulsa sobre una para examinarla."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {tipos.map((x) => (
          <button
            key={x}
            onClick={() => setTipo(x)}
            className={`rounded-lg border px-4 py-2 text-sm transition ${
              tipo === x ? "border-lime bg-lime text-ink" : "border-line text-muted hover:border-muted hover:text-cream"
            }`}
          >
            {x}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-line bg-panel p-4 md:p-5">
          <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6">
            {visibles.map((x) => (
              <button
                key={x.id}
                onMouseEnter={() => examinar(x.id)}
                onFocus={() => examinar(x.id)}
                onClick={() => examinar(x.id)}
                aria-label={x.nombre}
                className={`r-${x.rareza} pop relative flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border-2 bg-ink transition hover:-translate-y-1 ${
                  sel === x.id ? "ring-2 ring-lime ring-offset-2 ring-offset-panel" : ""
                }`}
              >
                <span
                  className="flex h-9 min-w-9 items-center justify-center rounded-lg px-1.5 font-mono text-[11px] font-bold text-ink"
                  style={{ background: x.color }}
                >
                  {x.sigla}
                </span>
                {vistos.has(x.id) && <span className="absolute right-1.5 top-1 text-[9px] text-lime">✓</span>}
              </button>
            ))}
            {/* Huecos vacíos para que parezca un inventario */}
            {Array.from({ length: Math.max(0, 12 - visibles.length) }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl border-2 border-dashed border-line/60" />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 px-1">
            {(Object.keys(rarezas) as Rareza[]).map((k) => (
              <span key={k} className="flex items-center gap-2 text-xs text-muted">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: rarezas[k].color }} />
                {rarezas[k].nombre}
              </span>
            ))}
            <span className="ml-auto font-mono text-xs text-muted">
              {vistos.size}/{tecnologias.length} vistas
            </span>
          </div>
        </div>

        {/* Ficha del objeto */}
        <div key={t.id} className="pop relative self-start rounded-3xl border-2 bg-panel p-7" style={{ borderColor: r.color }}>
          <div className="flex items-start gap-5">
            <span
              className="flex h-16 min-w-16 items-center justify-center rounded-2xl px-3 font-mono text-lg font-bold text-ink"
              style={{ background: t.color }}
            >
              {t.sigla}
            </span>
            <div>
              <h3 className="text-2xl font-bold">{t.nombre}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider" style={{ color: r.color }}>
                {r.nombre.toUpperCase()} · {t.tipo.toUpperCase()}
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg">{t.descripcion}</p>
          <p className="mt-2 text-sm text-muted">{r.texto}.</p>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-sm text-muted">Usada en</p>
            {usadaEn.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {usadaEn.map((p) => (
                  <a key={p.id} href={p.url} target="_blank" rel="noreferrer" onClick={() => desbloquear("cliente")} className="rounded-lg border border-line px-3 py-1.5 text-sm hover:border-lime">
                    {p.nombre} ↗
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted">Formación y experiencia profesional.</p>
            )}
          </div>
        </div>
      </div>
    </Seccion>
  );
}
