// =============================================================================
// TOPIC: "use client" directive
// =============================================================================
// Study notes:
// - "use client" marks this file as a Client Component — it runs in the browser.
// - Required when the component uses browser-only features (e.g. useState, useEffect,
//   event handlers) or when you want client-side re-renders and DevTools logging.
// - Without this directive, App Router files default to Server Components.
// - Compare with app/start/[name]/page.tsx, which has no directive and stays on the server.
//
// Used here: enables client-side rendering and console.log visible in browser DevTools.

'use client';

// =============================================================================
// FILE: StartPage (index)
// =============================================================================
// Lists names as links to dynamic profile pages at /start/[name].
// Client Component ("use client") — renders and re-renders in the browser.
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
    // TOPIC: Client Component logging
    // =========================================================================
    // Study notes:
    // - console.log in a Client Component runs in the browser on each render.
    // - Output appears in the browser DevTools console (not the terminal).
    // - Re-renders when you navigate back to /start or when React updates this component.
    // - Compare with [name]/page.tsx and hobbies.tsx — those log on the server (terminal).
    //
    // Used here: confirms this page is rendered on the client.

    console.log("StartPage rendered from client");

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
