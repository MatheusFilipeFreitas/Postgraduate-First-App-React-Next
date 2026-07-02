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

'use client';

import { useContext } from "react";
import { CountContext } from "../context/count.context";
import Button from "./button";

export const GlobalCount = () => {
    const { count, setCount } = useContext(CountContext);
    
    return (
        <> 
            <p>Global Count: </p>
            <p>Actual number: {count}</p>
            <div className="flex flex-row gap-2 mt-3">
                <Button label="Increment" color="blue" onClick={() => setCount(count + 1)} />
                <Button label="Decrement" color="red" onClick={() => setCount(count - 1)} />
            </div>
        </>
    )
}
