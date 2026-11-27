import { useState } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiCpu,
  FiLayers,
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";
import projects from "../../../public/assets/projects.json";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import "./studio.css";

const projectMeta = [
  {
    category: "Applications",
    label: "01 / PRIVACY BY DESIGN",
    tags: ["Android", "Privacy", "Open source"],
    className: "contacts",
  },
  {
    category: "Infrastructure",
    label: "02 / DEVELOPER INFRASTRUCTURE",
    tags: ["Go", "containerd", "REST APIs"],
    className: "devops",
  },
  {
    category: "Applications",
    label: "03 / THE PROJECT INDEX",
    tags: ["Web", "Discovery", "Open source"],
    className: "apps",
  },
];

function AgentDiagram() {
  return (
    <div
      className="system-visual"
      aria-label="Illustrative agent workflow: a request reaches an orchestrator, which connects tools, context, and specialist agents, then produces a response."
    >
      <div className="visual-top">
        <span>
          <i className="status-dot" /> SYSTEM DESIGN EXPLORATION
        </span>
        <FiCpu aria-hidden="true" />
      </div>
      <div className="diagram-grid" aria-hidden="true">
        <div className="diagram-request">
          <span className="node-icon">↗</span>
          <span>
            Human intent<small>One useful question.</small>
          </span>
        </div>
        <div className="connector connector-top" />
        <div className="orchestrator">
          <FiCpu />
          <span>
            Agent orchestration<small>Reason. Route. Respond.</small>
          </span>
          <span className="node-pulse" />
        </div>
        <div className="diagram-branches">
          <span />
          <span />
          <span />
        </div>
        <div className="workers">
          <div>
            <FiCode />
            <strong>Tools</strong>
            <small>MCP</small>
          </div>
          <div>
            <FiLayers />
            <strong>Context</strong>
            <small>Memory</small>
          </div>
          <div>
            <FiCpu />
            <strong>Agents</strong>
            <small>A2A</small>
          </div>
        </div>
        <div className="diagram-output">
          <span>↓</span> Useful outcomes, by design.
        </div>
      </div>
      <div className="visual-bottom">
        <span>INTELLIGENCE × ENGINEERING</span>
        
      </div>
    </div>
  );
}

export default function Studio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  return (
    <div className="studio" id="home">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-topbar">
        <a className="wordmark" href="#home" aria-label="Hafijul home">
          h<span>.</span>
          <span className="wordmark-name">
            HAFIJUL ALI<span>SENIOR SOFTWARE ENGINEER</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={menuOpen ? "is-open" : ""}
        >
          {[
            ["Work", "#portfolio"],
            ["Skills", "#experience"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <FiArrowUpRight />
          </a>
        </nav>
      </div>
      <main id="main">
        <section className="hero studio-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AI & SYSTEMS
            </p>
            <h1 id="hero-title" className="hero-name">
              Sheikh<br />Hafijul <span>Ali.</span>
            </h1>
            <p className="hero-tagline">Engineering ideas into what’s next.</p>
            <p className="hero-description">
              I build software that connects intelligent
              agents, developer tools, and real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#portfolio">
                Explore my work <FiArrowUpRight />
              </a>
              <a
                className="text-link"
                href="/assets/Sheikh%20Hafijul%20Ali's%20Resume.pdf"
                download
              >
                Resume <FiDownload />
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/hafijulali"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub <FiArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com/in/hafijulali"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn <FiArrowUpRight />
              </a>
            </div>
          </div>
          <AgentDiagram />
        </section>
        <div className="focus-strip studio-width">
          <span>BUILT AT THE INTERSECTION OF</span>
          <p>
            Artificial intelligence <span>+</span> Software engineering{" "}
            <span>+</span> Developer experience
          </p>
        </div>
        <section
          id="portfolio"
          className="work-section studio-width"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / PROJECTS</p>
              <h2 id="work-title">Selected work</h2>
            </div>
          </div>
          <div
            className="work-filters"
            role="group"
            aria-label="Filter projects"
          >
            {["All work", "Applications", "Infrastructure"].map((value) => (
              <button
                key={value}
                className={filter === value ? "selected" : ""}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {value}
                {value === "All work" && <span>03</span>}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects
              .map((project, index) => ({ ...project, ...projectMeta[index] }))
              .filter(
                (project) =>
                  filter === "All work" || project.category === filter,
              )
              .map((project) => (
                <article
                  key={project.id}
                  className={`project-card ${project.className}`}
                >
                  <div className="project-image">
                    <img
                      src={`/assets/${project.webpimage}`}
                      srcSet={project.id === 1 ? undefined : `/assets/${project.webpimage.replace(".webp", "-480.webp")} 480w, /assets/${project.webpimage.replace(".webp", "-800.webp")} 800w`}
                      sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1050px) 45vw, 380px"
                      width={project.id === 1 ? 96 : 800}
                      height={project.id === 1 ? 96 : 800}
                      decoding="async"
                      alt={`${project.name} application interface`}
                      loading="lazy"
                    />
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-copy">
                    <p className="project-number">{project.label}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul
                      className="project-tags"
                      aria-label="Project technologies"
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a href={project.source} target="_blank" rel="noreferrer">
                        Explore source <FiArrowUpRight />
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live site <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
        <div className="capabilities studio-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SKILLS</p>
              <h2>From agents to infrastructure.</h2>
            </div>
            <p>
              The tools change.
              <br />
              The engineering mindset stays.
            </p>
          </div>
          <Experience />
        </div>
        <section
          id="about"
          className="about-section studio-width"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">03 / THE PERSON BEHIND THE CODE</p>
            <h2 id="about-title">
              Curiosity is
              <br />
              the starting point.
            </h2>
            <a className="text-link" href="/assets/Sheikh%20Hafijul%20Ali's%20Resume.pdf" download>
              Download my resume <FiArrowRight />
            </a>
          </div>
          <div className="about-story">
            <p>
              I care about how the pieces fit together: the interface someone
              touches, the service behind it, and the tools that make it reliable.
            </p>
            <p>
              My approach is to make the problem clear, keep interfaces
              understandable, and consider how a system will be used and maintained.
            </p>
            <div className="about-notes">
              <span>
                <FiGithub /> Open-source mindset
              </span>
            </div>
          </div>
        </section>
        <div className="contact-section studio-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / CONTACT</p>
              <h2>
                Good things start
                <br />
                with a hello<span className="accent">.</span>
              </h2>
            </div>
          </div>
          <Contact />
        </div>
      </main>
      <footer className="studio-footer studio-width">
        <a className="wordmark" href="#home">
          h<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Sheikh Hafijul Ali</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
