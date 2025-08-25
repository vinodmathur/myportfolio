// App.jsx
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  FaFigma,
  FaSketch,
  FaHtml5,
  FaCss3Alt,
  FaBars,
} from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    /* your projects array as before */
  ];

  const feedbacks = [
    { name: "Subhan Raza", company: "Namrah Security Management", text: "Vinod transformed our app design! Clean, modern, and user-friendly." },
    { name: "Harmeek Kaur", company: "Azzunique Softwares", text: "Amazing experience working with Vinod. He really understands users." },
    { name: "Vikas Solanki", company: "Doomshell Softwares", text: "His designs gave our brand a fresh and professional identity." },
  ];

  const clientLogos = [
    { id: 1, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrUzFPk54hLe2ASbQAK1NFUMLcBP6izlzGw&s" },
    { id: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOT-CVAF6eviF89Iobd0Cee32DGXJubxsnrIVaqN3Wz08UnDEVZaInTrmYVEMxaGMGh4&usqp=CAU" },
    { id: 3, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlgCSHM3jZXcAw8nXbnWSO3gauKou9T9z9pCw-sMQHAkT9nDQCgGekmhgiEpxZeqBf5U&usqp=CAU" },
    { id: 4, logo: "https://play-lh.googleusercontent.com/p2v93Ycop_1x6hart9lbdqzhHN1wvx4tlRRhpQlI7mYQ_OcHbTYBbYUpdyFwYnggKg" },
  ];

  // automatically cycle through feedbacks
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentFeedback((prev) => (prev + 1) % feedbacks.length),
      4000
    );
    return () => clearInterval(interval);
  }, [feedbacks.length]);

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
            <nav className="hidden md:flex space-x-6">
              <a href="#expertise" className="hover:text-pink-400">
                Expertise
              </a>
              <a href="#projects" className="hover:text-pink-400">
                Projects
              </a>
              <a href="#process" className="hover:text-pink-400">
                Process
              </a>
              <a href="#about" className="hover:text-pink-400">
                About
              </a>
              <a href="#feedback" className="hover:text-pink-400">
                Feedback
              </a>
              <a href="#contact" className="hover:text-pink-400">
                Contact
              </a>
            </nav>
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-black/90 text-center py-4 space-y-4">
              {["#expertise","#projects","#process","#about","#feedback","#contact"].map((href, idx) => (
                <a key={idx} href={href} className="block hover:text-pink-400">
                  {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent relative z-10">
            I'm UI/UX Designer
          </h2>
          <img
            src="/vector1.png"
            alt="Floating Vector"
            className="mt-8 w-[600px] max-w-full animate-bounce-slow opacity-90"
          />
          <p className="mt-6 text-lg max-w-2xl text-gray-300 relative z-10">
            Creative UI/UX Designer with a deep passion for designing seamless digital experiences.<br />
            Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS.<br />
            I blend creativity and functionality to craft designs that delight users and drive results.
          </p>
          <div className="mt-6 flex gap-4 relative z-10">
            <a
              href="/resume.pdf"
              download
              className="bg-pink-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-pink-600"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-600"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Sections: Expertise, Projects, Process, About */}
        {/* Unchanged your previous content structure */}

        {/* Feedback Section */}
        <section id="feedback" className="py-20 text-center bg-black/40">
          <h3 className="text-3xl font-bold mb-10">What Clients Say</h3>
          <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-2xl shadow-lg transition-all duration-500">
            <p className="text-lg italic text-gray-200">"{feedbacks[currentFeedback].text}"</p>
            <h4 className="mt-4 font-semibold text-pink-400">
              {feedbacks[currentFeedback].name}
            </h4>
            <p className="text-gray-400 text-sm">
              {feedbacks[currentFeedback].company}
            </p>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-10 bg-black/30">
          <h3 className="text-2xl font-bold text-center mb-6">
            Previous Clients
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clientLogos.map((c) => (
              <img
                key={c.id}
                src={c.logo}
                alt="Client Logo"
                className="h-12 opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="py-10 text-center bg-black/50">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>
            Email:{" "}
            <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">
              Vikymathur532@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-pink-400">+91 7976680554</span>
          </p>
          <p className="mt-6 text-gray-400 text-sm">
            © 2025 Vinod Mathur. All Rights Reserved.
          </p>
        </footer>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
