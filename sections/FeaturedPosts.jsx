import React, { useState, useEffect } from 'react';
import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const customLeftArrow = (
  <div className="absolute left-0 rounded-full shadow">
    <button aria-controls="slide" aria-label="slide back" className="rounded-full bg-white shadow cursor-pointer mr-4 p-2 ">
        <BiLeftArrowAlt className='w-6 h-6 text-purple-100' />
    </button>
  </div>
);

const customRightArrow = (
  <div className="absolute right-0 rounded-full shadow">
    <button aria-controls="slide" aria-label="slide back" className="rounded-full bg-white shadow cursor-pointer mr-4 p-2 ">
        <BiRightArrowAlt className='w-6 h-6 text-purple-100' />
    </button>
  </div>
);

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
      getFeaturedPosts().then((result) => {
          setFeaturedPosts(result);
          setDataLoaded(true);
      });
  }, []);

  return (
    <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
        {dataLoaded && featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedPosts;