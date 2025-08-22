import React from "react";
import Typed from "react-typed";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// Expertise Tools Logos
import figmaLogo from "./assets/figma.png";
import adobeLogo from "./assets/adobe.png";
import sketchLogo from "./assets/sketch.png";
import illustratorLogo from "./assets/illustrator.png";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-lg z-50">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <nav className="space-x-6">
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#tools" className="hover:text-yellow-400">Expertise</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-screen px-4">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-yellow-400">Vinod Mathur</span>
        </h2>
        <Typed
          strings={["UI/UX Designer", "Frontend Developer", "DeFi Enthusiast"]}
          typeSpeed={70}
          backSpeed={50}
          loop
          className="text-2xl sm:text-4xl text-gray-300"
        />
        <ReactTyped
  strings={["Web Developer", "UI/UX Designer", "Freelancer"]}
  typeSpeed={50}
  backSpeed={30}
  loop
/>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Expertise Tools Auto Scroll */}
      <section id="tools" className="py-12 bg-gray-800 overflow-hidden relative">
        <h3 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Expertise Tools
        </h3>
        <div className="flex space-x-12 animate-marquee">
          {[figmaLogo, adobeLogo, sketchLogo, illustratorLogo].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="tool logo"
              className="w-24 h-24 object-contain"
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-900 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-yellow-400">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 p-6 shadow-lg hover:scale-105 transform transition"
            >
              <h4 className="text-xl font-semibold mb-2">Project {idx + 1}</h4>
              <p className="text-gray-300">This is a demo description for Project {idx + 1}.</p>
              <a href="#" className="text-yellow-400 hover:underline mt-3 block">
                View Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with About Me & Contact */}
      <footer id="contact" className="bg-black bg-opacity-70 text-center py-10 mt-auto">
        {/* About Me */}
        <div className="max-w-3xl mx-auto mb-6">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">About Me</h3>
          <p className="text-gray-300">
            I am a passionate UI/UX Designer and Frontend Developer with experience
            in DeFi and Web3 projects. I love building user-friendly interfaces and
            solving real-world problems.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://github.com/vinodmathur" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-yellow-400" />
          </a>
          <a href="https://linkedin.com/in/vinodmathur" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-yellow-400" />
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            <FaWhatsapp className="hover:text-green-400" />
          </a>
          <a href="mailto:vinodmathur@gmail.com">
            <FaEnvelope className="hover:text-red-400" />
          </a>
        </div>
        <p className="text-gray-400 mt-4 text-sm">© 2025 Vinod Mathur. All Rights Reserved.</p>
      </footer>

      {/* Auto Scroll Animation CSS */}
      <style>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

export default App;
