import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image from "../assets/juan.jpeg";
import es from "../assets/espana.png";
import en from "../assets/estados-unidos.png";
import "../styles/NavBarDos.css";

const NavBarDos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const [t, i18n] = useTranslation("global");
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  function isSelected(lang) {
    return i18n.language === lang ? "active" : "";
  }

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const changeBg = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className="navdos">
      <div className="burger-button-container">
        <button className="burger-button" onClick={handleMenuClick}>
          <div className={`burger-line ${isOpen ? "open" : ""}`} />
          <div className={`burger-line ${isOpen ? "open" : ""}`} />
          <div className={`burger-line ${isOpen ? "open" : ""}`} />
        </button>
        {isOpen && (
          <div className="burger-menu">
            <NavLink to="/home">Inicio</NavLink>
            <NavLink to="/services">Servicios</NavLink>
            <NavLink to="/portfolio">Portafolio</NavLink>
            <NavLink to="/curriculum">Curriculum</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
          </div>
        )}
      </div>
      <div>
        {navBar ? (
          <div className="min-nav">
            <img src={image} alt="Juan Rodriguez" />
            <h3>Juan Rodríguez</h3>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
      <div className="buttons_lang">
        <buttom onClick={() => changeLanguage("es")}>
          <img src={es} alt="es" />
        </buttom>
        <buttom onClick={() => changeLanguage("en")}>
          <img src={en} alt="en" />
        </buttom>
      </div>
    </div>
  );
};

export default NavBarDos;
