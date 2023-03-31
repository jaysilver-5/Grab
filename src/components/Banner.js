import React from 'react'

export default function() {
  return (
    <div className='bg-banner bg-no-repeat w-screen h-[800px]'>
        <div className='container relative top-32 flex items-center h-screen'>
            <div>
                <div className='flex items-center w-[50%] text-[14px] bg-black text-white bg-opacity-50'>
                    <div className='h-5 w-[3px] bg-primary'></div>
                    <span className='ml-4'>Logistics & Supply Chain Solutions</span>
                </div>
                <h1 className='font-secondary font-bold text-[60px] text-white'>Your Gateway<br/>to any Destination<br/>in the World</h1>
                <p className='font-secondary text-white font-medium'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu
                    <br/> no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim 
                    <br/>diam interdum nulla, sed laoreet risus lectus.
                </p>
                <button className='mt-7 rounded-br-[-30px] flex items-center h-[60px] w-[194px] bg-gradient-to-r from-[#FFB629] to-[#FFD7A6]'>
                    <p className='m-auto font-secondary font-semi-bold'>Explore more</p>
                </button>
            </div>
        </div>
    </div>
  )
}
