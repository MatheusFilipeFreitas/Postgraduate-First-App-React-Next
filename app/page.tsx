// =============================================================================
// FILE: HomePage
// =============================================================================
// Site entry point with logo and navigation links to study routes.
// Server Component (no "use client") — Link prefetches; no hooks or browser APIs.
// Route: app/page.tsx → URL /

// =============================================================================
// TOPIC: Path alias imports (@/)
// =============================================================================
// Study notes:
// - @/ maps to the project root (see tsconfig.json paths: "@/*": ["./*"]).
// - @/components/image resolves to components/image.tsx from any file under app/.
// - Aliases shorten imports and avoid long relative paths like ../../components/.
//
// Used here: import ImageComponent from the shared components folder.

import { ImageComponent } from "@/components/image";

// =============================================================================
// TOPIC: next/link navigation
// =============================================================================
// Study notes:
// - Link enables client-side navigation without full page reloads.
// - Prefer Link over <a> for internal routes — faster transitions, prefetching.
// - Compare with start/page.tsx which maps names to /start/[name] the same way.
//
// Used here: list of links to Home, Start, Medium, and High study pages.

import Link from "next/link";

// =============================================================================
// TOPIC: Typed navigation data and list rendering
// =============================================================================
// Study notes:
// - pages array holds { label, href } objects — typed inline for clarity.
// - .map() renders one <li> + <Link> per route; key uses href for stable identity.
// - Module-scope data is available on every render (static nav, no fetch needed).
//
// Used here: site-wide navigation menu on the home page.

const pages: { label: string, href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Start", href: "/start" },
  { label: "Medium", href: "/medium" },
  { label: "High", href: "/high" },
];

// =============================================================================
// TOPIC: Page component
// =============================================================================
// Study notes:
// - page.tsx at app/ root maps to the / URL.
// - default export: Next.js expects the page component as the default export.
// - Composes ImageComponent (shared) + mapped Link list (local nav pattern).
//
// Used here: centered layout with logo and route links.

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <ImageComponent />
        <ul className="mt-5">
          {pages.map((page) => (
            <li key={`page-${page.href}`}>
              <Link href={page.href} className="text-blue-500 hover:text-blue-600 underline">{page.label}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
