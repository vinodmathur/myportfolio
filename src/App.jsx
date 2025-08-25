// App.jsx
import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars, FaLinkedin, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

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
    { id: 6, title: "TravelMate App", img: "https://s3-alpha.figma.com/hub/file/5551975764/45488a29-99f3-4c64-9549-629255337435-cover.png", link: "#" },
    { id: 7, title: "FitBuddy Health App", img: "https://cdn.dribbble.com/userupload/11887446/file/original-f34f4fd38dfe7aa5e9397dcafd7e536c.png?resize=400x300", link: "#" },
    { id: 8, title: "EduLearn Online Platform", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNC2pw_5af9rM78056DxA5dXf00n7QzY2mw&s", link: "#" },
    { id: 9, title: "ShopEase E-commerce App", img: "https://www.figma.com/community/resource/a2938e41-93fa-4836-a3ee-b3c3dc5f861a/thumbnail", link: "#" },
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
              <a href="#clients" className="hover:text-pink-400">Clients</a>
              <a href="#contact" className="hover:text-pink-400">Contact</a>
            </nav>
            {/* Mobile Menu */}
            <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-black/90 text-center py-4 space-y-4">
              <a href="#expertise" className="block hover:text-pink-400">Expertise</a>
              <a href="#projects" className="block hover:text-pink-400">Projects</a>
              <a href="#process" className="block hover:text-pink-400">Process</a>
              <a href="#about" className="block hover:text-pink-400">About</a>
              <a href="#clients" className="block hover:text-pink-400">Clients</a>
              <a href="#contact" className="block hover:text-pink-400">Contact</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent relative z-10">
            I'm UI/UX Designer
          </h2>
          <img src="/vector1.png" alt="Floating Vector" className="mt-8 w-[600px] max-w-full animate-bounce-slow opacity-90" />
          <p className="mt-6 text-lg max-w-2xl text-gray-300 relative z-10">
            Creative UI/UX Designer with a deep passion for designing seamless digital experiences.  
            Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS.  
            I blend creativity and functionality to craft designs that delight users and drive results.
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

        {/* Expertise, Projects, Process, About sections stay unchanged */}

        {/* Clients Feedback Section */}
        <section id="clients" className="py-16 bg-black/40 text-center">
          <h3 className="text-3xl font-bold mb-10">What Clients Say</h3>
          <div className="overflow-hidden relative w-full max-w-4xl mx-auto">
            <div className="animate-scroll flex space-x-8">
              <div className="min-w-[300px] bg-white/10 p-6 rounded-xl shadow-md">
                <p className="italic">"Vinod did an amazing job! Very creative and professional UI/UX design."</p>
                <h4 className="mt-4 font-semibold">— Rahul Sharma, Startup Founder</h4>
              </div>
              <div className="min-w-[300px] bg-white/10 p-6 rounded-xl shadow-md">
                <p className="italic">"Delivered the project on time with excellent communication."</p>
                <h4 className="mt-4 font-semibold">— Priya Kapoor, Product Manager</h4>
              </div>
              <div className="min-w-[300px] bg-white/10 p-6 rounded-xl shadow-md">
                <p className="italic">"Very innovative design thinking. Will definitely work again!"</p>
                <h4 className="mt-4 font-semibold">— Ankit Verma, CEO</h4>
              </div>
            </div>
          </div>
          {/* Client Logos */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 opacity-80">
            <img src="/logos/google.png" alt="Google" className="h-10" />
            <img src="/logos/microsoft.png" alt="Microsoft" className="h-10" />
            <img src="/logos/adobe.png" alt="Adobe" className="h-10" />
            <img src="/logos/startup.png" alt="Startup" className="h-10" />
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="py-10 text-center bg-black/50">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">Vikymathur532@gmail.com</a></p>
          <p>Phone: <span className="text-pink-400">+91 7976680554</span></p>
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 text-pink-400 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-pink-600 transition" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-600 transition" /></a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer"><FaBehance className="hover:text-pink-600 transition" /></a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><FaDribbble className="hover:text-pink-600 transition" /></a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">© 2025 Vinod Mathur. All Rights Reserved.</p>
        </footer>
      </div>

      {/* Floating + Scroll Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow { animation: float 6s ease-in-out infinite; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
