import Link from "next/link";

export default function Profilepage() {
    return (
        <div>
            <h2>Profile page</h2>
            <Link href="/Mainpage"><a>to main</a></Link>
            <Link href="/Cartspage"><a>to cart</a></Link>
        </div>
    )
}