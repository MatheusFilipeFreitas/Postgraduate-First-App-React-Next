// =============================================================================
// FILE: StartPage (dynamic route)
// =============================================================================
// Profile page for a single person — composes Image, Name, and Hobbies components.
// Server Component (no "use client") — async function, renders on the server.
// Route: app/start/[name]/page.tsx → URL /start/:name (e.g. /start/Matheus)

// =============================================================================
// TOPIC: Imports
// =============================================================================
// Study notes:
// - Link: client-side navigation back to /start (see start/page.tsx).
// - Named imports { Hobbies }, { ImageComponent }: exported with `export const`.
// - Default import NameComponent: exported with `export default`.
// - Relative path ../../components/... resolves from this nested route folder.
//
// Used here: compose shared components and add a back link.

import Link from "next/link";
import { Hobbies } from "../../components/hobbies";
import { ImageComponent } from "../../components/image";
import NameComponent from "../../components/name-component";

// =============================================================================
// TOPIC: Page props and dynamic route params
// =============================================================================
// Study notes:
// - Folders with [brackets] create dynamic route segments (e.g. [name] → :name).
// - In Next.js 15+, params is a Promise — must await before reading values.
// - PageProps types the shape of props Next.js passes to this page component.
// - params.name comes from the URL: /start/Matheus → name = "Matheus".
//
// Used here: extract the person's name from the URL to pass to NameComponent.

type PageProps = {
    params: Promise<{
        name: string;
    }>;
};

// =============================================================================
// TOPIC: Async Server Component
// =============================================================================
// Study notes:
// - async page components are Server Components — they run only on the server.
// - await params unwraps the dynamic route segment before rendering.
// - Component composition: build the page by nesting smaller components.
// - Props flow down: page reads URL → builds person object → NameComponent displays it.
//
// Used here: orchestrate ImageComponent, NameComponent, and Hobbies on one page.

const StartPage = async ({ params }: PageProps) => {
    const { name } = await params;

    // =========================================================================
    // TOPIC: Layout and composition
    // =========================================================================
    // Study notes:
    // - px-6 / py-8: horizontal and vertical padding.
    // - grid gap-y-4: vertical stack layout with spacing between children.
    // - NameComponent receives a person object built from the route param + static data.
    // - Link href="/start": navigates back to the name list (parent route).
    //
    // Used here: vertical profile layout with image, name, hobbies, and back link.

    return (
        <div className="px-6 py-8 grid gap-y-4">
            <ImageComponent />
            <NameComponent person={{ name: name, age: 20, birthDate: new Date("1990-01-01") }} />
            <Hobbies />
            <br />
            <Link className="text-blue-500 hover:text-blue-700 underline" href="/start">
                Back to start
            </Link>
        </div>
    );
};

export default StartPage;

// =============================================================================
// STUDY VARIANTS (not active — kept for learning)
// =============================================================================

// Variant: NameComponent with inline props (older pattern — props not grouped in person object)
// <NameComponent name="Matheus" age={20} birthDate={new Date("1990-01-01")} />

// Variant: different person data passed to NameComponent
// <NameComponent person={{ name: "John", age: 16, birthDate: new Date("2006-01-01") }} />

// Variant: arrow function without explicit return block
// const StartPage = () => <div><h1>Arrow Page</h1></div>

// Variant: function declaration with return block
// export default function StartPage() {
//     return (
//         <div>
//             <h1>Function Page</h1>
//         </div>
//     );
// }
