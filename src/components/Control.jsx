import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  HeartIcon,
  ChevronDownIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";

import { SocialIcon } from "react-social-icons";
import MobileHeader from "@mobile/MobileHeader";



export default function Control({ theme, setTheme }) {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [search, setSearch] = useState();

  const searchSubmit = () => {
    router.push(
        {
          pathname: "/search",
          query: { search },
        }, "search"
      )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchSubmit();
    }
  };


  return (
    <>
      <MobileHeader />
      <div className="hidden lg:block">
        <div className="bg-black flex items-center justify-between w-full h-[35px]  p-4 px-[100px]">
          <div className="  flex items-center justify-center text-white text-sm space-x-5">
            <p className="text-white link" >
              <span className="text-bold text-[#67fecb]">Free</span> from 20
              euros
            </p>
            <p className="text-white link">
              Delivery the same day, during the evening or day.
            </p>
            <p className="text-white link">
              <span className="text-bold text-[#67fecb]">Free</span> retourning
            </p>
          </div>
          <div onClick={() => router.push("/mykebi")} className="flex items-center underline font-[delicious] hover:cursor-pointer link text-lg text-[#67fecb] tracking-wider justify-center">
            MyKebi See the benefits
          </div>
        </div>
        <div className=" flex items-center justify-between w-full h-[75px] bg-[#67fecb] p-4 px-[100px]">
          <div
            id={"theme-toggler"}
            onClick={() => setTheme(!theme)}
            className="space-x-5 px-2 p-1 dark:text-white flex items-center justify-center text-black rounded-full  px-2 hover:cursor-pointer ease-in duration-200"
          >
            <div className="flex items-center justify-center space-x-1 shadow-md bg-black dark:bg-white rounded-full px-2 p-1">
              <div className="relative w-7 h-7 bg-black dark:bg-white text-yellow-500  dark:text-black hover:!text-yellow-500 rounded-lg p-1">
                <SunIcon />
              </div>
              <div className="relative w-7 h-7 bg-black dark:bg-white dark:text-black hover:!text-gray-500 text-gray-500 rounded-lg p-1">
                <MoonIcon />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-[1px]">
              <span className="text-purple-500 text-[2rem] font-[delicious]">
                K
              </span>
              <span className="text-red-800 text-[1.75rem]">e</span>
              <span className="text-purple-500 text-[2rem] font-[delicious] text-xl">
                B
              </span>
              <span className="text-red-800 font-[delicious] text-[1.75rem]">i</span>
              <span className="text-purple-500 text-[2rem] font-[delicious] text-xl">
                P
              </span>
              <span className="text-red-800 text-[1.75rem] ">e</span>
              <span className="text-red-800 text-[1.75rem]">t</span>
              <span className="text-red-800 text-[1.75rem]">s</span>
            </div>
          </div>

          <div className="flex shadow-md items-center justify-center bg-white rounded-full w-[500px] h-full  px-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="que estas buscando?"
              onKeyDown={handleKeyDown}
              className="focus:outline-none text-[14px] bg-white w-full text-black p-1 rounded-full h-full"
            ></input>
            <div
              onClick={searchSubmit}
              
              className="hover:cursor-pointer relative text-black w-7 h-7"
            >
              <MagnifyingGlassCircleIcon />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <div className=" text-black flex items-center justify-center space-x-4">
              {!user ? (
                <div className=" bg-black text-white hover:cursor-pointer rounded-full p-1 px-2 flex items-center justify-center space-x-1">
                  <div
                    onClick={() => router.push("/api/auth/login")}
                    className="w-7 h-7 relative"
                  >
                    <UserCircleIcon />
                  </div>
                  <Link href="/api/auth/login">login</Link>
                </div>
              ) : (
                <div className=" bg-black text-white hover:cursor-pointer rounded-full p-1 px-3 flex items-center justify-center space-x-1">
                  <div
                    onClick={() => router.push("/api/auth/logout")}
                    className="w-7 h-7 relative"
                  >
                    <UserCircleIcon />
                  </div>
                  <Link href="/api/auth/logout">logout</Link>
                </div>
              )}
              <div className="w-7 h-7 hover:cursor-pointer relative">
                <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-4 h-[75px] px-[100px]">
          <div className="flex items-center justify-center space-x-7">
            <div className="flex items-center justify-center space-x-3 hover:cursor-pointer">
              <p className=" text-black text-sm">Categories</p>
              <div className="w-5 h-5 relative text-black">
                <ChevronDownIcon />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 hover:cursor-pointer">
              <p className="text-black text-sm">Gifts & Inspiration</p>
              <div className="w-5 h-5 relative text-black">
                <ChevronDownIcon />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 hover:cursor-pointer">
              <p className="text-black text-sm">Discounts</p>
              <div className="w-5 h-5 relative text-black">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
          <div className="flex text-xs items-center justify-center space-x-5">
            <p className="">Business</p>
            <p className="">Vouchers</p>
            <p className="!mr-[20px]">Customer serivce</p>
            <div className="flex items-center justify-center hover:cursor-pointer ">
              <span class=" text-[20px] fi fi-es mt-[1px] mr-2 rounded-sm"></span>
              <p className="text-black  text-[15px] ">ES</p>
              <div className="w-5 h-5 relative text-black">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
