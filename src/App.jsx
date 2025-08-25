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
    { id: 2, title: "Bankfipay App", img: "https://s3-alpha.figma.com/hub/file/5497869694/4fa7e9eb-5b21-434e-9e8d-4562cac10c87-cover.png", link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1" },
    { id: 3, title: "Azzunique Payout App", img: "https://www.figma.com/community/resource/370d4109-0547-46a2-be7a-8ba228f860a3/thumbnail", link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1" },
    { id: 4, title: "Shoponnow App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dBMh2FkO3nGdiK02bLyq9EVWYaY5n9czbQ&s", link: "https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6eRByyrum7NXdhH-RCfkZ6YwZY3oJBoGtQ&s", link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1" },
    { id: 6, title: "TravelMate App", img: "https://s3-alpha.figma.com/hub/file/5551975764/45488a29-99f3-4c64-9549-629255337435-cover.png", link: "#" },
    { id: 7, title: "FitBuddy Health App", img: "https://cdn.dribbble.com/userupload/11887446/file/original-f34f4fd38dfe7aa5e9397dcafd7e536c.png?resize=400x300", link: "#" },
    { id: 8, title: "EduLearn Online Platform", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNC2pw_5af9rM78056DxA5dXf00n7QzY2mw&s", link: "#" },
    { id: 9, title: "ShopEase E-commerce App", img: "https://www.figma.com/community/resource/a2938e41-93fa-4836-a3ee-b3c3dc5f861a/thumbnail", link: "#" },
  ];

  const feedbacks = [
    { name: "Rohit Sharma", company: "TechVision", text: "Vinod transformed our app design! Clean, modern, and user-friendly." },
    { name: "Priya Patel", company: "Foodiez", text: "Amazing experience working with Vinod. He really understands users." },
    { name: "John Williams", company: "FinEdge", text: "His designs gave our brand a fresh and professional identity." },
  ];

  const clientLogos = [
    { id: 1, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 3, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 4, logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" },
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
        {/* === HEADER, HERO, EXPERTISE, PROJECTS, PROCESS, ABOUT (unchanged) === */}

        {/* Feedback Section */}
        <section id="feedback" className="py-20 text-center bg-black/40">
          <h3 className="text-3xl font-bold mb-10">What Clients Say</h3>
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
