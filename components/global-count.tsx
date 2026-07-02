// =============================================================================
// FILE: GlobalCount
// =============================================================================
// Counter UI that reads and updates shared count from CountContext.
// Client Component ("use client") — useContext and onClick require the browser.
// Used in: app/medium/page.tsx

// =============================================================================
// TOPIC: useContext with shared state
// =============================================================================
// Study notes:
// - useContext(CountContext) returns the value from the nearest CountProvider above.
// - setCount from context works like useState's setter — triggers re-render of all consumers.
// - GlobalCount and GlobalValueCount re-render together when count changes.
// - Compare with count.tsx: local useState is isolated per instance; context is shared.
//
// Used here: increment/decrement buttons update the global count for the /medium segment.

// =============================================================================
// TOPIC: Null-safe count before sessionStorage hydration
// =============================================================================
// Study notes:
// - count is CountType (number | null) — null until CountProvider reads sessionStorage.
// - normalizeCount uses nullish coalescing (??) to treat null as 0 for arithmetic.
// - Without this, count + 1 when count is null would yield NaN in JavaScript.
// - Display still shows raw {count} (may be empty briefly); math uses normalizedCount.
//
// Used here: Increment/Decrement call setCount with normalizedCount ± 1.

'use client';

import { useContext } from "react";
import { CountContext, CountType } from "../context/count.context";
import Button from "./button";

function normalizeCount(count: CountType) {
    return count ?? 0;
}

export const GlobalCount = () => {
    const { count, setCount } = useContext(CountContext);
    const normalizedCount = normalizeCount(count);

    return (
        <> 
            <p>Global Count: </p>
            <p>Actual number: {count}</p>
            <div className="flex flex-row gap-2 mt-3">
                <Button label="Increment" color="blue" onClick={() => setCount(normalizedCount + 1)} />
                <Button label="Decrement" color="red" onClick={() => setCount(normalizedCount - 1)} />
            </div>
        </>
    )
}
