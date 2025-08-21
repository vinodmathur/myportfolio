import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ExternalLink,
  User,
  Briefcase,
  Layout,
  Menu,
  X,
} from "lucide-react";
import { Icon } from "@iconify/react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "E-Commerce App Redesign",
      cover:
        "https://www.figma.com/community/resource/ad8c746d-c145-4b2e-9a46-ee1281669059/thumbnail",
      desc: "Sleek redesign of e-commerce mobile app with seamless checkout flow.",
      type: "Mobile Design",
      link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay",
      icon: "fluent:cart-3d-24-filled",
    },
    {
      id: 2,
      name: "Dashboard UI Kit",
      cover: "https://source.unsplash.com/600x400/?dashboard,ui,web",
      desc: "Professional dashboard design system with reusable components.",
      type: "Web Design",
      link: "https://figma.com/file/demo-dashboard",
      icon: "fluent:board-3d-24-filled",
    },
  ];

  return (
    <div className="min-h-screen relative text-white font-[Montserrat] flex flex-col overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a33] via-[#003366] to-[#006699] animate-[gradient_15s_ease_infinite] bg-[length:400%_400%] -z-10"></div>
      <style>{`@keyframes gradient {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-black/30 backdrop-blur-lg border-b border-white/10 z-50 flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-extrabold text-white drop-shadow-[0_0_10px_#4fffff]">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#projects" className="hover:text-cyan-300 flex items-center gap-1">
            <Layout size={16} /> Projects
          </a>
          <a href="#about" className="hover:text-cyan-300 flex items-center gap-1">
            <User size={16} /> About
          </a>
          <a href="#contact" className="hover:text-cyan-300 flex items-center gap-1">
            <Mail size={16} /> Contact
          </a>
          <a
            href="#contact"
            className="bg-cyan-500/20 px-6 py-2 rounded-full border border-cyan-400/40 hover:scale-105 transition"
          >
            <Briefcase size={16} className="inline mr-2" /> Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-black/70 backdrop-blur-lg rounded-xl p-4 flex flex-col space-y-3 md:hidden">
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
          <a href="#contact" className="bg-cyan-500/20 px-4 py-2 rounded-md text-center">Hire Me</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-[0_0_20px_#4fffff]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          className="mt-6 text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I'm a UI/UX Designer
        </motion.h2>
        <p className="mt-4 max-w-xl text-lg opacity-90">
          I design sleek and modern user experiences in{" "}
          <strong>Figma</strong>.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="#projects"
            className="bg-cyan-500/20 px-6 py-3 rounded-full border border-cyan-400/40 hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white/20 px-6 py-3 rounded-full border border-white/30 hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-[0_0_10px_#4fffff]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-lg hover:shadow-[0_0_20px_#4fffff] transition"
            >
              <img
                src={project.cover}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl mb-4 border border-white/20"
              />
              <h3 className="flex items-center gap-2 text-xl font-bold mb-1">
                <Icon icon={project.icon} width="22" />
                {project.name}
              </h3>
              <p className="text-sm opacity-80 mb-2 italic">{project.type}</p>
              <p className="opacity-90 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 hover:scale-105 transition"
              >
                <ExternalLink size={16} className="inline mr-2" /> View
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-6 text-center">
        <p className="text-sm opacity-80">© 2025 MyPortfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#"><Icon icon="mdi:linkedin" width="22" /></a>
          <a href="#"><Icon icon="mdi:github" width="22" /></a>
          <a href="#"><Icon icon="mdi:dribbble" width="22" /></a>
        </div>
      </footer>
    </div>
  );
}
