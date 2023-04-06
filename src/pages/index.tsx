import Advertisement from "@base/components/Advertisement";
import Banner from "@components/Banner";
import Categories from "@components/Categories";
import Deals from "@components/Deals";
import Footer from "@components/Footer";
import Head from "next/head";
import Control from "../components/Control";
import Image from "next/image";
import Pets from "@base/components/Pets";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import clientPromise from "@base/lib/mongodb";
import { ObjectId } from "mongodb";

export default function Home({setting}: any) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    theme
      ? document.body.classList.add("dark", "bg-black")
      : document.body.classList.remove("dark", "bg-black");
  });
  return (
    <>
      <Head>
        <title>KebiPets - Homepage</title>
        <meta name="description" content="Your Favourite Pet Palace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        
        <Control theme={theme} setTheme={setTheme} />
        <Banner />
        <Categories />
        <Deals />
        <Advertisement />
        <Pets />
        
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {

 
  const client = await clientPromise;
  const db = client.db("sample_airbnb");
  const usersetting = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();
  const setting = JSON.parse(JSON.stringify(usersetting))
  {/*const fetcher = await fetch(jsonDirectory, {
    method: "POST",
    body: "AMessage"
  })*/}
  //const currentmail1 = await fetcher.json()
  //const data = currentmail1[0].html

  return {
    props: {setting},
    revalidate: 1,
  };
}

