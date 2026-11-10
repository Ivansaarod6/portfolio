"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muestra una imagen y, si el archivo no existe, enseña `alternativa` en su lugar.
 * (Se comprueba también al cargar, porque la imagen puede fallar antes de que React esté listo.)
 */
export default function Imagen({
  src,
  alt,
  className,
  alternativa,
}: {
  src?: string;
  alt: string;
  className?: string;
  alternativa: React.ReactNode;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [error, setError] = useState(!src);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setError(true);
  }, []);

  if (error) return <>{alternativa}</>;

  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} onError={() => setError(true)} className={className} />;
}
