import Hero from "@/components/Hero";
import Proyectos from "@/components/Proyectos";
import Inventario from "@/components/Inventario";
import QueHago from "@/components/QueHago";
import Trayectoria from "@/components/Trayectoria";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Proyectos />
      <Inventario />
      <QueHago />
      <Trayectoria />
      <Contacto />
    </main>
  );
}
