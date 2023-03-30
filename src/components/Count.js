import React from 'react'

function Count() {
  return (
    <div className='container w-full flex items-center h-60'>
        <div className='m-auto w-[90%]'>
        <div className="flex relative top-[50px] flex-row">
    <div className="flex-1 flex items-center relative h-20 px-4 py-2 border-r-0 border-t border-b">
        <div className='flex gap-x-6 m-auto items-center'>
            <h1 className='font-primary text-3xl font-semibold text=[60px]'>1294</h1>
            <div className='w-[17px] h-[17px] bg-primary'></div>
                <p>Delivered packages</p>
        </div>
    </div>
        <div className="border-l border-t border-b"></div>
            <div className="flex-1 flex items-center px-4 py-2 border-l-0 border-t border-b">
                <div className='flex gap-x-6 m-auto items-center'>
                <h1 className='font-primary text-3xl font-semibold text=[60px]'>3594</h1>
                <div className='w-[17px] h-[17px] bg-primary'></div>
                    <p>Satisfied Clients</p>
                </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Count