import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f0f0f" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2 },
            number: { value: 70 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#expertise" className="hover:text-green-400">Expertise</a>
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#process" className="hover:text-green-400">Process</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Dropdown Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-80 px-6 py-4 space-y-4">
            <a href="#about" className="block hover:text-green-400">About</a>
            <a href="#expertise" className="block hover:text-green-400">Expertise</a>
            <a href="#projects" className="block hover:text-green-400">Projects</a>
            <a href="#process" className="block hover:text-green-400">Process</a>
            <a href="#contact" className="block hover:text-green-400">Contact</a>
          </div>
        )}
      </header>

      {/* Floating Vector */}
      <img
        src="/vector1.png"
        alt="Floating Vector"
        className="absolute top-20 right-10 w-40 animate-bounce"
      />

      {/* Hero Section */}
      <section className="pt-32 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold">Hi, I’m Vinod 👋</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          UI/UX Designer & Frontend Developer with expertise in creating intuitive,
          user-centered designs and delivering seamless digital experiences.  
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400"
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <img
          src="/images/profile.jpeg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-green-500"
        />
        <h3 className="text-3xl font-bold mt-6">About Me</h3>
        <p className="mt-4 text-gray-300 leading-relaxed">
          With over 5 years of experience in UI/UX design and frontend development, 
          I specialize in crafting human-centered designs that focus on both aesthetics 
          and functionality. My journey blends creativity, technical skills, 
          and a deep understanding of user psychology.
        </p>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center">My Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          {["Figma", "Adobe XD", "Photoshop", "Canva"].map((tool) => (
            <div key={tool} className="bg-black bg-opacity-50 rounded-lg p-6 shadow-md hover:scale-105 transition">
              <p className="font-semibold">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            { img: "/images/project1.png", title: "E-commerce App", desc: "A modern shopping app with intuitive UX and secure payments." },
            { img: "/images/project2.png", title: "Finance Dashboard", desc: "An analytics dashboard with real-time financial insights." },
            { img: "/images/project3.png", title: "Portfolio Website", desc: "A responsive personal portfolio with animations and clean UI." },
            { img: "/images/project4.png", title: "Food Delivery App", desc: "A hyperlocal delivery app with engaging user experience." },
          ].map((p, i) => (
            <div key={i} className="bg-black bg-opacity-50 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold">{p.title}</h4>
                <p className="mt-2 text-gray-300">{p.desc}</p>
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process of Work */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center">My Work Process</h3>
        <div className="mt-10 grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "Research", desc: "Understanding users, competitors, and business goals." },
            { step: "Wireframing", desc: "Structuring user flows and creating low-fidelity wireframes." },
            { step: "Design", desc: "Crafting high-fidelity UI designs with focus on usability." },
            { step: "Testing", desc: "Validating designs through usability testing & iteration." },
          ].map((p, i) => (
            <div key={i} className="bg-black bg-opacity-50 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold">{p.step}</h4>
              <p className="mt-2 text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black bg-opacity-60 py-20 text-center">
        <h3 className="text-3xl font-bold">Contact Me</h3>
        <p className="mt-4 text-gray-300">Let’s collaborate and create something amazing together.</p>
        <p className="mt-2">📧 vinod@example.com | 📞 +91-9876543210</p>
      </section>
    </div>
  );
}
