import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';



export default function Home({ posts }) {
  return (
    <div className="container pt-6 mx-auto p-6 mb-6">
      <Head>
        <title>Montycode Blog</title>
        <meta name="description" content="MontyCode Blog" />
        <meta name="author" content="MontyCode" />
        <meta name="description" content="
          El propósito de MontyCode es ayudar tanto a los principiantes 
          como a los desarrolladores más avanzados a llevar sus habilidades de desarrollo 
          al siguiente nivel y crear aplicaciones increíbles.
        " />
        <meta property="og:url" content="https://montycode.dev"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="MontyCode | Blog"/>
        <meta property="og:image" content="https://i.imgur.com/xHHrLeT.png" />
        <meta property="og:image:alt" content="MontyCode | Blog"/>
        <meta property="og:description" content="
          El propósito de MontyCode es ayudar tanto a los principiantes 
          como a los desarrolladores más avanzados a llevar sus habilidades de desarrollo 
          al siguiente nivel y crear aplicaciones increíbles."/>
        <meta property="og:site_name" content="MontyCode"/>
        <meta property="og:locale" content="es_MX"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
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
