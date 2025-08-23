// src/App.jsx
import { FaFigma } from "react-icons/fa";
import { 
  SiAdobexd, 
  SiSketch, 
  SiAdobephotoshop, 
  SiHtml5, 
  SiCss3, 
  SiSvg 
} from "react-icons/si";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold tracking-wide">Vinod Mathur</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-teal-400 transition">About Me</a></li>
            <li><a href="#expertise" className="hover:text-teal-400 transition">Expertise</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact Me</a></li>
            <li>
              <a 
                href="/resume.pdf" 
                download
                className="px-3 py-1 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold transition"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-center text-center h-screen px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
          UI/UX Designer
        </h2>
        <p className="text-gray-300 max-w-2xl text-lg">
          Creating modern, user-friendly, and aesthetic designs with focus on usability and experience.
        </p>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gradient-to-t from-gray-800 via-black to-gray-900">
        <h3 className="text-center text-3xl font-semibold mb-12">My Expertise</h3>
        <div className="container mx-auto grid md:grid-cols-5 sm:grid-cols-2 gap-8 px-6 text-center">
          {[
            "Wireframing & Prototyping",
            "User Research & Testing",
            "UI/UX Strategy & Flow Design",
            "Responsive Web & Mobile Design",
            "Design Systems & Style Guides",
          ].map((skill, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Expertise Icons */}
      <section id="tools" className="py-20">
        <h3 className="text-center text-3xl font-semibold mb-12">Design Tools</h3>
        <div className="flex justify-center flex-wrap gap-12 text-6xl text-gray-300">
          <FaFigma className="hover:text-teal-400 transition" title="Figma" />
          <SiAdobexd className="hover:text-pink-500 transition" title="Adobe XD" />
          <SiSketch className="hover:text-yellow-400 transition" title="Sketch" />
          <SiAdobephotoshop className="hover:text-blue-400 transition" title="Photoshop" />
          <SiHtml5 className="hover:text-orange-500 transition" title="HTML5" />
          <SiCss3 className="hover:text-blue-500 transition" title="CSS3" />
          <SiSvg className="hover:text-green-400 transition" title="SVG" />
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div
              key={project}
              className="bg-gray-800 rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Project+${project}`}
                alt={`Project ${project}`}
                className="w-full h-56 object-cover rounded-b-3xl"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-bold mb-2">Project {project}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p className="text-gray-300 mb-4">Let’s collaborate on your next project!</p>
        <a 
          href="mailto:vinodmathur@gmail.com"
          className="px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold transition"
        >
          Say Hello
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-800 via-black to-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-teal-500 shadow-lg"
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-300 leading-relaxed max-w-xl">
              I’m Vinod Mathur, a passionate UI/UX Designer with expertise in creating user-centric designs. 
              I specialize in crafting intuitive, responsive, and visually engaging web and mobile experiences. 
              With strong skills in Figma, Adobe XD, Sketch, and Photoshop, I bring concepts to life with usability at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-gray-400 text-sm py-4 text-center">
        © {new Date().getFullYear()} Vinod Mathur | UI/UX Designer
      </footer>
    </div>
  );
}

export default App;
