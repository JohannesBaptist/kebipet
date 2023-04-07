import { useReducer, useState } from "react";
import Head from "next/head";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  UserIcon,
  StarIcon,
  HeartIcon,
  ArrowDownLeftIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

const initialState = {
  age: 90,
  firstName: "Clara",
  lastName: "EverGreen",
  location: "New York, USA",
  email: "clara@sample-it.net",
  number: "+31 0621930853",
  postal: "2342 BL",
};

const reducer = (state, action) => {
  if (action.type === "save") {
    return {
      firstName: action.firstName,
      lastName: action.lastName,
      location: action.location,
      email: action.email,
      number: action.number,
      postal: action.postal,
    };
  }
};

export default function Data() {
 

  const [state, dispatch] = useReducer(reducer, initialState);
  const [firstName, setFirstName] = useState(initialState.firstName);
  const [lastName, setLastName] = useState(initialState.lastName);
  const [location, setLocation] = useState(initialState.location);
  const [email, setEmail] = useState(initialState.email);
  const [number, setNumber] = useState(initialState.number);
  const [postal, setPostal] = useState(initialState.postal);
  const [notifications, setNotifications] = useState(true)

  return (
    <>
      <Head>
        <title>Search Page</title>
        <meta name="description" content="Your Favourite Pet Palace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-col">
        <div
          id={"header"}
          className="bg-white  p-5 md:px-[50px] h-[60px] border-b-[1px] border-solid border-gray-300 row-center justify-between "
        >
          <div className="hover:cursor-pointer w-7 h-7 text-black relative">
            <Bars3Icon />
          </div>
          <div className="row-center space-x-4">
            <div onClick={() => setNotifications(!notifications)} className="w-7 hover:cursor-pointer h-7 text-black relative">
              <BellIcon />
              <div className={`h-2 w-2 ${ notifications ? "bg-green-400" : "bg-red-500"} rounded-full absolute right-1 top-0`}></div>
            </div>
            <div className="h-[25px] aspect-square bg-purple-200 rounded-full"></div>
            <p className="text-gray-800 hover:cursor-pointer text-sm">{`${state.firstName} ${state.lastName}`}</p>
            <div className=" !ml-1 mt-1 text-black w-3 h-3 relative ">
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="flex-grow bg-white flex">
          <div className="h-full flex flex-col md:w-[200px] lg:w-[250px] border-r-[1px] border-solid border-gray-300">
            <div className="w-full row-center py-10 ">
              <p className="font-bold text-lg font-[delicious] text-[1.2rem] lg:text-[1.7rem]"><span className="font-[delicious]">MyKebi</span> Profile</p>
            </div>
            <div className="col-center py-10 space-y-8">
              <div className=" hover:cursor-pointer row-center md:pr-10 w-full px-5 p-2 lg:pl-3   space-x-3 text-gray-800 rounded-[-5px] border-r-[5px] border-solid border-orange-500">
                <div className="w-6 h-6 relative">
                  <UserIcon />
                </div>
                <p>User Info</p>
              </div>
              <div className=" hover:cursor-pointer row-center md:pr-10 w-full px-5 p-2 lg:pl-3 lg: space-x-3 text-gray-800  ">
                <div className="w-6 h-6 relative">
                  <HeartIcon />
                </div>
                <p>Favorites</p>
              </div>
              <div className=" hover:cursor-pointer row-center md:pr-10 w-full px-5 p-2 lg:pl-3  space-x-3 text-gray-800  ">
                <div className="w-6 h-6 relative">
                  <StarIcon />
                </div>
                <p>Watchlist</p>
              </div>
            </div>
            <div className="relative flex items-end py-[50px] justify-center flex-grow ">
              <div className="row-center hover:cursor-pointer space-x-3">
                <div className="w-7 h-7 relative text-orange-500">
                  <ArrowLeftCircleIcon />
                </div>
                <p className="">Log out</p>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="w-full h-[200px] flex items-center px-10 md:px-20 lg:px-40 pt-[80px] ">
              <div className="row-center space-x-10">
                <div className="h-[150px] aspect-square shadow-lg hover:cursor-pointer rounded-full bg-purple-500"></div>
                <div className="flex flex-col">
                  <p className="text-xl text-gray-800 ">{`${state.firstName} ${state.lastName}`}</p>
                  <p className="text-gray-500 text-sm !m-0 font-light">
                    {state.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-grow flex space-y-7 flex-col items-center px-10 md:px-20 justify-center  2xl:space-y-[4rem] lg:px-40">
              <div className="grid w-full gap-[15%] grid-cols-2">
                <div className="w-full space-y-1">
                  <div className="">
                    <p>First Name</p>
                  </div>
                  <input
                    placeholder={state.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type={"text"}
                    className="w-full text-center bg-gray-100 focus:bg-gray-300 pl-1 shadow-md h-[40px] text-black rounded-md"
                  ></input>
                </div>
                <div className="w-full space-y-1">
                  <div className="">
                    <p>Last Name</p>
                  </div>
                  <input
                    placeholder={state.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type={"text"}
                    className="w-full text-center bg-gray-100 focus:bg-gray-300 pl-1 shadow-md h-[40px] text-black rounded-md"
                  ></input>
                </div>
              </div>
              <div className="grid w-full gap-[15%] grid-cols-2">
                <div className="w-full space-y-1">
                  <div className="">
                    <p>Email Address</p>
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={state.email}
                    type={"email"}
                    className="w-full text-center bg-gray-100 focus:bg-gray-300 pl-1 shadow-md h-[40px] text-black rounded-md"
                  ></input>
                </div>
                <div className="w-full space-y-1">
                  <div className="">
                    <p>Phone Number</p>
                  </div>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder={state.number}
                    type={"text"}
                    className="w-full text-center bg-gray-100 focus:bg-gray-300 pl-1 shadow-md h-[40px] text-black rounded-md"
                  ></input>
                </div>
              </div>
              <div className="grid w-full gap-[15%] grid-cols-2">
                <div className="w-full space-y-1">
                  <div className="">
                    <p>Location</p>
                  </div>
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={state.location}
                    type={"text"}
                    className="w-full text-center bg-gray-100 focus:bg-gray-300 pl-1 shadow-md h-[40px] text-black rounded-md"
                  ></input>
                </div>
                <div className="w-full space-y-1">
                  <div className="">
                    <p>Postal Code</p>
                  </div>
                  <input
                    onChange={(e) => setPostal(e.target.value)}
                    placeholder={state.postal}
                    type={"text"}
                    className="w-full text-center bg-gray-100 focus:bg-gray-300 pl-1 shadow-md h-[40px] text-black rounded-md"
                  ></input>
                </div>
              </div>
              <div className="w-full h-10 flex items-center pt-[50px] justify-center">
                <div
                  onClick={() => dispatch({
                    type: "save" ,
                    firstName: firstName,
                    lastName: lastName,
                    location: location,
                    email: email,
                    number: number,
                    postal: postal,
                  })}
                  className="bg-orange-500 hover:cursor-pointer shadow-lg font-bold rounded-xl px-[75px] py-3"
                >
                  Save Changes
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
