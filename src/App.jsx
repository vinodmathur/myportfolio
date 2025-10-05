// App.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars, FaEnvelope, FaPhone, FaTimes } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

/**
 * Ultra-Professional Portfolio — Complete file
 * - Responsive header
 * - Animated particles background (fixed)
 * - Intro at top
 * - Freelancer & Contract card above Quick Feedbacks
 * - Floating rounded contact icon opens sticky scrollable contact form
 * - Reveal animations using IntersectionObserver
 *
 * Replace your existing App.jsx with this file.
 */

export default function App() {
  // UI state
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  // refs for reveal animations
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // particles init
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

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
    }, 4200);
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
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 120, duration: 0.6 },
        push: { quantity: 3 },
      },
    },
    particles: {
      number: { value: 55, density: { enable: true, area: 1000 } },
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa", "#ffffff"] },
      shape: { type: ["circle"] },
      opacity: {
        value: 0.7,
        random: { enable: true, minimumValue: 0.25 },
        animation: { enable: true, speed: 0.6, minimumValue: 0.2 },
      },
      size: { value: { min: 0.8, max: 3 }, random: true },
      links: {
        enable: true,
        distance: 130,
        color: "#9ca3af",
        opacity: 0.12,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: { default: "out" },
        random: false,
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

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const handleContactChange = (e) => setContactForm({ ...contactForm, [e.target.name]: e.target.value });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // TODO: integrate with email service (EmailJS / Netlify Functions / API)
    setTimeout(() => {
      setSending(false);
      setContactForm({ name: "", email: "", message: "" });
      alert("Thank you! Message sent (demo).");
      setContactOpen(false);
    }, 900);
  };

  // ---- Render ----
  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      {/* Particles background (fixed full-screen) */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={particleOptions}
      />

      {/* subtle radial vignette */}
      <div className="pointer-events-none absolute inset-0 -z-5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 rounded-2xl bg-black/30 backdrop-blur-md border border-white/6 shadow-md">
          {/* Logo */}
          <a href="#" className="inline-flex items-center gap-3" aria-label="Vinod Mathur home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="font-bold tracking-tight text-sm">VM</span>
            </div>
            <span className="text-sm font-semibold hidden sm:inline">Vinod Mathur</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {[
              ["Introduction", "#introduction"],
              ["Expertise", "#expertise"],
              ["Projects", "#projects"],
              ["Process", "#process"],
              ["About", "#about"],
              ["Feedback", "#feedback"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a key={label} href={link} className="relative text-gray-200 hover:text-white transition group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="/Resume4.pdf" download className="ml-2 inline-block px-3 py-1 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow">
              Resume
            </a>
          </nav>

          {/* Mobile button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-md bg-white/8 hover:bg-white/12 transition"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 max-w-3xl mx-auto px-4 bg-black/60 backdrop-blur rounded-xl py-4 shadow-lg">
            <div className="flex flex-col gap-3 text-center">
              {[
                ["Introduction", "#introduction"],
                ["Expertise", "#expertise"],
                ["Projects", "#projects"],
                ["Process", "#process"],
                ["About", "#about"],
                ["Feedback", "#feedback"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <a key={label} href={link} onClick={() => setMenuOpen(false)} className="py-2 text-gray-200 hover:text-pink-300 transition">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative z-10">
        {/* Introduction (top) */}
        <section id="introduction" className="min-h-screen flex items-center py-32 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: intro text */}
            <div className="md:col-span-7" ref={addToRefs}>
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/6 backdrop-blur text-sm font-medium text-pink-200">UI/UX / PRODUCT DESIGNER</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg mb-4 reveal">
                I design meaningful digital products — beautiful, usable & measurable.
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-6 reveal">
                Creative UI/UX Designer with 4+ years of experience crafting modern, intuitive interfaces.
                I specialize in Figma, Adobe XD, Photoshop, and front-end markup (HTML & CSS). I blend design thinking with practical execution to deliver results.
              </p>

              <div className="flex flex-wrap gap-4 reveal">
                <a href="/Resume4.pdf" download className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold shadow-lg hover:scale-[1.03] transition-transform">
                  Download Resume
                </a>
                <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/12 text-white hover:bg-white/4 transition">
                  Contact Me
                </button>
              </div>

              {/* Key skills badges */}
              <div className="mt-8 flex flex-wrap gap-3 reveal">
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Figma</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Adobe XD</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Photoshop</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">Canva</span>
                <span className="px-3 py-1 rounded bg-white/6 text-sm">HTML & CSS</span>
              </div>
            </div>

            {/* Right: profile card */}
            <div className="md:col-span-5 flex items-center justify-center relative" ref={addToRefs}>
              <div className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/6 p-6 shadow-xl backdrop-blur reveal">
                <div className="flex items-center gap-4">
                  <img src="/images/profile (2).jpeg" alt="Profile" className="w-20 h-20 rounded-full border-2 border-pink-400 object-cover" />
                  <div>
                    <div className="text-lg font-semibold">Vinod Mathur</div>
                    <div className="text-xs text-gray-300">UI/UX Designer • Product Designer</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-300">
                  Available for freelance & contract work. Quick turnaround, collaborative process, and clear communication.
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="#contact" onClick={() => setContactOpen(true)} className="px-3 py-2 rounded-md bg-pink-500/90 text-black text-sm font-medium">Hire Me</a>
                  <a href="/Resume4.pdf" download className="px-3 py-2 rounded-md border border-white/10 text-sm">Resume</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-16 px-6">
          <div className="max-w-6xl mx-auto" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 reveal">My Expertise</h2>
            <p className="text-gray-300 max-w-3xl mb-8 reveal">I've honed my skills across multiple design platforms and tools. I create intuitive, user-friendly, and visually engaging interfaces for mobile and web.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><FaFigma /></div>
                <div className="font-semibold">Figma</div>
                <div className="text-sm text-gray-300 mt-2">Design systems & prototypes</div>
              </div>
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><SiAdobexd /></div>
                <div className="font-semibold">Adobe XD</div>
                <div className="text-sm text-gray-300 mt-2">Interactive prototypes</div>
              </div>
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><SiAdobephotoshop /></div>
                <div className="font-semibold">Photoshop</div>
                <div className="text-sm text-gray-300 mt-2">Visual assets & editing</div>
              </div>
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><FaSketch /></div>
                <div className="font-semibold">Sketch</div>
                <div className="text-sm text-gray-300 mt-2">UI patterns</div>
              </div>
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><SiCanva /></div>
                <div className="font-semibold">Canva</div>
                <div className="text-sm text-gray-300 mt-2">Marketing visuals</div>
              </div>
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><FaHtml5 /></div>
                <div className="font-semibold">HTML</div>
                <div className="text-sm text-gray-300 mt-2">Responsive markup</div>
              </div>
              <div className="glass-card reveal">
                <div className="text-2xl mb-2"><FaCss3Alt /></div>
                <div className="font-semibold">CSS</div>
                <div className="text-sm text-gray-300 mt-2">Animations & layout</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 px-6 bg-gradient-to-b from-transparent to-white/2">
          <div className="max-w-6xl mx-auto" ref={addToRefs}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl md:text-4xl font-bold reveal">Project Showcase</h2>
              <p className="text-sm text-gray-300 reveal">Selected case studies & prototypes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, showMore ? projects.length : 6).map((p) => (
                <article key={p.id} className="project-card reveal" aria-labelledby={`proj-${p.id}`}>
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
        <section id="process" className="py-16 px-6">
          <div className="max-w-6xl mx-auto" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">My Work Process</h2>
            <p className="text-gray-300 mb-8 max-w-3xl reveal">
              I follow a structured design workflow that ensures every project is user-centered, functional, and visually compelling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-process reveal">
                <div className="text-lg font-semibold mb-2">Research & Discovery</div>
                <div className="text-sm text-gray-300">Understand business goals, target users, and competitors to set a strong foundation.</div>
              </div>
              <div className="glass-process reveal">
                <div className="text-lg font-semibold mb-2">Wireframing & Prototyping</div>
                <div className="text-sm text-gray-300">Create low to high-fidelity wireframes and interactive prototypes to map user journeys.</div>
              </div>
              <div className="glass-process reveal">
                <div className="text-lg font-semibold mb-2">Visual Design & Testing</div>
                <div className="text-sm text-gray-300">Apply modern UI trends, ensure accessibility, and conduct usability testing for perfection.</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 px-6 bg-black/10">
          <div className="max-w-4xl mx-auto text-center" ref={addToRefs}>
            <img src="/images/profile (2).jpeg" alt="Profile" className="mx-auto rounded-full w-36 h-36 border-4 border-pink-400 shadow-lg mb-6 reveal" />
            <h2 className="text-3xl font-bold mb-3 reveal">About Me</h2>
            <p className="text-gray-300 text-lg reveal">
              I’m Vinod Mathur, a passionate UI/UX Designer who loves turning complex problems into elegant design solutions.
              With 4+ years of experience in crafting intuitive digital interfaces, I focus on creating meaningful user experiences that blend usability, aesthetics, and innovation.
            </p>
          </div>
        </section>

        {/* Freelancer & Contract Card (above feedbacks) */}
        <section id="freelance" className="py-10 px-6">
          <div className="max-w-6xl mx-auto" ref={addToRefs}>
            <div className="bg-gradient-to-r from-[#0b1220]/60 to-[#071025]/60 border border-white/6 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-start gap-6 reveal">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Freelance & Contract Work</h3>
                <p className="text-gray-300 mt-2">Open for short-term contracts and freelance projects. I specialize in UI/UX for consumer apps, e-commerce, and fintech interfaces. Competitive rates, fast delivery, and ongoing support.</p>
                <ul className="mt-4 text-sm text-gray-300 space-y-2">
                  <li>• Rapid prototyping in Figma / Adobe XD</li>
                  <li>• End-to-end UI flows & developer handoff</li>
                  <li>• Mobile-first responsive design</li>
                </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <a onClick={() => setContactOpen(true)} className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-black font-medium shadow cursor-pointer">
                  <FaEnvelope /> Contact for Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback (Quick Feedbacks) */}
        <section id="feedback" className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center" ref={addToRefs}>
            <h2 className="text-3xl font-bold mb-6 reveal">Quick Feedbacks</h2>

            <div className="relative h-48">
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
        <section id="clients" className="py-12 bg-black/8 px-6">
          <div className="max-w-6xl mx-auto text-center" ref={addToRefs}>
            <h2 className="text-3xl font-bold mb-6 reveal">Previous Clients</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center reveal">
              {clientLogos.map((c) => (
                <img key={c.id} src={c.logo} alt="Client Logo" className="h-12 opacity-70 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
            <p className="text-gray-300 mb-4">Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-300">Vikymathur532@gmail.com</a></p>
            <p className="text-gray-300 mb-6">Phone: <span className="text-pink-300">+91 7976680554</span></p>

            <div className="text-sm text-gray-400">© 2025 Vinod Mathur. All Rights Reserved.</div>
          </div>
        </footer>
      </main>

      {/* Floating contact icon (right-bottom) */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setContactOpen(true)}
          aria-label="Open contact form"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg flex items-center justify-center text-black text-xl transform hover:scale-105 transition"
        >
          <FaEnvelope />
        </button>
      </div>

      {/* Contact Form Slide-in Panel (rounded right corner) */}
      <div className={`fixed right-4 top-1/6 z-50 transition-transform duration-300 ${contactOpen ? "translate-x-0" : "translate-x-[420px]"} max-w-md w-full`}>
        <div className="w-[380px] max-w-full bg-black/90 border border-white/8 rounded-l-2xl shadow-xl backdrop-blur-md overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-black font-semibold">VM</div>
              <div>
                <div className="font-semibold">Let's Talk</div>
                <div className="text-xs text-gray-300">Freelance & Contract Enquiries</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { setContactOpen(false); }} className="p-2 rounded-md hover:bg-white/6 transition" aria-label="Close contact form">
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="p-4 max-h-[60vh] overflow-y-auto">
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <label className="block text-sm text-gray-300">Name</label>
              <input required name="name" value={contactForm.name} onChange={handleContactChange} className="w-full px-3 py-2 rounded-md bg-white/6 border border-white/6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Your name" />

              <label className="block text-sm text-gray-300">Email</label>
              <input required name="email" type="email" value={contactForm.email} onChange={handleContactChange} className="w-full px-3 py-2 rounded-md bg-white/6 border border-white/6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="you@example.com" />

              <label className="block text-sm text-gray-300">Message</label>
              <textarea required name="message" rows="5" value={contactForm.message} onChange={handleContactChange} className="w-full px-3 py-2 rounded-md bg-white/6 border border-white/6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Tell me about your project..."></textarea>

              <div className="flex items-center justify-between gap-3">
                <button type="submit" disabled={sending} className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-black font-medium shadow disabled:opacity-60">
                  {sending ? "Sending..." : "Send Message"}
                </button>
                <div className="text-xs text-gray-400">Or call: <span className="text-pink-300">+91 7976680554</span></div>
              </div>
            </form>

            <div className="mt-4 text-xs text-gray-400">
              By contacting you agree to share project details. I will respond within 24-48 hours (typical).
            </div>
          </div>
        </div>
      </div>

      {/* ---- Styles: glassmorphism, cards, animations, particles canvas fix ---- */}
      <style>{`
        :root {
          --glass-bg: rgba(255,255,255,0.04);
          --glass-border: rgba(255,255,255,0.06);
        }

        /* canvas fix to ensure particles cover full screen */
        #tsparticles {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
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

        /* animations */
        @keyframes breath {
          0% { transform: translateY(0) scale(1); opacity: 0.95; }
          50% { transform: translateY(-8px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.95; }
        }
        .animate-breath { animation: breath 8s ease-in-out infinite; }

        /* reveal animations */
        .reveal { opacity: 0; transform: translateY(18px); transition: opacity .9s ease, transform .9s ease; }
        .reveal-visible { opacity: 1 !important; transform: translateY(0) !important; }

        /* feedback card */
        .feedback-card { width: 100%; max-width: 680px; margin: 0 auto; }

        /* contact slide panel transitions */
        .translate-x-[420px] { transform: translateX(420px); } /* fallback for older tailwind */
        .translate-x-0 { transform: translateX(0); }

        /* small devices */
        @media (max-width: 768px) {
          header { left: 1rem; right: 1rem; top: 1rem; }
          .project-media { height: 160px; }
          .fixed.right-4.top-1\\/6 { right: 0.5rem; } /* panel placement tweak */
          .fixed.right-6.bottom-6 { right: 0.75rem; bottom: 0.75rem; } /* floating icon tweak */
          /* slide-in should be full width on small screens */
          .fixed.right-4.top-1\\/6 > div { width: calc(100vw - 2rem) !important; border-radius: 12px 0 0 12px; }
          .translate-x-[420px] { transform: translateX(calc(100vw)) !important; }
        }

        /* keyboard focus visible */
        .user-is-tabbing :focus { outline: 3px solid rgba(139,92,246,0.28); outline-offset: 3px; border-radius: 8px; }
      `}</style>
    </div>
  );
}
