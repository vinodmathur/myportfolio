import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt, FaJs, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white">
      {/* HEADER with ID Card Animation */}
      <header className="flex flex-col items-center justify-center py-16 relative">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 w-80 border border-white/20"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/7yzYbQx/profile.jpg" // replace with your photo
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-xl font-bold">Vinod Mathur</h1>
              <p className="text-sm text-white/80">UI/UX Designer</p>
            </div>
          </div>
        </motion.div>
        <p className="mt-6 text-center text-lg max-w-xl">
          I design clean, modern and user-friendly mobile & web experiences.
        </p>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf" // <- put your resume file in public folder as resume.pdf
          download
          className="mt-6 inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow hover:bg-gray-200 transition"
        >
          📄 Download Resume
        </a>
      </header>

      {/* EXPERTISE */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">My Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { icon: <FaFigma size={40} />, label: "Figma" },
            { icon: <FaSketch size={40} />, label: "Sketch" },
            { icon: <FaHtml5 size={40} />, label: "HTML5" },
            { icon: <FaCss3Alt size={40} />, label: "CSS3" },
            { icon: <FaJs size={40} />, label: "JavaScript" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/10 rounded-xl shadow-lg border border-white/20 hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="mt-2 font-medium">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Hardin Astro App",
              desc: "This is Daily Astrology App UI",
              img: "https://i.ibb.co/xjL07QK/astro.jpg",
              link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1",
            },
            {
              title: "Bankfipay App",
              desc: "This is AEPS Fintech App UI",
              img: "https://i.ibb.co/fpbfBgp/bank.jpg",
              link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1",
            },
            {
              title: "Azzunique Payout App",
              desc: "This is Fintech Payout Service App UI",
              img: "https://i.ibb.co/TMn8rHw/payout.jpg",
              link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1",
            },
            {
              title: "Shoponnow App",
              desc: "This is Hyperlocal Quick ECommerce App UI",
              img: "https://i.ibb.co/9bcQW6y/shop.jpg",
              link: "https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2",
            },
            {
              title: "Eatfit Delivery Partner App",
              desc: "This is Eatfit Food Delivery Partners App",
              img: "https://i.ibb.co/2j9DnX0/eatfit.jpg",
              link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover opacity-80"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-white/80">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-white text-purple-600 font-medium rounded-lg shadow hover:bg-gray-200 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT ME */}
      <section className="px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6">Let’s build something amazing together 🚀</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:vinodmathur@gmail.com" className="flex items-center gap-2 hover:text-yellow-200">
            <FaEnvelope /> vinodmathur@gmail.com
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-yellow-200">
            <FaPhone /> +91 98765 43210
          </a>
          <a href="https://linkedin.com/in/vinodmathur" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow-200">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/vinodmathur" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow-200">
            <FaGithub /> GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-white/10 backdrop-blur-md mt-10 border-t border-white/20">
        <p>© {new Date().getFullYear()} Vinod Mathur | All Rights Reserved</p>
      </footer>
    </div>
  );
}
