// =============================================================================
// FILE: StartPage (index)
// =============================================================================
// Lists names as links to dynamic profile pages at /start/[name].
// Server Component (no "use client") — renders on the server.
// Route: app/start/page.tsx → URL /start

// =============================================================================
// TOPIC: next/link import
// =============================================================================
// Study notes:
// - Link enables client-side navigation without full page reloads.
// - Prefer Link over <a> for internal routes — faster transitions, prefetching.
//
// Used here: each name links to its dynamic route /start/[name].

import Link from "next/link";

// =============================================================================
// TOPIC: Static data
// =============================================================================
// Study notes:
// - Data declared at module scope is available to the component on each render.
// - In a real app this could come from a database or API instead of a hardcoded array.
//
// Used here: source list rendered as navigation links below.

const names = ["Matheus", "John", "Jane", "Jim", "Jill"];

// =============================================================================
// TOPIC: Page component
// =============================================================================
// Study notes:
// - In the App Router, page.tsx in a folder defines the UI for that URL segment.
// - default export: Next.js expects the page component as the default export.
//
// Used here: renders the name list for the /start route.

const StartPage = () => {

    // =========================================================================
    // TOPIC: List rendering and dynamic routes
    // =========================================================================
    // Study notes:
    // - .map() turns each name into a <li> with a Link inside.
    // - key={name}: stable key — each name is unique in this list.
    // - href={`/start/${name}`}: template literal builds the dynamic route URL.
    //   The [name] folder in app/start/[name]/ catches this segment.
    // - Tailwind: text-blue-500 (color), hover:text-blue-700 (hover state), underline.
    // - list-disc, list-inside, pl-1: bullet list styling (same pattern as hobbies.tsx).
    //
    // Used here: navigation hub linking to individual profile pages.

    return (
        <div>
            <ul className="list-disc list-inside pl-1">
                {names.map((name) => (
                    <li key={name}>
                        <Link className="text-blue-500 hover:text-blue-700 underline" href={`/start/${name}`}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StartPage;
