'use client';

import { GlobalCount } from "../components/global-count";
import { GlobalValueCount } from "../components/global-value-count";

// =============================================================================
// TOPIC: "use client" on a page
// =============================================================================
// Study notes:
// - This page uses "use client" because it renders context consumers (GlobalCount, GlobalValueCount).
// - CountProvider lives in app/medium/layout.tsx — this page is a child of that Provider.
// - Compare with app/medium/[count]/page.tsx: Server page importing a Client Component (CountComponent).
//
// Used here: demo of shared global state via Context on the /medium index route.

// =============================================================================
// FILE: MediumPage (index)
// =============================================================================
// Global counter demo — two components reading the same CountContext value.
// Client Component ("use client") — context consumers run in the browser.
// Route: app/medium/page.tsx → URL /medium

// =============================================================================
// TOPIC: Page component
// =============================================================================
// Study notes:
// - page.tsx in app/medium/ maps to the /medium URL segment.
// - default export: Next.js expects the page component as the default export.
// - GlobalCount updates count; GlobalValueCount displays it — both stay in sync via context.
//
// Used here: heading + two context consumers on the /medium route.

const MediumPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Medium Page</h1>
            <GlobalCount />
            <GlobalValueCount />
        </div>
    );
};

export default MediumPage;
