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
    <div className="relative px-[20px] lg:hidden py-5">
      <p className="font-black text-lg">Our best Deals</p>
      <div
        ref={scrollDeals}
        className=" overflow-scroll scroll-smooth w-full py-5 flex items-center justify-start space-x-5"
      >
        <div
          onClick={() => rightScroll(150)}
          className="absolute z-10 left-[1.25rem] top-[120px]  w-7 h-7 text-black  border-[1px]  border-solid border-base bg-white"
        >
          <ChevronLeftIcon />
        </div>
        <div
          onClick={() => leftScroll(150)}
          className="absolute z-10  w-7 h-7 text-black right-[1.25rem] top-[120px] border-[1px]  border-solid border-base bg-white"
        >
          <ChevronRightIcon />
        </div>
        <div className="!ml-0 flex flex-col items-start justify-center ">
          <div className="relative bg-black h-[130px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className="discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className=" relative bg-purple-200  h-[130px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-blue-200  h-[130px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <div className="relative bg-gray-200  h-[130px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-black  h-[130px] rounded-md aspect-square">
            <div className="absolute right-0 p-2 w-9 text-base h-9">
              <HeartIcon />
            </div>
          </div>
          <p className=" discount-box">$ 10,30</p>
          <p className="discount-p">discount</p>
        </div>
        <div className=" flex flex-col items-start justify-center ">
          <div className="relative bg-purple-200  h-[130px] rounded-md aspect-square">
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
