// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "transparent" }, // transparent to show gradient
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 3 },
            repulse: { distance: 120, duration: 0.6 },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#ec4899", "#8b5cf6"], // white + pink + purple
          },
          links: {
            color: "#ffffff",
            distance: 130,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8, // slower for premium feel
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            value: 50,
            density: { enable: true, area: 900 },
          },
          opacity: { value: { min: 0.3, max: 0.7 } }, // subtle glowing effect
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
