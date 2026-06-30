// =============================================================================
// FILE: NameComponent
// =============================================================================
// Displays a person's name, age, and birth date.
// Server Component (no "use client") — renders on the server.
// Used in: app/start/[name]/page.tsx — receives a `person` object built from
// the dynamic route param.

// =============================================================================
// TOPIC: Imports
// =============================================================================
// Study notes:
// - FC (FunctionComponent) is a React type for components that receive props
//   and return JSX (or null).
// - Using FC makes the component signature explicit and IDE-friendly.
//
// Used here: typing NameComponent as a functional component with props.

import { FC } from "react";

// =============================================================================
// TOPIC: Custom types
// =============================================================================
// Study notes:
// - TypeScript types describe the shape of data before it reaches the component.
// - Person groups related fields (name, age, birthDate) into one reusable contract.
// - Reusing a type keeps props consistent across components and pages.
//
// Used here: defines what the `person` prop must contain.

type Person = {
    name: string;
    age: number;
    birthDate: Date;
};

// =============================================================================
// TOPIC: Component signature
// =============================================================================
// Study notes:
// - FC<{ person: Person }> tells TypeScript this component expects one prop: person.
// - Props are passed as a single object (not spread as separate props) so the
//   page can build the object from route data and pass it in one place.
//
// Used here: NameComponent receives { person: Person } from the dynamic route page.

const NameComponent: FC<{ person: Person }> = ({ person }: { person: Person }) => {

    // =========================================================================
    // TOPIC: Destructuring
    // =========================================================================
    // Study notes:
    // - First destructuring: { person } pulls the prop from the component arguments.
    // - Second destructuring: { name, age, birthDate } pulls fields from person.
    // - Destructuring keeps JSX clean — use {name} instead of {person.name}.
    //
    // Used here: extract person fields for rendering below.

    const { name, age, birthDate } = person;

    // =========================================================================
    // TOPIC: JSX rendering
    // =========================================================================
    // Study notes:
    // - Interpolation: {name}, {age} inject JavaScript values into JSX text.
    // - Ternary (condition ? ifTrue : ifFalse): conditional text without if/else blocks.
    // - toLocaleDateString(): formats a Date for display using the user's locale.
    //
    // Used here: greeting paragraph + adult/minor label + formatted birth date.

    return (
        <div>
            <p> Hello, my name is {name} and I am {age} years old.</p>
            <p>{age >= 18 ? "I am an adult" : "I am a minor"}, my birth date is {birthDate.toLocaleDateString()}</p>
        </div>
    );
};

// =============================================================================
// TOPIC: Export
// =============================================================================
// Study notes:
// - default export: import NameComponent from "..." (one main export per file).
// - named export: import { Hobbies } from "..." (multiple exports per file).
// - This file uses default export; compare with hobbies.tsx (named export).
//
// Used here: consumed as `import NameComponent from "..."` in the dynamic route page.

export default NameComponent;

// =============================================================================
// STUDY VARIANTS (not active — kept for learning)
// =============================================================================

// Variant: props passed directly as FC<Person> (no nested person object)
// const NameComponent: FC<Person> = (person: Person) => {
//     const { name, age, birthDate } = person;
//     return (
//         <div>
//             <p> Hello, my name is {name} and I am {age} years old.</p>
//             <p>{age >= 18 ? "I am an adult" : "I am a minor"}, my birth date is {birthDate.toLocaleDateString()}</p>
//         </div>
//     );
// };

// Variant: destructured props in the function signature
// const NameComponent: FC<Person> = ({ name, age, birthDate }) => {
//     return (
//         <div>
//             <p> Hello, my name is {name} and I am {age} years old.</p>
//             <p>{age >= 18 ? "I am an adult" : "I am a minor"}, my birth date is {birthDate.toLocaleDateString()}</p>
//         </div>
//     );
// };

// Variant: ternary returns different JSX based on person.name
// const NameComponent: FC<{ person: { name: string, age: number } }> = ({ person }) => {
//     return person.name === "Matheus" ? <p>Matheus {person.age}</p> : <p>Not Matheus</p>;
// };

// Variant: conditional render with && (no else branch — returns false when condition fails)
// const NameComponent: FC<{ person: { name: string } }> = ({ person }) => {
//     return person.name === "Matheus" && <p>Matheus</p>;
// };
