import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Vinod Mathur</h1>
        <p className="text-gray-600 mt-2">
          UI/UX Designer
        </p>
      </header>

      {/* About Section */}
      <section className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I’m a passionate designer and developer who loves creating clean,
          modern, and user-friendly digital experiences. With experience in DeFi,
          fintech, and hyperlocal delivery startups, I bring design and
          technology together to solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
        <ul className="space-y-3 text-gray-600">
          <li>🛍️ ShopOn Now – 10-minute fashion delivery startup</li>
          <li>💸 Splenium – DeFi platform for AI-driven trading</li>
          <li>📱 Fintech App – Recharge, UPI, and bill payment system</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Connect with Me</h2>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="https://github.com/vinodmathur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/in/vinodmathur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://twitter.com/vinodmathur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🐦 Twitter
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
