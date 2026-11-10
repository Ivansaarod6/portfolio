// ─────────────────────────────────────────────────────────────
//  Todo el contenido del portfolio está aquí. Edita este archivo
//  y la web se actualiza sola: no hace falta tocar componentes.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: "Iván Saavedra",
  nombreCompleto: "Iván Saavedra Rodríguez",
  rol: "Desarrollador Full-Stack",
  base: "El Ejido, Almería",
  email: "saavedrarodriguezivan47@gmail.com",
  github: "https://github.com/Ivansaarod6",
  linkedin: "https://www.linkedin.com/in/ivan-saavedra-rodr%C3%ADguez-732501381",
  // Pon tu foto en /public/foto.jpg. Si no existe, se muestran tus iniciales.
  foto: "/foto.jpg",
  frase:
    "Soy de Balerma y hago webs y aplicaciones para negocios. Me encargo de todo, desde que el cliente me cuenta lo que necesita hasta que la web está publicada y funcionando.",
  extra: {
    titulo: "Cinco años de trato con clientes",
    texto:
      "Antes de programar he trabajado de cara al público. Eso me ha enseñado a entender lo que necesita alguien aunque no sepa explicarlo con palabras técnicas.",
  },
};

// ── PROYECTOS ────────────────────────────────────────────────
// estado: "cliente" = en uso por el cliente · "produccion" = en producción · "desarrollo" = en desarrollo
// imagen: guarda la captura en /public/proyectos/ con el nombre que pone aquí.
//         Si la imagen no existe, se muestra una vista previa de color.
export type Estado = "cliente" | "produccion" | "desarrollo";

export type Proyecto = {
  id: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  url?: string;
  estado: Estado;
  imagen?: string;
  color: string; // color de la vista previa si no hay imagen
  tecnologias: string[]; // ids de la lista de tecnologías de abajo
  logros: string[];
};

export const proyectos: Proyecto[] = [
  {
    id: "optica",
    nombre: "Centro Óptico Sabio",
    tipo: "Web corporativa",
    descripcion:
      "Una óptica de la zona. Cuando cerró Hocoos, la plataforma donde tenían la web, se quedaron sin ella de un día para otro. La recuperé y después les hice una nueva con código propio.",
    url: "https://centroopticosabio.vercel.app",
    estado: "cliente",
    imagen: "/proyectos/optica.png",
    color: "#38bdf8",
    tecnologias: ["react", "tanstack", "tailwind", "vercel", "cloudflare", "git"],
    logros: [
      "Recuperé la web y el correo después del cierre de Hocoos",
      "Web nueva con código propio, sin depender de ninguna plataforma",
    ],
  },
  {
    id: "mariolopez",
    nombre: "Barbería Mario López",
    tipo: "Web con reservas online",
    descripcion:
      "Barbería de Puente del Río. Sus clientes reservan cita desde la web y él lleva la agenda desde su panel. Funciona con Citapp Pro, la plataforma de reservas que he desarrollado.",
    url: "https://app-mariolopez.vercel.app",
    estado: "cliente",
    imagen: "/proyectos/mariolopez.png",
    color: "#d4a24c",
    tecnologias: ["nextjs", "typescript", "tailwind", "supabase", "postgres", "authjs", "vercel", "git"],
    logros: [
      "Reservas online con horarios distintos para cada empleado",
      "Bloqueos, días especiales y descansos configurables desde el panel",
      "Control en la base de datos para que nunca haya dos citas a la misma hora",
    ],
  },
];

// ── TECNOLOGÍAS ──────────────────────────────────────────────
// rareza: "legendaria" = mi stack principal · "epica" = la uso en proyectos
//         "rara" = la he usado en formación/prácticas · "comun" = sistemas
export type Rareza = "legendaria" | "epica" | "rara" | "comun";
export type Tipo = "Frontend" | "Backend y datos" | "Despliegue" | "Sistemas";

export type Tecnologia = {
  id: string;
  nombre: string;
  sigla: string;
  color: string;
  tipo: Tipo;
  rareza: Rareza;
  descripcion: string;
};

