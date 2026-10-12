# Para Marisol 💌

## Comandos
```bash
npm install          # instalar dependencias
npm run dev          # ejecutar en http://localhost:3000
npm run build        # comprobar que compila

# Publicar en Vercel
npm i -g vercel
vercel               # primera vez (sigue las preguntas)
vercel --prod        # publicar en producción
```
También puedes subir la carpeta a GitHub e importarla en vercel.com/new (sin configurar nada).

## Personalizar
- **Textos** (carta, tarjetas, cierre, abrazo): `content/content.ts`
- **Fotos**: `public/fotos/recuerdo-1.jpg` … `recuerdo-4.jpg`. Si no existen, se ve un espacio vacío.
- **Música**: `public/music/cancion.mp3`. Solo suena cuando se pulsa el botón de nota musical, y se detiene con el mismo botón.
- **Compartir**: tras publicar, el botón final copia (o comparte) la URL.
