import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaAdobe, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { SiCanva, SiAdobexd, SiPhotoshop } from "react-icons/si";

const App = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    { title: "E-Commerce Website", desc: "A full-featured shopping platform with cart and payment gateway.", img: "/images/project1.jpg" },
    { title: "Portfolio Website", desc: "A personal portfolio showcasing skills, work, and resume.", img: "/images/project2.jpg" },
    { title: "Mobile App UI", desc: "Modern and responsive UI for a delivery app.", img: "/images/project3.jpg" },
    { title: "Dashboard Design", desc: "Analytics dashboard with charts and reports.", img: "/images/project4.jpg" },
    { title: "Travel Booking App", desc: "UI/UX for booking flights and hotels.", img: "/images/project5.jpg" },
    { title: "Finance App", desc: "User-friendly fintech app for transactions.", img: "/images/project6.jpg" },
    { title: "Blog Website", desc: "Minimal blog with CMS and markdown support.", img: "/images/project7.jpg" },
    { title: "Food Delivery App", desc: "Zepto-like hyperlocal delivery UI/UX.", img: "/images/project8.jpg" },
  ];

  const expertise = [
    { name: "React", icon: <FaReact size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "JavaScript", icon: <FaJs size={30} /> },
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "CSS", icon: <FaCss3Alt size={30} /> },
    { name: "Figma", icon: <FaFigma size={30} /> },
    { name: "Adobe XD", icon: <SiAdobexd size={30} /> },
    { name: "Photoshop", icon: <SiPhotoshop size={30} /> },
    { name: "Canva", icon: <SiCanva size={30} /> },
    { name: "Adobe Illustrator", icon: <FaAdobe size={30} /> },
  ];

  const workProcess = [
    { step: "Research & Discovery", desc: "Understanding client goals, users, and market trends." },
    { step: "Wireframing", desc: "Creating low-fidelity layouts to visualize structure and flow." },
    { step: "UI Design", desc: "Designing modern, aesthetic, and functional interfaces." },
    { step: "Prototyping", desc: "Building clickable prototypes to simulate user interactions." },
    { step: "Testing & Feedback", desc: "Gathering insights to refine designs for best user experience." },
    { step: "Final Delivery", desc: "Handing off optimized designs ready for development." },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0d0d0d" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#expertise" className="hover:text-blue-400">Expertise</a>
          <a href="#workprocess" className="hover:text-blue-400">Process</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <FaBars size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-black/90 rounded-lg shadow-lg flex flex-col space-y-4 p-6 md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
            <a href="#workprocess" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        <img src="/vector1.png" alt="Floating Vector" className="w-32 animate-bounce mb-6" />
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Vinod Mathur</h2>
        <p className="mt-4 max-w-2xl text-lg">
          A passionate <span className="text-blue-400">UI/UX Designer</span> and Frontend Developer with a strong focus on
          creating intuitive, user-friendly, and aesthetic digital products. I specialize in design systems,
          user research, and delivering experiences that delight users while meeting business goals.
        </p>
        <a href="/resume.pdf" download className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full">
          <FaDownload /> Download Resume
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <img src="/images/profile.jpeg" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg" />
        <p className="max-w-3xl mx-auto text-lg">
          With over 5 years in UI/UX design and frontend development, I craft designs that merge creativity with usability.  
          I thrive on solving design problems, simplifying complex workflows, and building engaging user journeys.
        </p>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 px-6 bg-black/40 text-center">
        <h3 className="text-3xl font-bold mb-6">My Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
          {expertise.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-4 bg-black/30 rounded-lg shadow hover:scale-105 transition">
              {item.icon}
              <p className="mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAllProjects ? projects : projects.slice(0, 4)).map((p, i) => (
            <div key={i} className="bg-black/40 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{p.title}</h4>
                <p className="text-sm mt-2">{p.desc}</p>
                <a href="https://figma.com" target="_blank" rel="noopener noreferrer"
                   className="mt-4 inline-block px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {!showAllProjects && (
          <button onClick={() => setShowAllProjects(true)} className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full">
            View More
          </button>
        )}
      </section>

      {/* Work Process */}
      <section id="workprocess" className="py-20 px-6 bg-black/40 text-center">
        <h3 className="text-3xl font-bold mb-10">My Work Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {workProcess.map((step, i) => (
            <div key={i} className="p-6 bg-black/30 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">{step.step}</h4>
              <p className="text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p>Email: <a href="mailto:vinod@example.com" className="text-blue-400">vinod@example.com</a></p>
        <p>Phone: +91-9876543210</p>
      </section>
    </div>
  );
};

export default App;
