// App.jsx
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

// ========================== PARTICLE BACKGROUND CONFIG ======================
const particleOptions = {
  background: {
    color: { value: "#0f172a" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#38bdf8" },
    links: { color: "#38bdf8", distance: 120, enable: true, opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
    number: { value: 70, density: { enable: true, area: 800 } },
    opacity: { value: { min: 0.3, max: 0.7 } },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } },
  },
  detectRetina: true,
};

// ========================== HERO CARD ======================
const HeroCard = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, delay: 0.6 }}
      className="relative flex flex-col items-center"
    >
      {/* Rope */}
      <div className="w-1 h-16 bg-gray-300"></div>

      {/* Card */}
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-2xl rounded-xl px-6 py-4 text-center w-64 border"
        >
          <h1 className="text-lg font-bold text-gray-800">Vinod Mathur</h1>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
          <p className="text-sm text-gray-600">Product Designer</p>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

// ========================== NAVBAR ======================
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md text-white z-50">
      <h2 className="font-bold text-xl">Vinod Portfolio</h2>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#expertise" className="hover:text-cyan-400">Expertise</a></li>
        <li><a href="#clients" className="hover:text-cyan-400">Clients</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </nav>
  );
};

// ========================== ABOUT SECTION ======================
const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-gray-300 leading-relaxed"
      >
        I am a passionate UI/UX & Product Designer with 5+ years of experience in crafting
        user-centric digital solutions. I focus on design systems, accessibility, and seamless
        user flows that drive results.
      </motion.p>
    </section>
  );
};

// ========================== PROJECTS SECTION ======================
const Projects = () => {
  const list = [
    { title: "E-commerce App", desc: "Fashion-focused 10-min delivery experience." },
    { title: "Crypto Dashboard", desc: "DeFi analytics & wallet management UI." },
    { title: "Portfolio Website", desc: "Personal responsive professional website." },
  ];
  return (
    <section id="projects" className="min-h-screen px-8 py-20 bg-white">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {list.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl shadow-lg border hover:shadow-2xl bg-gray-50"
          >
            <h3 className="font-semibold text-xl mb-2">{proj.title}</h3>
            <p className="text-gray-600">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ========================== EXPERTISE SECTION ======================
const Expertise = () => {
  const skills = ["UI/UX Design", "Product Design", "Wireframing", "Prototyping", "Figma", "Framer"];
  return (
    <section id="expertise" className="min-h-screen bg-gray-100 px-8 py-20">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Expertise</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-lg shadow-md bg-white text-gray-700 font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ========================== CLIENTS / FEEDBACK ======================
const Clients = () => {
  const feedbacks = [
    { name: "Alice", text: "Vinod’s design made our app so intuitive!" },
    { name: "Rahul", text: "Great attention to detail and user needs." },
    { name: "Sophia", text: "A professional designer who delivers on time." },
  ];
  return (
    <section id="clients" className="min-h-screen px-8 py-20 bg-gray-900 text-white">
      <h2 className="text-center text-4xl font-bold mb-12">What Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {feedbacks.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <p className="italic text-gray-300 mb-4">"{f.text}"</p>
            <h4 className="font-semibold">{f.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ========================== CONTACT ======================
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-8 py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-8">Let’s collaborate and bring your ideas to life.</p>
      <a
        href="mailto:vinodmathur@example.com"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-lg transition"
      >
        Say Hello
      </a>
    </section>
  );
};

// ========================== FOOTER ======================
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Vinod Mathur. All rights reserved.</p>
    </footer>
  );
};

// ========================== MAIN APP ======================
export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="relative min-h-screen font-sans">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <HeroCard />
      </section>

      {/* Sections */}
      <About />
      <Projects />
      <Expertise />
      <Clients />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
