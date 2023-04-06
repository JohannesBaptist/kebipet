import React, { useState, useEffect } from "react";
import Control from "../components/Control";
import Footer from "@base/components/Footer";
import SearchResults from "@base/components/SearchResults";
import FilterSearch from "@base/components/FilterSearch";
import Head from "next/head";
import clientPromise from "@base/lib/mongodb";
import { ObjectId } from "mongodb";

export default function Search({ data }: any) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    theme
      ? document.body.classList.add("dark", "bg-black")
      : document.body.classList.remove("dark", "bg-black");
  });

  return (
    <>
      <Head>
        <title>Search Page</title>
        <meta name="description" content="Search Results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Control theme={theme} setTheme={setTheme} />
        <div className="w-full bg-blue-100 h-[50px]"></div>
        <div className="px-[100px] flex ">
          <FilterSearch />
          <SearchResults data={data} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: { data: any; }; revalidate: number; }> {
  const client = await clientPromise;
  const db = client.db("sample_airbnb");
  const usersetting = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();
  const data = JSON.parse(JSON.stringify(usersetting));
  {
    /*const fetcher = await fetch(jsonDirectory, {
    method: "POST",
    body: "AMessage"
  })*/
  }
  //const currentmail1 = await fetcher.json()
  //const data = currentmail1[0].html

  return {
    props: { data },
    revalidate: 1,
  };
}