import React from 'react';
import Head from 'next/head';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentForm } from '../../components';

const PostDetails = ({ post }) => {
  return (
    <div className="container pt-6 mx-auto p-6">
      <Head>
        <title>Montycode Blog | {post.title}</title>
      </Head>
      <section className='flex flex-wrap'>
        <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="md:w-1/3 w-full mb-12">
          <div className="lg:sticky relative top-8">
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
            <Categories />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
    const data = (await getPostDetails(params.slug)) || [];
    
    return {
      props: { post: data }
    };
};

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false
    }
};