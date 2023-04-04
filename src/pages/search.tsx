import React, {useState, useEffect} from 'react'
import Header from '@base/components/Header'
import Footer from '@base/components/Footer'
import FilterSearch from '@base/components/FilterSearch'
import Head from 'next/head'

function Search() {
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
      <main>
      <Header theme={theme} setTheme={setTheme} />
      <div className='w-full bg-blue-100 h-[50px]'></div>
      <div className='px-[100px] flex '>
        <FilterSearch/>

      </div>
      <Footer/>
      </main>
      
    </>
  )
}

export default Search
