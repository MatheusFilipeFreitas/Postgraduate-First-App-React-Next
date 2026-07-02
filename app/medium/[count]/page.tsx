// =============================================================================
// FILE: MediumCountPage
// =============================================================================
// Local counter demo on a dynamic /medium/[count] route (e.g. /medium/42).
// Server Component (no "use client") — page shell renders on the server.
// Route: app/medium/[count]/page.tsx → URL /medium/[count]

// Study note: CountProvider from app/medium/layout.tsx still wraps this page,
// but CountComponent uses its own local useState — not the global context.

// =============================================================================
// TOPIC: Dynamic routes and useParams
// =============================================================================
// Study notes:
// - [count] folder segment creates a dynamic route — /medium/5, /medium/hello, etc.
// - CountComponent calls useParams() to read { count: "..." } from the URL (Client hook).
// - useParams is from next/navigation (App Router), not react-router.
// - The param is always a string — convert with Number() or parseInt if you need a number.
//
// Used here: CountComponent logs urlParams and reacts when the route segment changes.

// =============================================================================
// TOPIC: Importing Client Components from a Server page
// =============================================================================
// Study notes:
// - A Server Component page can import CountComponent ("use client").
// - Next.js sends the Client bundle to the browser for hydration.
// - Relative import ../../../components/count resolves from app/medium/[count]/ to project-root components/.
//
// Used here: page title + CountComponent on /medium/[count].

import CountComponent from "../../../components/count";

const MediumCountPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Medium Page</h1>
            <CountComponent />
        </div>
    );
};

export default MediumCountPage;
