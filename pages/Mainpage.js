import Link from "next/link";
import { useEffect, useState } from "react";
import { getProduct } from "../utils/getProducts";

export default function Mainpage() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
      getProduct().then(res=>{
          setLoading(false);
      }).catch(err=>{
          
      })
  },[]);

  return (
    <div>
        <h2>Main page</h2>
        <Link href="/Cartspage"><a>to cart</a></Link>
        <Link href="/Profilepage"><a>to profile</a></Link>
    </div>
  )
}
