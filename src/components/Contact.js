import React from 'react';
import Time from './assets/Time.png';
import Email from './assets/Email.png';
import Phone from './assets/Phone.png';
import ClientLogo from './assets/Client-Logo.png'

function Contact() {
  return (
    <div className='pt-24 pb-36 bg-secondary'>
        <div className='text-white flex items-center'>
            {/* Flex1 */}
                <div className='container flex-1/2  items-center m-auto'>
                    {/* subhead */}
                    <div className='flex items-center w-[20%] text-[14px] bg-black text-white bg-opacity-50'>
                        <div className='h-5 w-[2px] bg-primary'></div>
                        <span className='ml-2'>Contact</span>
                    </div>
                    {/* Header */}
                    <h1 className='font-primary font-semibold text-[35px]'>Get in touch with us</h1>
                    {/* Paragraph */}
                    <p className='font-secondary font-medium text-[16px]'>
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
                    <div className="mt-8 flex items-center">
                        <img src={Phone} alt='' className="h-[63px] w-[63px]"/>
                        <span className="text-white font-secondary ml-2 text-[12px] font-medium">Call us<br/>(00) 112 365 489</span>
                    </div>
                </div>
                {/* Flex2 */}
                <div className='flex-1 relative -left-12 mr-12'>
                    <div className='flex gap-x-6'>
                        <input placeholder='Your name*' className='w-[250px] p-2 h-[60px] bg-secondary border border-[#4E5683]-600'/>
                        <input placeholder='Email *' className='w-[250px] p-2 h-[60px] bg-secondary border border-[#4E5683]-600'/>
                    </div>

                    <div className='flex mt-8 gap-x-6'>
                        <input placeholder='Phone Number*' className='w-[250px] p-2 h-[60px] bg-secondary border border-[#4E5683]-600'/>
                        <input placeholder='City *' className='w-[250px] p-2 h-[60px] bg-secondary border border-[#4E5683]-600'/>
                    </div>

                    <input placeholder='Your message' className='w-full p-2 mt-8 h-[120px] bg-secondary border border-[#4E5683]-600'/>

                    <button className='mt-7 rounded-br-[-30px] flex items-center h-[60px] w-[194px] bg-gradient-to-r from-[#FFB629] to-[#FFD7A6]'>
                        <p className='m-auto font-secondary text-black font-semi-bold'>Submit Message</p>
                    </button>
                </div>
            </div>
            
         </div>
    )
}

export default Contact