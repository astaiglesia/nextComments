import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.name);
  
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.name}</title>
      </Head>
      {postData.title}
      <br />
      {postData.name}
      <br />
      {postData.date}
      <br />
      {<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
    </Layout>
  )
}
