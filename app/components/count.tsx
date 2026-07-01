// =============================================================================
// TOPIC: "use client" directive
// =============================================================================
// Study notes:
// - "use client" is required for any component that uses React hooks or browser events.
// - useState, useEffect, onClick, and other interactivity only work in Client Components.
// - Without this directive, hooks will cause a build/runtime error in the App Router.
// - Compare with hobbies.tsx (Server Component) — no state or event handlers there.
//
// Used here: enables useState, useEffect, controlled input onChange, and button click handlers.

'use client';
// =============================================================================
// FILE: Count
// =============================================================================
// Interactive counter with Button components, controlled input, and useEffect side effects.
// Client Component ("use client") — state and events run in the browser.
// Used in: app/medium/page.tsx

// =============================================================================
// TOPIC: useState hook
// =============================================================================
// Study notes:
// - useState(initialValue) returns [currentValue, setterFunction].
// - Calling setCount(...) or setInputValue(...) triggers a re-render with the new value.
// - State is local to this component — each Count instance has its own count and input.
// - Hooks can only be called at the top level of a Client Component (not in loops/conditions).
//
// Used here: count starts at 0; inputValue starts at "initial value".

import { useEffect, useState } from "react";
import Button, { ButtonProps } from "./button";
import { useParams } from "next/navigation";

const Count = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("initial value");
    const urlParams = useParams();

    console.log("URL Params: ", urlParams);

    useEffect(() => {
        console.info("Info: URL Params changed to: ", urlParams);
    }, [urlParams]);

    // =========================================================================
    // TOPIC: useEffect — no dependency array (runs after every render)
    // =========================================================================
    // Study notes:
    // - Omitting the second argument runs the effect after every render.
    // - Useful for debugging or syncing with something that must track all updates.
    // - Can cause extra work or infinite loops if the effect also updates state —
    //   prefer a dependency array in real apps unless you need every-render behavior.
    //
    // Used here: console.info on mount and after every count or inputValue change.

    useEffect(() => {
        console.info("Info: Component updated");
    });

    // =========================================================================
    // TOPIC: useEffect — empty dependency array (mount only)
    // =========================================================================
    // Study notes:
    // - [] runs the effect once after the initial render (like componentDidMount).
    // - Does not re-run when state or props change.
    // - In React Strict Mode (dev), effects may run twice to surface side-effect bugs.
    //
    // Used here: log when Count first appears in the browser.

    useEffect(() => {
        console.info("Info: Count component mounted");
    }, []);

    // =========================================================================
    // TOPIC: useEffect — dependency on count
    // =========================================================================
    // Study notes:
    // - [count] re-runs the effect when count changes (skips unrelated re-renders).
    // - React compares dependency values between renders with Object.is.
    // - The effect runs after render, so it always sees the latest count.
    //
    // Used here: log whenever the counter value changes.

    useEffect(() => {
        console.info("Info: count changed to: ", count);
    }, [count]);

    // =========================================================================
    // TOPIC: useEffect — dependency on inputValue
    // =========================================================================
    // Study notes:
    // - [inputValue] re-runs only when the controlled input state changes.
    // - Separating effects by concern keeps each callback focused on one piece of state.
    //
    // Used here: log whenever the input text changes (typing or Clear).

    useEffect(() => {
        console.info("Info: inputValue changed to: ", inputValue);
    }, [inputValue]);

    // =========================================================================
    // TOPIC: Event handlers
    // =========================================================================
    // Study notes:
    // - Named function (decrement): reusable handler, defined outside JSX.
    // - Inline arrow function (increment onClick): defined directly on the Button prop.
    // - Both call setCount — React re-renders the component with the new state.
    // - setCount(count + 1) reads the current count from this render (may be stale
    //   if several updates happen in one event — see functional updates below).
    //
    // Used here: increment (+1) and decrement (-1) update the displayed number.

    const decrement = () => {
        setCount(count - 1);
    };

    // =========================================================================
    // TOPIC: Controlled inputs
    // =========================================================================
    // Study notes:
    // - value={inputValue} makes React the source of truth for the input text.
    // - onChange fires once per change (each keystroke, paste, or delete).
    // - e.target.value is the new DOM value; inputValue is still the previous
    //   React state until the next re-render (that is expected, not a bug).
    // - setInputValue does not update inputValue immediately in the same handler.
    //
    // Used here: typing logs old state vs new DOM value (console.warn); Clear resets via the same handler.

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.warn("Warning: old value: ", inputValue);
        console.warn("Warning: new value: ", e.target.value);
        setInputValue(e.target.value);
    }

    const clearInput = () => {
        handleInputChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
        //setInputValue("");
    }

    // =========================================================================
    // TOPIC: Component composition and props spreading
    // =========================================================================
    // Study notes:
    // - Button replaces repeated <button> markup — label, color, and onClick are props.
    // - ButtonProps[] types an array of button configurations for .map().
    // - {...fun} spreads each object's props onto Button (same as writing each prop).
    // - key={fun.label} helps React track list items when rendering from an array.
    //
    // Used here: two direct Button instances plus a mapped list of batch actions.

    const functions: ButtonProps[] = [
        { label: "Increment by 3", color: "yellow", onClick: () => { setCount(count => count + 1); setCount(count => count + 1); setCount(count => count + 1); } },
        { label: "Decrement by 3", color: "purple", onClick: () => { setCount(count => count - 3); } }
    ];

    // =========================================================================
    // TOPIC: Functional state updates
    // =========================================================================
    // Study notes:
    // - setCount(count => count + 1) receives the latest state, not a closed-over value.
    // - Use the functional form when multiple setState calls happen in one handler.
    // - Three setCount(count => count + 1) calls in one click each add 1 (total +3).
    // - setCount(count => count - 3) applies a single update of -3 in one step.
    //
    // Used here: "Increment by 3" and "Decrement by 3" buttons in the functions array.

    // =========================================================================
    // TOPIC: JSX and interactivity
    // =========================================================================
    // Study notes:
    // - {count} and {inputValue} interpolate state — they update on every re-render.
    // - onClick / onChange wire DOM events to JavaScript functions (browser-only).
    // - flex flex-row gap-2 mt-3: horizontal button/input groups with spacing.
    //
    // Used here: count display, Button row, controlled input, and Clear button.
    
    return (
        <div>
            <h1>Count</h1>
            <p>Actual number: {count}</p>
            <div className="flex flex-row gap-2 mt-3">
                <Button label="Increment" color="blue" onClick={() => setCount(count + 1)} />
                <Button label="Decrement" color="red" onClick={decrement} />
                {functions.map((fun) => {
                    return <Button key={`function-${fun.label}`} {...fun} />
                })}
            </div>
            <div className="flex flex-row gap-2 mt-3">
                <input value={inputValue} onChange={(e) => handleInputChange(e)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={clearInput}>Clear Input</button>
            </div>
        </div>
    )
};

export default Count;
