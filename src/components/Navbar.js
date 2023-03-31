import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='flex flex-col'>
        <nav className="absolute px-12 mt-20 top-0 z-50 w-full bg-secondary bg-opacity-25 p-6 nav">
        <div className="container max-w-7xl mx-auto px-40">
            <div className="flex items-center justify-between">
            {/* Left side of navbar */}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                {/* Navigation links */}
                <a href="#" className="block border-r pr-[30px] border-gray-400 mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    Home 
                </a>
                <a href="#" className="block border-r pr-[30px] border-gray-400 mt-4 ml-2 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    About
                </a>
                <a href="#" className="block border-r pr-[30px] border-gray-400 mt-4 ml-2 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    Services
                </a>
                <a href="#" className="block border-r pr-[30px] border-gray-400 mt-4 ml-2 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                    Portfolio
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 ml-2 text-gray-300 hover:text-white">
                    Contact
                </a>
                </div>
                <div className="flex items-center justify-center">
                {/* Social buttons */}
                <button className="inline-block text-gray-300 hover:text-white mr-4">
                    <FaInstagram size={20} />
                </button>
                <button className="inline-block text-gray-300 hover:text-white mr-4">
                    <FaFacebook size={20} />
                </button>
                <button className="inline-block text-gray-300 hover:text-white mr-4">
                    <FaTwitter size={20} />
                </button>
                <button className="inline-block text-gray-300 hover:text-white mr-4">
                    <FaLinkedin size={20} />
                </button>
                {/* Request quote div */}
                </div>
            </div>
            </div>
        </div>
        </nav>
        <div className="bg-white h-full" style={{margin: 0}}>
            Request quote
        </div>
    </div>
  );
}

export default Navbar;
