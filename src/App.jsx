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

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="py-4 bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
          <div className="space-x-6 hidden sm:block">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-indigo-100 via-white to-indigo-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-indigo-600">Vinod</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-2xl text-gray-600"
        >
          A Passionate <span className="font-semibold">UI/UX Designer</span>
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          I’m a UI/UX Designer who loves crafting clean, modern, and user-friendly designs. 
          With experience in mobile and web design, I focus on creating intuitive digital 
          experiences that delight users.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">UI/UX Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.desc}</p>
                  <a
                    href="#"
                    className="text-indigo-600 text-sm font-medium hover:underline"
                  >
                    View Case Study →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-6">
          Interested in working together? Let’s connect!
        </p>
        <a
          href="mailto:vinod@example.com"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
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
