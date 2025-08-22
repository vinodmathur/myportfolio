import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <Typed
              strings={[
                "Hi, I'm Vinod",
                "A Passionate UI/UX Designer",
                "Crafting modern, user-friendly designs",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            I specialize in designing clean, modern, and engaging interfaces
            that provide seamless user experiences.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            View My Work
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-gray-50" id="projects">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2">
                Project {i + 1}
              </h3>
              <p className="text-gray-600 mb-4">
                UI/UX design focused project showcasing modern and user-friendly
                designs.
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                View Case Study
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white" id="about">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto text-center text-lg leading-relaxed"
        >
          I’m Vinod, a passionate UI/UX Designer with a strong focus on
          delivering intuitive, visually appealing, and user-friendly digital
          experiences. My approach blends creativity with functionality to
          create impactful designs that connect users and products seamlessly.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            Interested in working together? Let’s connect!
          </p>
          <a
            href="mailto:vinod@example.com"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            Say Hello
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-green-600 text-white text-center">
        © {new Date().getFullYear()} Vinod | UI/UX Designer
      </footer>
    </div>
  );
}
