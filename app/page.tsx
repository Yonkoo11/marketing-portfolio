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
              Medical doctor and Web3 builder. I create content that resonates,
              understand what makes campaigns work, and build products people use.
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
            <p className="section-subtitle">Content creation and community engagement in Web3</p>
          </div>

          <div className="work-grid">
            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Marketing Team</span>
              </div>
              <h3 className="work-title">Truth Bounty</h3>
              <p className="work-desc">
                Marketing team member for Truth Bounty, a prediction markets
                platform. Helped position and promote the project to a
                2nd place finish in the Seedify Hackathon.
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
                <span className="work-category">Organic Growth</span>
              </div>
              <h3 className="work-title">X Content Strategy</h3>
              <p className="work-desc">
                Building audience through crypto-native content: market commentary,
                memes, and timely takes. Consistent engagement through authentic
                voice and community interaction.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">5M+</span>
                  <span className="metric-label">Impressions (48hrs)</span>
                </div>
                <div className="metric">
                  <span className="metric-value">2.1K+</span>
                  <span className="metric-label">Followers</span>
                </div>
              </div>
            </article>

            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Builder + Marketer</span>
              </div>
              <h3 className="work-title">Product Understanding</h3>
              <p className="work-desc">
                I build Web3 products, so I understand them deeply. This means
                authentic promotion rooted in real technical knowledge,
                not surface-level marketing speak.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">Dev</span>
                  <span className="metric-label">Background</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Authentic</span>
                  <span className="metric-label">Approach</span>
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
            <p className="section-subtitle">Where my skills translate to your project</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Content Creation</h3>
              <p className="service-desc">
                Crypto-native content that connects. Memes, threads,
                and commentary that speaks the language of Web3.
              </p>
              <div className="service-tags">
                <span className="tag">Memes</span>
                <span className="tag">Threads</span>
                <span className="tag">Commentary</span>
              </div>
            </div>

            <div className="service-card">
              <h3 className="service-title">Product Insight</h3>
              <p className="service-desc">
                I build products, so I understand them. This means
                authentic promotion rooted in real understanding.
              </p>
              <div className="service-tags">
                <span className="tag">Web3</span>
                <span className="tag">DeFi</span>
                <span className="tag">User Focus</span>
              </div>
            </div>

            <div className="service-card">
              <h3 className="service-title">Community Engagement</h3>
              <p className="service-desc">
                Organic presence on X/Twitter. Understanding what
                resonates and how to participate authentically.
              </p>
              <div className="service-tags">
                <span className="tag">Twitter/X</span>
                <span className="tag">Crypto CT</span>
                <span className="tag">Engagement</span>
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
              <h2 className="section-title">Builder who understands growth.</h2>
              <p className="about-text">
                Licensed medical doctor who found a calling in Web3. I build products
                and create content. The same analytical rigor I apply to diagnostics,
                I bring to understanding what makes things spread.
              </p>
              <p className="about-text">
                In crypto since 2021, building through bear markets. I've shipped
                projects, grown an audience organically, and studied what works
                in this space. I understand products from the inside out.
              </p>
              <div className="about-tags">
                <span className="tag">Medical Doctor</span>
                <span className="tag">Web3 Builder</span>
                <span className="tag">Content Creator</span>
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
              <h2 className="contact-title">Let's work together.</h2>
              <p className="contact-text">
                Looking for a marketer who understands Web3 culture
                and delivers results? Reach out.
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
