import React from "react";
import {
  FaFigma,
  FaSketch,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Transparent Header */}
      <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Vinod Mathur</h1>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero / Intro */}
      <section
        id="about"
        className="flex flex-col items-center justify-center text-center pt-40 pb-20 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="text-blue-400">Vinod Mathur</span>
        </h2>
        <p className="text-lg md:text-xl max-w-3xl text-gray-300">
          A passionate <span className="text-blue-300">UI/UX Designer</span> and
          <span className="text-blue-300"> Community Builder</span> with 5+ years
          of experience in crafting intuitive mobile apps, websites, and fintech
          platforms. I specialize in design systems, wireframing, prototyping,
          and delivering user-first digital experiences.
        </p>
        <p className="mt-4 text-md md:text-lg max-w-2xl text-gray-400">
          I’ve worked across industries from fintech to ecommerce, creating
          scalable design solutions, building communities, and collaborating with
          cross-functional teams. My goal is to design digital products that feel
          effortless, elegant, and impactful.
        </p>
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
        >
          📄 Download Resume
        </a>
      </section>

      {/* Expertise */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-10">Expertise</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center">
            <FaFigma className="text-5xl text-pink-400" />
            <span className="mt-2">Figma</span>
          </div>
          <div className="flex flex-col items-center">
            <FaSketch className="text-5xl text-yellow-400" />
            <span className="mt-2">Sketch</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-5xl text-orange-500" />
            <span className="mt-2">HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-5xl text-blue-500" />
            <span className="mt-2">CSS3</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Hardin Astro App",
              desc: "Daily Astrology App UI",
              link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1&t=zsP4TKtAOWejU35x-1",
            },
            {
              title: "Bankfipay App",
              desc: "AEPS Fintech App UI",
              link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1&t=U0Ao0dPcx37hwHbk-1",
            },
            {
              title: "Azzunique Payout App",
              desc: "Fintech Payout Service App UI",
              link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1&t=a11MAci8rLUOqTXw-1",
            },
            {
              title: "Shoponnow App",
              desc: "Hyperlocal Quick ECommerce App UI",
              link: "https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258&t=WrhqCOU1GJCzNwhW-1",
            },
            {
              title: "Eatfit Delivery Partner App",
              desc: "Food Delivery Partners App UI",
              link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1&t=9EdfzW0hXWLE9vLO-1",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-white/10 transition"
            >
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition"
              >
                🔗 View on Figma
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p className="text-gray-300">📧 vinodmathur@example.com</p>
        <p className="text-gray-300">📱 +91-9876543210</p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/vinodmathur"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vinodmathur"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Vinod Mathur | All Rights Reserved
      </footer>
    </div>
  );
}
