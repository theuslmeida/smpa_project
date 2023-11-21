import React, { useState } from 'react'
import Ola from '../../componentes/Olá/ola'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'

export default function FotosNegadas() {
const [imagens, setImagens] = useState([])

useEffect(()=>{
  const Pegar_dados = () => {
    axios.get("https://sampa.pythonanywhere.com/Imagens_negativas/?format=json").then(response =>{
      const ResponseImg = response.data
      console.log(ResponseImg);
      setImagens(ResponseImg)
    })
  }
  Pegar_dados()
}, [])

  return (
    <>
    <Ola></Ola>
      <div
        className=" h-full flex justify-center space-x-[30%] bg-no-repeat bg-center bg-cover "
      >
        
      <div className="w-full flex items-center justify-center">
        <div className=" justify-center items-center bg-[url('../public/fundo-transparente-png7.png')] w-[80%] h-screen mt-[10%] rounded-[10px]">
        <div className="w-full flex items-center justify-center">
  <div className="w-[80%] mt-[10%]">
    <div className="flex flex-wrap -mx-2">
      {imagens.map((item) => (
        <div className="w-[20%] px-2 mb-4 ml-[50px] mt-[50px]" key={item.nome}>
          <img className="w-full" src={item.imagem} />
          <h2>{item.nome}</h2>
          <h2>{item.email}</h2>
        </div>
      ))}
    </div>
  </div>
</div>
        {/* <img className='w-[20%]' src={Imagem} /> */}
        {/* <p>{Nome}</p>
        <p>{Email}</p>
        <Button onClick={Pegar_dados}>Alunos sem EPI</Button> */}
        </div>
        
      </div>
      </div>
    </>
  )
}
