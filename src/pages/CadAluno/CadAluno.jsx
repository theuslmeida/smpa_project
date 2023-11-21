import axios from "axios";
import NavBar from "../../componentes/navbar/nav";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function CadAluno() {
    const [email, setEmail] = useState("")
    const [cpf,setCpf ] = useState("")
    const [nome,setNome ] = useState("")
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
            let data = {
                nome: nome,
                email: email, 
                cpf: cpf
            }
            await axios.post("https://sampa.pythonanywhere.com/Alunos/", data)
            alert("Cadastro concluido com sucesso!")
            navigate("/")
        }
        catch(error) {
            alert("Ouve um erro de servidor -> "+error)
        }
    }
    return (

        <>
            <NavBar></NavBar>
            <div className="bg-[#EBEBEB] h-[93vh] flex justify-center bg-no-repeat bg-center bg-cover " style={{ backgroundImage: "url('https://images8.alphacoders.com/440/thumb-1920-440484.jpg')" }}>
                <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img class="mx-auto h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISoong3jgtygnvx8loDX_AvseejOZBfXe8kzPNxkQ&s" alt="Your Company"></img>
                        <h2 class="mt-10 text-center text-[40px] font-bold leading-9 tracking-tight text-white">Cadastro de Aluno</h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="nome" className="block text-sm font-medium leading-6 text-red-400">Nome e Sobrenome</label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-red-400">CPF</label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="cpf"
                                        name="cpf"
                                        type="number"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"
                                    />
                                </div>
                            </div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-red-400">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"
                                />
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar Aluno</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
