import React from 'react';
import Logo from './assets/Logo.png'; 

function FooterNav() {
  return (
    <footer className="bg-[#1D2551] h-20">
      <div className="container mx-auto flex items-center ">
        <button className='rounded-br-[-30px] p-10 flex mr-12 items-center h-[60px] w-[350px] bg-secondary'>
          <img src={Logo} className='h-8 w-110'/>
        </button>
          <div className='flex mx-auto'>
            <a className='mr-[90px] font-primaty font-medium text-white text-[25px]'>Pages</a>
            <a className='mr-[90px] font-primaty font-medium text-white text-[25px]'>Utilities</a>
            <a className='font-primaty font-medium text-white text-[25px]'>Subscribe</a>
          </div>
      </div>
    </footer>
  );
};
  

export default FooterNav