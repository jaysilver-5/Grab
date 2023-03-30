import React from 'react'
import Aboutbg from './assets/about-bg.png';
import Delivery from './assets/delivery.png';
import Cost from './assets/cost.png';
import Aboutpics from './assets/about-picture.png'

function About() {
  return (
    <div className='w-full bg-about z-10  bg-no-repeat mt-30 h-80 flex h-screen items-center'>
        <div className='flex relative top-40 bg-white m-auto z-50 p-8 w-[70%] h-50'>
            <div>
                <h1 className='font-secondary text-[35px] font-bold'>We provide full rage global<br/>logistics Solutions</h1>
                <p className='font-secondary font-medium text-[14px]'>Leverage agile frameworks to provide a robust synopsis for 
                    <br/>strategy foster collaborative thinking to further the overall
                    <br/>value proposition. 
                    <br/>
                    <br/>
                    Organically grow the holistic world view of disruptive 
                    <br/>innovation via workplace diversity and empowerment.
                    <br/>
                    <br/>
                </p>
                <div className='flex items-center'> 
                    <img src={Delivery} />
                    <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                </div>
                <div className='mt-4 flex items-center'> 
                    <img src={Cost} alt='' />
                    <p className='ml-2 font-primary font-normal text-[25]'>Delivery on Time</p>
                </div>
            </div>
            <div>
                <img src={Aboutpics} alt='' className=''/>
            </div>
        </div>
    </div>
  )
}

export default About