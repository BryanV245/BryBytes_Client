import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <h1>Bryan Vasquez</h1>
        <p>Software Engineer | Passionate about creating impactful software solutions</p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hi! I am Bryan Vasquez, a software engineer with a focus on building efficient and user-friendly
            applications. I enjoy solving complex problems and learning new technologies.
          </p>
        </section>

        <section className="projects">
          <h2>Portfolio</h2>
          <div className="project-card">
            <h3>ForeverDash</h3>
            <p>
              A Geometry Dash-inspired game with procedural terrain generation. Built using Godot and GDScript.
            </p>
            <a href="https://github.com/BryanV245/foreverdash.git" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>FitNet</h3>
            <p>
              A fitness tracking application designed to help users monitor and achieve their fitness goals.
              Developed with JavaScript and modern web technologies.
            </p>
            <a href="https://github.com/BryanV245/Assignments-and-Final/tree/main/FitNet/FitNet" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Game Development (Godot, GDScript)</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Bryan Vasquez. Built with React and Vite.</p>
      </footer>
    </>
  );
}

export default App;