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

  const particlesInit = async (main) => { await loadFull(main); };

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
    const id = setInterval(() => setCurrentFeedback((p) => (p + 1) % feedbacks.length), 4000);
    return () => clearInterval(id);
  }, [feedbacks.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    revealRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const particleOptions = {
    background: { color: "#071025" },
    fpsLimit: 60,
    interactivity: { events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } }, modes: { repulse: { distance: 120, duration: 0.4 }, push: { quantity: 3 } } },
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa"] },
      shape: { type: ["circle", "triangle"] },
      opacity: { value: 0.65, random: { enable: true, minimumValue: 0.3 }, animation: { enable: true, speed: 0.8, minimumValue: 0.2 } },
      size: { value: { min: 1, max: 4 }, random: true },
      links: { enable: true, distance: 140, color: "#9ca3af", opacity: 0.08, width: 1 },
      move: { enable: true, speed: 0.9, direction: "none", outModes: { default: "out" } },
    },
    detectRetina: true,
  };

  useEffect(() => {
    const handleTab = (e) => { if (e.key === "Tab") document.documentElement.classList.add("user-is-tabbing"); };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      <Particles className="absolute inset-0 -z-20" init={particlesInit} options={particleOptions} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-3" aria-label="Vinod Mathur home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center text-xl font-bold">V</div>
            <span className="text-xl font-bold tracking-wide">Vinod Mathur</span>
          </a>
          <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          <nav className={`fixed top-0 right-0 w-2/3 h-full bg-[#071025] transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} md:relative md:translate-x-0 md:flex md:items-center md:gap-6`}>
            <ul className="flex flex-col md:flex-row md:gap-6 p-6 md:p-0">
              <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
              <li><a href="#clients" className="hover:text-pink-400 transition">Clients</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 reveal" ref={addToRefs}>Hi, I'm Vinod Mathur</h1>
        <p className="text-lg md:text-xl mb-8 reveal" ref={addToRefs}>I’m a UI/UX Designer and DeFi Community Manager building interactive, intuitive, and impactful digital experiences.</p>
        <div className="flex gap-4 reveal" ref={addToRefs}>
          <a href="#" className="neon-btn">Download Resume</a>
          <a href="#contact" className="neon-btn">Contact Me</a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 reveal" ref={addToRefs}>Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 reveal" ref={addToRefs}>
          <FaFigma size={40} className="text-pink-400" />
          <SiAdobexd size={40} className="text-purple-400" />
          <SiAdobephotoshop size={40} className="text-blue-400" />
          <FaSketch size={40} className="text-yellow-400" />
          <FaHtml5 size={40} className="text-orange-500" />
          <FaCss3Alt size={40} className="text-blue-500" />
          <SiCanva size={40} className="text-green-400" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 reveal" ref={addToRefs}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal" ref={addToRefs}>
          {projects.slice(0, showMore ? projects.length : 6).map((project) => (
            <div key={project.id} className="bg-[#020617] rounded-lg overflow-hidden shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-bold">{project.title}</h3>
                <a href={project.link} className="neon-btn text-sm">View Project</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center reveal" ref={addToRefs}>
          <button onClick={() => setShowMore(!showMore)} className="neon-btn">{showMore ? "View Less" : "View More Projects"}</button>
        </div>
      </section>

      {/* Feedback Carousel */}
      <section id="feedback" className="max-w-6xl mx-auto px-6 py-12 reveal" ref={addToRefs}>
        <h2 className="text-3xl font-bold mb-6">Client Feedback</h2>
        <div className="bg-[#020617] p-6 rounded-lg shadow-lg">
          <p className="mb-4">"{feedbacks[currentFeedback].text}"</p>
          <h4 className="font-bold">{feedbacks[currentFeedback].name}</h4>
          <span className="text-sm">{feedbacks[currentFeedback].company}</span>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="max-w-6xl mx-auto px-6 py-12 reveal" ref={addToRefs}>
        <h2 className="text-3xl font-bold mb-6">Clients</h2>
        <div className="flex gap-6 flex-wrap">
          {clientLogos.map((c) => (
            <img key={c.id} src={c.logo} alt="Client Logo" className="h-16 object-contain" />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12 reveal" ref={addToRefs}>
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" className="p-3 rounded bg-[#020617] border border-gray-700" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-[#020617] border border-gray-700" />
          <textarea placeholder="Message" className="p-3 rounded bg-[#020617] border border-gray-700 md:col-span-2" />
          <button type="submit" className="neon-btn md:col-span-2">Send Message</button>
        </form>
      </section>

      {/* Neon Button Styles */}
      <style>{`
        .neon-btn {
          position: relative;
          display: inline-block;
          padding: 0.7rem 1.5rem;
          font-weight: 600;
          border-radius: 9999px;
          color: white;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .neon-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #00ff00, #ff00ff);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: neon-border 2.5s linear infinite;
        }
        .neon-btn:hover { transform: scale(1.05); }
        @keyframes neon-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}
