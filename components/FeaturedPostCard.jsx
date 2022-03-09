import React from "react";
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => {

  return (
    <div className="relative rounded-md">
        <Link href={`/post/${post.slug}`}>
            <a>
                <img src={post.featuredImage.url} alt={post.title} className="w-full h-full rounded-md  object-cover absolute" />
                <div className="relative z-20 bg-gradient-to-b from-gray-900 to-transparent w-full h-80 top-0 p-6 flex flex-col justify-between rounded-md ">
                    <h2 className="text-2xl font-bold text-white sm:w-auto w-64">{post.title}</h2>
                    <div className="mt-20">
                        <div className="sm:flex items-start justify-between">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img className="w-12 rounded-full" src={post.author.photo.url} alt={post.author.name} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-semibold text-white">{post.author.name}</p>
                                    <p className="text-sm text-white">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </a>
        </Link>
    </div>
  );
};

export default FeaturedPostCard;