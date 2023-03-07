import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Curriculum from "../components/Curriculum";
import Error from "../components/Error";
import Inicio from "../components/Inicio";
import Portafolio from "../components/Portafolio";
import Servicios from "../components/Servicios";
import HeaderNav from "../layout/HeaderNav";
import Contacto from "../components/Contacto";

const Rutas = () => {
  return (
    <BrowserRouter>
      {/* Header y navegacion */}
      <HeaderNav className="head" />

      <section className="contenido">
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      {/* Footer */}
    </BrowserRouter>
  );
};

export default Rutas;
