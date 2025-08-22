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
            <li><a href="#about" className="hover:text-green-600">About</a></li>
            <li><a href="#projects" className="hover:text-green-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
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

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white w-full text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Hi, I'm Vinod Mathur, passionate about building beautiful and functional applications.
        </p>
      </section>

      {/* Auto Scroll Line (Skills) */}
      <section className="bg-gray-50 py-6 w-full overflow-hidden">
        <div className="animate-scroll flex gap-16 text-xl font-semibold text-gray-700 whitespace-nowrap">
          <span>🌟 Figma</span>
          <span>🎨 Adobe XD</span>
          <span>📐 Sketch</span>
          <span>🖌 Illustrator</span>
          <span>🌟 Figma</span>
          <span>🎨 Adobe XD</span>
          <span>📐 Sketch</span>
          <span>🖌 Illustrator</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50 w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Here are some of the cool projects I have worked on.
        </p>
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
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
