import { SocialIcon } from "react-social-icons";
import {
  ChatBubbleBottomCenterIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function MobileCustomerService() {
  return (
    <div className="bg-[#67fecb]  w-screen">
    <div
      id={"customer-service-desktop"}
      className="bg-[#67fecb] lg:flex overflow-scroll flex items-center items-center  justify-between min-w-screen  space-x-[2rem] h-[150px]"
    >
      <p className=" text-2xl shrink-0 font-black w-screen text-center ">Service & Contact</p>
      <div className="flex items-center justify-center space-x-5">
        <div className="h-[60px] w-[60px] text-black relative">
          <UserIcon />
        </div>
        <div className="flex flex-col  items-start justify-center w-[300px]">
          <p className=" text-md text-black font-bold">
            MyKebi customer account
          </p>
          <p className="text-md text-black font-light">
            <span className="hover:cursor-pointer hover:underline">
              Track your order
            </span>
            ,{" "}
            <span className="hover:cursor-pointer hover:underline">
              pay a facture,
            </span>{" "}
            or{" "}
            <span className="hover:cursor-pointer hover:underline">
              return an item.
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5">
        <div className="h-[60px] w-[60px] text-black relative">
          <ChatBubbleBottomCenterIcon />
        </div>
        <div className="flex flex-col  items-start justify-center w-[300px]">
          <p className=" text-md text-black font-bold">
            Do you need help?
          </p>
          <p className=" text-md text-black font-light">
            We are happy to help you. <b></b> Our customer service is open
            24/7.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobileCustomerService
