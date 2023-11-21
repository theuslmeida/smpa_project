import NavBar from "../../componentes/navbar/nav";
export default function Iniciar() {
  return (
    <>
    <NavBar></NavBar>
      <div  className="bg-[url('../public/fundo-transparente-png7.png')] bg-cover bg-center py-16">
        <main className="w-full h-screen flex ">
          <section className="w-2/4 h-full flex justify-center items-center transition-all ease-in-out">
            <div className="w-[400px] h-[400px] xl:w-[500px] xl:h-[600px]" >
              <div
                style={{ backgroundImage: "url('../public/Screenshot_2.png')" }}
                className="object-cover w-full h-[100%] hover:-translate-y-7 drop-shadow-lg animate-jump-in animate-once "
              />
            </div>
          </section>
          <section className="w-2/4 flex justify-center items-center  transition-all ease-in-out">
            <div className="w-9/12  flex justify-around flex-col  transition-all ease-in-out">
              <h1 className="text-5xl font-semibold text-red-600">SMPA</h1>
              <div>
                <p className="w-[300px] text-[15px] 2xl:w-[600px] xl:text-[15px]">
                  O projeto de Detecção de EPI e Escaneamento para Segurança do Trabalhador
                  é uma iniciativa inovadora que utiliza tecnologias avançadas, como visão
                  computacional e aprendizado de máquina, para detectar e verificar o uso 
                  correto dos Equipamentos de Proteção Individual pelos trabalhadores. O sistema utiliza câmeras 
                e sensores para monitorar os trabalhadores, identificando a presença e a adequação dos EPIs. Quando há problemas, 
                como a ausência de EPIs, o sistema emite alertas para a supervisão e os 
                trabalhadores, contribuindo para a segurança ocupacional e a redução de acidentes no 
                local de trabalho.
                </p>
                <a href="/Scanear"><button className="bg-red-600 h-10 w-40 rounded-xl" >
                  <a href="/Scanear" className="text-[#fff]">Iniciar</a>
                </button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
