# AGENTS.md

This file provides the agent work guidelines for this repository. It describes build, dev, lint/test commands, and code conventions that agentic workers (like this AI) should follow when operating inside this codebase.

Note: Cursor rules and Copilot rules are included where present in the repository. If any external rules exist, they should be honored verbatim and cited here.

## 1) Build, Lint, Run Commands (quick reference)

- Core scripts (from package.json):
  - npm run dev: Start Vite development server with hot module replacement (HMR).
  - npm run build: Create a production build via Vite.
  - npm run preview: Serve the production build locally for testing.
  - npm run lint: Run ESLint using the repository’s eslint.config.js.

- Running tests:
  - There is currently no test framework configured in this repo. When tests are added, follow the project’s test script and the runner (Jest, Vitest, etc.).
  - If a test suite is configured, typical entry points might look like:
    - npm test: Run all tests.
    - npm test -- -u: Update snapshots (if snapshot tests exist).
  - To run a single test (assuming Jest):
    - npm test -- -t "Your test name"  (or --testNamePattern depending on config).
  - To run a single test by path (Practical guidance):
    - npm test -- path/to/testfile.test.js
  - If using Vitest with Vite:
    - npx vitest run --testNamePattern "Your test name"  (or npm test -- --testNamePattern ... depending on npm script).

- Quick safety checks before commits:
  - npm run lint should pass (zero errors). Use lint autofix where possible: npm run lint -- --fix.
  - If a build is required for the change, run npm run build to ensure no compile errors.

## 2) Code Style Guidelines

These guidelines reflect the existing patterns in this repository. Follow them for consistency and maintainability.

- General Philosophy
  - Write small, focused changes; prefer small diffs over large rewrites.
  - Maintain stable APIs and naming conventions; minimize breaking changes.
  - Prioritize type safety and runtime safety; avoid silent failures and unhandled promises.

- File and Component Naming
  - React components live in src/components/*.jsx
  - Component file names should use PascalCase (e.g., Navbar.jsx, ThemeToggle.jsx).
  - Default export for UI components; named exports for utilities when appropriate.
  - File extensions for React components are .jsx.

- Imports and Module Structure
  - Use project alias @ to refer to src (e.g., @/components/Foo).
  - Import ordering: React/core libs → third-party libs → local project modules → relative imports.
  - Group related imports together; separate groups with a blank line.
  - Use the cn(...) helper (src/lib/uils.js) for conditional classNames and Tailwind merging.
  - Do not import from non-existent modules; keep imports current with code.

- Styling and Tailwind
  - All layout and styling should be Tailwind utility classes by default.
  - Use the dark: variant for dark mode styles; ThemeToggle.jsx is the single source of truth for theme persistence.
  - Avoid inline styles; prefer Tailwind classes or CSS modules if necessary.

- Component Patterns
  - Example pattern:
    - export default function MyComponent({ className, ...props }) {
        return <div className={cn('default-classes', className)} {...props} />;
      }
  - Props should be clearly documented in the component signature where meaningful.

- State and Effects
  - Prefer React hooks (useState, useEffect) for local state.
  - Always declare dependencies for useEffect, useMemo, and useCallback to avoid stale closures.
  - Avoid memory leaks by cleaning up side effects on unmount when necessary.

- Error Handling
  - Avoid empty catch blocks; log or handle errors gracefully.
  - Use try/catch around asynchronous flows where failure is possible.
  - Provide user-facing error boundaries or messages where appropriate in UI components.

- Accessibility
  - Add ARIA attributes where applicable (aria-label, role, aria-live).
  - Ensure interactive elements have keyboard focus visibility and meaningful labels.

- Testing and Reliability
  - Tests (when added) should cover rendering, interactions, and edge cases.
  - Keep tests deterministic and isolated; mock external dependencies.
  - Do not commit failing tests as a workaround; fix the underlying issue instead.

- Error Logging and Debugging
  - Use console.warn / console.error for non-fatal runtime issues; avoid spamming logs in production builds.
  - Wrap risky browser API access with typeof window checks when code could run in non-browser environments.

- Type Systems (JS projects)
  - If not using TypeScript, add JSDoc comments to describe complex function signatures and objects where helpful.
  - Do not rely on // @ts-ignore or similar suppression comments.

- Naming and Semantics
  - Functions and variables should have descriptive names; avoid abbreviations unless they are well-established in the codebase.
  - Use kebab-case for CSS class strings when appropriate, but keep JavaScript identifiers in camelCase or PascalCase.

- Repository Hygiene
  - Run lint before committing; fix lint issues proactively.
  - Keep dependencies minimal; prefer existing ecosystem libraries over introducing new ones without justification.
  - Update README or AGENTS.md to reflect any major tooling changes.

## 3) Guardrails for Copilot and Cursor Rules

- Copilot / AI agent guidance (from .github/copilot-instructions.md)
  - Treat Copilot as an assistant, not a replacement for architecture or design decisions.
  - Always review and tailor code generated by Copilot to fit the project patterns.
  - Do not rely on Copilot to introduce new project-wide conventions or major structural changes without validation.
  - Aim for small, verifiable edits; break larger changes into smaller commits.
  - When in doubt, confirm with the human reviewer before merging.

- Cursor rules (Cursor-based tooling)
  - The repository currently does not declare explicit Cursor rules in the .cursor directory. If such rules exist in the future, integrate them here as part of the guardrails and ensure agent actions follow them in addition to Copilot guidelines.

## 4) Cursor and Copilot Rule References in the Repo

- Copilot quick reference (from .github/copilot-instructions.md):
  - Project type: React + Vite, TailwindCSS, no tests initially.
  - Core scripts listed earlier.
  - Known gotchas and recommended patterns for components, routing, and theming.
  - Known issues to watch for: direct DOM access without guards, scroll handling, and performance concerns.
  - Directory layout and alias usage with @.
  - Build flow and test guidance when adding tests.

- Cursor rules
  - If there are any explicit cursor rules, place them here and ensure to meet cursor-specific constraints when performing edits.

## 5) Validation and Acceptance Criteria

- Ensure the file is syntactically valid Markdown and readable by humans and agents.
- If you make changes to this repository, run npm run lint to validate that no lint errors are introduced by formatting changes.
- Keep this document focused on conventions; avoid implementation details or domain logic changes.

End of AGENTS.md
