// App.jsx
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

/**
 * Ultra-Professional Portfolio — Updated Full App.jsx
 *
 * Changes & additions included in this single-file update:
 * - Fully featured responsive, glassmorphic header (desktop + mobile)
 * - Particles background integrated and layered correctly
 * - Expertise section includes "SAAS" entry
 * - Contact form added as a sticky, scrollable right-side panel with rounded left corners
 * - Reveal animations (IntersectionObserver) integrated and applied via `addToRefs`
 * - Accessibility focus handling, keyboard nav improvements
 * - Inline styles and CSS for glassmorphism, reveal animations, particles canvas forcing
 * - Local form handling (no external network request) with simple validation & success UI
 *
 * Replace your existing App.jsx with this file.
 */

export default function App() {
  // UI state
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [contactOpen, setContactOpen] = useState(true); // control sticky form open/close on small screens

  // contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // refs for reveal animations
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // particles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // ---- content (EXACT same text/content as you provided, with small updates) ----
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
    background: { color: "transparent" }, // show site gradient
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
      number: { value: 60, density: { enable: true, area: 900 } },
      color: { value: ["#ffd6e8", "#c084fc", "#60a5fa", "#ffffff"] },
      shape: { type: ["circle", "triangle"] },
      opacity: {
        value: { min: 0.25, max: 0.8 },
        random: { enable: true, minimumValue: 0.2 },
        animation: { enable: true, speed: 0.6, minimumValue: 0.15 },
      },
      size: { value: { min: 1, max: 3 }, random: true },
      links: {
        enable: true,
        distance: 130,
        color: "#9ca3af",
        opacity: 0.12,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
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

  // ---- Form handlers ----
  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Email is invalid";
    if (!form.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormSubmitting(true);
    // Simulate submit (no external network)
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setFormSuccess(false), 4500);
    }, 900);
  };

  // ---- Render ----
  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-b from-[#071025] to-[#020617] overflow-x-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* subtle radial vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_35%)]" />

      {/* Sticky Contact Form (right side) */}
      <aside
        aria-label="Contact form"
        className={`fixed right-0 top-[12vh] z-40 transform transition-all duration-300 ease-out ${
          contactOpen ? "translate-x-0" : "translate-x-[92%]"
        }`}
      >
        <div className="w-80 max-w-[86vw] h-[76vh] rounded-l-3xl bg-black/70 backdrop-blur-md border border-white/6 shadow-2xl overflow-hidden flex flex-col">
          {/* header */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/6">
            <div>
              <h4 className="text-lg font-semibold">Contact Me</h4>
              <div className="text-xs text-gray-300">Let's build something great together</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle contact panel"
                onClick={() => setContactOpen((s) => !s)}
                className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
              >
                {contactOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* content (scrollable) */}
          <div className="p-4 overflow-auto">
            {formSuccess && (
              <div className="mb-4 p-3 rounded-md bg-emerald-600/20 border border-emerald-600 text-emerald-200">
                Message sent — I will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label className="text-sm text-gray-300">
                Name
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={`mt-2 w-full rounded-lg px-3 py-2 bg-white/5 border ${
                    formErrors.name ? "border-rose-500" : "border-white/6"
                  } focus:outline-none focus:ring-2 focus:ring-pink-500`}
                  placeholder="Your name"
                />
                {formErrors.name && <div className="text-rose-400 text-xs mt-1">{formErrors.name}</div>}
              </label>

              <label className="text-sm text-gray-300">
                Email
                <input
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={`mt-2 w-full rounded-lg px-3 py-2 bg-white/5 border ${
                    formErrors.email ? "border-rose-500" : "border-white/6"
                  } focus:outline-none focus:ring-2 focus:ring-pink-500`}
                  placeholder="you@example.com"
                />
                {formErrors.email && <div className="text-rose-400 text-xs mt-1">{formErrors.email}</div>}
              </label>

              <label className="text-sm text-gray-300">
                Message
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={6}
                  className={`mt-2 w-full rounded-lg px-3 py-2 bg-white/5 border ${
                    formErrors.message ? "border-rose-500" : "border-white/6"
                  } focus:outline-none focus:ring-2 focus:ring-pink-500 resize-y`}
                  placeholder="Tell me about your project..."
                />
                {formErrors.message && <div className="text-rose-400 text-xs mt-1">{formErrors.message}</div>}
              </label>

              <div className="mt-2 flex items-center gap-2">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-black rounded-lg shadow font-medium hover:scale-[1.02] transition"
                >
                  {formSubmitting ? "Sending..." : "Send Message"}
                  <FaPaperPlane />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    setFormErrors({});
                  }}
                  className="px-3 py-2 rounded-lg border border-white/6 text-sm text-gray-200 hover:bg-white/5 transition"
                >
                  Reset
                </button>
              </div>

              <div className="pt-4 text-xs text-gray-400 border-t border-white/6 mt-3">
                Prefer email? <a href="mailto:Vikymathur532@gmail.com" className="text-pink-300">Vikymathur532@gmail.com</a>
              </div>
            </form>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 rounded-2xl">
          <a href="#" className="inline-flex items-center gap-3" aria-label="Vinod Mathur home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="font-bold tracking-tight text-sm">VM</span>
            </div>
            <span className="text-lg font-semibold hidden sm:inline">Vinod Mathur</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
            {[
              ["Expertise", "#expertise"],
              ["Projects", "#projects"],
              ["Process", "#process"],
              ["About", "#about"],
              ["Feedback", "#feedback"],
              ["Clients", "#clients"],
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
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
              aria-label="Toggle contact"
              onClick={() => setContactOpen((s) => !s)}
            >
              {contactOpen ? <FaTimes /> : <FaBars />}
            </button>

            <button
              className="md:hidden p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
              aria-label="Open menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 max-w-3xl mx-auto px-6 bg-black/60 backdrop-blur rounded-lg py-4 shadow-lg">
            <div className="flex flex-col gap-3 text-center">
              {[
                ["Expertise", "#expertise"],
                ["Projects", "#projects"],
                ["Process", "#process"],
                ["About", "#about"],
                ["Feedback", "#feedback"],
                ["Clients", "#clients"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <a key={label} href={link} onClick={() => setMenuOpen(false)} className="py-2 text-gray-200 hover:text-pink-400 transition">
                  {label}
                </a>
              ))}
              <a href="/Resume4.pdf" download className="inline-block mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow" onClick={() => setMenuOpen(false)}>Resume</a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative z-20">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: hero text */}
            <div className="md:col-span-7 text-left md:text-left" ref={addToRefs}>
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

            {/* Right: decorative vector */}
            <div className="md:col-span-5 flex items-center justify-center relative" ref={addToRefs}>
              <div className="absolute -top-8 right-0 opacity-60 w-72 md:w-96 pointer-events-none animate-breath">
                <img src="/vector4.png" alt="decorative vector" className="w-full h-auto" />
              </div>

              <div className="w-64 h-40 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/6 flex items-center justify-center p-4 backdrop-blur-md shadow-lg animate-swing">
                <div className="text-left">
                  <div className="text-sm text-gray-300">Available for</div>
                  <div className="text-xl font-semibold mt-1">Freelance & Contract</div>
                  <div className="text-xs text-gray-400 mt-2">Focused on Product Design, SaaS, and Mobile Apps</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-20" ref={addToRefs}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">My Expertise</h2>
            <p className="text-gray-300 max-w-3xl mb-8">
              Over the 4+ years, I’ve honed my skills across multiple design platforms and tools.
              My expertise lies in creating intuitive, user-friendly, and visually engaging interfaces for both mobile and web applications.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><FaFigma /></div>
                <div className="font-semibold">Figma</div>
                <div className="text-sm text-gray-300 mt-2">Design systems & prototypes</div>
              </div>
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><SiAdobexd /></div>
                <div className="font-semibold">Adobe XD</div>
                <div className="text-sm text-gray-300 mt-2">Interactive prototypes</div>
              </div>
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><SiAdobephotoshop /></div>
                <div className="font-semibold">Photoshop</div>
                <div className="text-sm text-gray-300 mt-2">Visual assets & editing</div>
              </div>
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><FaSketch /></div>
                <div className="font-semibold">Sketch</div>
                <div className="text-sm text-gray-300 mt-2">UI patterns</div>
              </div>
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><SiCanva /></div>
                <div className="font-semibold">Canva</div>
                <div className="text-sm text-gray-300 mt-2">Marketing visuals</div>
              </div>
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><FaHtml5 /></div>
                <div className="font-semibold">HTML</div>
                <div className="text-sm text-gray-300 mt-2">Responsive markup</div>
              </div>
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2"><FaCss3Alt /></div>
                <div className="font-semibold">CSS</div>
                <div className="text-sm text-gray-300 mt-2">Animations & layout</div>
              </div>
              {/* New SAAS expertise */}
              <div className="glass-card reveal" ref={addToRefs}>
                <div className="text-2xl mb-2">☁️</div>
                <div className="font-semibold">SaaS Product Design</div>
                <div className="text-sm text-gray-300 mt-2">User flows, onboarding, dashboards & analytics UX</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-white/2" ref={addToRefs}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">Project Showcase</h2>
              <p className="text-sm text-gray-300">Selected case studies & prototypes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, showMore ? projects.length : 6).map((p) => (
                <article key={p.id} className="project-card reveal" aria-labelledby={`proj-${p.id}`} ref={addToRefs}>
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
        <section id="process" className="py-20" ref={addToRefs}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Work Process</h2>
            <p className="text-gray-300 mb-8 max-w-3xl">
              I follow a structured design workflow that ensures every project is user-centered, functional, and visually compelling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-process reveal" ref={addToRefs}>
                <div className="text-lg font-semibold mb-2">Research & Discovery</div>
                <div className="text-sm text-gray-300">Understand business goals, target users, and competitors to set a strong foundation.</div>
              </div>
              <div className="glass-process reveal" ref={addToRefs}>
                <div className="text-lg font-semibold mb-2">Wireframing & Prototyping</div>
                <div className="text-sm text-gray-300">Create low to high-fidelity wireframes and interactive prototypes to map user journeys.</div>
              </div>
              <div className="glass-process reveal" ref={addToRefs}>
                <div className="text-lg font-semibold mb-2">Visual Design & Testing</div>
                <div className="text-sm text-gray-300">Apply modern UI trends, ensure accessibility, and conduct usability testing for perfection.</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-black/10" ref={addToRefs}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <img src="/images/profile (2).jpeg" alt="Profile" className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg mb-6" />
            <h2 className="text-3xl font-bold mb-3">About Me</h2>
            <p className="text-gray-300 text-lg">
              I’m Vinod Mathur, a passionate UI/UX Designer who loves turning complex problems into elegant design solutions.
              With 4+ years of experience in crafting intuitive digital interfaces, I focus on creating meaningful user experiences that blend usability, aesthetics, and innovation.
            </p>
          </div>
        </section>

        {/* Feedback */}
        <section id="feedback" className="py-20" ref={addToRefs}>
          <div className="max-w-4xl mx-auto px-6 text-center">
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
        <section id="clients" className="py-12 bg-black/8" ref={addToRefs}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Previous Clients</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {clientLogos.map((c) => (
                <img key={c.id} src={c.logo} alt="Client Logo" className="h-12 opacity-70 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact (anchor target for header nav) */}
        <footer id="contact" className="py-12" ref={addToRefs}>
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

        /* Force particles canvas full screen so it shows under everything */
        #tsparticles {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          z-index: 0 !important;
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
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.2s ease;
          backdrop-filter: blur(6px);
        }
        .glass-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(139,92,246,0.12); }

        .glass-process {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid var(--glass-border);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(2,6,23,0.6);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          backdrop-filter: blur(6px);
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

        /* Reveal Animations */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s ease, transform 0.9s ease;
          will-change: opacity, transform;
        }
        .reveal-visible { opacity: 1 !important; transform: translateY(0) !important; }

        /* subtle utility */
        .feedback-card { width: 100%; max-width: 680px; margin: 0 auto; }
        .user-is-tabbing :focus { outline: 3px solid rgba(139,92,246,0.28); outline-offset: 3px; border-radius: 8px; }

        /* small-screen adjustments for contact aside */
        @media (max-width: 820px) {
          aside[aria-label="Contact form"] { top: 8vh; right: 0; }
          aside[aria-label="Contact form"] .w-80 { width: 86vw; }
        }

        /* responsiveness */
        @media (max-width: 768px) {
          .project-media { height: 180px; }
          .project-card:hover { transform: none; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        }
      `}</style>
    </div>
  );
}
