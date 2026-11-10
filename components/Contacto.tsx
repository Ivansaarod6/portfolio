"use client";

import { useState } from "react";
import { perfil } from "@/data/portfolio";
import { DesbloquearAlVer } from "./Logros";

export default function Contacto() {
  const [copiado, setCopiado] = useState(false);

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {}
  }

  return (
    <footer id="contacto" className="mt-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">05 · Contacto</p>
        <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">¿Hablamos?</h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
          Estoy abierto a nuevos proyectos y a oportunidades como desarrollador web. Escríbeme y te respondo pronto.
        </p>

        <DesbloquearAlVer id="recluta">
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${perfil.email}`}
              className="rounded-xl bg-lime px-7 py-4 font-medium text-ink transition hover:brightness-110"
            >
              Enviar un email
            </a>
            <button
              onClick={copiarEmail}
              className="rounded-xl border border-line px-7 py-4 font-medium transition hover:border-lime"
            >
              {copiado ? "✓ Copiado" : "Copiar dirección"}
            </button>
          </div>
        </DesbloquearAlVer>

        <p className="mt-6 break-all text-muted">{perfil.email}</p>
        <p className="mt-2 text-xs text-muted">
          ¿El botón de email no abre nada? Necesitas un programa de correo configurado. Copia la dirección y escríbeme desde tu Gmail.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a href={perfil.github} target="_blank" rel="noreferrer" className="hover:text-lime">
            GitHub ↗
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime">
            LinkedIn ↗
          </a>
        </div>

        
      </div>
    </footer>
  );
}
