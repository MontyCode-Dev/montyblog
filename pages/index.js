import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services'



export default function Home({ posts }) {
  return (
    <div className="container pt-6 mx-auto p-6 mb-6">
      <Head>
        <title>Montycode Blog</title>
        <meta name="description" content="Montycode Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='flex flex-wrap'>
        <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
          {posts.map((post) => <PostCard post={post.node} key={post.node.title} />)}
        </div>
        <div className="md:w-1/3 w-full">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  
  return {
    props: { posts }
  };
};
