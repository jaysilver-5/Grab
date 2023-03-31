import React from 'react'
import Boat from './assets/boat.png';
import Warehouse from './assets/warehouse.png';
import Shipping from './assets/shipping.png';
import Jet from './assets/jet.png';

export default function 
() {
  return (
    <div className='w-full h-81 flex h-screen items-center'>
        <div className='flex justify-between m-auto w-[85%] p-4 h-70'>
            <div>
                <div className='flex w-[35%] items-center text-[14px] bg-black text-white bg-opacity-50'>
                    <div className='h-5 w-[3px] bg-primary'></div>
                    <span className='ml-2 font-primary font-normal text-[14px]'>What we do</span>
                </div>
                <h1 className='font-semibold font-primary text-[35px]'>Safe & Reliable<br/>Cargo Solutions</h1>
            </div>

            <div>
                <div className='flex gap-x-8'>
                    <img src={Boat} alt='' className='w-[50px] h-[50px]'/>
                    <div className='border-l pl-5 border-gray'>
                        <h1 className='font-primary font-normal text-[25px]'>Sea transport Services</h1>
                        <p className='font-primary font-normal text-[14px]'>Following the quality of our service 
                            <br/>thus having gained trust of our 
                            <br/>many clients.</p>
                    </div>
                </div>
                <div className='mt-8 flex gap-x-8'>
                    <img src={Jet} alt='' className='w-[50px] h-[50px]'/>
                    <div className='border-l pl-5 border-gray'>
                        <h1 className='font-primary font-normal text-[25px]'>Air Fright Services</h1>
                        <p className='font-primary font-normal text-[14px]'>Following the quality of our service 
                            <br/>thus having gained trust of our 
                            <br/>many clients.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex gap-x-8'>
                    <img src={Warehouse} alt='' className='w-[50px] h-[50px]'/>
                    <div className='border-l pl-4 border-gray'>
                        <h1 className='font-primary font-normal text-[25px]'>Warehousing Services</h1>
                        <p className='font-primary font-normal text-[14px]'>Following the quality of our service 
                            <br/>thus having gained trust of our 
                            <br/>many clients.</p>
                    </div>
                </div>
                <div className='mt-8 flex gap-x-8'>
                    <img src={Shipping} alt='' className='w-[50px] h-[50px]'/>
                    <div className='border-l pl-4 border-gray'>
                        <h1 className='font-primary font-normal text-[25px]'>Local Shipping Services</h1>
                        <p className='font-primary font-normal text-[14px]'>Following the quality of our service 
                            <br/>thus having gained trust of our 
                            <br/>many clients.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
