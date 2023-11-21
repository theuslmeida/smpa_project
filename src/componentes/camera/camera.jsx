import axios from "axios";
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

export default function Camera() {
  const webcamRef = React.useRef(null);
  const [countdown, setCountdown] = useState(30);
  const [preDetect, setpreDetect] = useState("");
  const [cont2, setCont2] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
        Pre_detect();
      } 
      if (countdown == 1){
        Camera();
      }
      else {
        return
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);


  async function Camera() {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc){
      const blob = await fetch(imageSrc).then((r) => r.blob());
      const Pre_formdata = new FormData();
      Pre_formdata.append("imagem", blob, "imagem.png");
      Pre_formdata.append("email", localStorage.getItem("email_aluno"));
      const response = await axios.post("https://sampa.pythonanywhere.com/enviar_img/", Pre_formdata);
      if (response.data.return == true){
        navigate("/aprovado");  
        return
      }
      else{
        const formNeg = new FormData();
        formNeg.append('nome', localStorage.getItem("nome"))
        formNeg.append('email', localStorage.getItem("email_aluno"));
        formNeg.append('cpf', localStorage.getItem("cpf_aluno"));
        formNeg.append('imagem', blob, 'imagem.png');
        await axios.post("https://sampa.pythonanywhere.com/Imagens_negativas/?format=json", formNeg)
        navigate("/negado");
        return
      }
    }
  }
  async function Pre_detect() {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      if (countdown === 1) {
        const blob = await fetch(imageSrc).then((r) => r.blob());
        const Pre_formdata = new FormData();
        Pre_formdata.append("imagem", blob, "imagem.png");
        Pre_formdata.append("email", localStorage.getItem("email_aluno"));
        const response = await axios.post("https://sampa.pythonanywhere.com/enviar_img/", Pre_formdata);
        if (response.data.deteccao_resultado === true) {
          navigate("/aprovado");  
          return
        }
        else{
          const formNeg = new FormData();
          formNeg.append('nome', localStorage.getItem("nome"))
          formNeg.append('email', localStorage.getItem("email_aluno"));
          formNeg.append('cpf', localStorage.getItem("cpf_aluno"))
          formNeg.append('imagem', blob, 'imagem.png');
          await axios.post("https://sampa.pythonanywhere.com/Imagens_negativas/?format=json", formNeg)
          navigate("/negado");  
          return
        }
      }

      try {
        const blob = await fetch(imageSrc).then((r) => r.blob());
        const Pre_formdata = new FormData();
        Pre_formdata.append("imagem", blob, "imagem.png");
        Pre_formdata.append("email", localStorage.getItem("email_aluno"));
        const response = await axios.post("https://sampa.pythonanywhere.com/enviar_img/", Pre_formdata);

        if(response){
          if (response.data.deteccao_resultado === true) {
            setCont2(cont2 - 1);
            console.log(cont2)
            
            if (cont2 === 0) {
              navigate("/aprovado");
            }
          }
          setpreDetect(response.data.pre_deteccao_resultado);
        }
      } 
      catch (error) {
        alert(error);
      }
    }
  }

  async function Pre_detect() {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc){
      const Pre_formdata = new FormData();
      const blob = await fetch(imageSrc).then((r) => r.blob());
      Pre_formdata.append("imagem", blob, "imagem.png");
      Pre_formdata.append("email", localStorage.getItem("email_aluno"));
      const response = await axios.post("https://sampa.pythonanywhere.com/enviar_img/", Pre_formdata);

      setpreDetect(response.data.response);
      if(response.data.return == true){
        navigate("/aprovado")
        return
      }
    }
  }

  return (
    <>
      <div className="bg-[url('../public/fundo-transparente-png7.png')] bg-cover bg-center py-16 h-screen">
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
