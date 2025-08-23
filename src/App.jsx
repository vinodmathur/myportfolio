import React from "react";
import {
  FaFigma,
  FaSketch,
  FaHtml5,
  FaCss3Alt,
  FaAdobe,
} from "react-icons/fa";
import { SiAdobephotoshop, SiCanva } from "react-icons/si";

export default function App() {
  const projects = [
    {
      title: "Hardin Astro App",
      desc: "This is Daily Astrology App UI",
      img: "/images/astro.png",
      link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1&t=zsP4TKtAOWejU35x-1",
    },
    {
      title: "Bankfipay App",
      desc: "This is AEPS Fintech App UI",
      img: "/images/bankfi.png",
      link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1&t=U0Ao0dPcx37hwHbk-1",
    },
    {
      title: "Azzunique Payout App",
      desc: "This is Fintech Payout Service App UI",
      img: "/images/azzunique.png",
      link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1&t=a11MAci8rLUOqTXw-1",
    },
    {
      title: "Shoponnow App",
      desc: "This is Hyperlocal Quick E-Commerce App UI",
      img: "/images/shopon.png",
      link: "https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258&t=WrhqCOU1GJCzNwhW-1",
    },
    {
      title: "Eatfit Partner App",
      desc: "This is Eatfit Food Delivery Partners App",
      img: "/images/eatfit.png",
      link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1&t=9EdfzW0hXWLE9vLO-1",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide">Vinod Mathur</h1>
          <nav className="space-x-6">
            <a href="#expertise" className="hover:text-blue-400">Expertise</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero / Summary */}
      <section className="pt-32 pb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">UI/UX Designer</h2>
        <p className="mt-6 text-lg text-gray-300">
          I’m a passionate UI/UX Designer with 2+ years of experience creating
          modern, user-friendly designs for mobile and web. Skilled in design
          systems, wireframing, prototyping, and crafting visually engaging
          interfaces. I focus on usability, aesthetics, and delivering seamless
          digital experiences.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
        >
          Download Resume
        </a>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-16 bg-black/30">
        <h3 className="text-3xl font-bold text-center mb-10">My Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto text-center">
          <div><FaFigma size={50} className="mx-auto text-pink-400"/><p>Figma</p></div>
          <div><FaAdobe size={50} className="mx-auto text-red-500"/><p>Adobe XD</p></div>
          <div><SiAdobephotoshop size={50} className="mx-auto text-blue-400"/><p>Photoshop</p></div>
          <div><SiCanva size={50} className="mx-auto text-cyan-400"/><p>Canva</p></div>
          <div><FaSketch size={50} className="mx-auto text-yellow-400"/><p>Sketch</p></div>
          <div><FaHtml5 size={50} className="mx-auto text-orange-500"/><p>HTML/CSS</p></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16">
        <h3 className="text-3xl font-bold text-center mb-10">Projects Showcase</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-4 backdrop-blur-md border border-white/10 hover:scale-105 transition"
            >
              <img src={p.img} alt={p.title} className="rounded-xl mb-4"/>
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="text-gray-300 mt-2">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 bg-black/40 text-center">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-600"
        />
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-3xl mx-auto text-gray-300">
          I am Vinod Mathur, a creative UI/UX Designer dedicated to blending
          functionality with aesthetics. Over the years, I have worked on
          multiple fintech, e-commerce, and lifestyle apps, delivering engaging
          and intuitive experiences. My goal is to design interfaces that users
          not only use but also love.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
        <p>Email: <a href="mailto:vinodmathur@example.com" className="text-blue-400">Vikymathur532@gmail.com</a></p>
        <p className="mt-2">Phone: <span className="text-gray-300">+91 7976680554</span></p>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2025 Vinod Mathur. All Rights Reserved.
      </footer>
    </div>
  );
}
