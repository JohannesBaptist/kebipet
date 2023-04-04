import React from 'react'

function Footer() {
  return (
    <div className='mt-[10rem] '>
        <div className='bg-[#67fecb]  w-full h-[150px]'>
        </div>
        <div className='bg-white w-full h-[250px]'>
        </div>
        <div className='px-[150px]'>
            <div className='w-full h-[1px] bg-gray-200'>
            </div>
        </div>
        <div className='px-[100px] h-[280px] py-[40px] pb-[30px] flex flex-col items-center justify-between'>
            <div><p className='text-black text-5xl font-[delicious]'>KebiPet</p></div>
            <div className='flex justify-center ites-center text-black text-sm'>
                <span>Algemen voorwaarden</span>
                <div className='w-[1px] h-full bg-black mx-4'></div>
                <span>Algemen voorwaarden</span>
                <div className='w-[1px] h-full bg-black mx-4'></div>
                <span>Algemen voorwaarden</span>
                <div className='w-[1px] h-full bg-black mx-4'></div>
                <span>Algemen voorwaarden</span>
                <div className='w-[1px] h-full bg-black mx-4'></div>
                <span>Algemen voorwaarden</span>
                

            </div>
            <div><p className='text-[10px] font-light'>The benefits of KebiPet.com do not apply to the entire range. See the terms and conditions. All prices include VAT and other taxes and exclude any shipping and service costs.</p></div>
        </div>

    </div>
  )
}

export default Footer
