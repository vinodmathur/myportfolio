import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [showMore, setShowMore] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    { id: 1, title: "Fashion Delivery App", img: "/images/project1.png", desc: "A 10-min hyperlocal fashion delivery app." },
    { id: 2, title: "DeFi Dashboard", img: "/images/project2.png", desc: "Crypto portfolio tracker with AI insights." },
    { id: 3, title: "E-learning Platform", img: "/images/project3.png", desc: "Interactive courses with gamified UI." },
    { id: 4, title: "Travel Planner", img: "/images/project4.png", desc: "Plan trips with AI suggestions & maps." },
    { id: 5, title: "ShopOn Website", img: "/images/project5.png", desc: "Landing page for hyperlocal delivery startup." },
    { id: 6, title: "NFT Marketplace", img: "/images/project6.png", desc: "Buy, sell, and mint NFTs seamlessly." },
    { id: 7, title: "UI Kit Library", img: "/images/project7.png", desc: "Reusable UI components & design system." },
    { id: 8, title: "Portfolio Website", img: "/images/project8.png", desc: "Minimalistic portfolio built with React." },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: { events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#888", distance: 120 },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            size: { value: 3 },
          },
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg shadow-lg z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Vinod Mathur</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#process" className="hover:text-blue-400">Process</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20">
        <img
          src="/vector1.png"
          alt="Floating vector"
          className="absolute top-20 right-10 w-40 animate-bounce"
        />
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          UI/UX Designer & Frontend Developer
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          I specialize in crafting modern, responsive, and user-centered designs.  
          With 5+ years in DeFi & Web3 plus a strong background in app design,  
          I blend creativity with strategy to deliver seamless digital experiences.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          📄 Download Resume
        </a>
      </section>

      {/* Expertise */}
      <section className="px-8 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg font-medium">
          <div>🎨 Figma</div>
          <div>🖌️ Adobe XD</div>
          <div>🖼️ Photoshop</div>
          <div>📐 Canva</div>
          <div>⚛️ React</div>
          <div>🌐 HTML/CSS/JS</div>
          <div>🔥 Firebase</div>
          <div>🔗 Web3 / DeFi</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-16 bg-gradient-to-b from-gray-900 to-black text-center">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(showMore ? projects : projects.slice(0, 4)).map((proj) => (
            <div key={proj.id} className="bg-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-md">
              <img src={proj.img} alt={proj.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-semibold">{proj.title}</h4>
              <p className="text-gray-300 text-sm mt-2">{proj.desc}</p>
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm hover:scale-105 transition"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition"
          >
            View More
          </button>
        )}
      </section>

      {/* Process of Work */}
      <section id="process" className="px-8 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">My UI/UX Process</h3>
        <div className="max-w-4xl mx-auto text-gray-300 space-y-6 text-lg">
          <p>✔️ <b>Research & Discovery</b> – Understand user needs, business goals, and competitors.</p>
          <p>✔️ <b>Wireframing</b> – Quick low-fidelity wireframes to visualize layout & flow.</p>
          <p>✔️ <b>Prototyping</b> – Interactive prototypes in Figma for real user testing.</p>
          <p>✔️ <b>Visual Design</b> – Apply brand guidelines, typography, and modern UI trends.</p>
          <p>✔️ <b>Usability Testing</b> – Iterating designs based on feedback to refine experience.</p>
          <p>✔️ <b>Development Handoff</b> – Provide pixel-perfect assets and documentation for devs.</p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="px-8 py-16 bg-gradient-to-b from-black to-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <img
          src="/images/profile.jpeg"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg mb-6"
        />
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          I’m Vinod Mathur, a passionate UI/UX Designer and Frontend Developer with 5+ years of experience in design and Web3.  
          I thrive in blending aesthetics with functionality, ensuring every product I work on is not only visually appealing but also user-friendly.  
          My persistence, adaptability, and creativity help me deliver unique digital solutions.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">Contact Me</h3>
        <p>Email: <a href="mailto:vinod@example.com" className="text-blue-400">vinod@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/vinodmathur" className="text-blue-400">linkedin.com/in/vinodmathur</a></p>
        <p>Twitter: <a href="https://twitter.com/vinod" className="text-blue-400">@vinod</a></p>
      </section>
    </div>
  );
}

export default App;
