import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/servicios.css";

const Servicios = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="services_contain">
      <div className="services">
        <div className="text_services">
          <h1>{t("services.title")}</h1>
          <h2>{t("services.containt_titel")}</h2>
        </div>
      </div>

      <div className="contain_card">
        <div className="cards">
          <h2>{t("services.first_title")}</h2>
          <p>
            <strong>{t("services.first_first_sub")}</strong>
            {t("services.first_first_contain")}
          </p>
          <p>
            <strong>{t("services.first_second_sub")}</strong>
            {t("services.first_second_contain")}
          </p>
          <p>
            <strong>{t("services.first_third_sub")}</strong>
            {t("services.first_third_contain")}
          </p>
          <p>
            <strong>{t("services.first_four_sub")}</strong>
            {t("services.first_four_contain")}
          </p>
          <p>
            <strong>{t("services.first_five_sub")}</strong>
            {t("services.first_five_contain")}
          </p>
        </div>
        <div className="cards">
          <h2>{t("services.second_title")}</h2>
          <p>{t("services.second_first_contain")}</p>
          <p>{t("services.second_second_contain")}</p>
        </div>
        <div className="cards">
          <h2>{t("services.third_title")}</h2>
          <p>{t("services.third_first_contain")}</p>
          <p>{t("services.third_second_contain")}</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
