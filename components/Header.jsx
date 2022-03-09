import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../public/logo.png";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="relative">
        <div className="px-6 py-9">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                  <div className="w-40 cursor-pointer">
                    <Image src={Logo} alt="logo" />
                  </div>
                </Link>
                <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                {categories.map((category) => (
                  <li
                    key={category.slug}
                  >
                    <Link
                      href={`/category/${category.slug}`}
                    >
                      <a 
                        className="text-base font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                      >
                        {category.name}
                      </a>
                    </Link>
                  </li>
                ))}
                </ul>
                <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                    <div className="flex items-center space-x-4 xl:space-x-8">
                        <Link href='https://github.com/montycode'>
                            <a className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"><FaGithub className="fill-stroke w-8 h-8" /></a>
                        </Link>
                        <Link href='https://www.instagram.com/montycode/'>
                            <a className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"><FaInstagram className="fill-stroke w-8 h-8" /></a>
                        </Link>
                        <Link href='https://twitter.com'>
                            <a className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"><FaTwitter className="fill-stroke w-8 h-8" /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
