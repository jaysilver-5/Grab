import React from 'react';
import Logo from './assets/Logo.png';
import Time from './assets/Time.png'

// const Logo = function() {
//   return(
//     <div className="flex fixed justify-between mx-[15%] w-[20px] z-10 h-[20px]">
//       <div className='transform bg-primary -rotate-45 absolute top-0 left-0 w-[8px] h-[8px]'></div>
//       <div class="absolute top-0 bg-primary right-0 w-[8px] h-[8px]"></div>
//       <div class="absolute bottom-0 bg-primary left-0 w-[8px] h-[8px]"></div>
//       <div class="absolute bottom-0 bg-primary right-0 w-[8px] h-[8px]"></div>
//       <div className='grid place-items-center flex gap-4 ml-[30px]'>
//         <h1 className='grid place-items-center text-2xl text-white font-semibold font-primary mb' >Transitflow</h1>
//       </div>
//     </div>
//   )
// }

export default function Header() {
  return (
    <header className='py-8 bg-secondary'>
        <div className="mx-auto">
            <div className="flex mx-[17%] items-center justify-start">
              {/* logo */}
                <img src={Logo} alt='' className='h-[36px] w-[210px]'></img>


              <img src={Time} alt="" className='ml-auto w-[40px] h-[40px] mx-auto'></img>
            </div>
        </div>
    </header>
  )
}
