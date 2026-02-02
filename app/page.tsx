export default function Home() {
  return (
    <div className="min-h-screen diagnostic-page">
      {/* Fixed Header */}
      <nav className="fixed-nav">
        <span className="nav-name">dr. alex</span>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Let's Talk</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          {/* Red margin line */}
          <div className="margin-line-accent" />

          <div className="hero-content">
            <p className="classification">Marketing Profile</p>
            <h1 className="hero-name">dr. alex</h1>
            <p className="hero-tagline">
              Medical doctor and builder. I make things people actually use,
              and I know how to get eyes on them.
            </p>

            {/* Vitals inline with hero */}
            <div className="hero-vitals">
              <div className="vital-item">
                <span className="vital-number">2,142</span>
                <span className="vital-label">Followers</span>
              </div>
              <div className="vital-item">
                <span className="vital-number green">12%</span>
                <span className="vital-label">Eng. Rate</span>
              </div>
              <div className="vital-item">
                <span className="vital-number">2021</span>
                <span className="vital-label">In Crypto Since</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Work with me</a>
              <a href="#work" className="btn-secondary">View work</a>
            </div>
          </div>

          {/* Avatar card */}
          <div className="hero-aside">
            <div className="profile-card">
              <div className="avatar-box">
                <img
                  src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg"
                  alt="dr. alex"
                />
              </div>
              <div className="profile-info">
                <span className="handle">@SOLIGXBT</span>
                <span className="verified">Verified</span>
              </div>
              <div className="stamp-inline">Open to Work</div>
            </div>
          </div>
        </div>
      </header>

      {/* Work */}
      <section id="work" className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">Marketing and product work in crypto</p>
          </div>

          <div className="work-grid">
            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Marketing Team</span>
              </div>
              <h3 className="work-title">Truth Bounty</h3>
              <p className="work-desc">
                Ran marketing for Truth Bounty, a prediction markets platform.
                We took 2nd place at the Seedify Hackathon.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">2nd</span>
                  <span className="metric-label">Seedify Hackathon</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Prediction</span>
                  <span className="metric-label">Markets</span>
                </div>
              </div>
            </article>

            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Builder</span>
              </div>
              <h3 className="work-title">Ships Products</h3>
              <p className="work-desc">
                I code. When I market something, I actually understand
                how it works under the hood. No bullshit.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">Dev</span>
                  <span className="metric-label">Background</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Full</span>
                  <span className="metric-label">Stack</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">How I Can Help</h2>
            <p className="section-subtitle">What I bring to the table</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Content</h3>
              <p className="service-desc">
                Posts that don't read like corporate garbage.
                Memes, threads, takes. Stuff people actually engage with.
              </p>
              <div className="service-tags">
                <span className="tag">Memes</span>
                <span className="tag">Threads</span>
                <span className="tag">Takes</span>
              </div>
            </div>

            <div className="service-card">
              <h3 className="service-title">Technical Depth</h3>
              <p className="service-desc">
                I can read code and write it. When I explain your product,
                I know what I'm talking about.
              </p>
              <div className="service-tags">
                <span className="tag">DeFi</span>
                <span className="tag">Smart Contracts</span>
                <span className="tag">Product</span>
              </div>
            </div>

            <div className="service-card">
              <h3 className="service-title">Community</h3>
              <p className="service-desc">
                Been in crypto Twitter since 2021.
                I know how the game works.
              </p>
              <div className="service-tags">
                <span className="tag">Twitter/X</span>
                <span className="tag">CT</span>
                <span className="tag">Discord</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-inner">
          <div className="about-layout">
            <div className="about-content">
              <h2 className="section-title">Doctor who builds.</h2>
              <p className="about-text">
                Licensed MD. Got into crypto in 2021 and started building.
                Survived the bear market by shipping instead of complaining.
              </p>
              <p className="about-text">
                I code, I create content, and I understand marketing because
                I've had to market my own projects. No agency background,
                just real experience getting things in front of people.
              </p>
              <div className="about-tags">
                <span className="tag">Medical Doctor</span>
                <span className="tag">Builder</span>
                <span className="tag">Content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-dark">
        <div className="section-inner">
          <div className="contact-layout">
            <div className="contact-content">
              <h2 className="contact-title">Let's talk.</h2>
              <p className="contact-text">
                Need someone who gets crypto and can actually ship? Hit me up.
              </p>
              <div className="contact-buttons">
                <a
                  href="https://x.com/soligxbt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  DM on X
                </a>
                <a href="mailto:alexmustapha11@gmail.com" className="btn-secondary">
                  Email
                </a>
                <a
                  href="https://t.me/THaFa_11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">2026 dr. alex</p>
          <div className="footer-status">
            <span className="status-dot" />
            <span>Available for projects</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
