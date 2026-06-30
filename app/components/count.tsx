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
import Button, { ButtonProps } from "./button";

const Count = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

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

    const functions: ButtonProps[] = [
        { label: "Increment by 3", color: "yellow", onClick: () => { setCount(count => count + 1); setCount(count => count + 1); setCount(count => count + 1); } },
        { label: "Decrement by 3", color: "purple", onClick: () => { setCount(count => count - 3); } }
    ];
    
    return (
        <div>
            <h1>Count</h1>
            <p>Actual number: {count}</p>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <div className="flex flex-row gap-2 mt-3">
                <Button label="Increment" color="blue" onClick={() => setCount(count + 1)} />
                <Button label="Decrement" color="red" onClick={decrement} />
                {functions.map((fun) => {
                    return <Button key={`function-${fun.label}`} {...fun} />
                })}
            </div>
        </div>
    )
};

export default Count;
