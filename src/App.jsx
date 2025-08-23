import React from "react";
import { FaFigma, FaSketch, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vinod Mathur</h1>
        <nav className="space-x-6">
          <a href="#expertise" className="hover:text-blue-600">Expertise</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#about" className="hover:text-blue-600">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-4xl font-extrabold mb-4">UI/UX Designer</h2>
        <p className="max-w-xl mx-auto text-lg">
          Crafting intuitive and engaging digital experiences with a focus on usability and creativity.
        </p>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">My Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <FaFigma className="text-5xl mx-auto text-purple-600" />
            <p className="mt-2 font-medium">Figma</p>
          </div>
          <div>
            <SiAdobe className="text-5xl mx-auto text-red-500" />
            <p className="mt-2 font-medium">Adobe XD</p>
          </div>
          <div>
            <FaSketch className="text-5xl mx-auto text-yellow-500" />
            <p className="mt-2 font-medium">Sketch</p>
          </div>
          <div>
            <FaHtml5 className="text-5xl mx-auto text-orange-600" />
            <p className="mt-2 font-medium">HTML5</p>
          </div>
          <div>
            <FaCss3Alt className="text-5xl mx-auto text-blue-600" />
            <p className="mt-2 font-medium">CSS3</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Projects Showcase</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Hardin Astro App"
              className="w-full h-40 object-cover opacity-90"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Hardin Astro App</h3>
              <p className="text-gray-600">This is Daily Astrology App UI</p>
              <a
                href="https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1&t=zsP4TKtAOWejU35x-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Bankfipay App"
              className="w-full h-40 object-cover opacity-90"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Bankfipay App</h3>
              <p className="text-gray-600">This is AEPS Fintech App UI</p>
              <a
                href="https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1&t=U0Ao0dPcx37hwHbk-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Azzunique Payout App"
              className="w-full h-40 object-cover opacity-90"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Azzunique Payout App</h3>
              <p className="text-gray-600">This is Fintech Payout Service App UI</p>
              <a
                href="https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1&t=a11MAci8rLUOqTXw-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Shoponnow App"
              className="w-full h-40 object-cover opacity-90"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Shoponnow App</h3>
              <p className="text-gray-600">This is Hyperlocal Quick ECommerce App UI</p>
              <a
                href="https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258&t=WrhqCOU1GJCzNwhW-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Eatfit Food Delivery Partner App"
              className="w-full h-40 object-cover opacity-90"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Eatfit Food Delivery Partner App</h3>
              <p className="text-gray-600">This is Eatfit Food Delivery Partners App</p>
              <a
                href="https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1&t=9EdfzW0hXWLE9vLO-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="mx-auto rounded-full w-32 h-32 mb-4"
        />
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Hi, I’m Vinod Mathur, a passionate UI/UX designer with 5+ years of experience in creating
          user-friendly and visually appealing mobile and web applications. I specialize in design
          tools like Figma, Adobe XD, and Sketch, bringing ideas to life with clean and intuitive
          designs.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Vinod Mathur. All rights reserved.</p>
      </footer>
    </div>
  );
}
