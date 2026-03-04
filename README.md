# Pokédex Interactiva (React + Vite + TypeScript)

Aplicación frontend que consume datos reales de [PokeAPI](https://pokeapi.co/) y los muestra con una interfaz moderna, componentes reutilizables y diseño responsive.

## Características principales

- Consumo de API pública externa con `fetch`.
- Manejo de estados de `loading`, `error` y `data`.
- Renderizado dinámico de tarjetas usando `.map()`.
- Componentes reutilizables (`Navbar`, `SearchBar`, `PokemonCard`, `Loader`, `Pagination`).
- Arquitectura escalable por capas (`components`, `pages`, `services`, `hooks`, `types`).
- Búsqueda por nombre de Pokémon.
- Filtro dinámico por tipo en cada página.
- Modal de detalle interactivo con estadísticas completas.
- Paginación para explorar el catálogo.
- Modo oscuro / claro.
- Preparado para despliegue en Vercel o Netlify.

## Estructura

```bash
src/
 ├── components/
 ├── hooks/
 ├── pages/
 ├── services/
 ├── types/
 ├── App.tsx
 └── main.tsx
```

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Deploy

Puedes desplegar directamente este proyecto en:

- **Vercel**: Importando el repositorio y dejando la configuración por defecto de Vite.
- **Netlify**: Build command `npm run build`, publish directory `dist`.

## Entregables

- Repositorio: `pendiente`
- Proyecto desplegado: `pendiente`
- Evidencia visual: revisar captura en el PR/entrega.
