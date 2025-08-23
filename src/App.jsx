// src/App.jsx
import { motion } from "framer-motion";

function App() {
  const projects = [
    { title: "Mobile App UI – Figma", desc: "Modern e-commerce UI designed in Figma" },
    { title: "Web Dashboard – Adobe XD", desc: "Analytics dashboard with dark theme" },
    { title: "Portfolio Website – React", desc: "Personal portfolio with animations" },
    { title: "Brand Identity – Illustrator", desc: "Creative logo & branding design" },
    { title: "Landing Page – Photoshop", desc: "Marketing landing page with 3D effects" },
    { title: "Wireframes – Sketch", desc: "Low-fidelity prototypes for SaaS app" },
  ];

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Vinod Mathur
        </h1>
        <h2 className="text-xl text-gray-300">UI/UX Designer & Frontend Developer</h2>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto">
          Crafting clean, modern, and user-friendly digital experiences with Figma, Adobe XD, 
          Sketch, Illustrator, and Photoshop.
        </p>
      </header>

      {/* Skills Auto-Scroll */}
      <div className="overflow-hidden whitespace-nowrap py-4 border-y border-gray-700 mb-16">
        <motion.div
          className="inline-block text-lg font-semibold text-gray-300"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          🔥 Figma • Adobe XD • Sketch • Illustrator • Photoshop • React • Tailwind • Firebase •
          Prototyping • Wireframes • Branding
        </motion.div>
      </div>

      {/* Projects Showcase */}
      <section>
        <h3 className="text-2xl font-semibold mb-8 text-center">🚀 Projects Showcase</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-purple-400 mb-2">{project.title}</h4>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vinod Mathur • All rights reserved.
      </footer>
    </div>
  );
}

export default App;
