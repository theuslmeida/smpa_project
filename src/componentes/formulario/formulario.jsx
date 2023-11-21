// 
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Formulario() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("https://sampa.pythonanywhere.com/Responsaveis/?format=json");
            const responsaveis = response.data;

            const matchingResponsavel = responsaveis.find((responsavel) => responsavel.email === email && responsavel.senha === password);

            if (matchingResponsavel) {
                navigate("/admin");
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        } catch (error) {
            console.error("Ocorreu um erro: " + error);
        }
    }

    return (
        <div className="bg-[#EBEBEB] h-[93vh] flex justify-center bg-no-repeat bg-center bg-cover " style={{ backgroundImage: "url('https://images8.alphacoders.com/440/thumb-1920-440484.jpg')" }}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISoong3jgtygnvx8loDX_AvseejOZBfXe8kzPNxkQ&s" alt="Your Company" />
                    <h2 className="mt-10 text-center text-[30px] font-bold leading-9 tracking-tight text-white">Login do Segurança</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-red-400">Endereço de Email</label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-red-400">Senha</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"
                                />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
