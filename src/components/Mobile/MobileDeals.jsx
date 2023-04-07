import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useRef } from "react";

function MobileCategories() {
  const scrollDeals = useRef();

  const leftScroll = (offset) => {
    scrollDeals.current.scrollLeft += offset;
  };

  const rightScroll = (offset) => {
    scrollDeals.current.scrollLeft -= offset;
  };

  return (
    <div className="relative px-[20px] lg:px-[100px] py-5 lg:pt-[60px]">
      <p className="font-black text-lg lg:text-3xl  lg:font-[delicious]">Our best Deals</p>
      <div
        ref={scrollDeals}
        className=" overflow-scroll scroll-smooth w-full py-5 flex items-center justify-start space-x-5"
      >
        <div
          onClick={() => rightScroll(200)}
          className="absolute z-10 ] lg:left-[100px] top-[120px] lg:top-[190px]  w-7 h-7 hover:cursor-pointer text-black  border-[1px]  border-solid border-base bg-base"
        >
          <ChevronLeftIcon />
        </div>
        <div
          onClick={() => leftScroll(200)}
          className="absolute z-10  w-7 h-7 text-black right-[1.25rem] hover:cursor-pointer lg:right-[100px] top-[120px] lg:top-[190px] border-[1px]  border-solid border-base bg-base"
        >
          <ChevronRightIcon />
        </div>
        <div className="!ml-0 flex flex-col items-start justify-center ">
          <div className="relative bg-yellow-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className="discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className=" relative bg-purple-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-blue-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <div className="relative bg-gray-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-black h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-orange-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-yellow-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-purple-200 h-[130px] lg:h-[180px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
      </div>
    </div>
  );
}

export default MobileCategories;
