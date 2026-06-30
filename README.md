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
| `/start` | `app/start/page.tsx` | Name list with links to dynamic profiles |
| `/start/[name]` | `app/start/[name]/page.tsx` | Profile page for a person (e.g. `/start/Matheus`) |

## Project structure

```
app/
├── components/
│   ├── hobbies.tsx        # Arrays, fragments, list rendering, keys
│   ├── image.tsx          # next/image, priority, accessibility
│   └── name-component.tsx # TypeScript types, FC, props, conditional JSX
├── start/
│   ├── page.tsx           # Link navigation, dynamic hrefs
│   └── [name]/page.tsx    # Dynamic routes, async Server Components
├── layout.tsx             # Root layout, fonts, metadata
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

### Next.js

- App Router file-based routing
- Dynamic routes (`[name]`)
- Async Server Components (`async` pages, `await params`)
- `next/link` client-side navigation
- `next/image` optimization
- `next/font` (Geist) in root layout
- Metadata API

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

## Notes

- `node_modules`, `.next`, lockfiles, and env files are gitignored — run `pnpm install` after cloning.
- Server Component `console.log` output appears in the **terminal**, not the browser DevTools.

## Repository

[github.com/MatheusFilipeFreitas/Postgraduate-First-App-React-Next](https://github.com/MatheusFilipeFreitas/Postgraduate-First-App-React-Next)

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
