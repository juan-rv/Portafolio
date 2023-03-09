import React from "react";
import { services } from "../api/services";
import "../styles/servicios.css";

const Servicios = () => {
  return (
    <div className="services_contain">
      <div className="services">
        <div className="text_services">
          <h2>
            Bienvenido a mi sección de servicios. Como desarrollador web,
            ofrezco una amplia gama de servicios para ayudar a las empresas y
            organizaciones a alcanzar sus objetivos en línea.
          </h2>
          <h3>
            Desde el diseño y desarrollo de sitios web personalizados hasta la
            consultoría en gestión de proyectos, estoy aquí para ayudarte a
            lograr el éxito en línea. A continuación, te presento algunos de los
            servicios más populares que ofrezco. Si tienes alguna pregunta o
            estás interesado en alguno de ellos, no dudes en ponerte en contacto
            conmigo. ¡Estoy aquí para ayudarte!
          </h3>
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
