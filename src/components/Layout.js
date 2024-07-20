import Footer from "@/components/Footer";
import Head from "next/head";
import { Zilla_Slab } from "next/font/google";
const zilla = Zilla_Slab({
    weight: '400',
    subsets: ['latin'], 
    display:'swap',
})
export default function Layout({children}){
    return (
        <>
            <Head>
                
            </Head>
            <main className={`main-container ${zilla.className}`}>{children}</main>
            <Footer/>
        </>
    )
}