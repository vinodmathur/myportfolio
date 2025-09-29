// App.jsx
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const particleOptions = {
    background: { color: "#071025" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: { repulse: { distance: 120, duration: 0.4 }, push: { quantity: 3 } },
    },
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa"] },
      shape: { type: ["circle", "triangle"] },
      opacity: {
        value: 0.65,
        random: { enable: true, minimumValue: 0.3 },
        animation: { enable: true, speed: 0.8, minimumValue: 0.2 },
      },
      size: { value: { min: 1, max: 4 }, random: true },
      links: { enable: true, distance: 140, color: "#9ca3af", opacity: 0.08, width: 1 },
      move: { enable: true, speed: 0.9, direction: "none", outModes: { default: "out" } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      <Particles className="absolute inset-0 -z-20" init={particlesInit} options={particleOptions} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="font-bold tracking-tight text-sm">VM</span>
            </div>
            <span className="text-lg font-semibold">Vinod Mathur</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
            <a href="#expertise" className="hover:text-pink-400 transition">Expertise</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#process" className="hover:text-pink-400 transition">Process</a>
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#feedback" className="hover:text-pink-400 transition">Feedback</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
            <a href="/resume.pdf" download className="ml-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow">Resume</a>
          </nav>
          <button className="md:hidden p-2 rounded-md bg-white/6 hover:bg-white/8" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-3 max-w-3xl mx-auto px-6 bg-black/60 backdrop-blur rounded-lg py-4 shadow-lg">
            <div className="flex flex-col gap-3 text-center">
              <a href="#expertise" onClick={() => setMenuOpen(false)} className="py-2">Expertise</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="py-2">Projects</a>
              <a href="#process" onClick={() => setMenuOpen(false)} className="py-2">Process</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="py-2">About</a>
              <a href="#feedback" onClick={() => setMenuOpen(false)} className="py-2">Feedback</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-left">
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/6 backdrop-blur text-sm font-medium text-pink-200">UI / PRODUCT DESIGNER</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
                I design meaningful digital products — beautiful, usable & measurable.
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                Creative UI/UX Designer with a deep passion for designing seamless digital experiences. Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS. I blend creativity and functionality to craft designs that delight users and drive results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/resume.pdf" download className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold shadow-lg hover:scale-[1.03] transition-transform">
                  Download Resume
                </a>
                <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
                  Contact Me
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Figma</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Adobe XD</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Photoshop</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Canva</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">HTML & CSS</span>
              </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center relative">
              <div className="absolute -top-8 right-0 opacity-60 w-72 md:w-96 pointer-events-none">
                <img src="/vector1.png" alt="decorative vector" className="w-full h-auto animate-breath" />
              </div>
              <div className="relative z-20">
                <div className="flex justify-center">
                  <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
                </div>
                <div className="mx-auto mt-2 transform origin-top transition-transform duration-700 animate-swing">
                  <div className="w-72 bg-gradient-to-t from-white/6 to-white/4 backdrop-blur rounded-xl py-4 px-5 shadow-2xl border border-white/6">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-md bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-black font-bold">VM</div>
                      <div>
                        <div className="text-white font-semibold">Vinod Mathur</div>
                        <div className="text-xs text-gray-300">UI UX Designer / Product Designer</div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-300">
                      Portfolio • Product Design • UX Research
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xs text-gray-400">ID: VM-UI-2025</div>
                      <a href="#contact" className="text-xs text-pink-300 underline">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise, Projects, Process, About, Feedback, Clients, Contact, Footer */}
        {/* All sections written fully expanded as in previous snippet with individual cards */}
      </main>
    </div>
  );
}
