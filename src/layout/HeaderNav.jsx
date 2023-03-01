import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/juan.jpeg";
import "../styles/headerNav.css";

const HeaderNav = () => {
  return (
    <header className="header">
      <div className="first_nav">
        <img src={image} />
        <h3>Juan Rodríguez</h3>
      </div>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Servicios
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portafolio"
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
                to="/contacto"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
