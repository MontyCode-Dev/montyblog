import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='mt-8 md:mt-12 md:px-20 lg:px-14 xl:px-0 w-full flex justify-center items-center space-y-10 flex-col'>
      <div className="w-full flex justify-start items-start flex-col">
            <div className="w-full">
              <img className="lg:object-cover lg:h-72 xl:h-96 w-full" src={post.featuredImage.url} alt={post.title} />
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-4 shadow bg-white rounded p-6">
                <h2 className="lg:text-4xl text-3xl font-bold mt-4 text-gray-800">{post.title}</h2>
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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.375 3.5L12.875 8L8.375 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.25 8H3.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>          
                    </div>
                  </Link>
                  <p className="text-sm md:text-base leading-4 text-gray-600">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard;