import "./App.css";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Rutas from "./router/Rutas";
import { useEffect } from "react";

function App() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const language = localStorage.getItem("languege");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  function isSelected(lang) {
    return i18n.language === lang ? "active" : "";
  }
  return (
    <div>
      <div className="layout">
        <div>
          <button onClick={() => changeLanguage("es")}>ES</button>
          <button onClick={() => changeLanguage("en")}>En</button>
        </div>
        <Rutas />
      </div>
      <footer>
        <Footer />
      </footer>
      <div>
        <ParticleBackground />
      </div>
    </div>
  );
}

export default App;
