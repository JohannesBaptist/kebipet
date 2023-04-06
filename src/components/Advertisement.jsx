import React from 'react'
import MobileAdvertisement from "@mobile/MobileAdvertisement"

function Advertisement() {
  return (
    
    <>
    <MobileAdvertisement/>
    <div className='px-[100px] hidden lg:block mt-[30px]'>
        <div className='grid grid-cols-2 w-full h-[250px] gap-[10px]'>
            <div className='bg-blue-500 shadow-md rounded-md w-full h-full'></div>
            <div className='bg-[#67fecb] shadow-md rounded-md w-full h-full'></div>
        </div>
    </div>
    </>
  )
}

export default Advertisement
