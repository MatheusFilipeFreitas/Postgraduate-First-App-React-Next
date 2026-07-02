// =============================================================================
// FILE: HighPage
// =============================================================================
// Blog post list fetched from an external API at request time.
// Async Server Component — fetch runs on the server during render.
// Route: app/high/page.tsx → URL /high

// =============================================================================
// TOPIC: Custom types for API data
// =============================================================================
// Study notes:
// - Post describes the shape of each item returned by the blog API.
// - Typing the response helps catch mismatches when mapping fields in JSX.
// - date is kept as string from JSON — formatted with Date in the template.
//
// Used here: type posts array and map callback parameter.

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
}

// =============================================================================
// TOPIC: Async Server Component and fetch
// =============================================================================
// Study notes:
// - async page components are Server Components — they run only on the server.
// - await fetch(...) loads data before JSX is returned (no useEffect needed).
// - Next.js extends fetch with caching defaults; external APIs may revalidate per request.
// - response.json() parses the body; cast or validate before trusting the shape.
//
// Used here: GET https://api.vercel.app/blog and render the post list.

// =============================================================================
// TOPIC: List rendering from fetched data
// =============================================================================
// Study notes:
// - posts.map() turns each Post into a <li> — same pattern as hobbies.tsx and home nav.
// - key={`post-${post.id}`} uses a stable unique id from the API (preferred over index).
// - Tailwind: list-none (no bullets), mb-4 (spacing), text-gray-500 (metadata styling).
// - toLocaleDateString() formats ISO date strings for display in the user's locale.
//
// Used here: blog title, author, date, category, and content per post.

const HighPage = async () => {
    const response = await fetch("https://api.vercel.app/blog");

    const posts: Post[] = await response.json();
    
    return (
        <div>
            <h1>High Page</h1>
            <ul className="list-none mt-5">
                {posts.map((post: Post) => (
                    <li key={`post-${post.id}`} className="mb-4">
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-sm text-gray-500">Author: {post.author}</p>
                        <p className="text-sm text-gray-500">Date: { new Date(post.date).toLocaleDateString() }</p>
                        <p className="text-sm text-gray-500">Category: {post.category}</p>
                        <p className="text-sm text-gray-500">Content: {post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HighPage;
