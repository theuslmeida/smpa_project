import axios from "axios";
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

export default function Camera() {
  const webcamRef = React.useRef(null);
  const [countdown, setCountdown] = useState(100000);
  const [preDetect, setpreDetect] = useState("");
  const navigate = useNavigate();
  const [cont, setCont] = useState(1)
  const [modal, setModal] = useState(false)
 
  useEffect(() => {
    const timer = setInterval(() => {
      Check_email();
      if (countdown > 0) {
        setCountdown(countdown - 1);
        Pre_detect();
      } 
      else if(countdown == 0){
        if (cont < 3){
          setCont(cont + 1)
          setModal(true)
        }
        else if (cont == 3){
          Post_negs()
          return
        }
      }
    }, 1100);
    return () => clearInterval(timer);
  }, [countdown]);

  function Cowndown(){
    setCountdown(5)
    setModal(false)
  }

  function Check_email(){
    if(!localStorage.getItem("email_aluno")){
      alert("Seu email nao foi detectado, vamos te enviar para a pagina de login!")
      navigate("/")
      return
    }

  }

  async function Pre_detect() {
    const imageSrc = webcamRef.current.getScreenshot();
    const Pre_formdata = new FormData();
    const blob = await fetch(imageSrc).then((r) => r.blob());
    Pre_formdata.append("imagem", blob, "imagem.png");
    Pre_formdata.append("email", localStorage.getItem("email_aluno"));
    console.log("ENviei")
    const response = await axios.post("https://sampa.pythonanywhere.com/enviar_img/", Pre_formdata);
    console.log(response.data)

    setpreDetect(response.data.response);
    if(response.data.return){
      localStorage.removeItem("cpf_aluno")
      localStorage.removeItem("email_aluno")
      localStorage.removeItem("nome")
      navigate("/aprovado")
      return
    }
  }

  async function Post_negs() {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = await fetch(imageSrc).then((r) => r.blob());
    const formNeg = new FormData();
    formNeg.append('nome', localStorage.getItem("nome"))
    formNeg.append('email', localStorage.getItem("email_aluno"));
    formNeg.append('cpf', localStorage.getItem("cpf_aluno"));
    formNeg.append('imagem', blob, 'imagem.png');
    axios.post("https://sampa.pythonanywhere.com/Imagens_negativas/?format=json", formNeg)
    navigate("/negado");
    return
  }

  return (
    <> 
      {cont >= 2 ? (
        <>
        {modal && (
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                {cont == 2 ? (
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Falha na detecção você ainda tem mais duas chances!</h3>  
                ) : (
                  false
                )} 
                {cont == 3 ? (
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Falha na detecção você ainda tem mais uma chance!</h3>  
                ) : (
                  false
                )}
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Não foi possivel detectar EPI no seu corpo </p>
                </div>
              </div>
            </div>
          </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" onClick={(e)=>{Cowndown(e)}} class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" >Refazer verificação</button>
                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"><a href="/">Cancelar</a></button>
                </div>
              </div>
            </div>
              </div>
          </div>
        )}
        </>
      ) : (
        false
      )}  
      <div className="bg-[url('../public/fundo-transparente-png7.png')] bg-cover bg-center h-screen">
        <div
          className=" bg-slate-600 flex items-center justify-center"
          alt="Bem-Vindo"
        >
          <h1 className="text-[30px]  xl:text-[40px]">
            Bem-Vindo ao
            <span className="text-red-600">Teste</span>
          </h1>
        </div>
        <div className="xl:flex" alt="conjutno de tudo">
          <div
            className=" w-[100%] flex items-center justify-center"
            alt="conjuto de texto "
          >
            <div className="">
              <div className="flex justify-center xl:text-[25px] text-[20px] mt-[10px] ml-[30%] bg-black text-red-600 w-[120px] items-center xl:text- xl:w-[220px]">
                <h1 className="">INSTRUÇÕES</h1>
              </div>
              <p className="text-[20px] xl:text-[50px]">
                1- Se posicione em frente a câmera
              </p>
              <p className="text-[20px] xl:text-[50px]">
                2- Fique parado até a contagem acabar
              </p>
              <p className="text-[20px] xl:text-[50px]">
                3- Espere a verificação
              </p>
              {/*<button className="w-52 h-12 rounded-xl shadow-black bg-red-600 mt-14"><h1 className="text-white text-2xl">Testar</h1></button>*/}
              {countdown > 0 ? (
                <p className="h-10 w-96 text-2xl ml-[5%] xl:text-[50px] ">
                  {countdown}
                </p>
              ) : null}
              <div className=" xl:ml-[25%] "></div>
              <h1
                className={`text-[20px] xl:text-[50px] ${
                  preDetect === "Não estamos conseguindo te detectar"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {preDetect}
              </h1>
            </div>
          </div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="sm:w-[90%] sm:h-[20%] xl:mt-[5%] xl:w-[50%] xl:ml-[7%]  w-[100%] border-slate-950 bg-[#aaa]"
          ></Webcam>
        </div>
      </div>
    </>
  );
}
