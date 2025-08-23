// src/App.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const marqueeRef = useRef(null);

  // Auto-scroll effect for tools line
  useEffect(() => {
    const scroll = () => {
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft += 1;
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 flex flex-col items-center px-6 py-12">
      {/* Header Section */}
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
          Vinod Mathur
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mb-3 text-pink-600">
          UI/UX Designer | Frontend Developer
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Designing and developing clean, modern, and user-friendly experiences
          using design tools and modern web technologies.
        </p>
      </header>

      {/* Auto-scrolling Tools Showcase */}
      <section className="mt-16 w-full max-w-3xl overflow-hidden">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Design Tools I Use
        </h3>
        <div
          ref={marqueeRef}
          className="flex overflow-x-hidden whitespace-nowrap space-x-8 px-4"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex space-x-8">
              {["🎨 Figma", "🎨 Adobe XD", "🎨 Sketch", "🎨 Illustrator", "🎨 Photoshop"].map(
                (tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xl font-semibold px-6 py-3 bg-white rounded-xl shadow hover:shadow-md transition"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 Projects Showcase with Scroll Animation */}
      <section className="mt-20 w-full max-w-5xl">
        <h3 className="text-2xl font-semibold mb-10 text-center">
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project, i) => (
            <motion.div
              key={project}
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <img
                src={`https://picsum.photos/seed/project${project}/400/250`}
                alt={`Project ${project}`}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Project {project}</h4>
                <p className="text-gray-600 text-sm mt-2">
                  A UI/UX design project showcasing creativity and usability.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Download Button */}
      <section className="mt-16">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition-all"
        >
          ⬇ Download Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Vinod Mathur. All rights reserved.
      </footer>
    </div>
  );
}
