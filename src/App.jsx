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

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Projects
  const projects = [
    { id: 1, title: "Hardin Astro App", img: "https://s3.envato.com/files/477047008/Preview%20Image/01_Preview-image.jpg", link: "#" },
    { id: 2, title: "Bankfipay App", img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7e88ce7df85582b3f709b9baebbb5996b62b07c8", link: "#" },
    { id: 3, title: "Azzunique Payout App", img: "https://sketchelements.com/wp-content/uploads/2019/10/payment-app-ui-kit.png", link: "#" },
    { id: 4, title: "Shoponnow Ecommerce App", img: "https://miro.medium.com/v2/resize:fit:1400/1*R8rYPkAAiyRJxb17CpxSaA.jpeg", link: "#" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7e74217f1a9cf874a68e5b45b82dea719b3e217d", link: "#" },
    { id: 6, title: "Jadoo Travel", img: "https://themewagon.com/wp-content/uploads/2021/10/jadoo-1.png", link: "#" },
    { id: 7, title: "TextoNow Chating App", img: "https://s3-alpha.figma.com/hub/file/2240472529501579047/9b7aa608-115f-4eb2-bef3-11f67c905b13-cover.png", link: "#" },
    { id: 8, title: "EduLearn Online Platform", img: "https://s3-alpha.figma.com/hub/file/2191975162694823278/2037e40c-c161-4eef-9d81-3711ee726f65-cover.png", link: "#" },
    { id: 9, title: "ShopEase E-commerce App", img: "https://www.figma.com/community/resource/a2938e41-93fa-4836-a3ee-b3c3dc5f861a/thumbnail", link: "#" },
  ];

  // Feedbacks
  const feedbacks = [
    { name: "Subhan Raza", company: "Namrah Security Management", text: "Vinod transformed our app design! Clean, modern, and user-friendly." },
    { name: "Harmeek Kaur", company: "Azzunique Softwares", text: "Amazing experience working with Vinod. He really understands users." },
    { name: "Vikas Solanki", company: "Doomshell Softwares", text: "His designs gave our brand a fresh and professional identity." },
  ];

  // Clients logos
  const clientLogos = [
    { id: 1, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrUzFPk54hLe2ASbQAK1NFUMLcBP6izlzGw&s" },
    { id: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOT-CVAF6eviF89Iobd0Cee32DGXJubxsnrIVaqN3Wz08UnDEVZaInTrmYVEMxaGMGh4&usqp=CAU" },
    { id: 3, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlgCSHM3jZXcAw8nXbnWSO3gauKou9T9z9pCw-sMQHAkT9nDQCgGekmhgiEpxZeqBf5U&usqp=CAU" },
    { id: 4, logo: "https://play-lh.googleusercontent.com/p2v93Ycop_1x6hart9lbdqzhHN1wvx4tlRRhpQlI7mYQ_OcHbTYBbYUpdyFwYnggKg" },
  ];

  // Auto feedback carousel
  useEffect(() => {
    const id = setInterval(() => setCurrentFeedback((p) => (p + 1) % feedbacks.length), 4000);
    return () => clearInterval(id);
  }, [feedbacks.length]);

  // IntersectionObserver for reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  // Key tab focus
  useEffect(() => {
    const handleTab = (e) => { if (e.key === "Tab") document.documentElement.classList.add("user-is-tabbing"); };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, []);

  // Particles config
  const particleOptions = {
    background: { color: "#071025" },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 120, duration: 0.4 }, push: { quantity: 3 } }
    },
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa"] },
      shape: { type: ["circle", "triangle"] },
      opacity: { value: 0.65, random: { enable: true, minimumValue: 0.3 }, animation: { enable: true, speed: 0.8, minimumValue: 0.2 } },
      size: { value: { min: 1, max: 4 }, random: true },
      links: { enable: true, distance: 140, color: "#9ca3af", opacity: 0.08, width: 1 },
      move: { enable: true, speed: 0.9, direction: "none", outModes: { default: "out" } }
    },
    detectRetina: true
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      <Particles className="absolute inset-0 -z-20" init={particlesInit} options={particleOptions} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <a href="#" className="inline-flex items-center gap-3" aria-label="Vinod Mathur home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="font-bold tracking-tight text-sm">VM</span>
            </div>
            <span className="text-lg font-semibold hidden sm:inline">Portfolio</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Expertise","#expertise","AI Tools","#ai-tools","Projects","#projects","Process","#process","About","#about","Feedback","#feedback","Contact","#contact"].reduce((acc, cur, i, arr) => {
              if (i % 2 === 0) acc.push([arr[i], arr[i+1]]); return acc;
            }, []).map(([label, link]) => (
              <a key={label} href={link} className="relative text-gray-200 hover:text-white transition group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="/Resume4.pdf" download className="ml-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow hover:scale-105 transition">Resume</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 transition" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${menuOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="mx-4 bg-black/70 backdrop-blur-md rounded-lg py-4 shadow-lg text-center flex flex-col gap-3">
            {["Expertise","#expertise","AI Tools","#ai-tools","Projects","#projects","Process","#process","About","#about","Feedback","#feedback","Contact","#contact"].reduce((acc, cur, i, arr) => {
              if (i % 2 === 0) acc.push([arr[i], arr[i+1]]); return acc;
            }, []).map(([label, link]) => (
              <a key={label} href={link} onClick={() => setMenuOpen(false)} className="py-2 text-gray-200 hover:text-pink-400 transition">{label}</a>
            ))}
            <a href="/Resume4.pdf" download onClick={() => setMenuOpen(false)} className="inline-block mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow">Resume</a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-left md:text-left">
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/6 backdrop-blur text-sm font-medium text-pink-200">UI/UX / PRODUCT DESIGNER</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">I design meaningful digital products — beautiful, usable & measurable.</h1>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                Creative UI/UX Designer with a deep passion for designing seamless digital experiences.  
                Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS.  
                I blend creativity and functionality to craft designs that delight users and drive results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/Resume4.pdf" download className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold shadow-lg hover:scale-[1.03] transition-transform">Download Resume</a>
                <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">Contact Me</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Figma</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Adobe XD</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Photoshop</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Canva</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">HTML & CSS</span>
              </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center relative">
              <div className="absolute -top-8 right-0 opacity-60 w-72 md:w-96 pointer-events-none animate-breath">
                <img src="/vector4.png" alt="decorative vector" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">My Expertise</h2>
            <p className="text-gray-300 max-w-3xl mb-8">
              Over the 4+ years, I’ve honed my skills across multiple design platforms and tools. My expertise lies in creating intuitive, user-friendly, and visually engaging interfaces.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="glass-card flex flex-col items-center text-center p-6">
                <div className="text-2xl mb-2"><FaFigma /></div>
                <div className="font-semibold">Figma</div>
                <div className="text-sm text-gray-300 mt-2">Design systems & prototypes</div>
              </div>
              <div className="glass-card flex flex-col items-center text-center p-6">
                <div className="text-2xl mb-2"><SiAdobexd /></div>
                <div className="font-semibold">Adobe XD</div>
                <div className="text-sm text-gray-300 mt-2">Wireframing & prototyping</div>
              </div>
              <div className="glass-card flex flex-col items-center text-center p-6">
                <div className="text-2xl mb-2"><SiAdobephotoshop /></div>
                <div className="font-semibold">Photoshop</div>
                <div className="text-sm text-gray-300 mt-2">Visual & graphic design</div>
              </div>
              <div className="glass-card flex flex-col items-center text-center p-6">
                <div className="text-2xl mb-2"><SiCanva /></div>
                <div className="font-semibold">Canva</div>
                <div className="text-sm text-gray-300 mt-2">Social & branding graphics</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section id="ai-tools" className="py-20 bg-gradient-to-b from-[#020617] to-[#0d1021]">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">AI Tools I Use</h2>
            <p className="text-gray-300 max-w-3xl mb-8">
              Leveraging AI to enhance productivity and creativity in design workflows.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {["ChatGPT","Cursor","MidJourney","Runway","Notion AI","Figma AI Gemini","Canva AI","Leonardo AI"].map((tool,i)=>(
                <div key={i} className="glass-card flex flex-col items-center text-center p-6">
                  <div className="text-2xl mb-2"><FaFigma /></div>
                  <div className="font-semibold">{tool}</div>
                  <div className="text-sm text-gray-300 mt-2">Enhancing design workflow</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
            <p className="text-gray-300 max-w-3xl mb-8">
              Selected works across UI/UX & product design projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.slice(0, showMore ? projects.length : 6).map((project) => (
                <a key={project.id} href={project.link} className="glass-card overflow-hidden rounded-lg shadow-lg transition hover:scale-105">
                  <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <button onClick={() => setShowMore(!showMore)} className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold shadow hover:scale-105 transition">
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-20 bg-gradient-to-b from-[#020617] to-[#0d1021]">
          <div className="max-w-6xl mx-auto px-6 text-center" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Client Feedback</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">What my clients say about me and my work</p>
            <div className="relative max-w-3xl mx-auto">
              <div className="glass-card p-8 rounded-xl shadow-lg transition">
                <p className="text-gray-200 text-lg mb-4">"{feedbacks[currentFeedback].text}"</p>
                <div className="font-semibold">{feedbacks[currentFeedback].name}</div>
                <div className="text-gray-400 text-sm">{feedbacks[currentFeedback].company}</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer p-2" onClick={() => setCurrentFeedback((c) => (c - 1 + feedbacks.length) % feedbacks.length)}>‹</div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer p-2" onClick={() => setCurrentFeedback((c) => (c + 1) % feedbacks.length)}>›</div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20">
          <div className="max-w-6xl mx-auto px-6" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Clients I've Worked With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
              {clientLogos.map((c) => (
                <img key={c.id} src={c.logo} alt={`Client ${c.id}`} className="h-16 object-contain opacity-70 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 bg-black/30 backdrop-blur-md mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-300">
            <h3 className="text-xl font-semibold mb-3">Let’s Work Together!</h3>
            <p className="mb-6">Reach out for collaborations, projects, or just a friendly chat.</p>
            <a href="mailto:vinod@example.com" className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold shadow hover:scale-105 transition">Contact Me</a>
            <p className="mt-12 text-sm">&copy; 2025 Vinod Mathur. All Rights Reserved.</p>
          </div>
        </footer>

      </main>

      {/* Scroll Reveal CSS */}
      <style>{`
        .reveal-visible { opacity: 1 !important; transform: none !important; transition: all 1s ease-out; }
        .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; transition: transform 0.3s ease; }
        .glass-card:hover { transform: translateY(-5px); }
        .animate-breath { animation: breath 6s ease-in-out infinite alternate; }
        @keyframes breath { 0% { transform: translateY(0px); } 100% { transform: translateY(-20px); } }
      `}</style>
    </div>
  );
}
