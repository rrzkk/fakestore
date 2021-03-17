import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "../utils/getCart";

export default function Cartspage() {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        getCart().then(res=>{
            setLoading(false);
        }).catch(err=>{
            
        })
    },[]);
  
    return (
      <div>
          <h2>Carts page</h2>
          <Link href="/Mainpage"><a>to main</a></Link>
          <Link href="/Profilepage"><a>to profile</a></Link>
      </div>
    )
  }