// =============================================================================
// FILE: GlobalValueCount
// =============================================================================
// Read-only display of the shared count from CountContext.
// Client Component ("use client") — useContext requires a Client Component boundary.
// Used in: app/medium/page.tsx

// =============================================================================
// TOPIC: Context consumer (read-only)
// =============================================================================
// Study notes:
// - Only destructures count — no setCount — so this component only displays state.
// - Still re-renders when GlobalCount (or anything else) calls setCount on the same context.
// - Demonstrates multiple consumers of one Provider without passing props manually.
//
// Used here: second view of the same global count on /medium.

'use client';

import { useContext } from "react";
import { CountContext } from "../context/count.context";

export const GlobalValueCount = () => {
    const { count } = useContext(CountContext);
    
    return (
        <> 
            <p>Actual number: {count}</p>
        </>
    )
}
