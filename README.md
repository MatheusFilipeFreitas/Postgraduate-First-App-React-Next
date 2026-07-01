# Postgraduate First App — React & Next.js

Study project for learning React and Next.js (App Router). Source files use **topic-based comments** that separate study notes from implementation code — each section explains a concept before the code that uses it.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) (recommended)

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
pnpm build   # production build
pnpm start   # run production server
pnpm lint    # ESLint
```

## Routes

| URL | File | Description |
|-----|------|-------------|
| `/` | `app/page.tsx` | Default Next.js home page |
| `/start` | `app/start/page.tsx` | Name list with links to dynamic profiles (**Client Component**) |
| `/start/[name]` | `app/start/[name]/page.tsx` | Profile page for a person (**Server Component**, e.g. `/start/Matheus`) |
| `/medium` | `app/medium/page.tsx` | Counter demo — useEffect, Button composition, controlled input |

## Project structure

```
app/
├── components/
│   ├── button.tsx         # Reusable Button, FC, exported ButtonProps, Tailwind colors
│   ├── count.tsx          # useState, useEffect, Button composition, controlled input
│   ├── hobbies.tsx        # Arrays, fragments, list rendering, keys
│   ├── image.tsx          # next/image, priority, accessibility
│   └── name-component.tsx # TypeScript types, FC, props, conditional JSX
├── medium/
│   └── page.tsx           # Server page importing Client Component (Count)
├── start/
│   ├── page.tsx           # "use client", Link navigation, client-side logging
│   └── [name]/page.tsx    # Dynamic routes, async Server Components, server logging
├── layout.tsx             # Root layout, fonts, metadata, global padding
├── page.tsx               # Home page
└── globals.css            # Tailwind + theme variables
```

## Concepts covered

### React

- Functional components (`FC`, arrow functions)
- Props and TypeScript types
- Destructuring (objects and arrays)
- Conditional rendering (ternary, `&&`)
- List rendering with `.map()` and `key`
- React Fragments (`<>`)
- Named vs default exports
- `useState` hook and local component state
- `useEffect` hook (no deps, mount-only `[]`, and targeted `[state]` deps)
- Functional state updates (`setState(prev => prev + 1)`)
- Controlled inputs (`value` + `onChange`)
- Component composition and props spreading (`{...props}`)
- Reusable components with exported prop types (`ButtonProps`)
- Event handlers (`onClick`, `onChange`) and re-renders

### Next.js

- App Router file-based routing
- Dynamic routes (`[name]`)
- Server Components vs Client Components (`"use client"`)
- Async Server Components (`async` pages, `await params`)
- Server vs client `console.log` (terminal vs browser DevTools)
- `next/link` client-side navigation
- `next/image` optimization
- `next/font` (Geist) in root layout
- Metadata API
- Root layout (`children`) and shared page padding
- Server pages composing Client Components (`/medium` + `Count` + `Button`)

### TypeScript

- Custom types (`Person`)
- Typed props and arrays (`string[]`)
- Component signatures with generics

### Tailwind CSS

- Utility classes (padding, grid, lists, hover states)
- Dark mode variants (`dark:invert`)

## Code documentation format

Each study file follows this pattern:

```
// TOPIC: <concept name>
// Study notes:
// - What it is and why it matters
//
// Used here: <how this file uses it>

<clean implementation code>
```

Commented **STUDY VARIANTS** at the bottom of some files show alternative patterns kept for learning.

## Server vs Client Components

This project demonstrates both rendering models side by side:

| Page / component | Directive | Logs appear in |
|------|-----------|----------------|
| `/start` | `"use client"` | Browser DevTools |
| `/start/[name]` | none (Server Component) | Terminal (`pnpm dev`) |
| `Hobbies` component | none (Server Component) | Terminal (`pnpm dev`) |
| `/medium` (page shell) | none (Server Component) | — |
| `Count` component | `"use client"` | Browser DevTools (mount, state changes, input) |
| `Button` component | none (composed inside Count) | — |

Visit `/start` and open DevTools to see the client log. Visit `/start/Matheus` and check the terminal for the server log. Visit `/medium` and open DevTools: mount logs (`console.info`) fire on load; typing shows controlled-input warnings (`console.warn`); clicking buttons updates count and triggers dependency-based effects.

## Notes

- `node_modules`, `.next`, lockfiles, and env files are gitignored — run `pnpm install` after cloning.

## Repository

[github.com/MatheusFilipeFreitas/Postgraduate-First-App-React-Next](https://github.com/MatheusFilipeFreitas/Postgraduate-First-App-React-Next)

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
