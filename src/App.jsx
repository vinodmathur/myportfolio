import React from "react";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";
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
      title: "Project One",
      description: "A cool project showcasing React and Tailwind.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another amazing project built with Framer Motion.",
      link: "#",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">MyPortfolio</div>
          <div className="space-x-6">
            <a href="#about" className="hover:text-green-500">About</a>
            <a href="#projects" className="hover:text-green-500">Projects</a>
            <a href="#contact" className="hover:text-green-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Hi, I’m Vinod Mathur
          </motion.h1>
          <Typed
            strings={[
              "Frontend Developer",
              "UI/UX Designer",
              "React Enthusiast",
            ]}
            <ReactTyped
  strings={["Developer", "Designer", "Creator"]}
  typeSpeed={40}
  backSpeed={50}
  loop
/>


          <div className="mt-6">
            <a
              href="#contact"
              className="bg-white text-green-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <User className="w-6 h-6" /> About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate frontend developer with a knack for building
          beautiful and responsive web applications. Skilled in React, Tailwind,
          and modern web technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="w-6 h-6" /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white shadow rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-green-500 hover:underline"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Mail className="w-6 h-6" /> Contact
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Vinod Mathur. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:text-green-400">
            <Icon icon="mdi:github" width="24" />
          </a>
          <a href="#" className="hover:text-green-400">
            <Icon icon="mdi:linkedin" width="24" />
          </a>
          <a href="#" className="hover:text-green-400">
            <Icon icon="mdi:twitter" width="24" />
          </a>
        </div>
      </footer>
    </div>
  );
}
