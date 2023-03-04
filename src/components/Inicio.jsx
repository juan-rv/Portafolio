import React from "react";
import "../styles/inicio.css";
import { frontend } from "../api/frontend";
import { backend } from "../api/backend";
import { tecnologies } from "../api/tecnologies";
import image from "../assets/juan.jpeg";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="card">
        <img src={image} />
        <h1> Juan Rodríguez</h1>
        <h2>Web Developer</h2>
        <p>Bogotá - Colombia</p>
      </div>
      <div className="info">
        <h1> Hola 👋, Soy Juan Rodríguez</h1>

        <p>
          Recien graduado de la carrera en desarrollo web Full Stack Developer,
          con mayor afinidad al frontend, actualmente me encuentro en busqueda
          de nuevos desafíos en empresas y/o proyectos donde pueda aportar desde
          mis conocimientos en desarrollo web y demás.
        </p>
        <p>
          He venido formando mi experiencia de trabajo en equipo desde la
          metodología SCRUM, desarrollando desde la parte del frontend, backend
          y bases de datos.
        </p>

        <p>
          Cuento con un titulo de licenciatura en biología, intereses sobre la
          historia natural, con conocimientos en VBA Excell y estudios musicales
          aplicados al piano.
        </p>
        <h2>Habilidades:</h2>
        <h3>Frontend:</h3>
        <div className="skills">
          {frontend.map((front) => (
            <article key={front.id}>
              <img height="80" width="80" src={front.image} alt={front.name} />
              <p>{front.name}</p>
            </article>
          ))}
        </div>
        <h3>Backend:</h3>
        <div className="skills">
          {backend.map((back) => (
            <article key={back.id}>
              <img height="80" width="80" src={back.image} alt={back.name} />
              <p>{back.name}</p>
            </article>
          ))}
        </div>
        <h3>Tecnologias</h3>
        <div className="skills">
          {tecnologies.map((tec) => (
            <article key={tec.id}>
              <img height="80" width="80" src={tec.image} alt={tec.name} />
              <p>{tec.name}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
