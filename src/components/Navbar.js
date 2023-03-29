import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-16">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-10 mr-4" />
          <div className="hidden sm:flex space-x-4 text-white">
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Link 1</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Link 2</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Link 3</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Link 4</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Link 5</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <a href="#">
            <FaInstagram className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="#">
            <FaFacebook className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="#">
            <FaTwitter className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="#">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
          </a>
          <div className="hidden sm:block h-16 w-16 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
