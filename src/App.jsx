import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Navbar Transparent */}
      <header className="w-full py-4 fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-sm">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex gap-6 font-medium">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#projects" className="hover:text-green-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
            <li><a href="#about" className="hover:text-green-600">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio 🚀</h2>
        <p className="text-gray-600 mb-6">I am a Developer & Designer</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700"
        >
          Clicked {count} times
        </button>
      </section>

      {/* Auto Scroll Line (Logos instead of text) */}
      <section className="bg-gray-50 py-6 w-full overflow-hidden">
        <div className="animate-scroll flex gap-16 items-center whitespace-nowrap">
          <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="Figma" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" alt="Adobe XD" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/sketch-2.svg" alt="Sketch" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" alt="Illustrator" className="h-12" />
          {/* Repeat to make infinite effect smooth */}
          <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="Figma" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" alt="Adobe XD" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/sketch-2.svg" alt="Sketch" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" alt="Illustrator" className="h-12" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50 w-full text-center">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="bg-white shadow-lg rounded-[2rem] overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="h-40 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {num}</h3>
                <p className="text-gray-600 text-sm">
                  This is a demo description for Project {num}. Modern UI with curved style.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind or just want to say hi? Reach out to me!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Gmail */}
            <a
              href="mailto:yourname@gmail.com"
              className="flex items-center gap-2 bg-gray-100 shadow-md px-5 py-3 rounded-2xl hover:bg-green-50 transition"
            >
              <Mail className="w-5 h-5 text-green-600" />
              <span>Email</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-100 shadow-md px-5 py-3 rounded-2xl hover:bg-green-50 transition"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>WhatsApp</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-gray-100 shadow-md px-5 py-3 rounded-2xl hover:bg-green-50 transition"
            >
              <Phone className="w-5 h-5 text-green-600" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section (above Footer) */}
      <section id="about" className="py-16 px-6 bg-gray-100 w-full text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Hi, I'm Vinod Mathur, passionate about building beautiful and functional applications.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white text-center">
        <p>© {new Date().getFullYear()} Vinod Mathur | All rights reserved</p>
      </footer>

      {/* Custom CSS for Auto Scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
