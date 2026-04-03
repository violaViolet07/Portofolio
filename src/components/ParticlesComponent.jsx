import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

let particlesEnginePromise;

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!particlesEnginePromise) {
      particlesEnginePromise = initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
    }

    particlesEnginePromise.then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 95,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div>
      {init && <Particles id="tsparticles" options={options} />}
    </div>
  );
};

export default ParticlesComponent;
