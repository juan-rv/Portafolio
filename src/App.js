import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Rutas from './router/Rutas';

function App() {
  return (
    <div>

    <div className="layout">
      <Rutas />
      </div>

      <div>
      <ParticleBackground />
      </div>
    </div>
      
  );
}

export default App;
