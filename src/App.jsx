// App.jsx
import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
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
    // Demo extra projects
    {
      id: 6,
      title: "TravelMate App",
      img: "https://via.placeholder.com/400x300.png?text=TravelMate+App",
      link: "#",
    },
    {
      id: 7,
      title: "FitBuddy Health App",
      img: "https://via.placeholder.com/400x300.png?text=FitBuddy+App",
      link: "#",
    },
    {
      id: 8,
      title: "EduLearn Online Platform",
      img: "https://via.placeholder.com/400x300.png?text=EduLearn+Platform",
      link: "#",
    },
    {
      id: 9,
      title: "ShopEase E-commerce App",
      img: "https://via.placeholder.com/400x300.png?text=ShopEase+App",
      link: "#",
    },
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
            collisions: { enable: false },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
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
            {/* Mobile Menu Icon */}
            <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </button>
          </div>
          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 text-center py-4 space-y-4">
              <a href="#expertise" className="block hover:text-pink-400">Expertise</a>
              <a href="#projects" className="block hover:text-pink-400">Projects</a>
              <a href="#process" className="block hover:text-pink-400">Process</a>
              <a href="#about" className="block hover:text-pink-400">About</a>
              <a href="#contact" className="block hover:text-pink-400">Contact</a>
            </div>
          )}
        </header>

        {/* Full-width Vector Image */}
        <div className="relative w-full">
          <img
            src="/vector-full.png"
            alt="Full Width Vector"
            className="w-full h-56 md:h-80 object-cover opacity-90"
          />
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
          {/* Floating vector image (centered, responsive, behind text) */}
          <img
            src="/vector1.png"
            alt="Floating Vector"
            className="absolute top-1/1 left-1/1 -translate-x-1/1 -translate-y-1/1 w-[600px] h-[300px] md:w-[200px] md:h-[500px] sm:w-[500px] sm:h-[500px] animate-bounce-slow opacity-100 -z-10"
          />
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent relative z-10">
            UI/UX Designer
          </h2>
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

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl font-bold mb-10">My Expertise</h3>
          <p className="max-w-3xl mx-auto mb-10 text-gray-300">
            Over the years, I’ve honed my skills across multiple design platforms and tools.  
            My expertise lies in creating intuitive, user-friendly, and visually engaging interfaces 
            for both mobile and web applications.
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

        {/* Projects Section */}
        <section id="projects" className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-12">Project Showcase</h3>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
            {projects.slice(0, showMore ? projects.length : 5).map((p) => (
              <div key={p.id} className="bg-white/10 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_#ff00ff] transition-all duration-300">
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

        {/* Work Process Section */}
        <section id="process" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl font-bold mb-10">My Work Process</h3>
          <p className="max-w-3xl mx-auto mb-12 text-gray-300">
            I follow a structured design workflow that ensures every project is user-centered, functional, and visually compelling.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">1. Research & Discovery</h4>
              <p className="text-gray-300">
                Understand business goals, target users, and competitors to set a strong foundation.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">2. Wireframing & Prototyping</h4>
              <p className="text-gray-300">
                Create low to high-fidelity wireframes and interactive prototypes to map user journeys.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">3. Visual Design & Testing</h4>
              <p className="text-gray-300">
                Apply modern UI trends, ensure accessibility, and conduct usability testing for perfection.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/30 text-center">
          <img src="/images/profile.jpeg" alt="Profile" className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg" />
          <h3 className="text-3xl font-bold mt-6">About Me</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            I’m Vinod Mathur, a passionate UI/UX Designer who loves turning complex problems into elegant design solutions.  
            With years of experience in crafting intuitive digital interfaces, I focus on creating meaningful user experiences 
            that blend usability, aesthetics, and innovation.  
          </p>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="py-10 text-center bg-black/50">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">Vikymathur532@gmail.com</a></p>
          <p>Phone: <span className="text-pink-400">+91 7976680554</span></p>
          <p className="mt-6 text-gray-400 text-sm">© 2025 Vinod Mathur. All Rights Reserved.</p>
        </footer>
      </div>

      {/* Custom floating animation */}
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
