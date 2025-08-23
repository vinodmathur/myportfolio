import React from "react";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const projects = [
    { id: 1, title: "Fashion App UI", img: "https://via.placeholder.com/400x250?text=Fashion+UI", link: "https://www.figma.com/" },
    { id: 2, title: "E-Commerce Dashboard", img: "https://via.placeholder.com/400x250?text=E-Commerce+UI", link: "https://www.figma.com/" },
    { id: 3, title: "Portfolio Website", img: "https://via.placeholder.com/400x250?text=Portfolio+UI", link: "https://www.figma.com/" },
    { id: 4, title: "Mobile Banking App", img: "https://via.placeholder.com/400x250?text=Banking+UI", link: "https://www.figma.com/" },
    { id: 5, title: "Landing Page Design", img: "https://via.placeholder.com/400x250?text=Landing+Page", link: "https://www.figma.com/" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 shadow-lg">
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
        <p className="mt-6 text-lg max-w-2xl text-gray-300">
          Creative UI/UX Designer with expertise in Figma, Adobe XD, Photoshop, 
          Canva, HTML & CSS. I design user-friendly, aesthetic, and functional 
          products that balance creativity with usability. My goal is to create 
          seamless, engaging, and modern experiences that leave a lasting impact.
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
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_#ff00ff] transition-all duration-300"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4">
                    A modern UI/UX design project with unique layouts, vibrant
                    colors, and smooth user experience crafted for clients.
                  </p>
                  <a
                    href={project.link}
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
            src="images/profile.jpeg"
            alt="Profile"
            className="mx-auto rounded-full w-40 h-40 border-4 border-pink-400 shadow-lg"
          />
          <h3 className="text-3xl font-bold mt-6">About Me</h3>
          <p className="mt-4 text-lg text-gray-300">
            I’m Vinod Mathur, a passionate UI/UX Designer with hands-on experience 
            in crafting web and mobile interfaces. With skills in Figma, Adobe XD, 
            Photoshop, Canva, HTML, and CSS, I merge creativity with technical 
            execution. My mission is to transform complex ideas into intuitive 
            digital products that users love.
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
