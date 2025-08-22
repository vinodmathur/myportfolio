// src/App.jsx

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "40px" }}>
      {/* Header Section */}
      <header>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Vinod Mathur</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Frontend Developer | UI/UX Enthusiast
        </h2>
        <p style={{ fontSize: "1rem", color: "#555" }}>
          Building clean, modern, and user-friendly web applications with React and modern tools.
        </p>
      </header>

      {/* Skills / Expertise Section */}
      <section style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Expertise & Tools</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
        >
          <li>⚡ React.js</li>
          <li>⚡ Vite</li>
          <li>⚡ JavaScript (ES6+)</li>
          <li>⚡ HTML5 & CSS3</li>
          <li>⚡ Tailwind / Bootstrap</li>
          <li>⚡ Firebase</li>
        </ul>
      </section>

      {/* Resume Download Button */}
      <section style={{ marginTop: "40px" }}>
        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-block",
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#4CAF50",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          ⬇ Download Resume
        </a>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "50px", fontSize: "0.9rem", color: "#888" }}>
        © {new Date().getFullYear()} Vinod Mathur. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
