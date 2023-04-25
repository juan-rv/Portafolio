import "./App.css";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Rutas from "./router/Rutas";

function App() {
  return (
    <div>
      <div className="layout">
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
