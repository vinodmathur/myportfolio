import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

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
            collisions: { enable: false },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
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
            <nav className="space-x-6">
              <a href="#expertise" className="hover:text-pink-400">Expertise</a>
              <a href="#projects" className="hover:text-pink-400">Projects</a>
              <a href="#about" className="hover:text-pink-400">About</a>
              <a href="#contact" className="hover:text-pink-400">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
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
              className="bg-pink-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-pink-600"
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

        {/* Expertise, Projects, About, Contact Sections */}
        {/* Add same as your previous code */}

      </div>
    </div>
  );
}
