import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/footer.css";

const Footer = () => {
  const getYear = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    return year;
  };

  const actual = getYear();

  return (
    <div className="footer">
      <div className="icon">
        <a href="https://www.linkedin.com/in/juan-rv/" target="_blank">
          <AiFillLinkedin />
        </a>

        <a href="https://github.com/juan-rv" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="text">
        <p> Copyright &copy; {actual} - Todos los derechos reservados</p>
        <p>
          Este sitio web es propiedad y administrado por
          <strong> Juan Rodríguez</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
