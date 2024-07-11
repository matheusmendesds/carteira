import React, { useState } from "react";
export default function Home() {
  const [saldo, setSaldo] = useState(0);
  const [deposito, setDeposito] = useState(0)
  const [retirar, setRetirar] = useState(0)
  //Função que acompanha a mudança da variavel Deposito
  function handleChange(e) {
    setDeposito(e.target.value);
  }

  function handleRetirar(e) {
    setRetirar(e.target.value);
  }

  //Função para somar o Deposito com o saldo
  function handleDeposito(e) {
    setSaldo(saldo + Number(deposito))
    e.preventDefault();
    const histDep = document.getElementById('historicoDeposito')
    histDep.innerHTML += `<p>Você depositou R$${deposito}</p>`
  }

  function handlePag(e) {
    setSaldo(saldo - Number(retirar))
    e.preventDefault();
    const histDep = document.getElementById('historicoDeposito')
    histDep.innerHTML += `<p>Você retirou R$${retirar}</p>`
  }

  function consSaldo() {
    const consSaldo = document.getElementById('saldo')
    consSaldo.innerHTML = `O seu saldo é R$${saldo},00`
  }
  
  return (
    <main>
      <h1>Carteira</h1>
      <div>
        <p>Saldo</p>
        <div id="saldo">
        
        </div>
        <button onClick={consSaldo}>Saldo</button>
      </div>
      <div>
        Deposito:<input type="number" value={deposito} onChange={handleChange} max={200} min={1}></input>
        <p>O total de deposito é:{deposito},00</p>
        <button onClick={handleDeposito}>Depositar</button>
      </div>
      <div>
        Retirar:<input type="number" value={retirar} onChange={handleRetirar} max={200} min={1}></input>
        <p>Retirar R${retirar},00</p>
        <button onClick={handlePag}>Retirar</button>
      </div>
      <div id="historicoDeposito">
        Aqui esta seu historico
      </div>
    </main>
  )
  function name(params) {
    
  }
}