export const tecnologias: Tecnologia[] = [
  { id: "nextjs", nombre: "Next.js", sigla: "N", color: "#f5f5f5", tipo: "Frontend", rareza: "legendaria", descripcion: "Mi framework principal. App Router, rutas dinámicas y API propia." },
  { id: "typescript", nombre: "TypeScript", sigla: "TS", color: "#3178c6", tipo: "Frontend", rareza: "legendaria", descripcion: "El lenguaje en el que escribo casi todo, tanto la parte visual como el servidor." },
  { id: "tailwind", nombre: "Tailwind CSS", sigla: "TW", color: "#38bdf8", tipo: "Frontend", rareza: "legendaria", descripcion: "Para maquetar rápido y que todo se vea bien en el móvil." },
  { id: "react", nombre: "React", sigla: "R", color: "#61dafb", tipo: "Frontend", rareza: "legendaria", descripcion: "Interfaces por componentes: paneles, modales, formularios." },
  { id: "supabase", nombre: "Supabase", sigla: "SB", color: "#3ecf8e", tipo: "Backend y datos", rareza: "legendaria", descripcion: "Base de datos PostgreSQL y backend de mis aplicaciones." },
  { id: "vercel", nombre: "Vercel", sigla: "▲", color: "#ffffff", tipo: "Despliegue", rareza: "legendaria", descripcion: "Donde publico los proyectos de mis clientes." },
  { id: "postgres", nombre: "PostgreSQL / SQL", sigla: "SQL", color: "#6d9eeb", tipo: "Backend y datos", rareza: "epica", descripcion: "Modelado de datos, índices y consultas." },
  { id: "authjs", nombre: "Auth.js + JWT", sigla: "JWT", color: "#c084fc", tipo: "Backend y datos", rareza: "epica", descripcion: "Login y sesiones seguras, contraseñas cifradas con bcrypt." },
  { id: "javascript", nombre: "JavaScript", sigla: "JS", color: "#f7df1e", tipo: "Frontend", rareza: "epica", descripcion: "La base de todo lo que hago en web." },
  { id: "html", nombre: "HTML y CSS", sigla: "</>", color: "#e34f26", tipo: "Frontend", rareza: "epica", descripcion: "Maquetación semántica y accesible." },
  { id: "tanstack", nombre: "TanStack Start", sigla: "TS·S", color: "#ff7a59", tipo: "Frontend", rareza: "epica", descripcion: "Framework de React que usé en la web de la óptica." },
  { id: "git", nombre: "Git y GitHub", sigla: "GIT", color: "#f05033", tipo: "Despliegue", rareza: "epica", descripcion: "Control de versiones y un repositorio para cada cliente." },
  { id: "cloudflare", nombre: "Cloudflare", sigla: "CF", color: "#f38020", tipo: "Despliegue", rareza: "epica", descripcion: "Cloudflare Pages y gestión de DNS." },
  { id: "angular", nombre: "Angular", sigla: "A", color: "#dd0031", tipo: "Frontend", rareza: "rara", descripcion: "Lo usé en mis prácticas en CodeArts." },
  { id: "java", nombre: "Java", sigla: "J", color: "#ed8b00", tipo: "Backend y datos", rareza: "rara", descripcion: "Dos años de Java durante mi formación." },
  { id: "azure", nombre: "Azure", sigla: "AZ", color: "#0089d6", tipo: "Sistemas", rareza: "comun", descripcion: "Servicios en la nube de Microsoft." },
  { id: "m365", nombre: "Microsoft 365", sigla: "365", color: "#ea3e23", tipo: "Sistemas", rareza: "comun", descripcion: "Administración de entornos de oficina." },
  { id: "ad", nombre: "Active Directory", sigla: "AD", color: "#7fba00", tipo: "Sistemas", rareza: "comun", descripcion: "Usuarios, equipos y permisos en red." },
];

