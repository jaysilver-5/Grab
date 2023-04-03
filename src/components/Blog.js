import React from 'react';
import Blog1 from './assets/Blog1.png';
import Date1 from './assets/Date1.png'; 
import Blog2 from './assets/Blog2.png';
import Date2 from './assets/Date2.png'; 
import Blog3 from './assets/Blog3.png';
import Date3 from './assets/Date3.png'; 
import FooterBg from './assets/Footer-bg.png'

function Blog() {
  return (
    <div>
        <div className='mt-20 h-[1260px] flex items-center w-full'>
            <div className='container m-auto flex items-center'>
                <div className='m-auto'>
                    <div className='mx-auto pb-20 w-full'>
                        {/* Subtext */}
                        <div className='flex items-center mx-auto w-[12%] text-[14px] bg-black text-white bg-opacity-50'>
                            <div className='h-5 w-[2px] bg-primary'></div>
                            <span className='ml-2'>The Transporters</span>
                        </div>
                        {/* Header */}
                        <div className='mx-auto flex items-center'>
                            <h1 className='font-primary mx-auto font-semibold text-[35px]'>Meet Expert Team</h1>
                        </div>

                        <div className='w-full p'>
                            <div className="flex mt-6 w-full relative top-[50px] flex-row">
                                <div className="flex-1 flex items-center relative px-4 py-5 border-r-0 border-t border-b">
                                <div className="flex gap-x-6 m-auto items-center">
                                    <div className='flex mr-14'>
                                        <img src={Blog1} className='mr-2'/>
                                        <img src={Date1} className='w-[55px]'/>
                                    </div>
                                </div>
                                </div>
                                <div className="border-l border-t border-b h-[260px] my-auto"></div>
                                <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                                <div className="flex gap-x-6 m-auto items-center">
                                    <div>
                                        <h1 className='font-primary font-normal text-[25px]'>Five things you should have ready <br/>for your broker</h1>
                                        <p className='font-secondary font-medium text-[16px] text-[#666C89]'>We are dedicated in creating added value
                                            <br/> for our customers by implementing modern
                                            <br/> technology in our work.
                                        </p>
                                        <ul className="list-disc list-inside">
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="flex w-full relative top-[50px] flex-row">
                                <div className="flex-1 flex items-center relative px-4 py-5 border-r-0 border-t border-b">
                                <div className="flex gap-x-6 m-auto items-center">
                                    <div className='flex mr-14'>
                                        <img src={Blog2} className='mr-'/>
                                        <img src={Date2} className='w-[55px]'/>
                                    </div>
                                </div>
                                </div>
                                <div className="border-l border-t border-b h-[260px] my-auto"></div>
                                <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                                <div className="flex gap-x-4 items-center">
                                    <div>
                                        <h1 className='font-primary font-normal text-[#FFBE34] text-[25px]'>Five things you should have ready <br/>for your broker</h1>
                                        <p className='font-secondary font-medium text-[16px] text-[#666C89]'>We are dedicated in creating added value
                                            <br/> for our customers by implementing modern
                                            <br/> technology in our work.
                                        </p>
                                        <ul className="list-disc list-inside">
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="flex w-full relative top-[50px] flex-row">
                                <div className="flex-1 flex items-center relative px-4 py-5 border-r-0 border-t border-b">
                                <div className="flex gap-x-6 m-auto items-center">
                                    <div className='flex mr-14'>
                                        <img src={Blog3} className='mr-2'/>
                                        <img src={Date3} className='w-[55px]'/>
                                    </div>
                                </div>
                                </div>
                                <div className="border-l border-t border-b h-[260px] my-auto"></div>
                                <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                                <div className="flex gap-x-6 items-center">
                                    <div>
                                        <h1 className='font-primary font-normal text-[25px]'>Five things you should have ready <br/>for your broker</h1>
                                        <p className='font-secondary font-medium text-[16px] text-[#666C89]'>We are dedicated in creating added value
                                            <br/> for our customers by implementing modern
                                            <br/> technology in our work.
                                        </p>
                                        <ul className="list-disc list-inside">
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <button className='mt-7 mx-auto rounded-br-[-30px] flex items-center h-[60px] w-[194px] bg-secondary'>
                        <p className='m-auto text-white font-secondary font-semi-bold'>Explore more</p>
                    </button>
                </div>
            </div>
        </div>
        <img src={FooterBg} className='absolue bottom-0' />
    </div>
  )
}

export default Blog
