import React from "react";
import { FaFigma, FaAdobe, FaSketch, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Vinod Mathur</h1>
        <p className="text-lg text-gray-600">UI/UX Designer</p>
      </header>

      {/* Expertise Section */}
      <section className="p-10 bg-gradient-to-r from-green-100 to-white">
        <h2 className="text-3xl font-semibold text-center mb-8">My Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaFigma className="text-5xl text-purple-600" />
            <p className="mt-2">Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAdobe className="text-5xl text-red-500" />
            <p className="mt-2">Adobe XD</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSketch className="text-5xl text-yellow-500" />
            <p className="mt-2">Sketch</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-5xl text-orange-600" />
            <p className="mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-5xl text-blue-600" />
            <p className="mt-2">CSS3 & SVG</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-transparent shadow-lg rounded-xl overflow-hidden border p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Astro+App"
              alt="Hardin Astro App"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Hardin Astro App</h3>
            <p className="text-gray-600 text-sm mt-2">This is Daily Astrology App UI</p>
            <a
              href="https://www.figma.com/design/36ApeiWxeeGZFEtkD7zbJM/Astro-App-UI?node-id=0-1&t=zsP4TKtAOWejU35x-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-transparent shadow-lg rounded-xl overflow-hidden border p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Bankfipay+App"
              alt="Bankfipay App"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Bankfipay App</h3>
            <p className="text-gray-600 text-sm mt-2">This is AEPS Fintech App UI</p>
            <a
              href="https://www.figma.com/design/yVCUmDBrtnwKQf4XcFPwqh/Bankfipay?node-id=0-1&t=U0Ao0dPcx37hwHbk-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-transparent shadow-lg rounded-xl overflow-hidden border p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Azzunique+Payout+App"
              alt="Azzunique Payout App"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Azzunique Payout App</h3>
            <p className="text-gray-600 text-sm mt-2">This is Fintech Payout Service App UI</p>
            <a
              href="https://www.figma.com/design/ywTYrkQEiewjyoefuL0vch/payout-App?node-id=0-1&t=a11MAci8rLUOqTXw-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              View Project
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-transparent shadow-lg rounded-xl overflow-hidden border p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=ShopOnNow+App"
              alt="ShopOnNow App"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">ShopOnNow App</h3>
            <p className="text-gray-600 text-sm mt-2">
              This is Hyperlocal Quick ECommerce App UI
            </p>
            <a
              href="https://www.figma.com/proto/nz1UzOe1Vb47cA2tUZr60G/Untitled?page-id=54%3A2&node-id=54-3258&t=WrhqCOU1GJCzNwhW-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              View Project
            </a>
          </div>

          {/* Project 5 */}
          <div className="bg-transparent shadow-lg rounded-xl overflow-hidden border p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Eatfit+Food+Delivery+App"
              alt="Eatfit Food Delivery Partner App"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">Eatfit Food Delivery Partner App</h3>
            <p className="text-gray-600 text-sm mt-2">
              This is Eatfit Food Delivery Partners App
            </p>
            <a
              href="https://www.figma.com/design/JgpN50khNEAm072LfABo3y/Food-Delivery-Partner-App--Community-?node-id=0-1&t=9EdfzW0hXWLE9vLO-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="p-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          I’m Vinod Mathur, a passionate UI/UX Designer with expertise in creating user-friendly
          and visually appealing app designs. Skilled in Figma, Adobe XD, Sketch, HTML, CSS, and
          SVGs, I focus on designing meaningful experiences that blend creativity and functionality.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 Vinod Mathur | UI/UX Designer Portfolio</p>
      </footer>
    </div>
  );
}
