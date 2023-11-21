import Ola from "../../componentes/Olá/ola";
import Imagens from "../../componentes/imagens/imagens";
import NavBarSeg from "../../componentes/navbar/NavSeg";
import { RiBodyScanFill } from 'react-icons/ri';
import { SiGoogleforms } from 'react-icons/si';
import { AiFillVideoCamera } from 'react-icons/ai';



export default function admin() {
  return (
    <>
      <Ola></Ola>
      <div
        className="bg-[#EBEBEB] h-[93vh] flex justify-center space-x-[30%] bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage:
            "url('../public/fundo-transparente-png7.png')",
        }}
      >
       <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Aplicações do Segurança de Trabalho
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:ml-[30%]">
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 ">
          <RiBodyScanFill
          className="text-[100px]" 
          ></RiBodyScanFill>
          <a href="/ADMneg">Fotos Negadas</a>
          </div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 ">
          <SiGoogleforms
          className="text-[100px]" 
          ></SiGoogleforms>
          <a href="https://forms.gle/9AmKqEDTxCwix1iB8">Inspeção de segurança</a>
          </div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 ">
          <AiFillVideoCamera
          href="/Online"
          className="text-[100px]  lg:mt-[0px] mt-[30px]" 
          ></AiFillVideoCamera>
          <a href="/Online">Scaneamento Online</a>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}
