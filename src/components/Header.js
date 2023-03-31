import React from "react";
import { FaFacebook } from "react-icons/fa";
import Logo from './assets/Logo.png';
import Time from './assets/Time.png';
import Email from './assets/Email.png';
import Phone from './assets/Phone.png';

const Header = () => {
  return (
      <div className="container mx-auto w-screen bg-secondary bg-gray-800 h-28">
        <div className=" mx-auto px-2 w-full py-2 flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-[36px] w-30 mr-2" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <img src={Time} alt='' className="h-[63px] w-[63px]"/>
              <span className="text-white font-secondary ml-2 text-[12px] font-medium">Mon-Sat. 9.00 - 18.00<br/>Sunday closed Messsage </span>
            </div>
            <div className="flex items-center mr-6">
              <img src={Email} alt='' className="h-[63px] w-[63px]"/>
              <span className="text-white font-secondary ml-2 text-[12px] font-medium">Email<br/>contact@logistics.com</span>
            </div>
            <div className="flex items-center">
              <img src={Phone} alt='' className="h-[63px] w-[63px]"/>
              <span className="text-white font-secondary ml-2 text-[12px] font-medium">Call us<br/>(00) 112 365 489</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