// ── SERVICIOS ────────────────────────────────────────────────
export const servicios = [
  {
    id: "webs",
    titulo: "Webs para negocios",
    texto:
      "Webs rápidas que se vean bien en el móvil. El código es del cliente, así que no depende de ninguna plataforma para cambiar algo o llevarse la web a otro sitio.",
    ejemplo: "Centro Óptico Sabio",
    tecnologias: ["nextjs", "react", "tailwind", "vercel"],
  },
  {
    id: "reservas",
    titulo: "Sistemas de reservas",
    texto:
      "Que los clientes reserven solos a cualquier hora y el negocio lo controle todo desde un panel, con sus horarios, sus empleados y sus días libres.",
    ejemplo: "Barbería Mario López",
    tecnologias: ["nextjs", "typescript", "supabase", "postgres"],
  },
  {
    id: "rescate",
    titulo: "Rescate y migración de webs",
    texto:
      "Si la web se cae o la plataforma donde está cierra, la recupero y la paso a un sitio estable sin perder el dominio ni el correo.",
    ejemplo: "Centro Óptico Sabio",
    tecnologias: ["cloudflare", "vercel", "git"],
  },
  {
    id: "paneles",
    titulo: "Paneles de administración y datos",
    texto:
      "Un panel privado para que el negocio lleve su día a día, con login seguro, una base de datos bien montada y estadísticas para ver qué servicios y qué empleados funcionan mejor.",
    ejemplo: "Panel de Citapp Pro en la Barbería Mario López",
    tecnologias: ["nextjs", "typescript", "supabase", "authjs"],
  },
];

// ── EN LO QUE ESTOY AHORA ────────────────────────────────────
export const etapas = ["Idea", "Diseño", "Desarrollo", "Lanzado"];

export const proximas = [
  {
    id: "ahorro",
    titulo: "App de ahorro para casa",
    texto:
      "Una app para llevar los gastos de casa que te vaya diciendo dónde se te está yendo el dinero y qué puedes hacer para no derrochar tanto, sin tener que saber de finanzas.",
    etapa: 0, // 0 = Idea, 1 = Diseño, 2 = Desarrollo, 3 = Lanzado
  },
  {
    id: "citapp-clientes",
    titulo: "Más negocios en Citapp Pro",
    texto:
      "Citapp ya funciona en barberías reales. Ahora quiero llevarlo a más negocios de la zona que siguen apuntando las citas en una libreta o por WhatsApp.",
    etapa: 3,
  },
];

// ── TRAYECTORIA ──────────────────────────────────────────────
export const trayectoria = [
  { fecha: "Hoy", titulo: "Desarrollador full-stack freelance", lugar: "Proyectos para clientes", texto: "Webs y aplicaciones en uso por negocios reales." },
  { fecha: "2025", titulo: "Prácticas de desarrollador web", lugar: "CodeArts", texto: "Desarrollo con Angular dentro de un equipo." },
  { fecha: "2023 – 2025", titulo: "Grado Superior en DAW", lugar: "Cesur Murcia", texto: "Desarrollo de Aplicaciones Web." },
  { fecha: "2021 – 2023", titulo: "Grado Medio en SMR", lugar: "IES Murgi", texto: "Sistemas Microinformáticos y Redes." },
];

// ── LOGROS ───────────────────────────────────────────────────
export const logros = [
  { id: "inicio", nombre: "Bienvenido", texto: "Has entrado en el portfolio" },
  { id: "cliente", nombre: "Visita de campo", texto: "Has abierto un proyecto real" },
  { id: "legendaria", nombre: "Botín legendario", texto: "Has encontrado una tecnología legendaria" },
  { id: "inventario", nombre: "Coleccionista", texto: "Has examinado 5 tecnologías" },
  { id: "servicios", nombre: "Curioso", texto: "Has mirado los 4 servicios" },
  { id: "futuro", nombre: "Visionario", texto: "Has visto en lo que estoy trabajando" },
  { id: "recluta", nombre: "Hasta el final", texto: "Has llegado al contacto" },
] as const;

export type LogroId = (typeof logros)[number]["id"];
