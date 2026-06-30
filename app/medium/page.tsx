// =============================================================================
// FILE: MediumPage
// =============================================================================
// Demo page for Client Component interactivity (counter with useState).
// Server Component (no "use client") — the page itself renders on the server.
// Route: app/medium/page.tsx → URL /medium
//
// Study note: Server pages can import and render Client Components.
// Count runs in the browser; MediumPage shell is rendered on the server.

// =============================================================================
// TOPIC: Importing Client Components from a Server page
// =============================================================================
// Study notes:
// - A Server Component page can import a Client Component (Count has "use client").
// - Next.js sends the Client Component bundle to the browser for hydration.
// - The page does not need "use client" unless it uses hooks or events itself.
// - Relative import ../components/count resolves from app/medium/ to app/components/.
//
// Used here: MediumPage wraps Count and adds a page title.

import Count from "../components/count";

// =============================================================================
// TOPIC: Page component
// =============================================================================
// Study notes:
// - page.tsx in app/medium/ maps to the /medium URL segment.
// - default export: Next.js expects the page component as the default export.
// - Composition: page provides layout/context; Count handles interactive state.
//
// Used here: heading + Count component on the /medium route.

const MediumPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Medium Page</h1>
            <Count />
        </div>
    );
};

export default MediumPage;
