import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Welcome to my personal portfolio built with React + Vite 🚀</p>
      </header>

      {/* Auto Scroll Line */}
      <div className="marquee">
        <div className="marquee-content">
          🔧 Expertise Tools | 💻 React | ⚡ Vite | 🎨 UI/UX | 📱 Mobile Design | 🔗 Web3
        </div>
      </div>

      {/* Resume Section */}
      <div className="resume-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Vinod Mathur. I have 5+ years of experience in DeFi, Customer
          Support, and UI/UX Design. Currently building <b>ShopOn Now</b> 🚀
        </p>
        <a
          href="/resume.pdf"
          className="resume-btn"
          download
        >
          📄 Download Resume
        </a>
      </div>

      {/* Counter Example */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>Click the button to test React state.</p>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Vinod Mathur | Built with ❤️ using React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
