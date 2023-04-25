import React from "react";
import { useTranslation } from "react-i18next";

const Error = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <div>
      <h1>Pagina no encontrada</h1>
      <h2>Error 404</h2>
      <h3>{t("header.error")}</h3>
    </div>
  );
};

export default Error;
