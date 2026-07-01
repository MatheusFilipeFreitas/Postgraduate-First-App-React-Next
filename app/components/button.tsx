// =============================================================================
// FILE: Button
// =============================================================================
// Reusable styled button with configurable label, color, and click handler.
// No "use client" directive — imported by Count (Client Component), so it
// ships in the client bundle and can receive onClick handlers.
// Used in: app/components/count.tsx

// =============================================================================
// TOPIC: FC and exported prop types
// =============================================================================
// Study notes:
// - FC<ButtonProps> types a functional component that receives ButtonProps.
// - Exporting ButtonProps lets other files type arrays or wrappers (e.g. functions
//   in count.tsx) without duplicating the shape.
// - Props describe the component contract: label (text), color (Tailwind name),
//   onClick (handler with no arguments).
//
// Used here: Button receives label, color, and onClick from Count.

import { FC } from "react";

export type ButtonProps = {
    label: string;
    color: string;
    onClick: () => void;
}

// =============================================================================
// TOPIC: Dynamic className with Tailwind
// =============================================================================
// Study notes:
// - Template literals build class strings from props: `bg-${color}-500`.
// - Tailwind scans source files at build time — dynamic color names may need
//   safelisting if the compiler cannot detect every variant.
// - Shared styling (padding, rounded corners, hover) lives here once instead
//   of repeating classes on every button in Count.
//
// Used here: color prop maps to bg-{color}-500 and hover:bg-{color}-600.

const Button: FC<ButtonProps> = ({ label, color, onClick }) => {

    const className = `bg-${color}-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-${color}-600`;
    return (
        <button 
            className={className} 
            onClick={onClick}
        >
            {label}
        </button>
    )
};

// =============================================================================
// TOPIC: Default export and component composition
// =============================================================================
// Study notes:
// - default export: import Button from "./button" (one main export per file).
// - Count composes multiple Button instances instead of duplicating <button> markup.
// - Composition: parent passes behavior (onClick) and presentation (label, color);
//   Button stays presentational and reusable.
//
// Used here: Count renders increment, decrement, and batch-action buttons.

export default Button;
