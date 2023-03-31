import React from 'react';
import Time from './assets/Time.png';
import Email from './assets/Email.png';
import Phone from './assets/Phone.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Copyright from './assets/Copyright.png'

function Footer() {
  return (
    <div className='bg-secondary'>
        <div className='h-[420px] flex items-center bg-secondary'>
            <div className='container flex justify between items-center mx-auto'>
                <div className='mr-[180px]'>
                <p className='font-secondary font-medium text-[white] text-[16px]'>
                            Leverage agile frameworks to provide a robust 
                            <br/>synopsis for strategy foster collaborative 
                            <br/>thinking to further the overall value.
                        </p>
                        
                        <div className="mt-8 flex items-center mr-6">
                            <img src={Time} alt='' className="h-[63px] w-[63px]"/>
                            <span className="text-white font-secondary ml-2 text-[12px] font-medium">Mon-Sat. 9.00 - 18.00<br/>Sunday closed Messsage </span>
                        </div>
                        <div className="mt-8 flex items-center mr-6">
                            <img src={Email} alt='' className="h-[63px] w-[63px]"/>
                            <span className="text-white font-secondary ml-2 text-[12px] font-medium">Email<br/>contact@logistics.com</span>
                        </div>
                </div>
                <div className='flex relative  -left-8 -top-12' >
                    <div className='mr-[60px]'>
                        <p className='font-secondary font-medium text-[white] text-[16px]'>
                            About Us
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Our Team
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            About Us
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Our Project
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Contact
                        </p>
                    </div>

                    <div className=''>
                    <p className='font-secondary font-medium text-[white] text-[16px]'>
                            Style Guide
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Changelog
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Licenses
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Protected
                        </p>
                        <p className='font-secondary mt-4 font-medium text-[white] text-[16px]'>
                            Not found
                        </p>
                    </div>

                    <div className='relative -right-10'>
                        <input className='bg-secondary border border-[#4E5683] h-[50px]'/>

                        <div className='flex justify-center items-center'>
                            <div className='flex m-auto items-center'>
                                <div className='flex m-auto items-center' >
                                    <button className='mt-7 rounded-br-[-30px] flex items-center h-[50px] w-[110px] bg-gradient-to-r from-[#FFB629] to-[#FFD7A6]'>
                                        <p className='m-auto font-secondary font-medium'>Explore more</p>
                                    </button>

                                    <a className='m-auto relative top-3' href="#">
                                        <FaLinkedin className="text-2xl m-auto text-white h-[15px] mx-1 hover:text-gray-300" />
                                    </a>
                                    <a className='m-auto relative top-3' href="#">
                                        <FaTwitter className="text-2xl text-white h-[15px] mx-1 hover:text-gray-300" />
                                    </a>
                                    <a className='m-auto relative top-3' href="#">
                                        <FaFacebook className="text-white h-[15px] mx-1 hover:text-gray-300" />
                                    </a>    
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
