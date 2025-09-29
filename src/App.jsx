// App.jsx
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const revealRefs = useRef([]);
  revealRefs.current = [];

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

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFeedback((p) => (p + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(id);
  }, [feedbacks.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particleOptions = {
    background: { color: "#071025" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 3 },
      },
    },
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa"] },
      shape: { type: ["circle", "triangle"] },
      opacity: {
        value: 0.65,
        random: { enable: true, minimumValue: 0.3 },
        animation: { enable: true, speed: 0.8, minimumValue: 0.2 },
      },
      size: { value: { min: 1, max: 4 }, random: true },
      links: {
        enable: true,
        distance: 140,
        color: "#9ca3af",
        opacity: 0.08,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.9,
        direction: "none",
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      <Particles className="absolute inset-0 -z-20" init={particlesInit} options={particleOptions} />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-3" aria-label="Vinod Mathur home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="font-bold tracking-tight text-sm">VM</span>
            </div>
            <span className="text-lg font-semibold">Vinod Mathur</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
            <a href="#expertise" className="hover:text-pink-400 transition">Expertise</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#process" className="hover:text-pink-400 transition">Process</a>
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#contact" className="hover:text-pink-400 transition neon-btn">Contact</a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Vinod Mathur</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-6">UI/UX Designer & DeFi Community Manager with 5+ years of experience in crafting digital experiences.</p>
        <a href="#contact" className="neon-btn px-8 py-3 rounded-full font-bold text-lg">Let’s Work Together</a>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[FaFigma, FaSketch, FaHtml5, FaCss3Alt, SiAdobexd, SiAdobephotoshop, SiCanva].map((Icon, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 border border-gray-700 rounded-lg hover:border-pink-400 transition neon-btn">
              <Icon size={40} />
              <span className="text-sm">Skill {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group border border-gray-700 rounded-lg overflow-hidden hover:border-pink-400 transition neon-btn">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
              <div className="p-4 text-center font-semibold">{project.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Feedback Carousel */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Client Feedback</h2>
        <div className="p-8 border border-gray-700 rounded-lg neon-btn transition">
          <p className="text-lg">"{feedbacks[currentFeedback].text}"</p>
          <p className="mt-4 font-semibold">- {feedbacks[currentFeedback].name}, {feedbacks[currentFeedback].company}</p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Clients</h2>
        <div className="flex justify-center flex-wrap gap-10">
          {clientLogos.map((client) => (
            <img key={client.id} src={client.logo} alt={`Client ${client.id}`} className="h-16 object-contain" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-700 neon-btn">
        <p>&copy; 2025 Vinod Mathur. All Rights Reserved.</p>
      </footer>

      {/* Neon Button CSS */}
      <style>{`
        .neon-btn {
          display: inline-block;
          position: relative;
          color: #fff;
          border-radius: 50px;
          border: 2px solid transparent;
          padding: 0.75rem 2rem;
          font-weight: bold;
          transition: 0.3s ease-in-out;
          background: black;
        }
        .neon-btn::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 60px;
          background: linear-gradient(90deg, #ff00ff, #7928ca, #00ffff);
          z-index: -1;
          animation: neon-border 3s linear infinite;
          background-size: 300% 300%;
        }
        .neon-btn:hover {
          color: #ff00ff;
          box-shadow: 0 0 20px #ff00ff, 0 0 40px #7928ca, 0 0 60px #00ffff;
        }
        @keyframes neon-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
