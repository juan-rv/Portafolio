import React from "react";
import { services } from "../api/services";
import "../styles/servicios.css";

const Servicios = () => {
  return (
    <div className="services_contain">
      <div className="services">
        <div className="text_services">
          <h1> Servicios. </h1>
          <h2>
            Bienvenido a mi sección de servicios. Como desarrollador web,
            ofrezco una amplia gama de servicios para ayudar a las empresas y
            organizaciones a alcanzar sus objetivos en línea.
          </h2>
        </div>
      </div>

      <div className="contain_card">
        {services.map((service) => {
          console.log(service.servicios);
          return (
            <div key={service.id} className="cards">
              <h2>{service.name}</h2>
              <p>{service.resume.uno}</p>
              <p>{service.resume.dos}</p>
              <p>{service.resume.tres}</p>
              <p>{service.resume.cuatro}</p>
              <p>{service.resume.cinco}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servicios;
