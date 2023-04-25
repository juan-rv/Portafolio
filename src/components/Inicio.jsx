import React from "react";
import { useTranslation } from "react-i18next";
import { frontend } from "../api/frontend";
import { backend } from "../api/backend";
import { tecnologies } from "../api/tecnologies";
import image from "../assets/juan.jpeg";
import "../styles/inicio.css";

const Inicio = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <div className="inicio">
      <div className="card">
        <div className="card_img">
          <img src={image} />
        </div>
        <div className="card_info">
          <h1> Juan Rodríguez</h1>
          <h2>{t("inicio.profesion")}</h2>
          <p>Bogotá - Colombia</p>
        </div>
      </div>
      <div className="info">
        <h1>{t("inicio.hello")}</h1>
        <p>{t("inicio.description_one")}</p>
        <p>{t("inicio.description_two")}</p>
        <p>{t("inicio.description_three")}</p>
        <h2>{t("inicio.skills")}</h2>
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
        <h3>{t("inicio.tecnologies")}</h3>
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
