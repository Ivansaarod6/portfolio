"use client";

import Seccion from "./Seccion";
import Imagen from "./Imagen";
import { proyectos, tecnologias, type Estado, type Proyecto } from "@/data/portfolio";
import { useLogros } from "./Logros";

const estados: Record<Estado, { texto: string; color: string }> = {
  cliente: { texto: "En uso por el cliente", color: "#4ade80" },
  produccion: { texto: "En producción", color: "#4ade80" },
  desarrollo: { texto: "En desarrollo", color: "#facc15" },
};

function Tarjeta({ p }: { p: Proyecto }) {
  const { desbloquear } = useLogros();
  const e = estados[p.estado];
  const dominio = p.url?.replace(/^https?:\/\//, "");

  const vistaPrevia = (
    <div
      className="flex h-full w-full flex-col items-start justify-end p-6"
      style={{ background: `linear-gradient(135deg, ${p.color}30, #15131f 75%)` }}
    >
      <span className="text-sm" style={{ color: p.color }}>
        {p.tipo}
      </span>
      <span className="mt-1 text-3xl font-bold md:text-4xl">{p.nombre}</span>
    </div>
  );

  const Contenido = (
    <>
      <div className="overflow-hidden rounded-2xl border border-line bg-ink">
        <div className="border-b border-line px-4 py-2">
          <span className="font-mono text-[11px] text-muted">{dominio ?? "próximamente"}</span>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Imagen
            src={p.imagen}
            alt={`Captura de ${p.nombre}`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            alternativa={vistaPrevia}
          />
          {p.url && (
            <span className="absolute bottom-4 right-4 rounded-full bg-lime px-4 py-2 text-sm font-bold text-ink opacity-0 transition group-hover:opacity-100">
              Visitar web ↗
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-bold">{p.nombre}</h3>
        <span
          className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
          style={{ borderColor: `${e.color}66`, color: e.color }}
        >
          <span className="pulse-dot h-2 w-2 rounded-full" style={{ background: e.color }} />
          {e.texto}
        </span>
      </div>
      <p className="mt-3 text-muted">{p.descripcion}</p>

      <ul className="mt-5 space-y-2 text-sm">
        {p.logros.map((l) => (
          <li key={l} className="flex gap-3">
            <span className="text-lime">✓</span>
            {l}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tecnologias.map((id) => {
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
    </>
  );

  const clases =
    "group block rounded-3xl border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-lime/60 md:p-6";

  return p.url ? (
    <a href={p.url} target="_blank" rel="noreferrer" onClick={() => desbloquear("cliente")} className={clases}>
      {Contenido}
    </a>
  ) : (
    <div className={clases}>{Contenido}</div>
  );
}

export default function Proyectos() {
  return (
    <Seccion
      id="proyectos"
      etiqueta="01 · Proyectos"
      titulo="Proyectos reales"
      subtitulo="Webs que están funcionando ahora mismo para negocios de verdad. Pincha en cualquiera para visitarla."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {proyectos.map((p) => (
          <Tarjeta key={p.id} p={p} />
        ))}
      </div>
    </Seccion>
  );
}
