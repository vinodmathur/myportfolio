// App.jsx
import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";
import { Typed } from "react-typed";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    {
      id: 1,
      title: "Hardin Astro App",
      img: "https://s.tmimgcdn.com/scr/1200x627/415900/astroscope-astrology-mobile-app-figma-template_415907-original.png",
      link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1",
    },
    {
      id: 2,
      title: "Bankfipay App",
      img: "https://s3-alpha.figma.com/hub/file/5497869694/4fa7e9eb-5b21-434e-9e8d-4562cac10c87-cover.png",
      link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1",
    },
    {
      id: 3,
      title: "Azzunique Payout App",
      img: "https://www.figma.com/community/resource/370d4109-0547-46a2-be7a-8ba228f860a3/thumbnail",
      link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1",
    },
    {
      id: 4,
      title: "Shoponnow App",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dBMh2FkO3nGdiK02bLyq9EVWYaY5n9czbQ&s",
      link: "https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258",
    },
    {
      id: 5,
      title: "Eatfit Food Delivery Partner App",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6eRByyrum7NXdhH-RCfkZ6YwZY3oJBoGtQ&s",
      link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1",
    },
    { id: 6, title: "TravelMate App", img: "https://via.placeholder.com/400x300.png?text=TravelMate+App", link: "#" },
    { id: 7, title: "FitBuddy Health App", img: "https://via.placeholder.com/400x300.png?text=FitBuddy+App", link: "#" },
    { id: 8, title: "EduLearn Platform", img: "https://via.placeholder.com/400x300.png?text=EduLearn+Platform", link: "#" },
    { id: 9, title: "ShopEase App", img: "https://via.placeholder.com/400x300.png?text=ShopEase+App", link: "#" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden scroll-smooth">
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
            number: { value: 90 },
            opacity: { value: 0.6 },
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
              <a href="#expertise" className="hover:text-pink-400">Expertise</a>
              <a href="#projects" className="hover:text-pink-400">Projects</a>
              <a href="#process" className="hover:text-pink-400">Process</a>
              <a href="#about" className="hover:text-pink-400">About</a>
              <a href="#contact" className="hover:text-pink-400">Contact</a>
            </nav>
            <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-black/90 text-center py-4 space-y-4 animate-fadeIn">
              <a href="#expertise" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400">Expertise</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400">Projects</a>
              <a href="#process" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400">Process</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400">Contact</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent relative z-10">
            <Typed
              strings={[
                "I'm a UI/UX Designer",
                "I Design Beautiful Interfaces",
                "I Create Human-Centered Experiences",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <img
            src="/vector1.png"
            alt="Floating Vector"
            className="mt-8 w-[600px] max-w-full animate-bounce-slow opacity-90"
          />

          <p className="mt-6 text-lg max-w-3xl text-gray-300 relative z-10">
            I’m a passionate UI/UX Designer who thrives on crafting meaningful digital experiences.  
            With expertise in design thinking, usability testing, and visual design, I blend **aesthetics with functionality**.  
            My goal is to deliver intuitive, accessible, and impactful solutions for real-world users.
          </p>

          <div className="mt-6 flex gap-4 relative z-10">
            <a href="/resume.pdf" download className="bg-pink-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-pink-600">
              Download Resume
            </a>
            <a href="#contact" className="bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-600">
              Contact Me
            </a>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl font-bold mb-10">My Expertise</h3>
          <p className="max-w-3xl mx-auto mb-10 text-gray-300">
            Skilled in modern design tools and technologies, I bring ideas to life with clarity and precision.  
            My expertise spans across mobile app design, web platforms, and brand-driven UI systems.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-6xl">
            <FaFigma className="hover:text-pink-400" />
            <SiAdobexd className="hover:text-pink-400" />
            <SiAdobephotoshop className="hover:text-pink-400" />
            <FaSketch className="hover:text-pink-400" />
            <SiCanva className="hover:text-pink-400" />
            <FaHtml5 className="hover:text-pink-400" />
            <FaCss3Alt className="hover:text-pink-400" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-12">Project Showcase</h3>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
            {projects.slice(0, showMore ? projects.length : 5).map((p) => (
              <div key={p.id} className="bg-white/10 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover rounded-t-3xl" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-10 bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-600 transition"
            >
              View More
            </button>
          )}
        </section>

        {/* Process */}
        <section id="process" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl font-bold mb-10">My Work Process</h3>
          <p className="max-w-3xl mx-auto mb-12 text-gray-300">
            My approach is rooted in **Design Thinking** and **User-Centered Design**.  
            From discovery to final delivery, every step is focused on **usability, creativity, and impact**.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">1. Research & Discovery</h4>
              <p className="text-gray-300">I analyze user needs, study competitors, and align design goals with business strategy.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">2. Wireframing & Prototyping</h4>
              <p className="text-gray-300">Sketching flows, wireframing layouts, and building interactive prototypes for testing & feedback.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">3. Visual Design & Testing</h4>
              <p className="text-gray-300">Refining with modern UI trends, ensuring accessibility, and conducting usability tests for a polished product.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-black/30 text-center">
          <img src="/images/profile.jpeg" alt="Profile" className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg" />
          <h3 className="text-3xl font-bold mt-6">About Me</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Hi, I’m <span className="text-pink-400 font-semibold">Vinod Mathur</span> 👋 — a UI/UX Designer passionate about creating digital products that solve problems and spark delight.  
            With over 2 years in the design industry, I’ve worked on fintech apps, e-commerce platforms, and creative SaaS tools.  
            My philosophy: **design with empathy, innovate with purpose, and deliver with precision.**
          </p>
        </section>

        {/* Contact */}
        <footer id="contact" className="py-10 text-center bg-black/50">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">Vikymathur532@gmail.com</a></p>
          <p>Phone: <span className="text-pink-400">+91 7976680554</span></p>
          <p className="mt-6 text-gray-400 text-sm">© 2025 Vinod Mathur. All Rights Reserved.</p>
        </footer>
      </div>

      {/* Floating + Fade animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
