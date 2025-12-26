import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching from your existing Django API endpoint
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects:", err));
  }, []);

  return (
    <div className="home-container">
      {/* B. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Building Scalable AI Solutions That Drive Business Growth</h1>
          <p className="subheadline">
            We help startups and growing businesses design, build, and scale 
            secure, high-performance software systems with an AI-first approach.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="cta-primary">Schedule Free Consultation</Link>
            <a href="#portfolio" className="cta-secondary">View Our Work</a>
          </div>
        </div>
      </section>

      {/* C. TRUST SIGNALS */}
      <section className="trust-signals">
        <p>Trusted Expertise in Industry-Standard Technologies</p>
        <div className="metrics-bar">
          <div className="metric"><span>10+</span> Projects Delivered</div>
          <div className="metric"><span>99.9%</span> Uptime Solutions</div>
          <div className="metric"><span>AI-Native</span> Architectures</div>
        </div>
      </section>

      {/* D. SERVICES OVERVIEW */}
      <section className="services-overview">
        <h2>Our Specialized Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">🚀</div>
            <h3>Custom Software</h3>
            <p>Tailored solutions built to fit your business processes—not the other way around.</p>
          </div>
          <div className="service-card">
            <div className="icon">🤖</div>
            <h3>AI & Data Solutions</h3>
            <p>Turn data into actionable insights using machine learning and custom LLM integrations.</p>
          </div>
          <div className="service-card">
            <div className="icon">☁️</div>
            <h3>Cloud & DevOps</h3>
            <p>Reliable infrastructure and deployment automation for Kenyan and global scale.</p>
          </div>
        </div>
      </section>

      {/* E. HOW WE WORK (PROCESS) */}
      <section className="process-section">
        <h2>Our Collaborative Process</h2>
        <div className="process-steps">
          <div className="step"><span>1</span> <h4>Discovery</h4><p>Understanding your business goals.</p></div>
          <div className="step"><span>2</span> <h4>Architecture</h4><p>Designing secure, scalable systems.</p></div>
          <div className="step"><span>3</span> <h4>Development</h4><p>Agile builds with continuous feedback.</p></div>
          <div className="step"><span>4</span> <h4>Deployment</h4><p>Launch and ongoing optimization.</p></div>
        </div>
      </section>

      {/* G. PORTFOLIO PREVIEW */}
      <section id="portfolio" className="portfolio-preview">
        <h2>Selected Case Studies</h2>
        <div className="projects-list">
          {projects.slice(0, 3).map(project => (
            <div key={project.id} className="project-preview-card">
              <h3>{project.title}</h3>
              <p className="impact">{project.impact_metric}</p>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`} className="text-link">Read Case Study →</Link>
            </div>
          ))}
        </div>
        <center><Link to="/projects" className="cta-secondary">View All Work</Link></center>
      </section>

      {/* I. FINAL CTA */}
      <section className="final-cta">
        <h2>Let’s Build Something That Works for Your Business</h2>
        <Link to="/contact" className="cta-primary">Book a Free Consultation</Link>
      </section>
    </div>
  );
}

export default Home;