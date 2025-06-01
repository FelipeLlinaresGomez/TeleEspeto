# TeleEspeto - Web de Álvaro de Sebastián

Web profesional para promocionar los servicios de espetero de Álvaro de Sebastián.

## Descripción

TeleEspeto es una web moderna desarrollada en React que promociona los servicios profesionales de espetado de sardinas de Álvaro de Sebastián. La web incluye información sobre sus servicios, formulario de contratación y galería de fotos.

## Características

- **Diseño Responsive**: Adaptado para móviles, tablets y escritorio
- **Navegación Intuitiva**: Header con navegación clara entre secciones
- **Formulario de Contacto**: Sistema de contratación con validación
- **Galería de Fotos**: Muestra el trabajo profesional de Álvaro
- **SEO Optimizado**: Meta tags y estructura optimizada para buscadores

## Páginas

1. **Dashboard/Inicio**: Información principal y servicios destacados
2. **Contratación**: Formulario completo para solicitar servicios
3. **Sobre Mí**: Historia personal, experiencia y galería de fotos

## Tecnologías Utilizadas

- React 18
- React Router DOM
- Vite (build tool)
- CSS3 con Grid y Flexbox
- Diseño responsive

## Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Navegación principal
│   └── Footer.jsx      # Pie de página
├── pages/              # Páginas principales
│   ├── Dashboard.jsx   # Página de inicio
│   ├── Contratacion.jsx # Formulario de contratación
│   └── SobreMi.jsx     # Página sobre mí
├── styles/             # Archivos CSS
│   ├── Header.css
│   ├── Footer.css
│   ├── Dashboard.css
│   ├── Contratacion.css
│   └── SobreMi.css
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## Servicios Ofrecidos

- Bodas
- Celebraciones privadas
- Verbenas y ferias
- Eventos corporativos
- Fiestas tradicionales

## Imágenes

La web incluye imágenes placeholder que se pueden reemplazar fácilmente:
- `public/images/foto_1.jpeg` - Imagen principal del dashboard
- `public/images/foto_2.jpeg` - Galería página "Sobre Mí"
- `public/images/foto_3.jpeg` - Galería página "Sobre Mí"
- `public/images/foto_4.jpeg` - Galería página "Sobre Mí"
- `public/images/sardinas.jpg` - Imagen de sardinas en página de contratación

Para reemplazar las imágenes, simplemente sustituye los archivos en `public/images/` manteniendo los mismos nombres.

## Características Visuales

- **Gama de colores azul mar**: Paleta coherente en tonos azules
- **Diseño responsive**: Se adapta perfectamente a cualquier tamaño de pantalla
- **Imágenes optimizadas**: Con efectos hover y transiciones suaves
- **Fallbacks inteligentes**: Si las imágenes no cargan, se muestran placeholders

## Contacto

Para más información sobre los servicios de Álvaro de Sebastián:
- Email: alvaro@teleespeto.com
- Teléfono: +34 666 888 555

---

Desarrollado con ❤️ para preservar la tradición del espetado de sardinas.
