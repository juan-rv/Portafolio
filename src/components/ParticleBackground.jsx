import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particles-config";
const ParticleBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </div>
  );
};

export default ParticleBackground;
