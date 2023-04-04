import Advertisement from '@base/components/Advertisement'
import Banner from '@components/Banner'
import Categories from '@components/Categories'
import Discounts from '@components/Discounts'
import Footer from '@components/Footer'
import Head from 'next/head'
import Control from '../components/Control'
import Image from 'next/image'
import Pets from '@base/components/Pets'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState(false)
  useEffect(() => {
    theme ? document.body.classList.add("dark", "bg-black") : document.body.classList.remove("dark", "bg-black");
})
  return (
    <>
      <Head>
        <title>New Project</title>
        <meta name="description" content="A blank Tailwind template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen'>
        <Control theme={theme} setTheme={setTheme} />
        <Banner />
        <Categories/>
        <Discounts/>
        <Advertisement/>
        <Pets />
        <Footer/>
      </main>
    </>
  )
}
