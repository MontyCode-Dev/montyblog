import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <>
      <div className="mx-auto shadow bg-white rounded p-6">
        <h1 className="text-2xl text-gray-800 font-bold border-b border-gray-200 pb-4">
          {slug ? 'Posts Relacionados' : 'Posts Recientes'}
        </h1>
        {relatedPosts.map((post) => (
          <Link key={post.title} href={`/post/${post.slug}`} >
            <div className="flex items-center pt-5 pb-4 border-t border-gray-200 cursor-pointer">
                <div className="w-9 h-9 rounded">
                    <img src={post.featuredImage.url} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col pl-6">
                    <p className="text-base font-semibold leading-4 text-gray-800">{post.title}</p>
                    <p className="text-xs leading-3 text-gray-800 pt-2">{dayjs(post.createdAt).format('MMM DD, YYYY')}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostWidget;
