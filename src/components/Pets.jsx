import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import NewProducts from "@mobile/NewProducts";

function Pets() {
  return (
    <>
      <NewProducts />
      <div className="px-[100px] mt-[60px] hidden lg:block">
        <div className="flex items-center justify-between">
          <p className="font-black text-3xl font-[delicious]">Shop per pet</p>
          <div className="flex flex-items items-center justify-content">
            <div className="relative w-5 h-5 mb-[-2px]  text-blue-500">
              <ChevronRightIcon />
            </div>
            <p className="text-blue-500 text-md">See All Pets</p>
          </div>
        </div>
        <div className="w-full mt-[25px] overflow-scroll">       
          <div className="w-[fit-content] h-[250px] bg-blue-200 rounded-md flex items-center justify-start px-[30px] space-x-5">
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>
            <div className="bg-black w-[170px] aspect-square rounded-full"></div>

          </div>
          </div>
      </div>
    </>
  );
}

export default Pets;
