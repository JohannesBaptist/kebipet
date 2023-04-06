import React from 'react'

function MobileBanner() {
  return (
    <div className='bg-[#f3f3f3] lg:hidden w-screen mt-0 py-8 p-4 h-[250px] px-5'>
        <div className='w-full h-full flex flex-col items-start justify-between space-y-3'>
            <div>
            <p className='font-black text-2xl'>The Kebi Pet Palace</p>
            <p className='text-sm font-light text-lg'>Only for you</p>
            </div>
            <p className='bg-base font-[delicious] text-xl tracking-wider font-bold text-black rounded-md w-[fit-content] px-3 p-1'>{`Latest deals % `}</p>

        

        </div>
      
    </div>
  )
}

export default MobileBanner
