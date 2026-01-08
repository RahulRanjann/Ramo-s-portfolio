import React from 'react';
import { PROJECTS } from '../const/data';

const Projects = () => {

  return (
    <section id="projects" className="projects-section">
      {/* Background Grid Effect */}
      <div className="projects-bg-grid">
        <div className="grid-pattern"></div>
        <div className="grid-gradient"></div>
      </div>

      <div className="projects-container">
        {/* Page Heading */}
        <div className="projects-header">
          <div className="projects-header-left">
            <div className="live-feed-badge">
              <span className="material-symbols-outlined pulse">radio_button_checked</span>
              <span>LIVE FEED // ARCHIVE ACCESS</span>
            </div>
            <h2 className="projects-title">
              Mission <span className="gradient-text">Archive</span>
            </h2>
          </div>
          <div className="projects-header-right">
            <p>CLEARANCE: LEVEL 10</p>
            <p>ACTIVE PROJECTS: <span className="highlight">{PROJECTS.length.toString().padStart(2, '0')}</span></p>
          </div>
          {/* Decorative corner accents */}
          <div className="corner-accent left"></div>
          <div className="corner-accent right"></div>
        </div>

        {/* Projects Grid */}
        <div className="mission-grid">
          {PROJECTS.map((project, index) => (
            <article key={index} className="mission-card">
              {/* Holographic overlay */}
              <div className="holo-overlay"></div>
              
              {/* Image Container */}
              <div className="mission-image">
                <img src={project.image} alt={project.title} />
                <div className="image-gradient"></div>
                <div className={`tech-badge ${project.statusType}`}>{project.badge}</div>
              </div>

              {/* Content */}
              <div className="mission-content">
                {/* Header */}
                <div className="mission-header">
                  <div className={`status-badge ${project.statusType}`}>
                    <span className="status-dot"></span>
                    {project.status}
                  </div>
                  <h3 className="mission-title">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="mission-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-chip">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mission-actions">
                  <a href={project.links.live} className="action-btn primary">
                    <span className="material-symbols-outlined">{project.actionIcon}</span>
                    {project.actionText}
                  </a>
                  <a href={project.links.github} className="action-btn secondary">
                    <span className="material-symbols-outlined">code</span>
                    SOURCE
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
