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
  const postData = getPostData(params.name);
  
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.name}
      <br />
      {postData.date}
    </Layout>
  )
}
