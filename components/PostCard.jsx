import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import dayjs from 'dayjs';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='w-full flex justify-center items-center space-y-10 flex-col mb-12'>
      <div className="w-full flex justify-start items-start flex-col">
            <div className="w-full">
              <img className="lg:object-cover lg:h-72 xl:h-96 w-full rounded-t" src={post.featuredImage.url} alt={post.title} />
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-4 shadow bg-white rounded p-6">
                <h2 className="lg:text-4xl text-3xl font-bold mt-4 text-gray-800">{post.title}</h2>
                <div className="w-full justify-between items-center">
                    <div className="md:-mx-2 flex items-center flex-wrap">
                        {post.categories.map((category) => (
                          <div key={category.slug} className="flex items-center justify-center p-2 m-2 bg-gray-200 rounded">
                              <p className="text-sm lg:text-base leading-none text-gray-600">#{category.name}</p>
                          </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center lg:mt-8 mt-6">
                    <img src={post.author.photo.url} alt={post.author.name} className="w-10 h-10 object-cover" />
                    <div>
                        <p className="text-base text-gray-800 ml-4">Por <span className="underline cursor-pointer">{post.author.name}</span></p>
                    </div>
                </div>
                <p className="text-base leading-normal text-gray-600" >{post.excerpt}</p>
                <div className="flex justify-between items-center w-full">
                  <Link href={`/post/${post.slug}`}>
                    <div className="cursor-pointer border border-gray-600 flex justify-center items-center hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out text-gray-800 space-x-3 px-5 py-3">
                        <p className="text-base leading-none ">Leer Mas</p>
                        <BsArrowRightShort className='w-6 h-6' />      
                    </div>
                  </Link>
                  <p className="text-sm md:text-base leading-4 text-gray-600">{dayjs(post.createdAt).format('MMM DD, YYYY')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard;