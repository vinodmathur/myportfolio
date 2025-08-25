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
    // your project list...
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
            <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />} {/* ✅ Toggle between bars and close */}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/95 text-center py-6 space-y-6 relative">
              {/* Close button (top-right inside menu) */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-6 text-2xl text-gray-300 hover:text-pink-400"
              >
                <FaTimes />
              </button>

              <a href="#expertise" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Expertise</a>
              <a href="#projects" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#process" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Process</a>
              <a href="#about" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="block hover:text-pink-400" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </header>

        {/* === rest of your code remains same === */}
      </div>
    </div>
  );
}
