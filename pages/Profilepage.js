import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser } from "../utils/getUser";

export default function Profilepage() {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        getUser().then(res=>{
            setLoading(false);
        }).catch(err=>{
            
        })
    },[]);
    return (
        <div>
            <h2>Profile page</h2>
            <Link href="/Mainpage"><a>to main</a></Link>
            <Link href="/Cartspage"><a>to cart</a></Link>
        </div>
    )
}