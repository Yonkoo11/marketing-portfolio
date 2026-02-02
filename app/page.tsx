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
              Medical doctor turned Web3 marketer. I bring clinical precision
              to content strategy, campaign analysis, and community growth.
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
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">Campaign analysis and content strategy</p>
          </div>

          <div className="work-grid">
            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Campaign Analysis</span>
              </div>
              <h3 className="work-title">Infinex Airdrop Breakdown</h3>
              <p className="work-desc">
                Dissected Infinex's viral airdrop rollout. Identified the mechanics
                driving 10x engagement: gamified reveals, influencer seeding,
                and precision FOMO triggers.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">850K+</span>
                  <span className="metric-label">Impressions</span>
                </div>
                <div className="metric">
                  <span className="metric-value">12%</span>
                  <span className="metric-label">Engagement</span>
                </div>
              </div>
            </article>

            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Content Strategy</span>
              </div>
              <h3 className="work-title">Avalanche Content Study</h3>
              <p className="work-desc">
                Six-month analysis of Avalanche's top-performing content.
                Extracted winning formulas: meme formats, thread structures,
                and timing patterns.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">2.1M+</span>
                  <span className="metric-label">Reach</span>
                </div>
                <div className="metric">
                  <span className="metric-value">15K</span>
                  <span className="metric-label">Avg. Engagement</span>
                </div>
              </div>
            </article>

            <article className="work-card">
              <div className="work-card-header">
                <span className="work-category">Viral Content</span>
              </div>
              <h3 className="work-title">Meme Marketing Playbook</h3>
              <p className="work-desc">
                Created viral meme content that consistently outperforms industry
                benchmarks. Developed repeatable frameworks for crypto-native humor.
              </p>
              <div className="work-metrics">
                <div className="metric">
                  <span className="metric-value">300-400</span>
                  <span className="metric-label">Avg. Likes</span>
                </div>
                <div className="metric">
                  <span className="metric-value">5x</span>
                  <span className="metric-label">vs Industry</span>
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
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">How I can help your project grow</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Content Strategy</h3>
              <p className="service-desc">
                Data-driven content calendars and viral post frameworks.
                Turn your feed into a growth engine.
              </p>
              <div className="service-tags">
                <span className="tag">Threads</span>
                <span className="tag">Memes</span>
                <span className="tag">Visuals</span>
              </div>
            </div>

            <div className="service-card">
              <h3 className="service-title">Campaign Analysis</h3>
              <p className="service-desc">
                Deep competitive analysis and campaign breakdowns.
                Learn what's actually working in Web3.
              </p>
              <div className="service-tags">
                <span className="tag">Research</span>
                <span className="tag">Reports</span>
                <span className="tag">Strategy</span>
              </div>
            </div>

            <div className="service-card">
              <h3 className="service-title">Community Growth</h3>
              <p className="service-desc">
                Organic audience building and engagement tactics.
                Build a loyal following that converts.
              </p>
              <div className="service-tags">
                <span className="tag">Twitter</span>
                <span className="tag">Discord</span>
                <span className="tag">Telegram</span>
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
              <h2 className="section-title">The doctor who gets marketing.</h2>
              <p className="about-text">
                Licensed medical doctor who found a second calling in Web3 marketing.
                The same analytical rigor I apply to diagnostics, I bring to campaign strategy.
              </p>
              <p className="about-text">
                Clinical precision in messaging. Evidence-based decisions.
                The ability to translate complex ideas into content that resonates.
                In crypto since 2021, building through bear markets.
              </p>
              <div className="about-tags">
                <span className="tag">Medical Doctor</span>
                <span className="tag">Crypto Native</span>
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
