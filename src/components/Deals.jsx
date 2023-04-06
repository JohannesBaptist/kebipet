import { HeartIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MobileDeals from "./mobile/MobileDeals";

export default function Deals() {
  return (
    <>
      <MobileDeals />
      <div className="p-4 mt-[20px] px-[100px] hidden lg:block ">
        <div className="flex items-center justify-between">
          <p className="font-black text-3xl font-[delicious]">Our best deals</p>
          <div className="flex flex-items items-center justify-content">
            <div className="relative w-5 h-5 mb-[-2px] text-blue-500">
              <ChevronRightIcon />
            </div>
            <p className="text-blue-500 text-md">See All Deals</p>
          </div>
        </div>
        <div className="mt-[15px] grid grid-cols-6 gap-[10px] h-[275px]">
          <div className="flex items-start justify-center flex-col space-y-3">
            <div className="relative shadow-sm bg-black  rounded-md w-full h-full">
              <div className="w-12 h-12 absolute right-0 text-red-400 p-2">
                <HeartIcon />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="bg-red-500 shadow-md font-black px-2 p-1 rounded-sm">
                7,95
              </div>
              <span className="font-black text-red-500">discount</span>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col space-y-3">
            <div className="relative shadow-sm bg-black  rounded-md w-full h-full">
              <div className="w-12 h-12 absolute right-0 text-red-400 p-2">
                <HeartIcon />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="bg-red-500 shadow-md font-black px-2 p-1 rounded-sm">
                13,65
              </div>
              <span className="font-black text-red-500">discount</span>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col space-y-3">
            <div className="relative shadow-sm bg-black  rounded-md w-full h-full">
              <div className="w-12 h-12 absolute right-0 text-red-400 p-2">
                <HeartIcon />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="bg-red-500 shadow-md font-black px-2 p-1 rounded-sm">
                15,35
              </div>
              <span className="font-black text-red-500">discount</span>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col space-y-3">
            <div className="relative shadow-sm bg-black  rounded-md w-full h-full">
              <div className="w-12 h-12 absolute right-0 text-red-400 p-2">
                <HeartIcon />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="bg-red-500 shadow-md font-black px-2 p-1 rounded-sm">
                12,70
              </div>
              <span className="font-black text-red-500">discount</span>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col space-y-3">
            <div className="relative shadow-sm bg-black  rounded-md w-full h-full">
              <div className="w-12 h-12 absolute right-0 text-red-400 p-2">
                <HeartIcon />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="bg-red-500 shadow-md font-black px-2 p-1 rounded-sm">
                6,50
              </div>
              <span className="font-black text-red-500">discount</span>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col space-y-3">
            <div className="relative shadow-md shadow-sm bg-black  rounded-md w-full h-full">
              <div className="w-12 h-12 absolute right-0 text-red-400 p-2">
                <HeartIcon />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="bg-red-500 shadow-md font-black px-2 p-1 rounded-sm">
                5,75
              </div>
              <span className="font-black text-red-500">discount</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
