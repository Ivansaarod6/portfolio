import Seccion from "./Seccion";
import { trayectoria } from "@/data/portfolio";

export default function Trayectoria() {
  return (
    <Seccion id="trayectoria" etiqueta="04 · Trayectoria" titulo="Mi trayectoria">
      <ol className="relative ml-3 border-l-2 border-dashed border-line">
        {trayectoria.map((t, i) => (
          <li key={t.titulo} className="relative pb-12 pl-10 last:pb-0">
            <span
              className={`absolute -left-[11px] top-1 h-5 w-5 rounded-md border-2 ${
                i === 0 ? "border-lime bg-lime" : "border-line bg-ink"
              }`}
            />
            <p className="font-mono text-xs text-lime">{t.fecha}</p>
            <h3 className="mt-3 text-xl font-bold">{t.titulo}</h3>
            <p className="text-muted">
              {t.lugar} · {t.texto}
            </p>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
