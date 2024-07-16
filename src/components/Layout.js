import Navbar from "./navbar"
import Footer from "./Footer"
import Head from "next/head"
import { Zilla_Slab } from "next/font/google"
const zilla = Zilla_Slab({
    weight: '400',
    subsets: ['latin'], 
    display:'swap',
})
export default function Layout({children}){
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/nav.png"></link>
            </Head>
            <Navbar/>
            <main className={`main-container ${zilla.className}`}>{children}</main>
            <Footer/>
        </>
    )
}