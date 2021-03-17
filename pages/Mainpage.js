import Link from "next/link";

export default function Mainpage() {
  return (
    <div>
        <h2>Main page</h2>
        <Link href="/Cartspage"><a>to cart</a></Link>
        <Link href="/Profilepage"><a>to profile</a></Link>
    </div>
  )
}
