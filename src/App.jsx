// App.jsx
import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars, FaTimes } from "react-icons/fa"; // ✅ Added FaTimes
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    // ... your projects unchanged ...
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Particle Background */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1 },
            number: { value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="min-h-screen bg-black/50">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Vinod Mathur</h1>
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <a href="#expertise" className="hover:text-pink-400">Expertise</a>
              <a href="#projects" className="hover:text-pink-400">Projects</a>
              <a href="#process" className="hover:text-pink-400">Process</a>
              <a href="#about" className="hover:text-pink-400">About</a>
              <a href="#contact" className="hover:text-pink-400">Contact</a>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />} {/* ✅ Toggle icons */}
            </button>
          </div>

          {/* Mobile Menu with Slide Animation */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-black/95 text-center pt-20 space-y-6 transform transition-transform duration-300 md:hidden z-40 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button inside menu */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl text-gray-300 hover:text-pink-400"
            >
              <FaTimes />
            </button>

            <a href="#expertise" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Expertise</a>
            <a href="#projects" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#process" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#about" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </header>

        {/* === rest of your sections remain same === */}
        {/* Hero, Expertise, Projects, Process, About, Contact, Footer... */}
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
