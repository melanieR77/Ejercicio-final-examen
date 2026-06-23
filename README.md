# Grilla de Productos — React + TypeScript + Tailwind CSS

## Requisitos previos
- Node.js versión 16 o superior
- npm versión 7 o superior

## Instrucciones para correr localmente

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm start
```
Se abrirá automáticamente en `http://localhost:3000`

---

## Estructura del proyecto

```
src/
├── types/
│   └── Product.ts          # Interface TypeScript para los productos
├── components/
│   └── ProductCard.tsx     # Componente hijo reutilizable (solo presenta datos)
├── App.tsx                 # Componente padre (gestiona datos y renderiza lista)
├── index.tsx               # Punto de entrada
└── index.css               # Tailwind CSS directives
```

## Breakpoints Mobile First (CSS Grid)

| Breakpoint       | Columnas | Clase Tailwind     |
|------------------|----------|--------------------|
| Móvil portrait   | 1        | `grid-cols-1`      |
| Móvil landscape  | 2        | `sm:grid-cols-2`   |
| Tablet portrait  | 3        | `md:grid-cols-3`   |
| Tablet/PC        | 4        | `lg:grid-cols-4`   |
| PC grande        | 5        | `xl:grid-cols-5`   |

## Tecnologías utilizadas
- React 18
- TypeScript
- Tailwind CSS 3
- Create React App
