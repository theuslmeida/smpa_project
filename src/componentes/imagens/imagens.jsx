import React, { useState, useEffect } from "react";
import axios from "axios";

const Imagens = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    // Fetch the photos from the database
    axios.get("/api/fotos")
      .then((response) => response.data)
      .then((data) => setFotos(data));
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center w-full">
      {fotos.map((foto) => (
        <div className="md:w-1/2 w-full bg-[#EBEBEB] p-4" key={foto.id}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <h1>Dados dos Alunos</h1>
              <h2>E-mail: {foto.email}</h2>
              <h2>Nome: {foto.nome}</h2>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img
                className="w-full h-auto"
                src={foto.url}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Imagens;