export default function Home() {
  return (
    <div className="min-h-screen diagnostic-page">
      {/* Hero - Diagnostic Report Style */}
      <header className="relative px-8 md:px-16 pt-16 pb-12">
        {/* Red margin line */}
        <div className="margin-line-full" />

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
            {/* Left: Name and tagline */}
            <div className="pl-8 lg:pl-12">
              <p className="classification">Marketing Profile · Diagnostic Report</p>
              <h1 className="hero-name">dr. alex</h1>
              <p className="tagline">
                Licensed medical doctor with a passion for digital storytelling,
                brand strategy, and audience-building.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#contact" className="btn-primary">
                  Work with me
                </a>
                <a href="#work" className="btn-secondary">
                  View work
                </a>
              </div>
            </div>

            {/* Right: Avatar */}
            <div className="lg:text-right">
              <div className="avatar-box">
                <img
                  src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg"
                  alt="dr. alex"
                />
              </div>
              <div className="handle">@SOLIGXBT</div>
            </div>
          </div>

          {/* Vitals Strip */}
          <div className="vitals-strip">
            <div className="vital">
              <div className="vital-label">Followers</div>
              <div className="vital-value">2,142</div>
            </div>
            <div className="vital">
              <div className="vital-label">Engagement</div>
              <div className="vital-value green">High</div>
            </div>
            <div className="vital">
              <div className="vital-label">Content</div>
              <div className="vital-value">Viral</div>
            </div>
            <div className="vital">
              <div className="vital-label">Specialty</div>
              <div className="vital-value">Memes</div>
            </div>
          </div>
        </div>

        {/* Rotated stamp */}
        <div className="stamp-rotated">Open to Work</div>
      </header>

      {/* Divider */}
      <div className="divider" />

      {/* Work */}
      <section id="work" className="px-8 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            <div>
              <p className="section-label">Selected Work</p>
            </div>
            <div className="space-y-14">
              {/* Work item 1 */}
              <div className="work-item">
                <p className="work-category">Campaign Analysis</p>
                <h3 className="work-title">Infinex Airdrop Breakdown</h3>
                <p className="work-desc">
                  Dissected Infinex's viral airdrop rollout. Identified the mechanics
                  driving 10x engagement: gamified reveals, influencer seeding,
                  and precision FOMO triggers.
                </p>
                <div className="work-stats">
                  <span className="stat-label">Impressions</span>
                  <span className="stat-value">850K+</span>
                  <span className="stat-label">Engagement</span>
                  <span className="stat-value">12%</span>
                </div>
              </div>

              {/* Work item 2 */}
              <div className="work-item">
                <p className="work-category">Content Strategy</p>
                <h3 className="work-title">Avalanche Content Study</h3>
                <p className="work-desc">
                  Six-month analysis of Avalanche's top-performing content.
                  Extracted winning formulas: meme formats, thread structures,
                  and timing patterns for maximum reach.
                </p>
                <div className="work-stats">
                  <span className="stat-label">Reach</span>
                  <span className="stat-value">2.1M+</span>
                  <span className="stat-label">Avg. Engagement</span>
                  <span className="stat-value">15K</span>
                </div>
              </div>

              {/* Work item 3 */}
              <div className="work-item">
                <p className="work-category">Viral Content</p>
                <h3 className="work-title">Meme Marketing</h3>
                <p className="work-desc">
                  Created viral meme content that consistently outperforms industry
                  benchmarks. Developed repeatable frameworks for crypto-native
                  humor that builds community.
                </p>
                <div className="work-stats">
                  <span className="stat-label">Avg. Likes</span>
                  <span className="stat-value">300-400</span>
                  <span className="stat-label">vs Industry</span>
                  <span className="stat-value">5x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Services */}
      <section id="services" className="px-8 md:px-16 py-20 bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            <div>
              <p className="section-label">Services</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
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
              <div>
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
              <div>
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
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* About */}
      <section id="about" className="px-8 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            <div>
              <p className="section-label">About</p>
            </div>
            <div className="max-w-xl">
              <h2 className="about-title">The doctor who gets marketing.</h2>
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

      {/* Divider */}
      <div className="divider" />

      {/* Contact */}
      <section id="contact" className="px-8 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            <div>
              <p className="section-label">Contact</p>
            </div>
            <div>
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
      <footer className="px-8 md:px-16 py-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="footer-text">2026 dr. alex</p>
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="footer-text">Available for projects</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
