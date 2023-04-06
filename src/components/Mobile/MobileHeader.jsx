import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import {
  HeartIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

function MobileHeader() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div className="lg:hidden flex flex-col items-center w-screen justify-center">
      <div className="bg-black flex items-center justify-between w-full h-[40px] p-2">
        <div className="flex items-center justify-center text-white text-sm space-x-5">
          <p className="text-white shrink-0 text-[10px]">
            <span className="text-bold text-[10px] text-[#67fecb]">Free</span> Delivery from 20 euros 
          </p>
          
        </div>
        <div className="flex shrink-0 text-[0.8rem] items-center font-[delicious] text-lg text-[#67fecb] tracking-wider justify-center">
          MyKebi See the benefits
        </div>
      </div>
      <div className="w-full flex items-center justify-between p-5">
        <div id={"bars"} className="flex items-center justify-center space-x-4">
          <div className="relative w-7 h-7 text-black">
            <Bars3Icon />
          </div>
          <div className="flex items-center justify-center space-x-[1px]">
            <span className="text-purple-500 text-3xl font-[delicious]">K</span>
            <span className="text-red-800 text-2xl">e</span>
            <span className="text-purple-500 font-[delicious] text-3xl">B</span>
            <span className="text-red-800 text-2xl">i</span>
            <span className="text-purple-500 font-[delicious] text-3xl">P</span>
            <span className="text-red-800 text-2xl">e</span>
            <span className="text-red-800 text-2xl">t</span>
          </div>
        </div>
        <div id={"MyKebi"}>
          <div className="flex items-center justify-center space-x-5">
            <div className=" text-black flex items-center justify-center space-x-3">
              {!user ? (
                <div className="bg-black text-white rounded-full p-1 px-2 flex items-center justify-center space-x-1">
                  <div
                    onClick={() => router.push("/api/auth/login")}
                    className="w-7 h-7 text-base relative"
                  >
                    <UserCircleIcon />
                  </div>
                  <Link className="text-sm" href="/api/auth/login">login</Link>
                </div>
              ) : (
                <div className="bg-black text-white rounded-full p-1 px-2 flex items-center justify-center space-x-1">
                  <div
                    onClick={() => router.push("/api/auth/logout")}
                    className="w-7 h-7 relative"
                  >
                    <UserCircleIcon />
                  </div>
                  <Link className="text-sm" href="/api/auth/logout">logout</Link>
                </div>
              )}
              <div className="w-6 h-6 relative ">
                <HeartIcon />
              </div>
              <div className="w-6 h-6 relative">
                <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={"searchBar"}
        className="h-[100px] px-5 flex items-center justify-center w-full bg-[#67fecb]"
      >
        <div className="items-center justify-center flex w-full bg-white rounded-full pr-2">
          <input
            placeHolder={"Que estas buscando"}
            className=" pl-5 w-full h-[50px] text-black rounded-full"
          />
          <div className="w-10 !m-0  pt-[2px] text-black h-10 relative ">
            <MagnifyingGlassCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
