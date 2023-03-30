import React from 'react';
import ChooseImg from './assets/choice-img.png';
import Pattern from './assets/Pattern.png';
import Delivery from './assets/delivery.png';

function Choose() {
  return (
    <div className='bg-[#F4F4F4] gap-x-6 h-screen flex'>
            <div>
                <img src={ChooseImg} className='h-screen'/>
            </div>
            {/* Flex 2 */}
                <div className='p-6 bg-pattern flex m-auto ml-2 items-center'>
                    <div>
                        {/* Sub content */}
                        <div className='flex w-[23%] items-center text-[14px] bg-[#E8E8E8] text-white bg-opacity-50'>
                            <div className='h-5 w-[3px] bg-primary'></div>
                            <span className='ml-2'>Why Choose</span>
                        </div>
                        {/* Header */}
                        <h1 className='font-primary font-semibold text-[30px]'>We create opportunity to<br/>reach potential</h1>
                        {/* Paragraph */}
                        <p className='mt-4 font-secondary font-medium text-[16px] italic'>Leverage agile frameworks to provide a robust synopsis for
                            <br/> strategy foster collaborative thinking to further the overall 
                            <br/>value proposition.
                        </p>
                        {/* Badges Row 1 */}

                        <div className='flex mt-12'>
                            <div className='flex items-center'>
                                <img src={Delivery} alt='' />
                                <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                            </div>

                            <div className='flex items-center'>
                                <img src={Delivery} alt='' />
                                <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                            </div>
                        </div>

                        {/* Badges Row 2 */}

                        <div className='flex mt-4'>
                            <div className='flex items-center'>
                                <img src={Delivery} alt='' />
                                <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                            </div>

                            <div className='flex items-center'>
                                <img src={Delivery} alt='' />
                                <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                            </div>
                        </div>

                        {/* Badges Row 3 */}

                        <div className='flex mt-4'>
                            <div className='flex items-center'>
                                <img src={Delivery} alt='' />
                                <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                            </div>

                            <div className='flex items-center'>
                                <img src={Delivery} alt='' />
                                <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Choose