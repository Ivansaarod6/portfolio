"use client";

import { useEffect } from "react";
import Imagen from "./Imagen";
import { perfil, tecnologias } from "@/data/portfolio";
import { useLogros } from "./Logros";

export default function Hero() {
  const { desbloquear } = useLogros();

  useEffect(() => {
    const t = setTimeout(() => desbloquear("inicio"), 900);
    return () => clearTimeout(t);
  }, [desbloquear]);

  const stackPrincipal = tecnologias.filter((t) => t.rareza === "legendaria");
  const [nombre, ...apellidos] = perfil.nombre.split(" ");

  return (
    <header className="relative">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-mono text-sm text-lime">iván.dev</span>
        <div className="hidden gap-7 text-sm text-muted sm:flex">
          <a href="#proyectos" className="hover:text-cream">Proyectos</a>
          <a href="#stack" className="hover:text-cream">Tecnologías</a>
          <a href="#que-hago" className="hover:text-cream">Servicios</a>
          <a href="#contacto" className="hover:text-cream">Contacto</a>
        </div>
      </nav>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.25fr_1fr] lg:pt-20">
        <div>
          <p className="text-muted">{perfil.base}</p>
          <h1 className="mt-4 text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            {nombre}
            <br />
            <span className="text-lime">{apellidos.join(" ")}</span>
          </h1>
          <p className="mt-6 text-2xl font-medium">{perfil.rol}</p>
          <p className="mt-4 max-w-xl text-lg text-muted">{perfil.frase}</p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#proyectos"
              className="rounded-xl bg-lime px-6 py-3.5 font-medium text-ink transition hover:brightness-110"
            >
              Ver proyectos
            </a>
            <a href={perfil.github} target="_blank" rel="noreferrer" className="text-muted underline-offset-4 hover:text-cream hover:underline">
              GitHub ↗
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="text-muted underline-offset-4 hover:text-cream hover:underline">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-panel p-6">
          <div className="flex items-center gap-5">
            <Imagen
              src={perfil.foto}
              alt={perfil.nombreCompleto}
              className="h-20 w-20 shrink-0 rounded-2xl object-cover"
              alternativa={
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-lime text-2xl font-bold text-ink">
                  IS
                </div>
              }
            />
            <div>
              <p className="font-bold">{perfil.nombreCompleto}</p>
              <p className="mt-1 text-sm text-muted">{perfil.rol}</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted">Con lo que trabajo cada día</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stackPrincipal.map((t) => (
              <span key={t.id} className="flex items-center gap-1.5 rounded-lg border border-line px-2 py-1 text-xs">
                <span className="h-2 w-2 rounded-full" style={{ background: t.color }} />
                {t.nombre}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-sm font-medium">{perfil.extra.titulo}</p>
            <p className="mt-1 text-sm text-muted">{perfil.extra.texto}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
