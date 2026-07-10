import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    particles: {
      color: {
        value: ["#F0A6CA", "#E0B1CB", "#9F86C0"],
      },
      links: {
        color: "#9F86C0",
        distance: 165,
        enable: true,
        opacity: 0.22,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.55,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 75,
      },
      opacity: {
        value: { min: 0.18, max: 0.5 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.4 },
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
