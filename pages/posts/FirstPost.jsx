// The component can have any name, but you must export it as a default export.
// The Link component enables client-side navigation to transition between two pages in the same Next.js app using Javascript.
// - which is faster than the default navigation done by the browser.

import Link from "next/link";


export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </>
  );
}