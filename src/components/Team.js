import React from 'react';
import TeamPics from './assets/Team.png'

function Team() {
  return (
    <div className='h-screen flex items-center w-full'>
        <div className='m-auto flex items-center w-[60%]'>
            <div className='m-auto'>
                <div className='mx-auto'>
                    {/* Subtext */}
                    <div className='flex items-center mx-auto w-[16%] text-[14px] bg-black text-white bg-opacity-50'>
                        <div className='h-5 w-[2px] bg-primary'></div>
                        <span className='ml-2'>The Transporters</span>
                    </div>
                    {/* Header */}
                    <div className='mx-auto flex items-center'>
                        <h1 className='font-primary mx-auto font-semibold text-[35px]'>Meet Expert Team</h1>
                    </div>
                </div>
                {/* Images */}
                <img src={TeamPics}/>
            </div>
        </div>
    </div>
  )
}

export default Team