# Copilot Instructions for AI Agents

## Project Overview
- **Type:** React single-page application (SPA) using Vite for fast development and builds.
- **Structure:**
  - All source code is in `src/`.
  - Major components: `App.jsx` (main router/layout), `projects.jsx` (project cards/data), `ProjectsByWeek.jsx`, `contactme.jsx`, `runningpage.jsx`, `52x52.jsx`, `ProblemStatements.jsx`.
  - Static assets (images, etc.) are in `public/` and `src/assets/`.

## Key Workflows
- **Development server:** `npm run dev` (or `yarn dev`) — launches Vite with hot reload.
- **Production build:** `npm run build` — outputs to `dist/`.
- **Preview build:** `npm run preview` — serves the production build locally.
- **Linting:** `npm run lint` — uses ESLint with custom config (`eslint.config.js`).

## Patterns & Conventions
- **Routing:** Uses `react-router-dom` v7. All routes are defined in `App.jsx` using `<Routes>` and `<Route>`.
- **Component style:** Function components, hooks (`useState`, `useNavigate`), and CSS modules (imported as `.css` files).
- **Project data:** Project cards and metadata are hardcoded in an array in `projects.jsx`.
- **Image/static asset paths:** Use `/`-prefixed paths for images (e.g., `/girlboss.png`). Place images in `public/` for direct access.
- **Lint rules:** Unused variables starting with uppercase or underscore are ignored (`varsIgnorePattern: '^[A-Z_]'`).

## External Integrations
- **Dependencies:**
  - `react`, `react-dom`, `react-router-dom`, `framer-motion` (for animation)
  - Dev: `vite`, `@vitejs/plugin-react`, `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **No backend/server code** — this is a frontend-only project.

## Examples
- **Adding a new project card:** Edit the `projects` array in `src/projects.jsx`.
- **Adding a new route/page:**
  1. Create a new component in `src/`.
  2. Add a `<Route>` in `App.jsx`.
- **Styling:** Add or update `.css` files in `src/` and import them in components.

## References
- Main entry: `src/main.jsx`
- App shell/routing: `src/App.jsx`
- Project data/cards: `src/projects.jsx`
- ESLint config: `eslint.config.js`
- Build config: `vite.config.js`
- Package/dependencies: `package.json`

---
If you are unsure about a workflow or pattern, check the referenced files above or ask for clarification.
