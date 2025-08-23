// src/App.jsx
import { useState } from "react";
import {
  FaFigma,
  FaAdobe,
  FaSketch,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans min-h-screen">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
        <nav className="flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold">Vinod Mathur</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            {["About Me", "Expertise", "Projects", "Contact Me", "Resume"].map(
              (item) => (
                <li
                  key={item}
                  className={`cursor-pointer hover:text-teal-400 transition ${
                    active === item.toLowerCase().replace(" ", "")
                      ? "text-teal-400"
                      : ""
                  }`}
                  onClick={() =>
                    setActive(item.toLowerCase().replace(" ", ""))
                  }
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center px-6">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">
          UI/UX Designer
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          Designing engaging digital experiences with a focus on usability,
          creativity, and modern aesthetics.
        </p>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-8 bg-gradient-to-t from-black via-gray-900 to-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12">My Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaFigma className="text-5xl text-teal-400 mb-4" />
            <p>Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAdobe className="text-5xl text-pink-500 mb-4" />
            <p>Adobe XD</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSketch className="text-5xl text-yellow-400 mb-4" />
            <p>Sketch</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-5xl text-orange-500 mb-4" />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
            <p>CSS3</p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div
              key={project}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform"
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Project+${project}`}
                alt={`Project ${project}`}
                className="w-full h-60 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 px-8 bg-gradient-to-t from-gray-800 to-black"
      >
        <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-6">
            I’m <span className="font-bold">Vinod Mathur</span>, a passionate
            UI/UX Designer with expertise in crafting user-centered designs,
            prototyping, and building seamless digital experiences.
          </p>
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Vinod Mathur"
              className="rounded-full border-4 border-teal-400 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400 bg-black">
        © {new Date().getFullYear()} Vinod Mathur. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
