import React, { useState } from "react";

function Forms() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("Email:", email);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Formulário de Registro</h2>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-600 mb-2">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white rounded p-2 px-4 hover:bg-blue-600">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
