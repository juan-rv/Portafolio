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
          <Route path="/home" element={<Inicio />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/portfolio" element={<Portafolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      {/* Footer */}
    </BrowserRouter>
  );
};

export default Rutas;
