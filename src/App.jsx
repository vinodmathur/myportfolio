import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ExternalLink,
  User,
  Briefcase,
  Layout,
} from "lucide-react";
import { Icon } from "@iconify/react";

export default function App() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce App Redesign",
      cover: "https://www.figma.com/community/resource/ad8c746d-c145-4b2e-9a46-ee1281669059/thumbnail",
      desc: "A sleek redesign of a modern e-commerce mobile app with intuitive UI and seamless checkout flow.",
      type: "Mobile Design",
      link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1&t=DDCZEEVEAzX86iee-1",
      icon: "fluent:cart-3d-24-filled",
    },
    {
      id: 2,
      name: "Dashboard UI Kit",
      cover: "https://source.unsplash.com/600x400/?dashboard,ui,web",
      desc: "A professional dashboard design system with reusable Figma components and consistent color scheme.",
      type: "Web Design",
      link: "https://figma.com/file/demo-dashboard",
      icon: "fluent:board-3d-24-filled",
    },
    {
      id: 3,
      name: "Portfolio Website",
      cover: "https://source.unsplash.com/600x400/?portfolio,website,ui",
      desc: "Minimal and aesthetic portfolio website showcasing creative work, responsive across devices.",
      type: "Web Design",
      link: "https://figma.com/file/demo-portfolio",
      icon: "fluent:person-3d-24-filled",
    },
    {
      id: 4,
      name: "Mobile Banking App UI",
      cover: "https://source.unsplash.com/600x400/?mobile,banking,app,ui",
      desc: "A modern mobile banking app design with sleek cards, intuitive navigation, and enhanced user security features.",
      type: "Mobile Design",
      link: "https://figma.com/file/demo-banking",
      icon: "fluent:money-3d-24-filled",
    },
    {
      id: 5,
      name: "Creative Agency Landing Page",
      cover: "https://source.unsplash.com/600x400/?web,design,landing,creative",
      desc: "A vibrant landing page concept for a creative agency with dynamic sections, engaging visuals, and vector illustrations.",
      type: "Web Design",
      link: "https://figma.com/file/demo-agency",
      icon: "fluent:design-ideas-24-filled",
    },
  ];

  return (
    <div className="min-h-screen relative text-white font-[Montserrat] flex flex-col overflow-hidden">
      {/* Fluid animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002b63] via-[#004080] to-[#00778f] animate-[gradient_15s_ease_infinite] bg-[length:400%_400%] -z-10"></div>
      <style>{`@keyframes gradient { 0% {background-position:0% 50%} 50% {background-position:100% 50%} 100% {background-position:0% 50%} }`}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-black/40 backdrop-blur-lg border-b border-white/10 z-50 flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-extrabold text-white drop-shadow-[0_0_10px_#4fffff]">
          MyPortfolio
        </h1>
        <div className="space-x-6 flex items-center">
          <a
            href="#projects"
            className="flex items-center gap-1 text-white/90 hover:text-white transition"
          >
            <Layout size={16} /> Projects
          </a>
          <a
            href="#about"
            className="flex items-center gap-1 text-white/90 hover:text-white transition"
          >
            <User size={16} /> About
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-white/90 hover:text-white transition"
          >
            <Mail size={16} /> Contact
          </a>
          <button
            asChild
            className="bg-white/20 text-white rounded-full px-6 py-2 font-bold tracking-wide backdrop-blur-md border border-white/20 transition transform hover:scale-105 hover:brightness-90 hover:shadow-[0_0_20px_#4fffff]"
          >
            <a href="#contact">
              <Briefcase size={16} className="inline mr-2" />
              Hire Me
            </a>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white p-1 shadow-[0_0_20px_#4fffff]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <h2 className="mt-6 text-4xl font-extrabold text-white drop-shadow-[0_0_10px_#4fffff]">
          Hi, I'm a UI/UX Designer
        </h2>
        <p className="mt-4 text-white max-w-xl text-lg">
          I design sleek and modern user experiences in <strong>Figma</strong>{" "}
          and turn ideas into beautiful, functional designs.
        </p>
        <div className="mt-6 space-x-4">
          <button
            asChild
            className="bg-white/20 text-white rounded-full px-8 py-3 font-bold tracking-wide backdrop-blur-md border border-white/30 transition transform hover:scale-105 hover:bg-white/30 hover:shadow-[0_0_20px_#ffffff99]"
          >
            <a href="#projects">
              <Layout size={18} className="inline mr-2" />
              View Projects
            </a>
          </button>
          <button
            asChild
            className="bg-white/20 text-white rounded-full px-8 py-3 font-bold tracking-wide backdrop-blur-md border border-white/30 transition transform hover:scale-105 hover:bg-white/30 hover:shadow-[0_0_20px_#ffffff99]"
          >
            <a href="#contact">
              <Mail size={18} className="inline mr-2" />
              Contact Me
            </a>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-[0_0_10px_#4fffff]">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_20px_#4fffff] transition"
            >
              <img
                src={project.cover}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl mb-4 border-4 border-white shadow-md"
              />
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Icon icon={project.icon} width="22" height="22" />
                {project.name}
              </h3>
              <p className="text-white mb-2 italic">{project.type}</p>
              <p className="text-white mb-4">{project.desc}</p>
              <button
                asChild
                className="bg-white/20 text-white rounded-full px-6 py-2 font-bold tracking-wide border border-white/30 backdrop-blur-lg shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition transform hover:scale-105 hover:bg-white/30 hover:shadow-[0_0_20px_#ffffff99]"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="inline mr-2" />
                  View
                </a>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_#4fffff]">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-white text-lg">
          I’m a passionate UI/UX Designer with expertise in{" "}
          <strong>Figma</strong>. I craft modern, minimalistic, and
          user-friendly designs, including detailed vector illustrations. My
          focus is to create smooth and aesthetic experiences that feel natural.
          Skilled in wireframing, prototyping, interactive UI animation, and
          vector asset integration, I also optimize for accessibility and
          responsiveness across devices.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_#4fffff]">
          Contact Me
        </h2>
        <p className="text-white mb-8 text-lg">
          Let’s collaborate! Reach out via email or download my resume below.
        </p>
        <div className="space-x-4">
          <button
            asChild
            className="bg-white/20 text-white rounded-full px-8 py-3 font-bold tracking-wide backdrop-blur-md border border-white/20 transition transform hover:scale-105 hover:bg-white/30 hover:shadow-[0_0_20px_#ffffff99]"
          >
            <a href="mailto:youremail@example.com">
              <Mail size={18} className="inline mr-2" />
              Email Me
            </a>
          </button>
          <button
            asChild
            className="bg-white/20 text-white rounded-full px-8 py-3 font-bold tracking-wide backdrop-blur-md border border-white/20 transition transform hover:scale-105 hover:bg-white/30 hover:shadow-[0_0_20px_#ffffff99]"
          >
            <a href="YOUR_RESUME_LINK_HERE" target="_blank">
              <Download size={18} className="inline mr-2" />
              Download Resume
            </a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 text-center py-6 mt-auto">
        <p className="text-white text-sm font-semibold">
          © 2025 MyPortfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
