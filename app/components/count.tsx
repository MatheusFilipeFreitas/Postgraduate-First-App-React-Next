// =============================================================================
// TOPIC: "use client" directive
// =============================================================================
// Study notes:
// - "use client" is required for any component that uses React hooks or browser events.
// - useState, useEffect, onClick, and other interactivity only work in Client Components.
// - Without this directive, hooks will cause a build/runtime error in the App Router.
// - Compare with hobbies.tsx (Server Component) — no state or event handlers there.
//
// Used here: enables useState and button click handlers below.

'use client';

// =============================================================================
// FILE: Count
// =============================================================================
// Interactive counter with increment and decrement buttons.
// Client Component ("use client") — state and events run in the browser.
// Used in: app/medium/page.tsx

// =============================================================================
// TOPIC: useState hook
// =============================================================================
// Study notes:
// - useState(initialValue) returns [currentValue, setterFunction].
// - Calling setCount(...) triggers a re-render with the new value.
// - State is local to this component — each Count instance has its own count.
// - Hooks can only be called at the top level of a Client Component (not in loops/conditions).
//
// Used here: count starts at 0 and updates when buttons are clicked.

import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    // =========================================================================
    // TOPIC: Event handlers
    // =========================================================================
    // Study notes:
    // - Named function (decrement): reusable handler, defined outside JSX.
    // - Inline arrow function (increment onClick): defined directly on the button.
    // - Both call setCount — React re-renders the component with the new state.
    // - setCount(count + 1) and setCount(count - 1) use the current count value.
    //
    // Used here: increment (+1) and decrement (-1) update the displayed number.

    const decrement = () => {
        setCount(count - 1);
    };

    // =========================================================================
    // TOPIC: JSX and interactivity
    // =========================================================================
    // Study notes:
    // - {count} interpolates state into the paragraph — updates automatically on re-render.
    // - onClick wires a DOM event to a JavaScript function (browser-only).
    // - Tailwind: bg-blue-500 / bg-red-500 (colors), px-4 py-2 (padding), rounded-md (corners).
    //
    // Used here: display current count and two styled buttons.

    return (
        <div>
            <h1>Count</h1>
            <p>Actual number: {count}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={decrement}>
                Decrement
            </button>
        </div>
    );
};

export default Count;
