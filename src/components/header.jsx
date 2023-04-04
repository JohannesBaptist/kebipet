import { useEffect, useState } from "react"
import React from 'react'
import { SunIcon, MoonIcon, MagnifyingGlassCircleIcon, UserCircleIcon, ShoppingCartIcon, HeartIcon, ChevronDownIcon, FlagIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";


export default function Header({ theme, setTheme }) {

    const router = useRouter()


    return (
        <>
            <div className=" bg-black flex items-center justify-between w-full h-[30px]  p-4 px-[100px]">
                <div className="flex items-center justify-center text-white text-sm space-x-5">
                    <p className="text-white"><span className="text-bold text-[#67fecb]">Free</span> from 20 euros</p>
                    <p className="text-white">Delivery the same day, during the evening or day.</p>
                    <p className="text-white"><span className="text-bold text-[#67fecb]">Free</span> retourning</p>

                </div>
                <div className="flex items-center font-[delicious] text-lg text-[#67fecb] tracking-wider justify-center">
                    MyKebi See the benefits
                </div>
            </div>
            <div className=' flex items-center justify-between w-full h-[75px] bg-[#67fecb] p-4 px-[100px]'>
                <div id={"theme-toggler"} onClick={() => setTheme(!theme)} className='space-x-5 px-2 p-1 dark:text-white flex items-center justify-center text-black rounded-full  px-2 hover:cursor-pointer ease-in duration-200'>
                    <div className="flex items-center justify-center space-x-1 shadow-md bg-black dark:bg-white rounded-full px-2 p-1">
                        <div className="relative w-7 h-7 bg-black dark:bg-white text-yellow-500  dark:text-black hover:!text-yellow-500 rounded-lg p-1">
                            <SunIcon />
                        </div>
                        <div className="relative w-7 h-7 bg-black dark:bg-white dark:text-black hover:!text-gray-500 text-gray-500 rounded-lg p-1">
                            <MoonIcon />
                        </div>

                    </div>
                    <div className="flex items-center justify-center space-x-[1px]"><span className="text-purple-500 text-xl font-[delicious]">K</span><span className="text-red-800">e</span><span className="text-purple-500 font-[delicious] text-xl">B</span><span className="text-red-800">i</span><span className="text-purple-500 font-[delicious] text-xl">P</span><span className="text-red-800">e</span><span className="text-red-800">t</span></div>

                </div>

                <div className="flex shadow-md items-center justify-center bg-white rounded-full w-[500px] h-full  px-2">
                    <input placeholder="que estas buscando?" className="focus:outline-none text-xs bg-white w-full text-black p-1 rounded-full h-full"></input>
                    <div className="relative text-black w-7 h-7"><MagnifyingGlassCircleIcon /></div>
                </div>
                <div className="flex items-center justify-center space-x-5">
                    <div className="bg-white rounded-full text-black flex items-center justify-center space-x-3 px-2 p-1">
                        <div onClick={() => router.push("/api/auth/login")} className="w-7 h-7 relative"><UserCircleIcon /></div>
                        <div className="w-7 h-7 relative"><ShoppingCartIcon /></div>
                    </div>
                    <div className="w-7 h-7 relative text-red-400">
                        <HeartIcon/>
                        </div>
                </div>
            </div>
            <div className="flex items-center justify-between bg-white p-4 h-[75px] px-[100px]">
                <div className="flex items-center justify-center space-x-7">
                    <div className="flex items-center justify-center space-x-3 hover:cursor-pointer">
                        <p className=" text-black">Categories</p>
                        <div className="w-5 h-5 relative text-black">
                            <ChevronDownIcon />
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3 hover:cursor-pointer">
                        <p className="text-black">Gifts & Inspiration</p>
                        <div className="w-5 h-5 relative text-black">
                            <ChevronDownIcon />
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3 hover:cursor-pointer">
                        <p className="text-black">Discounts</p>
                        <div className="w-5 h-5 relative text-black">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>
                <div className="flex text-xs items-center justify-center space-x-5">
                    <p className="">Business</p>
                    <p className="">Vouchers</p>
                    <p className="!mr-[20px]">Customer serivce</p>
                    <div className="flex items-center justify-center ">
                        <span class=" text-[20px] fi fi-gb mt-[1px] mr-1 "></span>
                        <p className="text-black  text-[15px]">ES</p>
                        <div className="w-5 h-5 relative text-black">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



