import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date/Date';

import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// by default - get static props runs at build time to populate data for static generation of page's html
// - function retrieves external data and assigns to props 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

// component is passed allPostsData prop values assigned by getStaticProps
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome everyone! </p>
        <p>I'm a software engineer developing JS web applications in React with Next. You can contact me on LinkedIn.</p>
        <p>
          <a href="https://nextjs.org/learn">built following the Next.js tutorial</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>topics to understand</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ name, date, title }) => (
            <li className={utilStyles.listItem} key={name}>
              <Link href={`/posts/${name}`}>{title}</Link>
              <div className={utilStyles.lightText}>
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
