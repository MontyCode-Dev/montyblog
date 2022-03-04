import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className="mx-auto shadow bg-white rounded p-6 mt-10">
      <h1 className="text-2xl text-gray-800 font-bold border-b border-gray-200 pb-4">
        Categorias
      </h1>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <div className="flex items-center pt-4 cursor-pointer">
              <div className="w-0.5 h-4 bg-violet-500 rounded-sm" />
              <p className="text-sm sm:text-base leading-4 text-gray-800 pl-2">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;