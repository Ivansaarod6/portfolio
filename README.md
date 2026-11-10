# Portfolio · Iván Saavedra

Portfolio personal: proyectos reales enlazados, inventario de tecnologías, servicios,
proyectos en marcha y un pequeño sistema de logros.

Hecho con Next.js (App Router), TypeScript y Tailwind CSS, el mismo stack que Citapp Pro.

## Arrancarlo en VS Code

1. Descomprime la carpeta y ábrela en VS Code (Archivo → Abrir carpeta).
2. Abre la terminal (Ctrl + ñ) y ejecuta:

   ```
   npm install
   npm run dev
   ```

3. Abre http://localhost:3000

## Cambiar el contenido

Todo está en **`data/portfolio.ts`**:

- **Proyectos:** nombre, descripción, enlace, estado (`"cliente"` = En uso por el cliente,
  `"produccion"`, `"desarrollo"`) y tecnologías usadas.
## Imágenes (solo tienes que copiarlas con estos nombres)

- `public/foto.jpg` → tu foto (si no está, salen tus iniciales)
- `public/proyectos/optica.png` → captura de la web de la óptica
- `public/proyectos/mariolopez.png` → captura de la web de la barbería

Si una imagen no existe, la web muestra una alternativa en su lugar y no se rompe nada.
Capturas recomendadas: 1600×900 (formato 16:9).
- **Tecnologías:** nombre, color y rareza (legendaria, épica, rara, común).
- **Trayectoria y logros.**

Colores y fuentes: `app/globals.css` (bloque `@theme`).

## Subirlo a Vercel

Súbelo a un repo de GitHub, impórtalo en vercel.com y despliega. No necesita variables de entorno.
