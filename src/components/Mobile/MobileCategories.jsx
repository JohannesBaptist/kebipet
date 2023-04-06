import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRef } from "react";



function MobileCategories() {

  const scrolltarget = useRef()

  const leftScroll = (offset) => {
    scrolltarget.current.scrollLeft += offset;
  };

  const rightScroll = (offset) => {
    scrolltarget.current.scrollLeft -= offset;
  };



  return (
    <div className="px-[20px] lg:hidden py-5">
      <p className="font-black text-lg">Choose a category</p>
      <div ref={scrolltarget} className="overflow-scroll scroll-smooth w-full py-5 flex items-center justify-start space-x-5">
        <div onClick={() => rightScroll(150)} className="absolute  w-7 h-7 text-black left-[1.24rem] border-[1px]  border-solid border-base bg-white"><ChevronLeftIcon/></div>
        <div onClick={() => leftScroll(150)} className="absolute  w-7 h-7 text-black right-[1.24rem] border-[1px]  border-solid border-base bg-white"><ChevronRightIcon/></div>
        <div className="bg-black !ml-0 h-[130px] rounded-md aspect-square"></div>
        <div className="bg-purple-200 h-[130px] rounded-md aspect-square"></div>
        <div className="bg-blue-200 h-[130px] rounded-md aspect-square"></div>
        <div className="bg-gray-200 h-[130px] rounded-md aspect-square"></div>
        <div className="bg-black h-[130px] rounded-md aspect-square"></div>
        <div className="bg-purple-200 h-[130px] rounded-md aspect-square"></div>
      </div>
    </div>
  );
}

export default MobileCategories;
