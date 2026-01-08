import React, { useEffect, useState } from 'react';
import { ABOUT_DATA, SOCIAL_LINKS, STATS } from '../const/data';

const About = () => {
  const [counters, setCounters] = useState({ code: 0, missions: 0, bugs: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { code: STATS.linesOfCode, missions: STATS.missions, bugs: STATS.bugsFix };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        code: (targets.code * progress).toFixed(1),
        missions: Math.floor(targets.missions * progress),
        bugs: (targets.bugs * progress).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepTime);
  };

  return (
    <section id="about" className="about-section">
      {/* Background decorative elements */}
      <div className="about-bg-overlay"></div>
      <div className="about-glow-1"></div>
      <div className="about-glow-2"></div>

      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <div className="about-header-left">
            <div className="secure-connection">
              <span className="material-symbols-outlined">terminal</span>
              <span>Secure Connection Est.</span>
            </div>
            <h1 className="about-title">
              Project: <span className="gradient-text">Origin</span>
            </h1>
          </div>
          <div className="about-header-right">
            <span className="encryption-level">Encryption: Level 7</span>
            <div className="online-status">
              <div className="status-dot"></div>
              <span>ONLINE</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Identity Card */}
          <div className="identity-column">
            <div className="identity-card">
              {/* HUD Corners */}
              <div className="hud-corner corner-tl"></div>
              <div className="hud-corner corner-tr"></div>
              <div className="hud-corner corner-bl"></div>
              <div className="hud-corner corner-br"></div>

              {/* Inner Container */}
              <div className="identity-inner">
                <div className="scanline-overlay"></div>
                
                {/* Avatar Image */}
                <div className="avatar-container">
                  <img 
                    src={ABOUT_DATA.avatar} 
                    alt="Developer Profile" 
                    className="avatar-image"
                  />
                  <div className="avatar-gradient"></div>
                  <div className="avatar-info">
                    <div className="avatar-name-row">
                      <h3>{ABOUT_DATA.name}</h3>
                      <span className="material-symbols-outlined verified-icon">verified</span>
                    </div>
                    <p className="avatar-id">{ABOUT_DATA.id}</p>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="key-stats">
                  <div className="key-stat-item">
                    <span className="stat-label">Clearance</span>
                    <span className="stat-value clearance">{ABOUT_DATA.clearance}</span>
                  </div>
                  <div className="key-stat-item">
                    <span className="stat-label">Location</span>
                    <span className="stat-value location">{ABOUT_DATA.location}</span>
                  </div>
                  <div className="key-stat-item">
                    <span className="stat-label">Status</span>
                    <span className="stat-value status-available">{ABOUT_DATA.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="social-channels">
              <a href={SOCIAL_LINKS.github} className="social-btn" target="_blank" rel="noopener noreferrer">
                <span>GITHUB</span>
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="social-btn" target="_blank" rel="noopener noreferrer">
                <span>LINKEDIN</span>
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right Column: Biography & Stats */}
          <div className="bio-column">
            {/* Bio Terminal */}
            <div className="bio-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <span className="terminal-title">BIO_SEQUENCE.exe</span>
              </div>
              <div className="terminal-content">
                <div className="bio-text">
                  <span className="material-symbols-outlined quote-icon">format_quote</span>
                  <div className="bio-paragraphs">
                    {ABOUT_DATA.bio.map((paragraph, index) => (
                      <p key={index}>
                        <span className="command">{paragraph.command}</span><br/>
                        {paragraph.text}
                        {index === ABOUT_DATA.bio.length - 1 && <span className="cursor-blink"></span>}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Arsenal / Stats Section */}
            <div className="arsenal-grid">
              {/* Stats Cards */}
              <div className="stats-cards">
                <div className="stat-card border-primary">
                  <span className="material-symbols-outlined stat-icon">code</span>
                  <div className="stat-number">{counters.code}M+</div>
                  <div className="stat-desc">Lines of Code</div>
                </div>
                <div className="stat-card border-purple">
                  <span className="material-symbols-outlined stat-icon">flag</span>
                  <div className="stat-number">{counters.missions}</div>
                  <div className="stat-desc">Missions Complete</div>
                </div>
                <div className="stat-card border-cyan">
                  <span className="material-symbols-outlined stat-icon">bug_report</span>
                  <div className="stat-number">{counters.bugs}%</div>
                  <div className="stat-desc">Bug Neutralized</div>
                </div>
                <div className="stat-card border-orange">
                  <span className="material-symbols-outlined stat-icon">coffee</span>
                  <div className="stat-number">∞</div>
                  <div className="stat-desc">Fuel Consumed</div>
                </div>
              </div>

              {/* Skill Progress Bars */}
              <div className="skills-arsenal">
                <h3 className="arsenal-title">
                  <span className="material-symbols-outlined">memory</span>
                  Primary Arsenal
                </h3>
                <div className="skills-list">
                  {ABOUT_DATA.skills.map((skill, index) => (
                    <div key={index} className={`skill-item skill-${skill.color}`}>
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: hasAnimated ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
