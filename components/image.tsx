// =============================================================================
// FILE: ImageComponent
// =============================================================================
// Wraps the Next.js Image component with optimized loading defaults.
// Server Component (no "use client") — renders on the server.
// Used in: app/start/[name]/page.tsx

// =============================================================================
// TOPIC: next/image import
// =============================================================================
// Study notes:
// - next/image replaces plain <img> with automatic optimization.
// - Benefits: lazy loading by default, responsive sizing, reduced layout shift.
// - Images are optimized at build/request time by the Next.js image pipeline.
//
// Used here: Image is the only element returned by this component.

import Image from "next/image";

// =============================================================================
// TOPIC: Component export
// =============================================================================
// Study notes:
// - named export (export const): import { ImageComponent } from "..."
// - Keeps the export name explicit when a file may grow to export multiple items.
//
// Used here: consumed as `import { ImageComponent } from "..."` in the dynamic route page.

export const ImageComponent = () => {

    // =========================================================================
    // TOPIC: Image props
    // =========================================================================
    // Study notes:
    // - src="/next.svg": files in the /public folder are served from the site root.
    // - width / height: required by next/image to reserve space and prevent layout shift.
    // - alt: required for accessibility — screen readers announce this text.
    // - priority: disables lazy loading for above-the-fold / LCP images (loads immediately).
    // - className="dark:invert": Tailwind dark-mode variant inverts colors in dark theme.
    //
    // Used here: Next.js logo displayed at the top of the dynamic route page.

    return (
        <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={100}
            priority
        />
    );
};
