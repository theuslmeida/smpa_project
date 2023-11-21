import React from "react";
import Ola from "../../componentes/Olá/ola";

export default function ScanOnline() {
  return (
    <>
      <Ola></Ola>
      <div
        className="bg-[#EBEBEB] h-[93vh] flex justify-center space-x-[30%] bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('../public/fundo-transparente-png7.png')",
        }}
      >
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center bg-white w-[60%] h-[30%]">
          <h1 className="text-[40px]">Em Manutenção</h1>
        </div>
      </div>
      </div>
    </>
  );
}
