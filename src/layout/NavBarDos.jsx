import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import es from "../assets/espana.png";
import en from "../assets/estados-unidos.png";
import "../styles/NavBarDos.css";

const NavBarDos = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <NavLink to="/home"> {t("navBar.home")}</NavLink>
            <NavLink to="/services"> {t("navBar.services")}</NavLink>
            <NavLink to="/portfolio"> {t("navBar.portfolio")}</NavLink>
            <NavLink to="/curriculum"> {t("navBar.curriculum")}</NavLink>
            <NavLink to="/contact"> {t("navBar.contact")}</NavLink>
          </div>
        )}
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
    </div>
  );
};

export default NavBarDos;
