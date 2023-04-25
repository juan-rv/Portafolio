import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image from "../assets/juan.jpeg";
import es from "../assets/espana.png";
import en from "../assets/estados-unidos.png";

import "../styles/headerNav.css";

const HeaderNav = () => {
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

  const changeBg = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 40.5) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <header className="header">
      {navBar ? (
        <div className="first_nav">
          <img src={image} />
          <h3>Juan Rodríguez</h3>
        </div>
      ) : (
        <div className="first_nav"></div>
      )}
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Servicios
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Portafolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/curriculum"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Curriculum
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="buttons_lang">
        <buttom
          className={`eng ${isSelected("es")}`}
          onClick={() => changeLanguage("es")}
        >
          <img src={es} alt="es" />
        </buttom>
        <buttom
          className={`eng ${isSelected("en")}`}
          onClick={() => changeLanguage("en")}
        >
          <img src={en} alt="en" />
        </buttom>
      </div>
    </header>
  );
};

export default HeaderNav;
