import React from "react";
import "../styles/inicio.css";
import image from "../assets/juan.jpeg";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="card">
        <img src={image} />
        <h1> Juan Rodriguez</h1>
        <h2>Web Developer</h2>
        <p>Bogotá - Colombia</p>
      </div>
      <div className="info">
        <h1> Hola 👋, Soy Juan Rodríguez</h1>

        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit quia
          eos iure repellendus, fugiat assumenda! Eum enim nostrum ratione
          dolores unde, culpa perferendis. Maxime dolores enim expedita fugit
          cupiditate!
        </p>
        <h2>Habilidades:</h2>
        <h3>Frontend:</h3>
        <p>Aca una lista de las habilidades y tecnologias</p>
        <h3>Backend:</h3>
        <p>Aca una lista de las habilidades en tecnologias backend</p>
        <h3>Tecnologias</h3>
        <p> Aca una lista de las tecnologias</p>
      </div>
    </div>
  );
};

export default Inicio;
