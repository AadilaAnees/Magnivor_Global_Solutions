import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

export function ParticlesBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 70, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ["#C1E8FF", "#5483B3"] },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 2.5 } },
        links: {
          enable: true,
          distance: 150,
          color: "#5483B3",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          outModes: { default: "out" },
          random: false,
          straight: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.35 } },
        },
      },
    }),
    [],
  );

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="hero-particles"
        options={options}
        className="absolute inset-0 h-full w-full"
      />
    </ParticlesProvider>
  );
}
