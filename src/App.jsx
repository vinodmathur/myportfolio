// App.jsx
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const projects = [
    { id: 1, title: "Hardin Astro App", img: "https://s.tmimgcdn.com/scr/1200x627/415900/astroscope-astrology-mobile-app-figma-template_415907-original.png", link: "https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1" },
    { id: 2, title: "Bankfipay App", img: "https://s3-alpha.figma.com/hub/file/2343282784/81506202-a236-4a47-9093-7e8f64e63743-cover.png", link: "https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1" },
    { id: 3, title: "Azzunique Payout App", img: "https://sketchelements.com/wp-content/uploads/2019/10/payment-app-ui-kit.png", link: "https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1" },
    { id: 4, title: "Shoponnow Ecommerce App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dBMh2FkO3nGdiK02bLyq9EVWYaY5n9czbQ&s", link: "https://xd.adobe.com/view/6b8ba7b5-2e25-413c-85e3-1692df1b6f0c-3ed8/" },
    { id: 5, title: "Eatfit Food Delivery Partner App", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6eRByyrum7NXdhH-RCfkZ6YwZY3oJBoGtQ&s", link: "https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1" },
    { id: 6, title: "Jadoo Travel", img: "https://themewagon.com/wp-content/uploads/2021/10/jadoo-1.png", link: "https://xd.adobe.com/view/9952f5f2-63fa-4d0e-af7a-72d784645d59-cc01/" },
    { id: 7, title: "TextoNow Chating App", img: "https://designshack.net/wp-content/uploads/Chat-App-UI-Templates-Kit-1024x682.jpg", link: "https://xd.adobe.com/view/dc3a1842-d021-4d17-93ca-f4a4ea3b17e3-8969/" },
    { id: 8, title: "EduLearn Online Platform", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNC2pw_5af9rM78056DxA5dXf00n7QzY2mw&s", link: "#" },
    { id: 9, title: "ShopEase E-commerce App", img: "https://www.figma.com/community/resource/a2938e41-93fa-4836-a3ee-b3c3dc5f861a/thumbnail", link: "#" },
  ];

  const feedbacks = [
    { name: "Subhan Raza", company: "namrah security management", text: "Vinod transformed our app design! Clean, modern, and user-friendly." },
    { name: "Harmeek Kaur", company: "Azzunique Softwares", text: "Amazing experience working with Vinod. He really understands users." },
    { name: "Vikas Solanki", company: "Doomshell Softwares", text: "His designs gave our brand a fresh and professional identity." },
  ];

  const clientLogos = [
    { id: 1, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrUzFPk54hLe2ASbQAK1NFUMLcBP6izlzGw&s" },
    { id: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOT-CVAF6eviF89Iobd0Cee32DGXJubxsnrIVaqN3Wz08UnDEVZaInTrmYVEMxaGMGh4&usqp=CAU" },
    { id: 3, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlgCSHM3jZXcAw8nXbnWSO3gauKou9T9z9pCw-sMQHAkT9nDQCgGekmhgiEpxZeqBf5U&usqp=CAU" },
    { id: 4, logo: "https://play-lh.googleusercontent.com/p2v93Ycop_1x6hart9lbdqzhHN1wvx4tlRRhpQlI7mYQ_OcHbTYBbYUpdyFwYnggKg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Page Content */}
      <div className="min-h-screen bg-black/50">
        {/* Header */}
        <header className="flex justify-between items-center p-5 bg-black/70">
          <h1 className="text-2xl font-bold">Vinod's Portfolio</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#process" className="hover:text-blue-400">Process</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#feedback" className="hover:text-blue-400">Feedback</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </header>

        {menuOpen && (
          <div className="bg-black/80 p-5 md:hidden">
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#process" className="block py-2">Process</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#feedback" className="block py-2">Feedback</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Vinod Mathur</h2>
          <p className="text-lg md:text-2xl text-gray-300">UI/UX Designer | Product Designer</p>
          <p className="mt-4 text-gray-400 max-w-xl">I design clean, user-friendly and creative digital products that solve real-world problems.</p>
          <a href="/resume.pdf" download className="mt-6 px-6 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-500 transition">Download Resume</a>
        </section>

        {/* Auto Scroll Expertise Tools */}
        <section className="overflow-hidden whitespace-nowrap py-4 bg-black/60">
          <div className="animate-scroll inline-block">
            <span className="mx-8">Figma</span>
            <span className="mx-8">Adobe XD</span>
            <span className="mx-8">Sketch</span>
            <span className="mx-8">Wireframes</span>
            <span className="mx-8">Prototypes</span>
            <span className="mx-8">User Research</span>
            <span className="mx-8">UI Systems</span>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">My Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/70 p-6 rounded-lg">Mobile App UI Design</div>
            <div className="bg-gray-900/70 p-6 rounded-lg">Web Dashboard Design</div>
            <div className="bg-gray-900/70 p-6 rounded-lg">User Research & Wireframes</div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 px-6 bg-black/70">
          <h3 className="text-3xl font-semibold text-center mb-10">My Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="bg-gray-900/70 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition">
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold">{p.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">My Design Process</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-900/70 p-6 rounded-lg">1. Research</div>
            <div className="bg-gray-900/70 p-6 rounded-lg">2. Wireframing</div>
            <div className="bg-gray-900/70 p-6 rounded-lg">3. UI Design</div>
            <div className="bg-gray-900/70 p-6 rounded-lg">4. Testing</div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">About Me</h3>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
            I'm a passionate UI/UX Designer with expertise in mobile & web applications. My goal is to create user-friendly, aesthetically pleasing designs that deliver results.
          </p>
        </section>

        {/* Feedback */}
        <section id="feedback" className="py-16 px-6 bg-black/70">
          <h3 className="text-3xl font-semibold text-center mb-10">What Clients Say</h3>
          <div className="max-w-xl mx-auto text-center bg-gray-900/70 p-6 rounded-lg shadow-lg">
            <p className="text-lg italic mb-4">“{feedbacks[currentFeedback].text}”</p>
            <h4 className="font-bold">{feedbacks[currentFeedback].name}</h4>
            <p className="text-gray-400">{feedbacks[currentFeedback].company}</p>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">Clients I Worked With</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {clientLogos.map((c) => (
              <img key={c.id} src={c.logo} alt="Client Logo" className="h-16 grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-8 text-center bg-black/70">
          <p>© 2025 Vinod Mathur | Designed with ❤️</p>
          <p className="mt-2">Email: vinod@example.com | LinkedIn: linkedin.com/in/vinod</p>
        </footer>
      </div>

      {/* Floating & Auto Scroll Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
