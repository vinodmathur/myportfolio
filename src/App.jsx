// src/App.jsx
import { motion } from "framer-motion";

function App() {
  const projects = [
    {
      title: "Mobile App UI – Figma",
      desc: "Modern e-commerce UI designed in Figma",
      img: "https://via.placeholder.com/400x250?text=Figma+UI",
    },
    {
      title: "Web Dashboard – Adobe XD",
      desc: "Analytics dashboard with dark theme",
      img: "https://via.placeholder.com/400x250?text=Adobe+XD",
    },
    {
      title: "Portfolio Website – React",
      desc: "Personal portfolio with animations",
      img: "https://via.placeholder.com/400x250?text=React+Portfolio",
    },
    {
      title: "Brand Identity – Illustrator",
      desc: "Creative logo & branding design",
      img: "https://via.placeholder.com/400x250?text=Illustrator",
    },
    {
      title: "Landing Page – Photoshop",
      desc: "Marketing landing page with 3D effects",
      img: "https://via.placeholder.com/400x250?text=Photoshop",
    },
    {
      title: "Wireframes – Sketch",
      desc: "Low-fidelity prototypes for SaaS app",
      img: "https://via.placeholder.com/400x250?text=Sketch",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-900 to-gray-900 shadow-lg fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Vinod Mathur
        </h1>
        <div className="space-x-6 text-gray-300 text-sm font-medium">
          <a href="#about" className="hover:text-purple-400 transition">About Me</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact Me</a>
          <a href="/resume.pdf" className="hover:text-purple-400 transition">Resume</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 py-24 max-w-6xl mx-auto">
        {/* About Section */}
        <section id="about" className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am a passionate <span className="text-purple-400">UI/UX Designer</span> and 
            <span className="text-pink-400"> Frontend Developer</span>, skilled in creating 
            clean, modern, and user-friendly experiences using tools like Figma, Adobe XD, 
            Sketch, Illustrator, and Photoshop.
          </p>
        </section>

        {/* Auto Scroll Skills */}
        <div className="overflow-hidden whitespace-nowrap py-4 border-y border-gray-700 mb-20">
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
        <section id="projects">
          <h3 className="text-3xl font-bold mb-10 text-center">🚀 Projects Showcase</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300"
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-purple-400">{project.title}</h4>
                  <p className="text-gray-400 mt-2">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-4">📩 Contact Me</h3>
          <p className="text-gray-400 mb-6">Let’s connect and build something amazing together.</p>
          <a
            href="mailto:vinodmathur@gmail.com"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Say Hello
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-4 mt-20 text-center text-gray-500 text-sm border-t border-gray-700">
        <p>© {new Date().getFullYear()} Vinod Mathur • UI/UX Designer & Developer</p>
      </footer>
    </div>
  );
}

export default App;
