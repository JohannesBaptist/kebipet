import {useState, useEffect }from 'react'
import Footer from "@components/Footer";
import Control from "../components/Control";


function Layout({children}) {
    const [theme, setTheme] = useState(false);
    useEffect(() => {
      theme
        ? document.body.classList.add("dark", "bg-black")
        : document.body.classList.remove("dark", "bg-black");
    });
  return (
    <>
   <Control theme={theme} setTheme={setTheme}/>
    <>{children}</>
    <Footer/>
    </>
   
  )
}

export default Layout
