import React, { useState } from "react";
import { Quicksand } from 'next/font/google'
import Image from "next/image";

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'], 
  display:'swap',
})



export default function Home() {
  
  
  //RETIRAR DINHEIRO
  const [retirar, setRetirar] = useState(0)
  function handleRetirar(e) {
    
      setRetirar(e.target.value);
    
  }
  //Função para retirar dinheiro
  function handlePag(e) {
      
    if (retirar <= 0 ) {
      alert('Insira um valor maior que zero para retirar')
    }else if (retirar > saldo) {
        alert('Saldo Insuficiente')
    } else {
        setSaldo(saldo - Number(retirar))
        e.preventDefault();
        const histDep = document.getElementById('historicoDeposito')
        histDep.innerHTML += `<p>Você retirou R$${retirar}</p>`
        alert(`Você retirou R$${retirar},00`)
    } 
  }

  //DEPOSITO DINHEIRO
  const [deposito, setDeposito] = useState(0)
  //Função que acompanha a mudança da variavel Deposito
  function handleChange(e) {
    if (e.target.value > 200) {
      alert('Limite de deposito excedido')
    } else {
      setDeposito(e.target.value)
    }
  }

  //Função para somar o Deposito com o saldo
  function handleDeposito(e) {
    if(deposito > 0) {
      setSaldo(saldo + Number(deposito))
      e.preventDefault();
      const histDep = document.getElementById('historicoDeposito')
      histDep.innerHTML += `<p>Você depositou R$${deposito}</p>`
      alert(`Você depositou R$${deposito},00`)
    } else {
      alert('Isira um valor entre 1 e 200')
    }
    

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

  // Função para mostrar operações
  const [operVisivel, setOperVisivel] = useState(null);

  const operar = (num) => {
    setOperVisivel(num)
  }
  
  return (
    <>
        <section className="ml-2 mr-2 text-center border-2 border-slate-950">
          <h1 className=" text-md text-white md:text-2xl">Escolha sua operação</h1>
          <div>
            <button onClick={() => operar(1)} className="btnInicio"><Image src="/images/imgnav.png" width={40} height={40} alt="Saldo" className="imagem"/>Saldo</button>
            <button onClick={() => operar(2)} className="btnInicio"><Image src="/images/dinheiro12.png" width={40} height={40} alt="Deposito" className="imagem"/>Depositar</button>
            <button onClick={() => operar(3)} className="btnInicio"><Image src="/images/retirar12.png" width={40} height={40} alt="Retirar" className="imagem"/>Retirar</button>
            <button onClick={() => operar(4)} className="btnInicio"><Image src="/images/historico123.png" width={40} height={40} alt="Historico"className="imagem"/> Sua Conta</button>
          </div>

        </section>

        <section className="tela border-2 border-slate-950 mr-2">
          <h1 className="text-center text-md text-white md:text-2xl">Sua operação irá aparecer aqui!</h1>
          <div className={operVisivel  === 1 ? 'mostrando' : 'escondida'} id="tela1">
              <p>
                Saldo
              </p>
              <div id="saldo"> 
              </div>
              <button className="botao" onClick={consSaldo}>Saldo</button>
          </div>
          
          <div className={operVisivel  === 2 ? 'mostrando' : 'escondida'} id="tela2">
              Deposito:<input type="number" value={deposito} onChange={handleChange} max={200} min={1}></input>
              <p>O total de deposito é:{deposito},00</p>
              <button className="botao" onClick={handleDeposito}>Depositar</button>
          </div>
          
          <div className={operVisivel  === 3 ? 'mostrando' : 'escondida'} id="tela3">
              Retirar:<input type="number" value={retirar} onChange={handleRetirar} max={200} min={1}></input>
              <p>Retirar R${retirar},00</p>
              <button className="botao" onClick={handlePag}>Retirar</button>
          </div>
          
          <div className={operVisivel  === 4 ? 'mostrando' : 'escondida'} id="tela4">
              <h1>Historico</h1>
              <button className="botao" onClick={mostrar}>mostrar</button>
              <div id="historicoDeposito" className="esconder">Aqui esta seu historico</div>
          </div>
        </section>

    </>
  )
  
}