import React, { useState } from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  //RETIRAR DINHEIRO
  const [retirar, setRetirar] = useState(0)
  function handleRetirar(e) {
    setRetirar(e.target.value);
  }
  //Função para retirar dinheiro
  function handlePag(e) {
    setSaldo(saldo - Number(retirar))
    e.preventDefault();
    const histDep = document.getElementById('historicoDeposito')
    histDep.innerHTML += `<p>Você retirou R$${retirar}</p>`
    alert(`Você retirou R$${retirar},00`)
  }

  //DEPOSITO DINHEIRO
  const [deposito, setDeposito] = useState(0)
  //Função que acompanha a mudança da variavel Deposito
  function handleChange(e) {
    setDeposito(e.target.value);
  }

  //Função para somar o Deposito com o saldo
  function handleDeposito(e) {
    setSaldo(saldo + Number(deposito))
    e.preventDefault();
    const histDep = document.getElementById('historicoDeposito')
    histDep.innerHTML += `<p>Você depositou R$${deposito}</p>`
    alert(`Você depositou R$${deposito},00`)
  }

  //CONSULTAR SALDO
  const [saldo, setSaldo] = useState(0);
  //Função para consultar seu saldo
  function consSaldo() {
    const consSaldo = document.getElementById('saldo')
    consSaldo.innerHTML = `O seu saldo é R$${saldo},00`
  }

  //HISTORICO DE TRANSAÇÕES
  //Função para mostrar historico de depositos e pagamentos/
  function mostrar() {
    const mostrarDep = document.querySelector('#historicoDeposito')
    mostrarDep.classList.toggle("esconder")
    
  }
  
  return (
    <main>
      <Navbar/>
      <h1>Carteira</h1>
      <div>
        <p>Saldo</p>
        <div id="saldo">

        </div>
        <button className="botao" onClick={consSaldo}>Saldo</button>
      </div>
      <div>
        Deposito:<input type="number" value={deposito} onChange={handleChange} max={200} min={1}></input>
        <p>O total de deposito é:{deposito},00</p>
        <button className="botao" onClick={handleDeposito}>Depositar</button>
      </div>
      <div>
        Retirar:<input type="number" value={retirar} onChange={handleRetirar} max={200} min={1}></input>
        <p>Retirar R${retirar},00</p>
        <button className="botao" onClick={handlePag}>Retirar</button>
      </div>
      <section>
        <h1>historico</h1>
        <button className="botao" onClick={mostrar}>mostrar</button>
        
        <div id="historicoDeposito" className="esconder">Aqui esta seu historico</div>
      </section>

    </main>
  )
  
}