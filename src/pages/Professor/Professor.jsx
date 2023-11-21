import { useState } from "react"
import { useNavigate } from "react-router-dom";
import NavBarProf from "../../componentes/navbar/NavProf";

export default function Prof(){
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username: username,
            password: password,
        };

        axios
            .post('http://127.0.0.1:8000/api_cliente/', loginData, {
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            })
            .then((response) => {
                const token_cli = response.data.access;
                localStorage.setItem('token_cli', token_cli);
                localStorage.setItem('nome', username);
                console.log(token_cli);
                window.location.href = '/home-page';
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return(
        <>
        <NavBarProf></NavBarProf>
        <div className="bg-[#EBEBEB] h-[93vh] flex justify-center bg-no-repeat bg-center bg-cover " style={{ backgroundImage: "url('https://images8.alphacoders.com/440/thumb-1920-440484.jpg')" }}>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISoong3jgtygnvx8loDX_AvseejOZBfXe8kzPNxkQ&s" alt="Your Company"></img>
                    <h2 class="mt-10 text-center text-[30px] font-bold leading-9 tracking-tight text-white">Login do Professor</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-red-400">Email address</label>
                            <div class="mt-2">
                                <input onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"></input>
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-red-400">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-red-600 hover:text-red-700">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input onChange={(e)=>{setPassword(e.target.value)}} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-[10px]"></input>
                            </div>
                        </div>

                        <div>
                            <button onClick={(e)=>{Logando(e)}} type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}