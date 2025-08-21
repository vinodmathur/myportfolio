// App.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Mobile App Redesign", desc: "UI/UX focused redesign of an e-commerce app", img: "/images/ui1.png" },
  { title: "Dashboard UI", desc: "Analytics dashboard with modern UI components", img: "/images/ui2.png" },
  { title: "Portfolio Website", desc: "Personal portfolio with clean minimal design", img: "/images/ui3.png" },
  { title: "Landing Page", desc: "Responsive landing page with creative layout", img: "/images/ui4.png" },
  { title: "Finance App UI", desc: "Fintech mobile app with smooth navigation", img: "/images/ui5.png" },
  { title: "Food Delivery App", desc: "UI/UX for hyperlocal food delivery experience", img: "/images/ui6.png" },
];

// Skills Data
const skills = [
  { name: "UI Design", level: 90 },
  { name: "UX Research", level: 85 },
  { name: "Wireframing", level: 80 },
  { name: "Prototyping", level: 75 },
];

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="py-4 bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
          <div className="space-x-6 hidden sm:block">
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-indigo-100 via-white to-indigo-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-indigo-600">Vinod</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-2xl text-gray-600 max-w-2xl"
        >
          A Passionate <span className="font-semibold">UI/UX Designer</span> crafting modern, user-friendly designs
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            UI/UX Projects
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img src={project.img} alt={project.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">
                    View Case Study →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/profile (2).jpeg."
              alt="Profile"
              className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I’m a UI/UX Designer with a passion for building intuitive and engaging user
              experiences. I combine research, creativity, and design thinking to bring
              impactful digital solutions to life.
            </p>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-indigo-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Interested in working together? Let’s connect and create something amazing.
        </p>
        <a
          href="mailto:vinod@example.com"
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white border-t text-gray-600">
        © {new Date().getFullYear()} Vinod Mathur. All rights reserved.
      </footer>
    </div>
  );
}
