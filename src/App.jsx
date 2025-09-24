// App.jsx
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

/**
 * Enhanced portfolio App.jsx
 * - Keeps your content exactly the same
 * - Adds professional UI/UX, animations, responsiveness
 * - No extra tilt library, uses framer-motion only
 */

export default function App() {
  // --- state
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  // --- particles init
  const [init, setInit] = useState(false);

useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  }).then(() => {
    setInit(true);
  });
}, []);


  // --- content (unchanged)
  const projects = [
    { id: 1, title: "Hardin Astro App", img: "https://s3.envato.com/files/477047008/Preview%20Image/01_Preview-image.jpg", link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1" },
    { id: 2, title: "Bankfipay App", img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7e88ce7df85582b3f709b9baebbb5996b62b07c8", link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1" },
    { id: 3, title: "Azzunique Payout App", img: "https://sketchelements.com/wp-content/uploads/2019/10/payment-app-ui-kit.png", link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1" },
    { id: 4, title: "Shoponnow Ecommerce App", img: "https://miro.medium.com/v2/resize:fit:1400/1*R8rYPkAAiyRJxb17CpxSaA.jpeg", link: "https://xd.adobe.com/view/6b8ba7b5-2e25-413c-85e3-1692df1b6f0c-3ed8/" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7e74217f1a9cf874a68e5b45b82dea719b3e217d", link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1" },
    { id: 6, title: "Jadoo Travel", img: "https://themewagon.com/wp-content/uploads/2021/10/jadoo-1.png", link: "https://xd.adobe.com/view/9952f5f2-63fa-4d0e-af7a-72d784645d59-cc01/" },
    { id: 7, title: "TextoNow Chating App", img: "https://s3-alpha.figma.com/hub/file/2240472529501579047/9b7aa608-115f-4eb2-bef3-11f67c905b13-cover.png", link: "https://xd.adobe.com/view/dc3a1842-d021-4d17-93ca-f4a4ea3b17e3-8969/" },
    { id: 8, title: "EduLearn Online Platform", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNC2pw_5af9rM78056DxA5dXf00n7QzY2mw&s", link: "#" },
    { id: 9, title: "ShopEase E-commerce App", img: "https://www.figma.com/community/resource/a2938e41-93fa-4836-a3ee-b3c3dc5f861a/thumbnail", link: "#" },
  ];

  const feedbacks = [
    { name: "Subhan Raza", company: "namrah security management", text: "Vinod transformed our app design! Clean, modern, and user-friendly." },
    { name: "Harmeek Kaur", company: "Azzunique Softwares", text: "Amazing experience working with Vinod. He really understands users." },
    { name: "Vikas Solanki", company: "Doomshell Softwares", text: "His designs gave our brand a fresh and professional identity." },
  ];

  const clientLogos = [
    { id: 1, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrUzFPk54hLe2ASbQAK1NFUMLcBP6izlzGw&s" },
    { id: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOT-CVAF6eviF89Iobd0Cee32DGXJubxsnrIVaqN3Wz08UnDEVZaInTrmYVEMxaGMGh4&usqp=CAU" },
    { id: 3, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlgCSHM3jZXcAw8nXbnWSO3gauKou9T9z9pCw-sMQHAkT9nDQCgGekmhgiEpxZeqBf5U&usqp=CAU" },
    { id: 4, logo: "https://play-lh.googleusercontent.com/p2v93Ycop_1x6hart9lbdqzhHN1wvx4tlRRhpQlI7mYQ_OcHbTYBbYUpdyFwYnggKg" },
  ];

  // auto-advance feedback
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  // small motion variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
  };

  return (
    <div className="relative min-h-screen font-sans text-white bg-black overflow-x-hidden">
     {/* ---------- Particles Background ---------- */}
<Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 -z-10"
  options={{
    background: {
      color: "#0f172a", // dark navy bg
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        push: { quantity: 3 },
      },
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#ffffff", "#A4E3B9", "#f472b6"], // white + mint + pink
      },
      links: {
        enable: true,
        distance: 130,
        color: "#ffffff",
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "out" },
      },
      opacity: {
        value: 0.8,
        random: { enable: true, minimumValue: 0.3 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false },
      },
      shape: { type: "circle" },
    },
    detectRetina: true,
  }}
/>

      {/* ---------- Header ---------- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">Vinod Mathur</div>
            <div className="hidden sm:flex items-center px-2 py-1 text-xs rounded bg-white/5 text-gray-200">UI/UX Designer</div>
          </div>

          <nav className="hidden md:flex gap-6 text-gray-200">
            <a href="#expertise" className="hover:text-pink-400 transition">Expertise</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#process" className="hover:text-pink-400 transition">Process</a>
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#feedback" className="hover:text-pink-400 transition">Feedback</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="/resume.pdf" download className="hidden md:inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow">Resume</a>
            <button className="md:hidden text-xl" onClick={() => setMenuOpen((s) => !s)} aria-label="open menu">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 text-center py-4 border-t border-white/5">
            <a href="#expertise" className="block py-2 hover:text-pink-400">Expertise</a>
            <a href="#projects" className="block py-2 hover:text-pink-400">Projects</a>
            <a href="#process" className="block py-2 hover:text-pink-400">Process</a>
            <a href="#about" className="block py-2 hover:text-pink-400">About</a>
            <a href="#feedback" className="block py-2 hover:text-pink-400">Feedback</a>
            <a href="#contact" className="block py-2 hover:text-pink-400">Contact</a>
          </div>
        )}
      </header>

      {/* ---------- Page Content ---------- */}
      <main className="min-h-screen">
        {/* ---------- Hero (with ID-card animation) ---------- */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-28 pb-12">
          {/* ID Card - drops and swings slightly */}
          <motion.div
            initial={{ y: -200, rotate: -8, opacity: 0 }}
            animate={{ y: -10, rotate: [ -6, 6, -3, 3, 0 ], opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 8, duration: 1.6 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="w-64 bg-white/6 border-l-4 border-pink-400 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg">
              <div className="text-white font-bold">Vinod Mathur</div>
              <div className="text-gray-300 text-sm">UI/UX Designer / Product Designer</div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
          >
            I'm UI/UX Designer
          </motion.h1>

          <motion.img
            src="/vector1.png"
            alt="Floating Vector"
            className="mt-8 w-[600px] max-w-full opacity-90 animate-bounce-slow"
            initial={{ y: 0 }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.p
            className="mt-6 text-lg max-w-2xl text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Creative UI/UX Designer with a deep passion for designing seamless digital experiences.  
            Specialized in Figma, Adobe XD, Photoshop, Canva, HTML & CSS.  
            I blend creativity and functionality to craft designs that delight users and drive results.
          </motion.p>

          <motion.div className="mt-6 flex gap-4 z-10 flex-wrap justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.35 }}>
            <a href="/resume.pdf" download className="bg-pink-500 px-6 py-3 rounded-xl font-semibold shadow hover:bg-pink-600 transition">Download Resume</a>
            <a href="#contact" className="bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow hover:bg-purple-600 transition">Contact Me</a>
          </motion.div>
        </section>

        {/* ---------- Expertise ---------- */}
        <motion.section id="expertise" className="py-16 bg-black/30 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <motion.h2 className="text-3xl font-bold mb-6" variants={sectionVariant}>My Expertise</motion.h2>
          <motion.p className="max-w-3xl mx-auto mb-10 text-gray-300" variants={sectionVariant}>
            Over the 2 years, I’ve honed my skills across multiple design platforms and tools.
            My expertise lies in creating intuitive, user-friendly, and visually engaging interfaces for both mobile and web applications.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8 text-5xl">
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><FaFigma className="hover:text-pink-400" /></motion.div>
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><SiAdobexd className="hover:text-pink-400" /></motion.div>
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><SiAdobephotoshop className="hover:text-pink-400" /></motion.div>
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><FaSketch className="hover:text-pink-400" /></motion.div>
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><SiCanva className="hover:text-pink-400" /></motion.div>
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><FaHtml5 className="hover:text-pink-400" /></motion.div>
            <motion.div whileHover={{ scale: 1.18 }} className="p-3"><FaCss3Alt className="hover:text-pink-400" /></motion.div>
          </div>
        </motion.section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="py-16 text-center">
          <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Project Showcase</motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {projects.slice(0, showMore ? projects.length : 5).map((p, i) => (
              <motion.article key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/6 rounded-3xl overflow-hidden shadow-lg border border-white/5"
              >
                <div className="w-full h-56 bg-gray-800 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">Interactive app design & UX flows. Click to view prototype.</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-block bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition">View Project</a>
                </div>
              </motion.article>
            ))}
          </div>

          {!showMore && (
            <div className="mt-8">
              <button onClick={() => setShowMore(true)} className="bg-purple-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-purple-600 transition">
                View More
              </button>
            </div>
          )}
        </section>

        {/* ---------- Process ---------- */}
        <motion.section id="process" className="py-16 bg-black/30 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-3xl font-bold mb-6" variants={sectionVariant}>My Work Process</motion.h2>
          <motion.p className="max-w-3xl mx-auto mb-10 text-gray-300" variants={sectionVariant}>
            I follow a structured design workflow that ensures every project is user-centered, functional, and visually compelling.
          </motion.p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/6 p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2">1. Research & Discovery</h4>
              <p className="text-gray-300">Understand business goals, target users, and competitors to set a strong foundation.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/6 p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2">2. Wireframing & Prototyping</h4>
              <p className="text-gray-300">Create low to high-fidelity wireframes and interactive prototypes to map user journeys.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/6 p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2">3. Visual Design & Testing</h4>
              <p className="text-gray-300">Apply modern UI trends, ensure accessibility, and conduct usability testing for perfection.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* ---------- About ---------- */}
        <motion.section id="about" className="py-16 text-center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.img src="/images/profile (2).jpeg" alt="Profile" className="mx-auto w-40 h-40 rounded-full border-4 border-pink-400 shadow-lg" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} />
          <h3 className="text-3xl font-bold mt-6">About Me</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            I’m Vinod Mathur, a passionate UI/UX Designer who loves turning complex problems into elegant design solutions.
            With 2 years of experience in crafting intuitive digital interfaces, I focus on creating meaningful user experiences
            that blend usability, aesthetics, and innovation.
          </p>
        </motion.section>

        {/* ---------- Feedback (auto-scroll) ---------- */}
        <section id="feedback" className="py-16 bg-black/40 text-center">
          <h3 className="text-3xl font-bold mb-6">Quick Feedbacks</h3>
          <div className="max-w-2xl mx-auto relative min-h-[140px]">
            {feedbacks.map((f, idx) => {
              const isActive = idx === currentFeedback;
              return (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -8 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 mx-auto w-full ${isActive ? "" : "pointer-events-none"}`}
                >
                  <div className="bg-white/6 p-8 rounded-2xl shadow-lg">
                    <p className="text-lg italic text-gray-200">"{f.text}"</p>
                    <h4 className="mt-4 font-semibold text-pink-400">{f.name}</h4>
                    <p className="text-gray-400 text-sm">{f.company}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ---------- Client Logos ---------- */}
        <motion.section id="clients" className="py-12 bg-black/30 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-6">Previous Clients</h3>
          <div className="flex flex-wrap justify-center gap-8 px-6 items-center">
            {clientLogos.map((c) => (
              <motion.img key={c.id} whileHover={{ scale: 1.08 }} src={c.logo} alt="Client Logo" className="h-12 opacity-80 filter grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </motion.section>

        {/* ---------- Contact / Footer ---------- */}
        <motion.footer id="contact" className="py-12 bg-black/50 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-3">Contact Me</h3>
          <p className="text-gray-300 mb-3">Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">Vikymathur532@gmail.com</a></p>
          <p className="text-gray-300">Phone: <span className="text-pink-400">+91 7976680554</span></p>
          <div className="mt-6 text-sm text-gray-400">© 2025 Vinod Mathur. All Rights Reserved.</div>
        </motion.footer>
      </main>

      {/* ---------- small floating CSS animation ---------- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
