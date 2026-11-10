export default function Seccion({
  id,
  etiqueta,
  titulo,
  subtitulo,
  children,
}: {
  id: string;
  etiqueta: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-10 px-6 py-24">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">{etiqueta}</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{titulo}</h2>
        {subtitulo && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitulo}</p>}
      </div>
      {children}
    </section>
  );
}
