import React from 'react';
import Blog1 from './assets/Blog1.png';
import Date1 from './assets/Date1.png' 

function Blog() {
  return (
    <div className='h-screen flex items-center w-full'>
        <div className='m-auto flex items-center w-[90%]'>
            <div className='m-auto'>
                <div className='mx-auto w-full'>
                    {/* Subtext */}
                    <div className='flex items-center mx-auto w-[19%] text-[14px] bg-black text-white bg-opacity-50'>
                        <div className='h-5 w-[2px] bg-primary'></div>
                        <span className='ml-2'>The Transporters</span>
                    </div>
                    {/* Header */}
                    <div className='mx-auto flex items-center'>
                        <h1 className='font-primary mx-auto font-semibold text-[35px]'>Meet Expert Team</h1>
                    </div>

                    <div className='w-full'>
                        <div className="flex mt-6 w-full relative top-[50px] flex-row">
                            <div className="flex-1 flex items-center relative px-4 py-5 border-r-0 border-t border-b">
                            <div className="flex gap-x-6 m-auto items-center">
                                <div className='flex mr-14'>
                                    <img src={Blog1} className='mr-2'/>
                                    <img src={Date1} className='w-[55px]'/>
                                </div>
                            </div>
                            </div>
                            <div className="border-l border-t border-b h-[210px] my-auto"></div>
                            <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                            <div className="flex gap-x-6 m-auto items-center">
                                <p> RRRR</p>
                            </div>
                            </div>
                        </div>

                        <div className="flex relative top-[50px] flex-row">
                            <div className="flex-1 flex items-center relative px-4 py-2 border-r-0 border-t border-b">
                            <div className="flex gap-x-6 m-auto items-center">
                                <p> RRRR</p>
                            </div>
                            </div>
                            <div className="border-l border-t border-b"></div>
                            <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                            <div className="flex gap-x-6 m-auto items-center">
                                <p> RRRR</p>
                            </div>
                            </div>
                        </div>

                        <div className="flex relative top-[50px] flex-row">
                            <div className="flex-1 flex items-center relative px-4 py-2 border-r-0 border-t border-b">
                            <div className="flex gap-x-6 m-auto items-center">
                                <p> RRRR</p>
                            </div>
                            </div>
                            <div className="border-l border-t border-b"></div>
                            <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                            <div className="flex gap-x-6 m-auto items-center">
                                <p> RRRR</p>
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

export default Blog