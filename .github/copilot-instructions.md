## Copilot / AI agent quick guide for this repository

Purpose: get an AI coding assistant productive immediately. This doc contains the minimal, discoverable facts about project structure, build/dev workflows, coding conventions, and important pitfalls specific to this repo.

- Project type: React + Vite single-page app (client-only). TailwindCSS is used for styling. No tests are present.
- Core scripts (package.json):
  - `npm run dev` — start Vite dev server with HMR (primary developer flow)
  - `npm run build` — produce production build via `vite build`
  - `npm run preview` — preview a production build locally
  - `npm run lint` — run ESLint using the repository's `eslint.config.js`

Big picture / architecture

- src/ is the app root. Key directories:
  - `src/components/` — reusable UI components (PascalCase .jsx files). Examples: `Navbar.jsx`, `ThemeToggle.jsx`, `StarBackground.jsx`.
  - `src/Pages/` — top-level route views (e.g. `Home.jsx`, `NotFound.jsx`). App routes are wired in `src/App.jsx` using `react-router-dom`'s `BrowserRouter`.
  - `src/lib/uils.js` — small utility helpers; currently exports `cn` (clsx + tailwind-merge) used for building className strings.
  - `src/assets/` and `public/` — static assets. Vite alias `@` resolves to `./src` (see `vite.config.js`), so imports like `@/components/Foo` are allowed.

Important patterns & conventions (use these when changing or adding code)

- Components are .jsx files, named with PascalCase and default exports for UI pieces. Import style throughout the codebase uses relative paths or the `@` alias.
- Styling: Tailwind utility classes are used everywhere. `cn(...)` from `src/lib/uils.js` is the canonical helper to merge conditional class strings.
- Theme: `ThemeToggle.jsx` persists theme in `localStorage` and toggles the `dark` class on `document.documentElement`. This is the single source of truth for dark-mode styling — update it carefully.
- DOM / browser APIs: several components access `window` and `localStorage` directly (for example `StarBackground.jsx` uses `window.innerWidth/innerHeight` and `Navbar.jsx` listens to `scroll`). When adding server-side rendering or unit tests, guard these calls with existence checks (e.g. `if (typeof window === 'undefined') return`) or mock them in tests.

Integration points & deps to be aware of

- Router: `react-router-dom` (v7) — `App.jsx` uses `BrowserRouter` and `Routes`. Add new pages under `src/Pages` and update `App.jsx`.
- UI libs: `lucide-react` for icons, `clsx` + `tailwind-merge` for class merging, and `class-variance-authority` is installed (not widely used yet).
- Tailwind integration: configured via Vite plugin in `vite.config.js`. Use standard Tailwind flow — modify `index.css` for global styles.

Examples (copyable patterns)

- Add a component and use `cn` to merge classes:

  - file: `src/components/MyButton.jsx`
    - export default function MyButton({ className, ...props }) {
      return <button className={cn('px-4 py-2 rounded', className)} {...props} />
      }

- Register a new route: edit `src/App.jsx` and add `import MyPage from './Pages/MyPage'` and a `<Route path="/my" element={<MyPage/>} />` inside `Routes`.

Linting, tests, and CI

- ESLint is configured via `eslint.config.js`. Use `npm run lint` locally. There are no unit tests or CI configs in the repository—create tests if you add logic that should be validated.

Known gotchas and discovered issues

- Some components use direct browser globals without guards. Be careful when running code in non-browser environments.
- In `Navbar.jsx` the scroll handler reads `window.screenY` — this value is likely a bug (intended: `window.scrollY`). When changing scroll-related logic, prefer `window.scrollY` and add a defensive existence check.
- `StarBackground.jsx` generates many DOM nodes based on `window.innerWidth/innerHeight`. Large screens can produce many nodes — if you change generation logic, watch performance and render cost.

Files to inspect first for context

- `src/App.jsx` — app routing and entrypoints
- `src/main.jsx` — renderer mounting and `index.css` import
- `src/components/ThemeToggle.jsx` — theme persistence and root-class toggling
- `src/components/StarBackground.jsx` — dynamic DOM & window usage
- `vite.config.js` — alias `@` and plugin list
- `eslint.config.js` and `package.json` — dev scripts and lint rules

When in doubt

- Follow existing patterns: Tailwind utility classes + `cn()` for merging, PascalCase default-export components in `src/components`, and edit `App.jsx` to wire pages.

If you want more detail or to include CI/test instructions, tell me what workflows you want automated and I will expand this file.
