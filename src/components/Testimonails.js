import React from 'react';
import Arrow from './assets/Arrow.png';
import User1 from './assets/User1.png';
import User2 from './assets/User2.png';
import Quote from './assets/quote.png';
import Stars from './assets/Star.png'


function Testimonails() {
  return (
    <div className='container flex h-screen items-center'>
        <div className='m-auto h-82 w-full'>
            <div>
                {/* Subtext */}
                <div className='flex items-center w-[10%] text-[14px] bg-black text-white bg-opacity-50'>
                    <div className='h-5 w-[2px] bg-primary'></div>
                    <span className='ml-2'>Testimonails</span>
                </div>
                {/* Header & Arrow */}
                <div className='flex justify-between'>
                    <h1 className='font-primary font-semibold text-[35px]'>What our customers say</h1>
                    <img src={Arrow} className='h-10' />
                </div>

                <div className='flex mt-6 items-center'>
                    <div className='m-auto flex'>

                        {/* User1 */}

                        <div className='bg-[#F4F4F4] p-10'>
                            <div className='flex justify-betwween'>
                            <div className='flex items-center'> 
                                <img src={User1} />
                                
                                <div className='ml-4 m-auto'>
                                    <h1 className='ml-2 font-secondary font-medium text-[20px]'>Kathleen Smith</h1>
                                    <p> Fuel company</p>
                                </div> 
                            </div>
                            <img src={Quote} className='h-10 m-auto'/>
                            </div>
                            <p className='mt-4 font-secondary font-medium text-[16px] italic'>Leverage agile frameworks to provide a robust synopsis for
                                <br/> strategy foster collaborative thinking to further the overall 
                                <br/>value proposition. Organically grow the holistic world view 
                                <br/>of disruptive innovation via workplace diversity and 
                                <br/>empowerment.
                            </p>

                            <img src={Stars} className='mt-6'/>
                        </div>

                        {/* User2 */}

                        <div className='bg-[#091242] text-white p-8'>
                        <div className='flex text-white justify-betwween'>
                            <div className='flex items-center'> 
                                <img src={User2} />
                                
                                <div className='ml-4 m-auto'>
                                    <h1 className='ml-2 font-secondary font-medium text-[20px]'>John Martins</h1>
                                    <p> Restoration Company</p>
                                </div> 
                            </div>
                            <img src={Quote} className='h-10 m-auto'/>
                            </div>
                            <p className='mt-4 font-secondary font-medium text-[16px] italic'>Leverage agile frameworks to provide a robust synopsis for
                                <br/> strategy foster collaborative thinking to further the overall 
                                <br/>value proposition. Organically grow the holistic world view 
                                <br/>of disruptive innovation via workplace diversity and 
                                <br/>empowerment.
                            </p>

                            <img src={Stars} className='mt-6' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonails