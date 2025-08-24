import React from "react";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const projects = [
    { 
      id: 1, 
      title: "Hardin Astro App", 
      img: "https://s.tmimgcdn.com/scr/1200x627/415900/astroscope-astrology-mobile-app-figma-template_415907-original.png",
      link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1&t=zsP4TKtAOWejU35x-1"
    },
    { 
      id: 2, 
      title: "Bankfipay App", 
      img: "https://s3-alpha.figma.com/hub/file/5497869694/4fa7e9eb-5b21-434e-9e8d-4562cac10c87-cover.png", 
      link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1&t=U0Ao0dPcx37hwHbk-1" 
    },
    { 
      id: 3, 
      title: "Azzunique Payout App", 
      img: "https://www.figma.com/community/resource/370d4109-0547-46a2-be7a-8ba228f860a3/thumbnail", 
      link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1&t=a11MAci8rLUOqTXw-1" 
    },
    { 
      id: 4, 
      title: "Shoponnow App", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dBMh2FkO3nGdiK02bLyq9EVWYaY5n9czbQ&s", 
      link: "https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258&t=WrhqCOU1GJCzNwhW-1" 
    },
    { 
      id: 5, 
      title: "Eatfit Food Delivery Partner App", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6eRByyrum7NXdhH-RCfkZ6YwZY3oJBoGtQ&s", 
      link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1&t=9EdfzW0hXWLE9vLO-1" 
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      
      {/* 🌌 Fluid Animated Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <svg className="absolute w-[150%] h-[150%] animate-[float_25s_ease-in-out_infinite] opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <g transform="translate(400,400)">
            <path d="M160,-230C210,-190,260,-150,280,-90C300,-30,290,40,250,90C210,140,140,170,70,200C0,230,-70,260,-140,240C-210,220,-280,160,-300,90C-320,20,-280,-50,-230,-110C-180,-170,-120,-220,-50,-250C20,-280,90,-270,160,-230Z" fill="url(#fluidGrad)" />
          </g>
          <defs>
            <linearGradient id="fluidGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="25%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#4f46e5" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Human/UI Vectors */}
        <svg className="absolute top-10 left-10 w-32 h-32 animate-[float2_20s_ease-in-out_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="32" fill="#06b6d4" opacity="0.3" />
          <path d="M32 10a10 10 0 100 20 10 10 0 000-20z" fill="#fff" />
        </svg>

        <svg className="absolute bottom-20 right-10 w-28 h-28 animate-[float3_18s_ease-in-out_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="32" fill="#f472b6" opacity="0.25" />
          <path d="M32 12a8 8 0 100 16 8 8 0 000-16z" fill="#fff" />
        </svg>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-10%, -10%) scale(1); }
          50% { transform: translate(10%, 10%) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-20px) translateX(10px) scale(1.05); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(15px) translateX(-15px) scale(1.05); }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vinod Mathur</h1>
          <nav className="space-x-6">
            <a href="#expertise" className="hover:text-pink-400">Expertise</a>
            <a href="#projects" className="hover:text-pink-400">Projects</a>
            <a href="#about" className="hover:text-pink-400">About</a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          UI/UX Designer
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-gray-300">
          Creative UI/UX Designer with expertise in Figma, Adobe XD, Photoshop, 
          Canva, HTML & CSS. I design modern, fluid, and intuitive experiences.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-teal-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-teal-600"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-600"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">My Expertise</h3>
          <div className="flex flex-wrap justify-center gap-10 text-6xl">
            <FaFigma className="hover:text-pink-400" />
            <SiAdobexd className="hover:text-pink-400" />
            <SiAdobephotoshop className="hover:text-pink-400" />
            <FaSketch className="hover:text-pink-400" />
            <SiCanva className="hover:text-pink-400" />
            <FaHtml5 className="hover:text-pink-400" />
            <FaCss3Alt className="hover:text-pink-400" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Project Showcase</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4">
                    Modern UI/UX project with fluid colors, smooth interactions, and creative layouts.
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6
