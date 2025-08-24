import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing UI/UX designs.",
      image: "/images/project1.jpg",
      link: "https://figma.com",
    },
    {
      title: "E-commerce App",
      description: "Mobile-first shopping UI with smooth checkout flow.",
      image: "/images/project2.jpg",
      link: "https://figma.com",
    },
    {
      title: "Dashboard Design",
      description: "Analytics dashboard with dark theme and interactive charts.",
      image: "/images/project3.jpg",
      link: "https://figma.com",
    },
    {
      title: "Social Media App",
      description: "UI for a modern social media app with reels & stories.",
      image: "/images/project4.jpg",
      link: "https://figma.com",
    },
    {
      title: "Landing Page UI",
      description: "Marketing landing page for startups with responsive design.",
      image: "/images/project5.jpg",
      link: "https://figma.com",
    },
    {
      title: "Banking App",
      description: "Fintech mobile app UI with smooth money transfer flow.",
      image: "/images/project6.jpg",
      link: "https://figma.com",
    },
    {
      title: "Food Delivery UI",
      description: "UI for food ordering with maps & real-time tracking.",
      image: "/images/project7.jpg",
      link: "https://figma.com",
    },
    {
      title: "Travel Booking App",
      description: "Modern travel booking platform with destination highlights.",
      image: "/images/project8.jpg",
      link: "https://figma.com",
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#ffffff" },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Floating Vector Image */}
      <img
        src="/vector1.png"
        alt="Floating Vector"
        className="absolute top-10 right-10 w-40 animate-bounce"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md p-4 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold">Vinod Mathur</h1>
        <nav className="space-x-6">
          <a href="#expertise" className="hover:text-gray-300">Expertise</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          UI/UX Designer & Developer
        </h2>
        <p className="max-w-xl text-lg">
          Crafting beautiful, user-friendly, and engaging digital experiences with design thinking and innovation.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Download Resume
        </a>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 px-8 text-center">
        <h3 className="text-4xl font-semibold mb-10">My Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Figma", "Adobe XD", "Photoshop", "Canva", "UI Design", "Prototyping", "Wireframing", "Responsive Design"].map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800/60 rounded-xl shadow-md hover:scale-105 transition"
            >
              <img src="/images/icon.png" alt={skill} className="mx-auto mb-3 w-10 h-10" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8">
        <h3 className="text-4xl font-semibold text-center mb-10">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showMore ? projects : projects.slice(0, 4)).map((project, i) => (
            <div
              key={i}
              className="bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-sm mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-purple-600 rounded-lg shadow hover:bg-purple-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {!showMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg shadow hover:scale-105 transition"
            >
              View More
            </button>
          </div>
        )}
      </section>

      {/* About Me */}
      <section id="about" className="py-16 px-8 text-center">
        <h3 className="text-4xl font-semibold mb-6">About Me</h3>
        <img
          src="/images/profile.jpeg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg"
        />
        <p className="max-w-2xl mx-auto text-lg">
          I am Vinod Mathur, a passionate UI/UX designer with expertise in Figma, Adobe XD, Photoshop, and Canva.  
          I specialize in creating intuitive designs and seamless user journeys for websites and apps.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 text-center bg-gray-900/70">
        <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
        <p>Email: <a href="mailto:vinod@example.com" className="text-purple-400">vinod@example.com</a></p>
        <p>Phone: +91-9876543210</p>
      </section>
    </div>
  );
}

export default App;
