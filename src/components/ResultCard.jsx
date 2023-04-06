import Image from "next/image";
import { HeartIcon, InformationCircleIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";

export default function ResultCard({ item }) {
    console.log(item.manufactor);
    return (
      <div className="relative w-full h-[250px] product-card first:border-t-[1px] flex justify-start items-center">
        <div className="py-10 px-0 h-full ">
          <div className="relative min-w-[210px] p-[5px] h-full w-auto">
            <Image
              alt="item"
              fill
              objectFit={"contain"}
              quality={"100"}
              src={"/sample.jpg"}
            />
          </div>
        </div>
        <div className="flex items-start justify-center flex-col h-full flex-grow py-5 space-y-4">
          <p className="text-black text-xs">{item.manufactor}</p>
          <p className="text-black font-bold text-xs">{item.product}</p>
          <p className="text-gray-700 font-light text-xs">{item.type}</p>
          <div className="star-rating text-black">
            {[...Array(item.stars)].map((star, index) => {
              return <span key={indez} className="star">&#9733;</span>;
            })}
            <span> {`(${item.reviews})`}</span>
          </div>
          <p>{item.description}<span className="text-blue-700 hover:cursor-pointer"> Meer</span></p>
        </div>
        <div className="w-[300px] h-full py-5 flex-col justify-center items-start space-y-4">
          <p className="text-red-500 font-black text-2xl">{item.price}</p>
          <div className="flex items-center justify-start space-x-1">
          <p className="text-green-700 font-light text-sm">E.T.A. 6th of April</p>
          <div className="w-7 h-7 relative text-green-700">
            <InformationCircleIcon/>
          </div>
          
          </div>
          <div className="flex items-center justify-center absolute bottom-2 space-x-2">
            <input className=" text-black pl-1 w-[50px] border-[1px] rounded-sm border-black border-solid" defaultValue={"1"} type="number" min="1" max="100"/>
            <div className="relative hover:cursor-pointer w-8 h-8 text-yellow-500">
              <ShoppingCartIcon/>
            </div>
          </div>
          <div className="absolute bottom-[10px] hover:cursor-pointer text-red-500 w-8 h-8 right-1">
            <HeartIcon/>
  
          </div>
  
        </div>
      </div>
    );
  }