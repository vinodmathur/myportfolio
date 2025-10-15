// App.jsx
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

/**
 * Ultra-Professional Portfolio — keeps all content exactly the same.
 * - No external animation libraries required (uses CSS + IntersectionObserver).
 * - Uses react-tsparticles for background particles.
 *
 * Replace your existing App.jsx with this file.
 */

export default function App() {
  // UI state
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  // refs for reveal animations
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // particles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // ---- content (EXACT same text/content as you provided) ----
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

  // auto-advance feedbacks
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFeedback((p) => (p + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(id);
  }, [feedbacks.length]);

  // reveal on scroll (no external lib)
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

  // ---- Particles options tuned for professional look ----
  const particleOptions = {
    background: { color: "#071025" }, // deep navy
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
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa"] }, // soft pink, violet, sky
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

  // ---- small util for accessible focus ring (for keyboard users) ----
  useEffect(() => {
    const handleTab = (e) => {
      if (e.key === "Tab") document.documentElement.classList.add("user-is-tabbing");
    };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, []);

  // ---- Render ----
  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      {/* Particles background */}
      <Particles className="absolute inset-0 -z-20" init={particlesInit} options={particleOptions} />

      {/* subtle radial vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Header */}
<header className="fixed top-0 left-0 right-0 z-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
    {/* Logo */}
    <a
      href="#"
      className="inline-flex items-center gap-3"
      aria-label="Vinod Mathur home"
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
        <span className="font-bold tracking-tight text-sm">VM</span>
      </div>
      <span className="text-lg font-semibold hidden sm:inline">
        Portfolio
      </span>
    </a>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      {[
        ["Expertise", "#expertise"],
        ["Projects", "#projects"],
        ["Process", "#process"],
        ["About", "#about"],
        ["Feedback", "#feedback"],
        ["Contact", "#contact"],
      ].map(([label, link]) => (
        <a
          key={label}
          href={link}
          className="relative text-gray-200 hover:text-white transition group"
        >
          {label}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all group-hover:w-full"></span>
        </a>
      ))}
      <a
        href="/Resume4.pdf"
        download
        className="ml-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow hover:scale-105 transition"
      >
        Resume
      </a>
    </nav>

    {/* Mobile Button */}
    <button
      className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
      aria-label="Toggle menu"
      onClick={() => setMenuOpen((s) => !s)}
    >
      {menuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <FaBars />
      )}
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden transition-all duration-300 ${
      menuOpen
        ? "max-h-[400px] opacity-100 mt-3"
        : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <div className="mx-4 bg-black/70 backdrop-blur-md rounded-lg py-4 shadow-lg text-center flex flex-col gap-3">
      {[
        ["Expertise", "#expertise"],
        ["Projects", "#projects"],
        ["Process", "#process"],
        ["About", "#about"],
        ["Feedback", "#feedback"],
        ["Contact", "#contact"],
      ].map(([label, link]) => (
        <a
          key={label}
          href={link}
          onClick={() => setMenuOpen(false)}
          className="py-2 text-gray-200 hover:text-pink-400 transition"
        >
          {label}
        </a>
      ))}
      <a
        href="/Resume4.pdf"
        download
        onClick={() => setMenuOpen(false)}
        className="inline-block mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow"
      >
        Resume
      </a>
    </div>
  </div>
</header>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: hero text */}
            <div className="md:col-span-7 text-left md:text-left">
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/6 backdrop-blur text-sm font-medium text-pink-200">UI/UX / PRODUCT DESIGNER</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
                I design meaningful digital products — beautiful, usable & measurable.
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                Creative UI/UX Designer with a deep passion for designing seamless digital experiences.  
                Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS.  
                I blend creativity and functionality to craft designs that delight users and drive results.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/Resume4.pdf" download className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold shadow-lg hover:scale-[1.03] transition-transform">
                  Download Resume
                </a>
                <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
                  Contact Me
                </a>
              </div>
            {/* Key skills badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Figma</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Adobe XD</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Photoshop</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Canva</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">HTML & CSS</span>
              </div>
            </div>
            
            {/* Right: ID card + floating vector */}
            <div className="md:col-span-5 flex items-center justify-center relative">
              {/* floating vector behind */}
              <div className="absolute -top-8 right-0 opacity-60 w-72 md:w-96 pointer-events-none">
                <img src="/vector4.png" alt="decorative vector" className="w-full h-auto animate-breath" />
              </div>

             
              {/* end Hanging ID */}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-20">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">My Expertise</h2>
            <p className="text-gray-300 max-w-3xl mb-8">
              Over the 4+ years, I’ve honed my skills across multiple design platforms and tools.
              My expertise lies in creating intuitive, user-friendly, and visually engaging interfaces for both mobile and web applications.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="glass-card">
                <div className="text-2xl mb-2"><FaFigma /></div>
                <div className="font-semibold">Figma</div>
                <div className="text-sm text-gray-300 mt-2">Design systems & prototypes</div>
              </div>
              <div className="glass-card">
                <div className="text-2xl mb-2"><SiAdobexd /></div>
                <div className="font-semibold">Adobe XD</div>
                <div className="text-sm text-gray-300 mt-2">Interactive prototypes</div>
              </div>
              <div className="glass-card">
                <div className="text-2xl mb-2"><SiAdobephotoshop /></div>
                <div className="font-semibold">Photoshop</div>
                <div className="text-sm text-gray-300 mt-2">Visual assets & editing</div>
              </div>
              <div className="glass-card">
                <div className="text-2xl mb-2"><FaSketch /></div>
                <div className="font-semibold">Sketch</div>
                <div className="text-sm text-gray-300 mt-2">UI patterns</div>
              </div>
              <div className="glass-card">
                <div className="text-2xl mb-2"><SiCanva /></div>
                <div className="font-semibold">Canva</div>
                <div className="text-sm text-gray-300 mt-2">Marketing visuals</div>
              </div>
              <div className="glass-card">
                <div className="text-2xl mb-2"><FaHtml5 /></div>
                <div className="font-semibold">HTML</div>
                <div className="text-sm text-gray-300 mt-2">Responsive markup</div>
              </div>
              <div className="glass-card">
                <div className="text-2xl mb-2"><FaCss3Alt /></div>
                <div className="font-semibold">CSS</div>
                <div className="text-sm text-gray-300 mt-2">Animations & layout</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AI TOOLS ICONS SECTION ===== */}
<section className="py-16 bg-transparent" id="ai-tools">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
    AI Tools I Use
  </h2>

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 px-6 md:px-20 place-items-center">
    
    {/* ChatGPT */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-pink-500/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-green-400">
        <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.009 8.009 0 0 1-8 8Z"/>
      </svg>
    </div>

    {/* Cursor */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-purple-400">
        <path fill="currentColor" d="M4 2l16 10-8 2-2 8z"/>
      </svg>
    </div>

    {/* V0 */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-blue-400">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    </div>

    {/* Lovable */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-pink-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-pink-400">
        <path fill="currentColor" d="M12 21s-7-4.35-7-10a5 5 0 0 1 10 0a5 5 0 0 1 10 0c0 5.65-7 10-7 10z"/>
      </svg>
    </div>

    {/* Midjourney */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-indigo-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-400">
        <path fill="currentColor" d="M12 2l4 20-4-4-4 4z"/>
      </svg>
    </div>

    {/* Runway */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-yellow-400">
        <path fill="currentColor" d="M4 4h16v2H4zm0 7h16v2H4zm0 7h16v2H4z"/>
      </svg>
    </div>

    {/* Notion */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-white/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
        <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
        <path fill="currentColor" d="M9 9h2v6H9zm4 0h2v6h-2z"/>
      </svg>
    </div>

    {/* Figma AI */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-orange-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-orange-400">
        <circle cx="12" cy="6" r="2" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <circle cx="12" cy="18" r="2" fill="currentColor"/>
      </svg>
    </div>

    {/* Gemini */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-sky-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-sky-400">
        <path fill="currentColor" d="M6 4h12v2H6zm0 14h12v2H6zm2-12h8v12H8z"/>
      </svg>
    </div>

    {/* Perplexity */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-cyan-400">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path fill="currentColor" d="M12 7a5 5 0 0 1 0 10z"/>
      </svg>
    </div>

    {/* Canva AI */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-teal-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-teal-400">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path fill="currentColor" d="M8 12a4 4 0 0 0 8 0z"/>
      </svg>
    </div>

    {/* Leonardo AI */}
    <div className="p-5 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-red-400/30">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-red-400">
        <polygon fill="currentColor" points="12,2 22,20 2,20"/>
      </svg>
    </div>
  </div>
</section>

        {/* Projects */}
        <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-white/2">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">Project Showcase</h2>
              <p className="text-sm text-gray-300">Selected case studies & prototypes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, showMore ? projects.length : 6).map((p) => (
                <article key={p.id} className="project-card" aria-labelledby={`proj-${p.id}`}>
                  <div className="project-media" role="img" aria-label={p.title}>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover rounded-t-lg" />
                  </div>
                  <div className="p-5">
                    <h3 id={`proj-${p.id}`} className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">Interactive app design & UX flows.</p>
                    <div className="flex items-center gap-3">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow-sm">View Project</a>
                      <span className="text-xs text-gray-400">Prototype</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {!showMore && (
              <div className="mt-8 text-center">
                <button onClick={() => setShowMore(true)} className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg hover:scale-105 transition-transform">
                  View More Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Work Process</h2>
            <p className="text-gray-300 mb-8 max-w-3xl">
              I follow a structured design workflow that ensures every project is user-centered, functional, and visually compelling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-process">
                <div className="text-lg font-semibold mb-2">Research & Discovery</div>
                <div className="text-sm text-gray-300">Understand business goals, target users, and competitors to set a strong foundation.</div>
              </div>
              <div className="glass-process">
                <div className="text-lg font-semibold mb-2">Wireframing & Prototyping</div>
                <div className="text-sm text-gray-300">Create low to high-fidelity wireframes and interactive prototypes to map user journeys.</div>
              </div>
              <div className="glass-process">
                <div className="text-lg font-semibold mb-2">Visual Design & Testing</div>
                <div className="text-sm text-gray-300">Apply modern UI trends, ensure accessibility, and conduct usability testing for perfection.</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-black/10">
          <div className="max-w-4xl mx-auto px-6 text-center" ref={addToRefs}>
            <img src="/images/profile (2).jpeg" alt="Profile" className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg mb-6" />
            <h2 className="text-3xl font-bold mb-3">About Me</h2>
            <p className="text-gray-300 text-lg">
              I’m Vinod Mathur, a passionate UI/UX Designer who loves turning complex problems into elegant design solutions.
              With 4+ years of experience in crafting intuitive digital interfaces, I focus on creating meaningful user experiences that blend usability, aesthetics, and innovation.
            </p>
          </div>
        </section>

        {/* Feedback */}
        <section id="feedback" className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center" ref={addToRefs}>
            <h2 className="text-3xl font-bold mb-6">Quick Feedbacks</h2>

            <div className="relative">
              {feedbacks.map((f, i) => (
                <div key={i} className={`feedback-card absolute inset-0 mx-auto transition-opacity duration-700 ${i === currentFeedback ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
                  <div className="bg-white/6 p-8 rounded-2xl shadow-lg">
                    <p className="italic text-gray-200 text-lg">"{f.text}"</p>
                    <h4 className="mt-4 font-semibold text-pink-300">{f.name}</h4>
                    <p className="text-gray-400 text-sm">{f.company}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="py-12 bg-black/8">
          <div className="max-w-6xl mx-auto px-6 text-center" ref={addToRefs}>
            <h2 className="text-3xl font-bold mb-6">Previous Clients</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {clientLogos.map((c) => (
                <img key={c.id} src={c.logo} alt="Client Logo" className="h-12 opacity-70 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
            <p className="text-gray-300 mb-4">Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-300">Vikymathur532@gmail.com</a></p>
            <p className="text-gray-300 mb-6">Phone: <span className="text-pink-300">+91 7976680554</span></p>

            <div className="text-sm text-gray-400">© 2025 Vinod Mathur. All Rights Reserved.</div>
          </div>
        </footer>
      </main>

      {/* ---- Styles: glassmorphism, cards, animations ---- */}
      <style>{`
        /* root tweaks */
        :root {
          --glass-bg: rgba(255,255,255,0.04);
          --glass-border: rgba(255,255,255,0.06);
          --accent1: #ff77b6;
          --accent2: #8b5cf6;
        }

        /* general glass card */
        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid var(--glass-border);
          padding: 18px;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(2,6,23,0.6);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .glass-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(139,92,246,0.12); }

        .glass-process {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid var(--glass-border);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(2,6,23,0.6);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .glass-process:hover { transform: translateY(-8px); box-shadow: 0 22px 48px rgba(255,119,182,0.08); }

        .project-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015));
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          transform-style: preserve-3d;
          transition: transform 0.45s cubic-bezier(.2,.9,.2,1), box-shadow 0.35s ease;
        }
        .project-card:hover { transform: translateY(-10px) rotateX(1deg); box-shadow: 0 20px 60px rgba(139,92,246,0.08); }
        .project-media { height: 220px; overflow: hidden; display:flex; align-items:center; justify-content:center; }

        /* AI tools subtle hover glow (keeps visual style consistent) */
        #ai-tools .glass-card { align-items: center; text-align: center; }
        #ai-tools .glass-card:hover { box-shadow: 0 20px 60px rgba(139,92,246,0.14); transform: translateY(-8px) scale(1.01); }

        /* feedback cards layering handled inline via opacity classes */

        /* ID card swing & subtle breathing for vector */
        @keyframes swing {
          0% { transform: rotate(-4deg); }
          25% { transform: rotate(6deg); }
          50% { transform: rotate(-6deg); }
          75% { transform: rotate(4deg); }
          100% { transform: rotate(-4deg); }
        }
        .animate-swing { animation: swing 6.4s ease-in-out infinite; transform-origin: top center; }

        @keyframes breath {
          0% { transform: translateY(0) scale(1); opacity: 0.95; }
          50% { transform: translateY(-8px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.95; }
        }
        .animate-breath { animation: breath 8s ease-in-out infinite; }

        /* reveal (IntersectionObserver toggles reveal-visible) */
        [ref] { opacity: 0; transform: translateY(18px); transition: opacity .9s ease, transform .9s ease; }
        .reveal-visible { opacity: 1 !important; transform: translateY(0) !important; }

        /* subtle utility */
        .feedback-card { width: 100%; max-width: 680px; margin: 0 auto; }
        .user-is-tabbing :focus { outline: 3px solid rgba(139,92,246,0.28); outline-offset: 3px; border-radius: 8px; }

        /* responsiveness */
        @media (max-width: 768px) {
          .project-media { height: 180px; }
          .project-card:hover { transform: none; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        }
      `}</style>
    </div>
  );
}
