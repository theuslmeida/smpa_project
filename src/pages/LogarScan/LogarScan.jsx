import Button from "react-bootstrap/esm/Button";
export default function LogarScan(){
    
    return(
        <div className="w-full h-screen bg-slate-300 flex justify-center items-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://images8.alphacoders.com/440/thumb-1920-440484.jpg')" }}>
            <div className="w-[450px] h-[300px] flex flex-col justify-center items-center  bg-[#9c2727] content-center rounded-[20px]">
                <h1 className="mt-[5%] text-[#fff] text-[30px] ">LOGIN DE ALUNOS</h1>
                
                <input 
                className="w-[70%] bg-[#fff] rounded-[6px] text-[20px] mt-[30px] p-[2px]" 
                placeholder="digite seu CPF" 
                type="email"
                />
                
                <Button
                className="w-[150px] h-[40px] mt-[30px] mb-[40px] rounded-[10px] bg-red-600 shadow-black-[0px 4px 4px 0px]">
                    <h1 className="text-[20px] text-white">Iniciar</h1>
                </Button>
                </div>

        </div>
    )
}