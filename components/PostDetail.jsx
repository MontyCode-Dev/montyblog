import React from "react";
import { FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const PostDetail = ({ post }) => {
  console.log(post);
  return (
    <div className="container mx-auto">
        <div className="flex items-center">
            <p className="text-sm lg:text-base leading-none text-gray-500">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
        <h1 className="text-5xl text-gray-800 font-medium mb-6">
          {post.title}
        </h1>
        <div className="w-full justify-between mt-4 items-center">
            <div className="md:-mx-2 flex items-center flex-wrap">
                {post.categories.map((category) => (
                  <div key={category.slug} className="flex items-center justify-center p-2 m-2 bg-gray-200 rounded">
                      <p className="text-sm lg:text-base leading-none text-gray-600">#{category.name}</p>
                  </div>
                ))}
            </div>
        </div>
        <div className="flex items-center mb-8">
            <img src={post.author.photo.url} alt={post.author.name} className="w-10 h-10 object-cover" />
            <div>
                <p className="text-base text-gray-600 ml-4">
                  Publicado por&nbsp;
                  <span className="underline cursor-pointer">
                    {post.author.name}
                  </span>
                </p>
            </div>
        </div>
        <div className="h-96 w-full relative border-b border-gray-300 mb-12">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full object-cover overflow-hidden shadow"
          />
        </div>
        <article className="prose lg:prose-xl mx-auto mb-6 overflow-hidden">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
        </article>
    </div>
  );
};

export default PostDetail;
