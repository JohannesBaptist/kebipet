import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Pets() {
    return (
        <div className='px-[100px] mt-[50px]'>
            <div className='flex items-center justify-between'>
                <p className='font-black text-3xl font-[delicious]'>Shop per pet</p>
                <div className='flex flex-items items-center justify-content'>
                    <div className='relative w-5 h-5 mb-[-2px]  text-blue-500'>
                        <ChevronRightIcon />
                    </div>
                    <p className='text-blue-500 text-md'>See All Pets</p>
                </div>

            </div>
            <div className='w-full mt-[20px] flex items-center justify-between'>
                <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
            </div>

        </div>
    )
}

export default Pets
