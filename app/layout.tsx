import type { Metadata } from "next";
import "./globals.css";
import { LogrosProvider } from "@/components/Logros";

export const metadata: Metadata = {
  title: "Iván Saavedra · Desarrollador Full-Stack",
  description: "Portfolio de Iván Saavedra: proyectos reales en uso por clientes y las tecnologías con las que trabajo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <LogrosProvider>{children}</LogrosProvider>
      </body>
    </html>
  );
}
