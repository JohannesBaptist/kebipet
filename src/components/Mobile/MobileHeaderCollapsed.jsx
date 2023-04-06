import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import ReactRemoveScroll from "react-remove-scroll/dist/es5/Combination";

function MobileHeaderCollapsed({setMobile}) {
  return (
    <ReactRemoveScroll>
      <div className="absolute top-0 z-[100] !m-0 left-0  right-0 bg-white w-screen h-screen">
        <div className="border-[1px] border-solid border-gray-200 flex items-center p-2 py-6 justify-end">
          <div onClick={() => setMobile(false)} className="relative w-8 h-8  text-black p-1">
            <XMarkIcon />
          </div>
        </div>
        <div className="h-full w-full overflow-scroll">
            <div className="pl-4 h-[80px] w-full h-full h-[200vh]">
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
                <div className="w-full border-b-[1px] border-solid border-gray-200 py-3 h-full w-full flex items-center justify-start space-x-4">
                    <div className="bg-purple-200 h-full  aspect-square"></div>
                    <p className="text-sm text-gray-800">Dog Toys</p>
                </div>
            </div>
        </div>
      </div>
    </ReactRemoveScroll>
  );
}

export default MobileHeaderCollapsed;
