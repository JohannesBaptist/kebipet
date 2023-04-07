import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Layout from "@components/Layout"

function Product() { 
  const router = useRouter();
  const { slug } = router.query;

  const [theme, setTheme] = useState(false);
  useEffect(() => {
    theme
      ? document.body.classList.add("dark", "bg-black")
      : document.body.classList.remove("dark", "bg-black");
  });
  
  return (
    <Layout>
        <p>{slug}</p>
    </Layout>
    
  );
}



export default Product

export async function getStaticPaths() {
  return { 
    paths: [],
    fallback: true
  }

}
export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/ZLJH")
  const data = await res.json()

  return {
    props: {data}
  }
}
 