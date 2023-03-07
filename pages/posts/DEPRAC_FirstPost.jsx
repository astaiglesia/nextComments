import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import Layout from "../../components/Layout/Layout";



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Adding a Post</title>
      </Head>
      <Script        
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Adding a Post</h1>
        <ul>
          <li>
            The page component can have any name, but you must export it as a default export.
          </li>
          <li>
            The Link component enables client-side navigation to transition between two pages in the same Next.js app using Javascript.
          </li>
          <li>
            This is faster than the default navigation done with browser requests to the server.
          </li>
        </ul>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}
