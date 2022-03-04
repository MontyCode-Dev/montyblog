import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Logo from '../public/logo.png';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='py-4 md:py-10'>
        <header className='mx-auto container px-4 xl:px-0'>
            <div className="flex items-center justify-between">
                <Link href='/'>
                    <div className="w-40 cursor-pointer">
                        <Image src={Logo} alt="logo" />
                    </div>
                </Link>
                <div>
                    <button onClick={handleMenu} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                    <div id='menu' className={'md:block lg:block ' + (isOpen ? 'block' : 'hidden')}>
                        <button onClick={handleMenu} className='block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-4'>
                            <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <ul className="flex md:flex text-3xl md:text-base bg-white lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 z-20">
                            {categories.map((category) => (
                                <li className='md:mr-8 lg:mr-10 flex items-center' key={category.slug}>
                                    <Link className='hover:text-gray-800 text-gray-600 text-sm pt-10 md:pt-0' href={`/category/${category.slug}`}>
                                            {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header;