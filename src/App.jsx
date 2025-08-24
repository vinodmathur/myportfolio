import React from "react";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans overflow-hidden">
      
      {/* 🔮 Fluid Animated Background */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute w-[120%] h-[120%] animate-pulse opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <g transform="translate(400,400)">
            <path d="M160,-230C210,-190,260,-150,280,-90C300,-30,290,40,250,90C210,140,140,170,70,200C0,230,-70,260,-140,240C-210,220,-280,160,-300,90C-320,20,-280,-50,-230,-110C-180,-170,-120,-220,-50,-250C20,-280,90,-270,160,-230Z" fill="url(#grad)" />
          </g>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-lg">
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
        <p className="mt-6 text-lg max-w-2xl">
          Creative UI/UX Designer with expertise in Figma, Adobe XD, Photoshop, 
          Canva, HTML & CSS. I craft user-friendly, aesthetic, and functional 
          designs that bring ideas to life with modern trends and seamless experiences.
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

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">My Expertise</h3>
          <div className="flex flex-wrap justify-center gap-10 text-6xl">
            <FaFigma className="hover:text-pink-400" />
            <SiAdobexd className="hover:text-pink-400" />
            <SiAdobephotoshop className="hover:text-pink-400" />
            <FaSketch className="hover:text-pink-400" />
            <SiCanva className="hover:text-pink-400" />
            <FaHtml5 className="hover:text-pink-400" />
            <FaCss3Alt className="hover:text-pink-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Project Showcase</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5].map((project) => (
              <div
                key={project}
                className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform hover:shadow-pink-500/40"
              >
                <img
                  src={`https://via.placeholder.com/400x250?text=Project+${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-52 object-cover rounded-b-2xl"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">Project {project}</h4>
                  <p className="text-gray-300 mb-4">
                    A modern UI/UX design project with unique layouts, colors,
                    and smooth user experience crafted for clients.
                  </p>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg"
          />
          <h3 className="text-3xl font-bold mt-6">About Me</h3>
          <p className="mt-4 text-lg text-gray-300">
            I’m Vinod Mathur, a passionate UI/UX Designer with experience in crafting 
            modern, user-centric interfaces. I combine creativity with usability to 
            deliver designs that engage and convert. Skilled in Figma, Adobe XD, Photoshop, 
            Canva, HTML, and CSS, I strive to bring visions into seamless experiences.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-10 text-center bg-black/50">
        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
        <p>Email: <a href="mailto:Vikymathur532@gmail.com" className="text-pink-400">Vikymathur532@gmail.com</a></p>
        <p>Phone: <span className="text-pink-400">+91 7976680554</span></p>
        <p className="mt-6 text-gray-400 text-sm">© 2025 Vinod Mathur. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
