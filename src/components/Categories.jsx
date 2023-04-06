import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import MobileCategories from "@mobile/MobileCategories";

function Categories() {
  return (
    <>
      <MobileCategories />
      <div className="p-4 mt-[20px] px-[100px] hidden lg:block; ">
        <div className="flex items-center justify-between">
          <p className="font-black text-3xl font-[delicious]">
            Choose a category
          </p>
          <div className="flex flex-items items-center justify-content">
            <div className="relative w-5 h-5 mb-[-2px]  text-blue-500">
              <ChevronRightIcon />
            </div>
            <p className="text-blue-500 text-md">See All Categories</p>
          </div>
        </div>
        <div className="mt-[15px] grid grid-cols-7 gap-[10px] h-[150px]">
          <div className="bg-[#67fecb] shadow-sm rounded-md w-full h-full"></div>
          <div className="bg-[#67fecb] shadow-sm  rounded-md  w-full h-full"></div>
          <div className="bg-[#67fecb] shadow-sm  rounded-md  w-full h-full"></div>
          <div className="bg-[#67fecb] shadow-sm  rounded-md  w-full h-full"></div>
          <div className="bg-[#67fecb] shadow-sm  rounded-md w-full h-full"></div>
          <div className="bg-[#67fecb] shadow-sm rounded-md  w-full h-full"></div>
          <div className="bg-[#67fecb] shadow-sm rounded-md  w-full h-full"></div>
        </div>
      </div>
    </>
  );
}

export default Categories;
