import { ClockIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

function Advertisement() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className=" px-[20px] lg:px-[100px] mt-[10px] flex gap-[1rem]">
      <div className="h-[500px] rounded-md flex flex-col items-center justify-between bg-base w-full lg:w-[700px] py-10">
        <div id={"counter"} className="flex flex-col items-center space-y-2 justify-center">
          <div className="flex items-center justify-center space-x-2">
            <p className="text-center text-3xl text-black font-black">
              Deal of the day
            </p>
            <div className="relative w-9 text-black font-bold h-9">
              <ClockIcon />
            </div>
          
          </div>
          <p className="text-black text-2xl font-black text-purple-400">{` ${24 - dateTime.getHours()}:${60 - dateTime.getMinutes()}:${60 - dateTime.getSeconds()}`}</p>
        </div>
        <div className="w-[200px] bg-white rounded-full aspect-square">

        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-black w-[250px] text-center">50% discount on all dog toys</p>
            <p className="text-gray-700 text-sm mt-[10px]">*Only On the Base Price</p>
        </div>
      </div>
      <div className="bg-blue-200 flex-grow rounded-md hidden lg:flex flex flex-col items-center justify-between py-10">
      <div id={"counter"} className="flex flex-col items-center space-y-2 justify-center">
          <div className="flex items-center justify-center space-x-2">
            <p className="text-center text-3xl text-black font-black">
              Deal of the week
            </p>
            <div className="relative w-9 text-black font-bold h-9">
              <ClockIcon />
            </div>
          
          </div>
          <p className="text-black text-2xl font-black text-purple-400">{` ${7 - dateTime.getDay()} days and ${24 - dateTime.getHours()} hours remaining`}</p>
        </div>
        <div className="w-[200px] bg-white rounded-full aspect-square">

        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-black w-[250px] text-center">10% discount on all cat food</p>
            <p className="text-gray-700 text-sm mt-[10px]">*Only On the Base Price</p>
        </div>
        

      </div>
    </div>
  );
}


export default Advertisement;
