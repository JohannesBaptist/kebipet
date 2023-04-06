
import React from "react";
import { SocialIcon } from "react-social-icons";
import MobileCustomerService from "@mobile/MobileCustomerService";
import MobileSocials from "@mobile/MobileSocials"

function Footer() {
  return (
    <>
      <div className="mt-[2rem] lg:hidden">
        <MobileCustomerService/>
        <div
          id={"footer-links"}
          className="bg-white py-[50px] hidden flex-wrap w-full flex items-center justify-start  space-x-[3rem] "
        >
          <div className="flex flex-col items-start min-h-[180px] max-h-[180px] min-w-[170px] justify-start">
            <p className="font-bold">Customer Service</p>
            <div className="font-light text-[15px]">
              <p className="hover:cursor-pointer hover:underline">Contact</p>
              <p className="hover:cursor-pointer hover:underline">
                Order & Delivery
              </p>
              <p className="hover:cursor-pointer hover:underline">Contact</p>
              <p className="hover:cursor-pointer hover:underline">Payment</p>
              <p className="hover:cursor-pointer hover:underline">Retour</p>
              <p className="hover:cursor-pointer hover:underline">
                Warranty & Reperation
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start min-h-[180px] max-h-[180px] min-w-[170px] justify-start">
            <p className="font-bold">Customer Service</p>
            <div className="font-light text-[15px]">
              <p className="hover:cursor-pointer hover:underline">Contact</p>
              <p className="hover:cursor-pointer hover:underline">
                Order & Delivery
              </p>
              <p className="hover:cursor-pointer hover:underline">Contact</p>
              <p className="hover:cursor-pointer hover:underline">Payment</p>
              <p className="hover:cursor-pointer hover:underline">Retour</p>
              <p className="hover:cursor-pointer hover:underline">
                Warranty & Reperation
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start min-h-[180px] max-h-[180px] min-w-[170px] justify-startr">
            <p className="font-bold">Customer Service</p>
            <div className="font-light text-[15px]">
              <p className="hover:cursor-pointer hover:underline">Contact</p>
              <p className="hover:cursor-pointer hover:underline">
                Order & Delivery
              </p>
              <p className="hover:cursor-pointer hover:underline">Contact</p>
              <p className="hover:cursor-pointer hover:underline">Payment</p>
              <p className="hover:cursor-pointer hover:underline">Retour</p>
              <p className="hover:cursor-pointer hover:underline">
                Warranty & Reperation
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start min-h-[180px] max-h-[180px] min-w-[170px] space-y-2 justify-start">
            <p className="font-bold">Do you want to follow us?</p>
            <div className="flex items-center justify-center space-x-2 py-2">
              <SocialIcon
                bgColor={""}
                style={{ height: "30px", width: "30px" }}
                url="https://instagram.com/kebipet2023/?igshid=YmMyMTA2M2Y%3D"
              />
              <SocialIcon
                bgColor={""}
                style={{ height: "30px", width: "30px" }}
                url="https://twitter.com/kebipet2023/?igshid=YmMyMTA2M2Y%3D"
              />
              <SocialIcon
                bgColor={""}
                style={{ height: "30px", width: "30px" }}
                url="https://facebook.com/kebipet2023/?igshid=YmMyMTA2M2Y%3D"
              />
              <SocialIcon
                bgColor={""}
                style={{ height: "30px", width: "30px" }}
                url="https://whatsapp.com/kebipet2023/?igshid=YmMyMTA2M2Y%3D"
              />
              <SocialIcon
                bgColor={""}
                style={{ height: "30px", width: "30px" }}
                url="https://youtube.com/kebipet2023/?igshid=YmMyMTA2M2Y%3D"
              />
            </div>
            <div className="font-light text-[15px]">
              <p>
                <span className="text-blue-500 font-bold">Subscribe</span> for
                our newsletter
              </p>
            </div>
          </div>
        </div>
        <MobileSocials/>
        <div id={"divider"} className=" px-[50px] lg:px-[150px]">
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
        <div
          id={"terms"}
          className="px-[20px] lg:px-[100px]  h-[400px] lg:h-[250px] py-[40px] pb-[30px] flex flex-col items-center justify-evenly lg:justify-evenly"
        >
          <div>
            <p className="text-black text-5xl font-[delicious]">KebiPet</p>
          </div>
          <div className="flex justify-center ites-center flex-wrap text-black text-[10px] lg:text-sm xl:text-md ">
            <div className="flex link  underline items-center justify-center my-2">
              <span>Purchase safely with AWS</span>
              <div className="w-[1px] h-full bg-black mx-4"></div>
            </div>
            <div className="flex link underline  items-center justify-center my-2">
              <span>Terms and Conditions</span>
              <div className="w-[1px] h-full bg-black mx-4"></div>
            </div>
            <div className="flex link underline items-center justify-center my-2">
              <span>KebiPets 2020-2023 b.v.</span>
              <div className="w-[1px] h-full bg-black mx-4"></div>
            </div>
            <div className="flex link underline items-center justify-center my-2">
              <span>Privacy</span>
              <div className="w-[1px] h-full bg-black mx-4"></div>
            </div>
            <div className="flex link underline items-center justify-center my-2">
              <span>Cookies</span>
            </div>
          </div>
          <div className="text-[10px] items-center flex flex-col lg:flex-row justify-center mt-[20px] text-center font-light">
            <p className="">
              *The benefits of KebiPet.com do not apply to the entire range. <span className="underline hover:cursor-pointer">See
              the terms and conditions.</span>
            </p>
            <span className="lg:hidden">
              <br></br>
            </span>
            <p>
              {" "}
              *All prices include VAT and other taxes and exclude any <span className="underline hover:cursor-pointer">shipping
              and service costs.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
