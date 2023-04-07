import Head from "next/head";
import Image from "next/image";

import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";

export default function Home({ data }) {
  useEffect(() => {
    document.body.classList.add("bg-black");
  }, []);

  const router = useRouter()
  return (
    <>
      <Head>
        <title>KebiPets | 404: Not Found</title>
        <meta
          name="description"
          content="A blank Tailwind template made by Sample-IT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-black w-screen h-screen col-center ">
        <p className="absolute top-0 left-0 text-xl p-5 font-[delicious] font-[100] text-base">Kebi Pet Palace 2023</p>
        <p className="text-[#67fecb] text-[7rem] lg:text-[14rem] tracking-wide font-[teko]">
          Oops!
        </p>
        <div className="col-center space-y-3">
          <p className="text-white text-lg">
            <span className="text-red-600">404</span> - PAGE NOT FOUND
          </p>
          <p className="text-white max-w-[500px] px-5 text-center">
            the page you are looking for might have been removed, had it&apos;s name
            changed or is temporarily unavailable.
          </p>
          <div className="pt-2">
            <div onClick={() => router.push("/")} className=" font-[delicious] text-[1.5rem] bg-base hover:scale-105 ease-in duration-100 hover:cursor-pointer font-[500] text-black text-lg px-7 py-[7px] rounded-full shadow-xl">
              Back to homepage
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
