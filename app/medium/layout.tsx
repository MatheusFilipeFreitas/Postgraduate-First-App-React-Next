// =============================================================================
// FILE: MediumLayout
// =============================================================================
// Nested layout for the /medium route segment — wraps pages with CountProvider.
// Server Component (no "use client") — imports Client Provider; Next.js handles the boundary.
// Route: app/medium/layout.tsx → applies to /medium and /medium/[count]

// =============================================================================
// TOPIC: Nested layouts and Context providers
// =============================================================================
// Study notes:
// - layout.tsx in app/medium/ wraps every page under /medium (including dynamic routes).
// - {children} is the active page (page.tsx or [count]/page.tsx).
// - CountProvider is a Client Component — state persists while navigating within /medium.
// - Layouts do not re-mount on navigation between sibling pages under the same segment.
//
// Used here: GlobalCount and GlobalValueCount on /medium share context from this Provider.

import CountProvider from "../context/count.context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CountProvider>
        {children}
      </CountProvider>
    </>
  );
}
