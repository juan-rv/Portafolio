import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/footer.css";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

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
        <p>
          {" "}
          Copyright &copy; {actual} - {t("footer.rights")}
        </p>
        <p>
          {t("footer.title")}
          <strong> Juan Rodríguez</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
