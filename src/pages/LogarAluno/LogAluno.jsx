import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../componentes/navbar/nav";
import axios from "axios";

export default function LogAluno(){
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate();

    async function Logando(e){
        e.preventDefault();
        if(cpf.length < 4){
            alert("Cpf invalido!")
            return false
        }
        try {
            let response = await axios.get("https://sampa.pythonanywhere.com/Alunos/?format=json")
            response = response.data
            for (let c = 0; c < response.length+1; c++){
                if(response[c].cpf.slice(-4) == cpf.slice(-4)){
                    navigate("/Inicio")
                    localStorage.setItem("nome", response[c].nome)
                    localStorage.setItem("email_aluno", response[c].email)
                    localStorage.setItem("cpf_aluno", response[c].cpf)
                }
            }
        }
        catch(error) {
            console.log("Ouve um erro de servidor -> "+error)
        }
         
    }

    return(
        <>
        <NavBar></NavBar>
        <div className="w-full h-[93vh] bg-slate-300 flex justify-center items-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://images8.alphacoders.com/440/thumb-1920-440484.jpg')" }}>
            <div class=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISoong3jgtygnvx8loDX_AvseejOZBfXe8kzPNxkQ&s" alt="Your Company"></img>
                    <h2 class=" mt-10 text-center text-[40px] font-bold leading-9 tracking-tight text-white">Login de Aluno</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-red-400">CPF</label>
                            <div class="mt-2">
                                <input onChange={(e)=>{setCpf(e.target.value)}} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]" placeholder="logue com os ultimos 4 digitos"></input>
                            </div>
                        </div>
                      
                        <button type="submit" onClick={(e)=>{Logando(e)}} class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                    </form>
                    <p class="mt-10 text-center text-sm text-gray-500">
                        Não tem cadastro?
                        <a href="/Cadastramento" class="font-semibold leading-6 text-red-600 hover:text-red-700"> Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}