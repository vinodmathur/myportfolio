import { motion } from "framer-motion";

// Project data
const projects = [
  {
    title: "E-Commerce UI",
    desc: "Modern shopping experience with React & Tailwind.",
    img: "https://source.unsplash.com/600x400/?ecommerce,website",
  },
  {
    title: "Portfolio Website",
    desc: "Personal brand portfolio with animations & dark mode.",
    img: "https://source.unsplash.com/600x400/?portfolio,design",
  },
  {
    title: "Mobile Banking App",
    desc: "Secure and sleek mobile app concept with Figma.",
    img: "https://source.unsplash.com/600x400/?banking,app",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard with clean charts & UX focus.",
    img: "https://source.unsplash.com/600x400/?dashboard,ui",
  },
  {
    title: "Food Delivery UI",
    desc: "Interactive restaurant ordering UI in React.",
    img: "https://source.unsplash.com/600x400/?food,delivery",
  },
  {
    title: "Crypto Wallet UI",
    desc: "Dark futuristic wallet UI design in Figma.",
    img: "https://source.unsplash.com/600x400/?crypto,finance",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-400">Vinod Mathur</h1>
          <nav className="space-x-6 text-gray-300">
            <a href="#about" className="hover:text-purple-400 transition">
              About Me
            </a>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="hover:text-purple-400 transition font-semibold"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / About Me Section */}
      <section
        id="about"
        className="text-center py-24 px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Frontend Developer & UI/UX Designer
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I design and build modern, user-friendly web and mobile applications.
          Skilled in Figma, Adobe XD, Photoshop, and Illustrator with a passion
          for creating clean and functional UI/UX.
        </p>
      </section>

      {/* Auto-Scroll Skills */}
      <section className="overflow-hidden whitespace-nowrap border-y border-gray-700 py-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <motion.div
          className="flex space-x-16 text-xl font-semibold text-gray-200"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span>🎨 Figma</span>
          <span>🖌 Adobe XD</span>
          <span>📐 Sketch</span>
          <span>📷 Photoshop</span>
          <span>🎭 Illustrator</span>
          <span>⚡ React</span>
          <span>🌐 HTML & CSS</span>
          <span>🎨 UI/UX Design</span>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">
          🚀 Projects Showcase
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                  <button className="px-4 py-2 text-sm rounded-lg bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition">
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-purple-400">
                  {project.title}
                </h4>
                <p className="text-gray-400 mt-2 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="text-center py-20 bg-gradient-to-t from-gray-900 to-black"
      >
        <h3 className="text-3xl font-bold mb-6">📩 Get in Touch</h3>
        <p className="text-gray-400 mb-6">
          Let’s collaborate and create something amazing together!
        </p>
        <a
          href="mailto:vinod@example.com"
          className="px-6 py-3 rounded-lg bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-500 text-center py-4 text-sm">
        © {new Date().getFullYear()} Vinod Mathur · Designed with ❤️
      </footer>
    </div>
  );
}

export default App;
