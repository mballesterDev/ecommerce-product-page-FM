# E-commerce product page (Frontend Mentor)

Reto de Frontend Mentor hecho con **React 19 + TypeScript + Vite + Tailwind CSS 4**.

## Arrancar

```bash
npm install
npm run dev
```

## Qué hay preparado

```
public/images/                 ← todas las imágenes e iconos del reto (favicon, logo, producto, iconos)
src/
  App.tsx                      ← maqueta mínima que pinta los datos (bórrala y empieza por componentes)
  index.css                    ← Tailwind + colores y fuente del style-guide (@theme)
  data/product.ts              ← datos del producto, links del menú y rutas de los iconos
  types/product.ts             ← tipos Product, ProductImage, CartItem
  components/                  ← vacía: aquí van tus componentes
docs-frontend-mentor/          ← diseños (design/*.jpg), style-guide, README del reto y plantilla de README
```

### Colores del style-guide como clases de Tailwind

| Clase | Color |
|---|---|
| `bg-orange` / `text-orange` | Orange `hsl(26 100% 55%)` |
| `bg-pale-orange` | Pale orange |
| `text-very-dark-blue` | Very dark blue (texto principal) |
| `text-dark-grayish-blue` | Dark grayish blue (texto secundario) |
| `text-grayish-blue` | Grayish blue |
| `bg-light-grayish-blue` | Light grayish blue |
| `bg-lightbox` | Negro al 75 % (fondo del lightbox) |
| `font-kumbh` | Kumbh Sans 400/700 (ya cargada en `index.html`) |

### Imágenes
Usa rutas **relativas** (`images/logo.svg`, sin `/` delante), como en `src/data/product.ts`. Así funcionan igual en local y en GitHub Pages.

## Funcionalidades del reto

- Abrir un lightbox al pulsar la imagen grande (en escritorio).
- Cambiar de imagen con las miniaturas y con las flechas.
- Añadir productos al carrito con el selector de cantidad (− / +).
- Ver el carrito y eliminar productos.
- Diseño responsive con menú lateral en móvil.

Diseños de referencia: `docs-frontend-mentor/design/`.

## Despliegue en GitHub Pages

- `vite.config.ts` → `base: '/ecommerce-product-page/'` (cámbialo si el repo se llama distinto).
- `package.json` → `homepage` y los scripts `predeploy` y `deploy`.
- Crea el repo `ecommerce-product-page`, súbelo y ejecuta `npm run deploy`. En **Settings → Pages** elige la rama `gh-pages`.
