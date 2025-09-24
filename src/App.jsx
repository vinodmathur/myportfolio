// App.jsx
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaBars } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";
import { motion } from "framer-motion";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const particlesInit = async (main) => { await loadFull(main); };

  const projects = [
    { id: 1, title: "Hardin Astro App", img: "https://s.tmimgcdn.com/scr/1200x627/415900/astroscope-astrology-mobile-app-figma-template_415907-original.png", link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1" },
    { id: 2, title: "Bankfipay App", img: "https://s3-alpha.figma.com/hub/file/2343282784/81506202-a236-4a47-9093-7e8f64e63743-cover.png", link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1" },
    { id: 3, title: "Azzunique Payout App", img: "https://sketchelements.com/wp-content/uploads/2019/10/payment-app-ui-kit.png", link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1" },
    { id: 4, title: "Shoponnow Ecommerce App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dBMh2FkO3nGdiK02bLyq9EVWYaY5n9czbQ&s", link: "https://xd.adobe.com/view/6b8ba7b5-2e25-413c-85e3-1692df1b6f0c-3ed8/" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6eRByyrum7NXdhH-RCfkZ6YwZY3oJBoGtQ&s", link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1" },
    { id: 6, title: "Jadoo Travel", img: "https://themewagon.com/wp-content/uploads/2021/10/jadoo-1.png", link: "https://xd.adobe.com/view/9952f5f2-63fa-4d0e-af7a-72d784645d59-cc01/" },
    { id: 7, title: "TextoNow Chating App", img: "https://designshack.net/wp-content/uploads/Chat-App-UI-Templates-Kit-1024x682.jpg", link: "https://xd.adobe.com/view/dc3a1842-d021-4d17-93ca-f4a4ea3b17e3-8969/" },
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

  useEffect(() => {
    const interval = setInterval(() => setCurrentFeedback((prev) => (prev + 1) % feedbacks.length), 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          particles: { color: { value: "#ffffff" }, links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 }, move: { enable: true, speed: 1 }, number: { value: 80 }, opacity: { value: 0.5 }, shape: { type: "circle" }, size: { value: { min: 1, max: 3 } } },
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
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="bg-gradient-to-r from-pink-400 to-purple-500 px-6 py-4 rounded-xl shadow-lg inline-block mb-8"
          >
            <p className="text-white font-semibold">Vinod Mathur</p>
            <p className="text-white text-sm">UI/UX Designer / Product Designer</p>
          </motion.div>
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

        {/* Expertise, Projects, Process, About, Feedback, Clients, Contact sections */}
        {/* Keep the original 239+ lines content, add motion hover & responsive design */}
      </div>

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
