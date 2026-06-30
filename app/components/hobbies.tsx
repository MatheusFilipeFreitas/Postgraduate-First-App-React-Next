// =============================================================================
// FILE: Hobbies
// =============================================================================
// Renders hobby lists using array methods and list rendering patterns.
// Server Component (no "use client") — renders on the server.
// Used in: app/start/[name]/page.tsx

// =============================================================================
// TOPIC: Module data
// =============================================================================
// Study notes:
// - Data declared at module scope is shared across renders of this component.
// - string[] is a TypeScript typed array — only strings are allowed.
//
// Used here: source list for destructuring, spread, and map examples below.

const hobbies: string[] = ["Coding", "Gaming", "Traveling"];

// =============================================================================
// TOPIC: Component export
// =============================================================================
// Study notes:
// - named export (export const): import { Hobbies } from "..."
// - Compare with name-component.tsx which uses default export.
//
// Used here: consumed as `import { Hobbies } from "..."` in the dynamic route page.

export const Hobbies = () => {

    // =========================================================================
    // TOPIC: Array destructuring
    // =========================================================================
    // Study notes:
    // - [first, ...rest] pulls the first item and collects the remainder in a new array.
    // - Useful when the first element has special meaning (here: favorite hobby).
    //
    // Used here: favoriteHobby = "Coding", restHobbies = ["Gaming", "Traveling"]

    const [favoriteHobby, ...restHobbies] = hobbies;

    // =========================================================================
    // TOPIC: Spread operator
    // =========================================================================
    // Study notes:
    // - [...a, ...b] merges arrays without mutating the originals.
    // - Spread creates a new array — safer than push/splice when immutability matters.
    //
    // Used here: combine hobbies and newHobbies into allHobbies.

    const newHobbies = ["Reading"];
    const allHobbies = [...hobbies, ...newHobbies];

    // =========================================================================
    // TOPIC: Server Component logging
    // =========================================================================
    // Study notes:
    // - console.log in a Server Component runs on the server during render.
    // - Output appears in the terminal (where `next dev` runs), not browser DevTools.
    //
    // Used here: logs the merged allHobbies array on each server render.

    console.log("All hobbies: ", allHobbies);

    // =========================================================================
    // TOPIC: React Fragment
    // =========================================================================
    // Study notes:
    // - <>...</> groups multiple elements without adding an extra DOM node.
    // - A component must return a single root; fragments satisfy that rule cleanly.
    //
    // Used here: wraps two paragraphs and two lists in one return.

    // =========================================================================
    // TOPIC: List rendering and keys
    // =========================================================================
    // Study notes:
    // - .map() transforms each array item into a JSX element (here: <li>).
    // - key prop: React uses keys to track list items across re-renders.
    // - Prefer stable keys (e.g. hobby name) over index when the list can reorder.
    // - Index keys are acceptable for static lists that never change order.
    // - Tailwind: list-disc (bullets), list-inside (indent bullets), pl-1 (padding-left).
    //
    // Used here: three lists — favorite (single item), rest hobbies, new hobbies.

    return (
        <>
            <p> My hobbies are: </p>
            <ul className="list-disc list-inside pl-1">
                <li key={`favorite-hobby-${favoriteHobby}`}>Favorite hobby: {favoriteHobby}</li>
                {restHobbies.map((hobby: string, index: number) => (
                    <li key={`rest-hobby-${index}`}>{hobby}</li>
                ))}
            </ul>
            <p> New hobbies are: </p>
            <ul className="list-disc list-inside pl-1">
                {newHobbies.map((hobby: string, index: number) => (
                    <li key={`new-hobby-${index}`}>{hobby}</li>
                ))}
            </ul>
        </>
    );
};

// =============================================================================
// STUDY VARIANTS (not active — kept for learning)
// =============================================================================

// Variant: simple single-list map (earlier study step)
// export const Hobbies = () => {
//     return (
//         <>
//             <p> My hobbies are: </p>
//             <ul className="list-disc list-inside pl-1">
//                 {hobbies.map((hobby: string, index: number) => (
//                     <li key={`hobby-${index}`}>{hobby}</li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// Variant: explicit JSX.Element return type on map callback
// {hobbies.map((hobby: string, index: number): JSX.Element => {
//     return <li key={index}>{hobby}</li>;
//     // Using only index as key is risky when list order can change — prefer stable IDs.
// })}
