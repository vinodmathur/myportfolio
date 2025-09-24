// App.jsx
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    { id: 1, title: "Hardin Astro App", img: "https://s3.envato.com/files/477047008/Preview%20Image/01_Preview-image.jpg", link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1" },
    { id: 2, title: "Bankfipay App", img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7e88ce7df85582b3f709b9baebbb5996b62b07c8", link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1" },
    { id: 3, title: "Azzunique Payout App", img: "https://sketchelements.com/wp-content/uploads/2019/10/payment-app-ui-kit.png", link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1" },
    { id: 4, title: "Shoponnow Ecommerce App", img: "https://miro.medium.com/v2/resize:fit:1400/1*R8rYPkAAiyRJxb17CpxSaA.jpeg", link: "https://xd.adobe.com/view/6b8ba7b5-2e25-413c-85e3-1692df1b6f0c-3ed8/" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7e74217f1a9cf874a68e5b45b82dea719b3e217d", link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1" },
    { id: 6, title: "Jadoo Travel", img: "https://themewagon.com/wp-content/uploads/2021/10/jadoo-1.png", link: "https://xd.adobe.com/view/9952f5f2-63fa-4d0e-af7a-72d784645d59-cc01/" },
    { id: 7, title: "TextoNow Chating App", img: "https://s3-alpha.figma.com/hub/file/2240472529501579047/9b7aa608-115f-4eb2-bef3-11f67c905b13-cover.png", link: "https://xd.adobe.com/view/dc3a1842-d021-4d17-93ca-f4a4ea3b17e3-8969/" },
    { id: 8, title: "EduLearn Online Platform", img: "https://s3-alpha.figma.com/hub/file/2191975162694823278/2037e40c-c161-4eef-9d81-3711ee726f65-cover.png", link: "#" },
    { id: 9, title: "ShopEase E-commerce App", img: "https://www.figma.com/community/resource/a2938e41-93fa-4836-a3ee-b3c3dc5f861a/thumbnail", link: "#" },
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

  // Auto-scroll feedbacks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-black">

      {/* Enhanced Particle Background */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } },
          },
          particles: {
            color: { value: ["#ff0080", "#7928ca", "#ff00ff", "#00ffff"] },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.2, direction: "none", outModes: { default: "bounce" } },
            number: { value: 100, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            shape: { type: ["circle", "triangle", "star"] },
            size: { value: { min: 1, max: 4 } },
            rotate: { value: 0, direction: "random", animation: { enable: true, speed: 5 } },
          },
          detectRetina: true,
        }}
      />

      <div className="min-h-screen bg-black/50 backdrop-blur-sm">

        {/* Header */}
        <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wider">Vinod Mathur</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#expertise" className="hover:text-pink-400 transition-colors">Expertise</a>
              <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
              <a href="#process" className="hover:text-pink-400 transition-colors">Process</a>
              <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
              <a href="#feedback" className="hover:text-pink-400 transition-colors">Feedback</a>
              <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
            </nav>
            <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-black/90 text-center py-4 space-y-4">
              {["expertise","projects","process","about","feedback","contact"].map((link) => (
                <a key={link} href={`#${link}`} className="block hover:text-pink-400">{link.charAt(0).toUpperCase()+link.slice(1)}</a>
              ))}
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent relative z-10">
            UI/UX Designer
          </h2>
          <img src="/vector1.png" alt="Floating Vector" className="mt-8 w-[600px] max-w-full animate-bounce-slow opacity-90 relative z-10" />
          <p className="mt-6 text-lg max-w-2xl text-gray-300 relative z-10 leading-relaxed">
            Creative UI/UX Designer with a passion for designing seamless digital experiences.  
            Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS.  
            I blend creativity and functionality to craft designs that delight users.
          </p>
          <div className="mt-6 flex gap-4 relative z-10">
            <a href="/resume.pdf" download className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
              Download Resume
            </a>
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
              Contact Me
            </a>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">My Expertise</h3>
          <p className="max-w-3xl mx-auto mb-10 text-gray-300 text-lg md:text-xl">
            I craft intuitive and visually engaging interfaces across multiple design platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-6xl">
            <FaFigma className="hover:text-pink-400 transition" />
            <SiAdobexd className="hover:text-pink-400 transition" />
            <SiAdobephotoshop className="hover:text-pink-400 transition" />
            <FaSketch className="hover:text-pink-400 transition" />
            <SiCanva className="hover:text-pink-400 transition" />
            <FaHtml5 className="hover:text-pink-400 transition" />
            <FaCss3Alt className="hover:text-pink-400 transition" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Project Showcase</h3>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
            {projects.slice(0, showMore ? projects.length : 5).map((p) => (
              <div key={p.id} className="bg-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_#ff00ff] transform hover:scale-105 transition-all duration-300">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover rounded-t-3xl" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          {!showMore && (
            <button onClick={() => setShowMore(true)} className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
              View More
            </button>
          )}
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">My Work Process</h3>
          <p className="max-w-3xl mx-auto mb-12 text-gray-300 text-lg md:text-xl">
            Structured workflow ensuring user-centered, functional & visually compelling designs.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
              <h4 className="text-xl font-semibold mb-3">1. Research & Discovery</h4>
              <p className="text-gray-300">Understand business goals, target users, and competitors.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
              <h4 className="text-xl font-semibold mb-3">2. Wireframing & Prototyping</h4>
              <p className="text-gray-300">Low to high-fidelity prototypes to map user flow and UI.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
              <h4 className="text-xl font-semibold mb-3">3. Design & Handoff</h4>
              <p className="text-gray-300">Final polished UI with developer-friendly assets.</p>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-20 text-center bg-black/40">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Client Feedback</h3>
          <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-3xl shadow-lg hover:shadow-pink-500/30 transition">
            <p className="text-gray-300 text-lg mb-4">"{feedbacks[currentFeedback].text}"</p>
            <h4 className="text-xl font-semibold">{feedbacks[currentFeedback].name}</h4>
            <p className="text-gray-400">{feedbacks[currentFeedback].company}</p>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">My Clients</h3>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {clientLogos.map((logo) => (
              <img key={logo.id} src={logo.logo} alt="Client Logo" className="w-32 h-32 object-contain filter grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center bg-black/30">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Get In Touch</h3>
          <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or projects.</p>
          <a href="mailto:vinod@example.com" className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
            Email Me
          </a>
        </section>

      </div>

      {/* Floating animation */}
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
