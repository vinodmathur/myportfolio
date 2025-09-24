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
    { id: 1, title: "Hardin Astro App", img: "https://s.tmimgcdn.com/scr/1200x627/415900/astroscope-astrology-mobile-app-figma-template_415907-original.png", link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1" },
    { id: 2, title: "Bankfipay App", img: "https://s3-alpha.figma.com/hub/file/2343282784/81506202-a236-4a47-9093-7e8f64e63743-cover.png", link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1" },
    { id: 3, title: "Azzunique Payout App", img: "https://sketchelements.com/wp-content/uploads/2019/10/payment-app-ui-kit.png", link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1" },
    { id: 4, title: "Shoponnow Ecommerce App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dBMh2FkO3nGdiK02bLyq9EVWYaY5n9czbQ&s", link: "https://xd.adobe.com/view/6b8ba7b5-2e25-413c-85e3-1692df1b6f0c-3ed8/" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6eRByyrum7NXdhH-RCfkZ6YwZY3oJBoGtQ&s", link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1" },
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

  // Auto-scroll feedbacks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

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
            <nav className="hidden md:flex space-x-6">
              <a href="#expertise" className="hover:text-pink-400">Expertise</a>
              <a href="#projects" className="hover:text-pink-400">Projects</a>
              <a href="#process" className="hover:text-pink-400">Process</a>
              <a href="#about" className="hover:text-pink-400">About</a>
              <a href="#feedback" className="hover:text-pink-400">Feedback</a>
              <a href="#contact" className="hover:text-pink-400">Contact</a>
            </nav>
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
              <a href="#feedback" className="block hover:text-pink-400">Feedback</a>
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

        {/* Expertise */}
        <section id="expertise" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl font-bold mb-10">My Expertise</h3>
          <p className="max-w-3xl mx-auto mb-10 text-gray-300">
            Over the 2 years, I’ve honed my skills across multiple design platforms and tools.  
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

        {/* Projects */}
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
            <button onClick={() => setShowMore(true)} className="mt-10 bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-600 transition">
              View More
            </button>
          )}
        </section>

        {/* Process */}
        <section id="process" className="py-20 bg-black/30 text-center">
          <h3 className="text-3xl font-bold mb-10">My Work Process</h3>
          <p className="max-w-3xl mx-auto mb-12 text-gray-300">
            I follow a structured design workflow that ensures every project is user-centered, functional, and visually compelling.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">1. Research & Discovery</h4>
              <p className="text-gray-300">Understand business goals, target users, and competitors to set a strong foundation.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">2. Wireframing & Prototyping</h4>
              <p className="text-gray-300">Create low to high-fidelity wireframes and interactive prototypes to map user journeys.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30">
              <h4 className="text-xl font-semibold mb-3">3. Visual Design & Testing</h4>
              <p className="text-gray-300">Apply modern UI trends, ensure accessibility, and conduct usability testing for perfection.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-black/30 text-center">
          <img src="/images/profile (2).jpeg" alt="Profile" className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg" />
          <h3 className="text-3xl font-bold mt-6">About Me</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            I’m Vinod Mathur, a passionate UI/UX Designer who loves turning complex problems into elegant design solutions.  
            With 2 years of experience in crafting intuitive digital interfaces, I focus on creating meaningful user experiences 
            that blend usability, aesthetics, and innovation.
          </p>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-20 text-center bg-black/40">
          <h3 className="text-3xl font-bold mb-10">Quick Feedbacks</h3>
          <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-2xl shadow-lg transition-all duration-500">
            <p className="text-lg italic text-gray-200">"{feedbacks[currentFeedback].text}"</p>
            <h4 className="mt-4 font-semibold text-pink-400">{feedbacks[currentFeedback].name}</h4>
            <p className="text-gray-400 text-sm">{feedbacks[currentFeedback].company}</p>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-10 bg-black/30">
          <h3 className="text-2xl font-bold text-center mb-6">Previous Clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clientLogos.map((c) => (
              <img key={c.id} src={c.logo} alt="Client Logo" className="h-12 opacity-70 hover:opacity-100 transition" />
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="py-10 text-center bg-black/50">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">Vikymathur532@gmail.com</a></p>
          <p>Phone: <span className="text-pink-400">+91 7976680554</span></p>
          <p className="mt-6 text-gray-400 text-sm">© 2025 Vinod Mathur. All Rights Reserved.</p>
        </footer>
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
