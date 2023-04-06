import React from "react";
import Image from "next/image";
import MobileBanner from "@mobile/MobileBanner"


function Banner() {
  return (
    <>
      <MobileBanner />
      <div className="px-[100px] hidden lg:block">
        <div className="relative bg-[#67fecb] w-full h-[300px] rounded-lg p-5 shadow-md">
          <p className="text-[3rem] font-[delicious]">Your go to Pet shop</p>
          <p className="text-[2.5rem] font-thin tracking-wider mt-[-1rem]">
            A spoiled pet, is a happy pet.
          </p>
          <Image
            className="absolute right-0 top-0 rounded-e-md "
            height={317}
            width={317}
            objectFit={"cover"}
            src="/dogblack-1.png"
          />
          <div className="text-lg absolute !font-bold rounded-md bg-black p-4 px-3 bottom-5 tracking-widest shadow-sm">
            See our latest deals
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[20px]  mt-[20px] h-[200px]">
          <div className="bg-black w-full h-full rounded-md shadow-md"></div>
          <div className="bg-black w-full h-full rounded-md shadow-md"></div>
          <div className="bg-black w-full h-full rounded-md shadow-md"></div>
          <div className="bg-black w-full h-full rounded-md shadow-md"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
