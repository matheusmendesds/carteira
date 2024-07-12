import Navbar from "@/components/navbar";
import Link from "next/link";
export default function Teste() {
    return (
        <main>
            <Navbar/>
            <div>
                <div className="flex justify-center items-center">
                    <Link href={"/saldo"}>
                        <button className="btnInicio">Saldo</button>
                    </Link>
                    <Link href={"/deposito"}>
                        <button className="btnInicio">Depositar</button>
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link href={"/retirar"}>
                        <button className="btnInicio">Retirar</button>
                    </Link>
                    <Link href={"/config"}>
                        <button className="btnInicio">Sua Conta</button>
                    </Link>
                </div>
            </div>
           
        </main>
    )
}