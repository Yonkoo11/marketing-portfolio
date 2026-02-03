export default function Home() {
  return (
    <>
      {/* Ticker tape */}
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="ticker-item"><span className="dot"></span> Blue Verified on X</span>
          <span className="ticker-item"><span className="dot"></span> <span className="ticker-highlight">12% Engagement Rate</span> (Industry avg: 1-3%)</span>
          <span className="ticker-item"><span className="dot"></span> 2nd Place Hackathon Winner</span>
          <span className="ticker-item"><span className="dot"></span> Building Since 2021</span>
          <span className="ticker-item"><span className="dot"></span> Full Stack Developer</span>
          <span className="ticker-item"><span className="dot"></span> Influencer Network Access</span>
          <span className="ticker-item"><span className="dot"></span> Blue Verified on X</span>
          <span className="ticker-item"><span className="dot"></span> <span className="ticker-highlight">12% Engagement Rate</span> (Industry avg: 1-3%)</span>
          <span className="ticker-item"><span className="dot"></span> 2nd Place Hackathon Winner</span>
          <span className="ticker-item"><span className="dot"></span> Building Since 2021</span>
          <span className="ticker-item"><span className="dot"></span> Full Stack Developer</span>
        </div>
      </div>

      <div className="container">
        <header className="masthead">
          <div className="edition-info">
            <span>Est. 2021</span>
            <span>Marketing Edition</span>
            <span className="verified-badge">
              <svg viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/></svg>
              @SOLIGXBT
            </span>
          </div>
          <h1 className="paper-name">The <span>Daily</span> Dispatch</h1>
          <p className="tagline">&ldquo;All the News That&apos;s Fit to Ship&rdquo;</p>
        </header>

        <nav className="nav-bar">
          <div className="nav-links">
            <a href="#work">Case Files</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="headline-section">
          <div className="headline-grid">
            <article className="main-story">
              <span className="breaking">Exclusive</span>
              <h2 className="main-headline">Builder <em>Who Ships</em> Brings Precision to Marketing</h2>
              <p className="byline">Profile: <strong>Dr. Alex</strong> | Marketing & Growth</p>
              <p className="lead-paragraph">In an industry flooded with hype and empty promises, one builder brings something different: technical depth combined with marketing instinct.</p>
              <div className="article-body">
                <p className="drop-cap">The marketing landscape is littered with inflated metrics and vague deliverables. But Dr. Alex (@SOLIGXBT) represents a rare breed: technical enough to understand the code, creative enough to make it resonate, and disciplined enough to deliver results.</p>
                <p>&ldquo;I make things people actually use, and I know how to get eyes on them,&rdquo; Alex states plainly. No corporate jargon. No buzzwords. Just results.</p>
                <div className="pull-quote">
                  When I market something, I actually understand how it works under the hood. No bullshit.
                </div>
                <p>With a 12% engagement rate that&apos;s 4-6x the industry average, a track record that includes being part of the core marketing team behind Truth Bounty&apos;s 2nd place hackathon finish, and relationships with key influencers, the proof is in the performance.</p>
              </div>
            </article>

            <aside className="sidebar">
              <div className="profile-box">
                <img src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg" alt="Dr. Alex" />
                <p className="profile-caption">Builder. Marketer. Ships products.</p>
              </div>
              <div className="vital-stats">
                <h3>The Numbers</h3>
                <div className="stat-row">
                  <span className="stat-label">Followers</span>
                  <div>
                    <span className="stat-value">2,142</span>
                    <span className="stat-context">Verified</span>
                  </div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Eng. Rate</span>
                  <div>
                    <span className="stat-value highlight">12%</span>
                    <span className="stat-context">4-6x avg</span>
                  </div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Building</span>
                  <div>
                    <span className="stat-value">2021</span>
                    <span className="stat-context">Since</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="quick-cta">
                Let&apos;s Talk
                <span>Response within 24hrs</span>
              </a>
            </aside>
          </div>
        </section>

        <section id="work" className="columns-section">
          <header className="section-header">
            <h2 className="section-title">Case Files</h2>
          </header>

          <div className="stories-grid">
            <article className="story-card">
              <p className="story-category">Core Marketing Team</p>
              <h3 className="story-headline">Truth Bounty: Hackathon Podium Finish</h3>
              <p className="story-excerpt">Part of the core marketing team for @truthbounty, a startup that secured 2nd place at a major hackathon. Contributed to positioning, content strategy, and community growth.</p>
              <span className="story-result">2nd Place — Hackathon</span>
            </article>

            <article className="story-card">
              <p className="story-category">Technical Marketing</p>
              <h3 className="story-headline">Builder Who Markets, Marketer Who Builds</h3>
              <p className="story-excerpt">I don&apos;t just write about products—I can build them. Full-stack background means I speak developer and translate it for everyone else.</p>
              <span className="story-result">Full Stack Dev</span>
            </article>

            <article className="story-card">
              <p className="story-category">Network</p>
              <h3 className="story-headline">Direct Access to Key Influencers</h3>
              <p className="story-excerpt">Relationships matter. I&apos;ve built genuine connections with influencers across tech and startups—real relationships, not cold DMs.</p>
              <span className="story-result">Network Access</span>
            </article>
          </div>
        </section>

        <section id="services" className="classifieds">
          <div className="container">
            <header className="classifieds-header">
              <h2 className="classifieds-title">Services</h2>
            </header>

            <ul className="services-list">
              <li className="service-ad">
                <div className="ad-number">01</div>
                <h3 className="ad-title">Content Strategy</h3>
                <p className="ad-desc">Posts that don&apos;t read like corporate garbage. Memes that land, threads that educate, takes that spark conversation.</p>
                <div className="ad-tags">
                  <span className="ad-tag">Memes</span>
                  <span className="ad-tag">Threads</span>
                  <span className="ad-tag">Copywriting</span>
                </div>
              </li>
              <li className="service-ad">
                <div className="ad-number">02</div>
                <h3 className="ad-title">Technical Content</h3>
                <p className="ad-desc">Product explainers, technical breakdowns, documentation. Complex topics made accessible without dumbing them down.</p>
                <div className="ad-tags">
                  <span className="ad-tag">Product</span>
                  <span className="ad-tag">Technical</span>
                  <span className="ad-tag">Docs</span>
                </div>
              </li>
              <li className="service-ad">
                <div className="ad-number">03</div>
                <h3 className="ad-title">Community & Growth</h3>
                <p className="ad-desc">Building audiences since 2021. I know what works, what doesn&apos;t, and how to build genuine engagement—not bot farms.</p>
                <div className="ad-tags">
                  <span className="ad-tag">Twitter/X</span>
                  <span className="ad-tag">Discord</span>
                  <span className="ad-tag">Community</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container">
            <blockquote className="testimonial-quote">
              Alex brings a rare combination: deep technical understanding and the ability to communicate it clearly. That&apos;s invaluable.
            </blockquote>
            <p className="testimonial-author">— Truth Bounty Team</p>
          </div>
        </section>

        <section id="contact" className="contact-banner">
          <p className="contact-label">Currently Accepting Projects</p>
          <h2 className="contact-headline">Let&apos;s make something people talk about.</h2>
          <p className="contact-subhead">Looking for marketing that actually converts? Let&apos;s discuss your project. I respond to every serious inquiry within 24 hours.</p>
          <div className="contact-links">
            <a href="https://twitter.com/soligxbt" className="contact-link primary">DM on X →</a>
            <a href="mailto:alexmustapha11@gmail.com" className="contact-link">Email</a>
            <a href="https://t.me/THaFa_11" className="contact-link">Telegram</a>
          </div>
        </section>

        <footer>
          <div className="footer-grid">
            <div className="footer-left">© 2026 Dr. Alex — Built with precision.</div>
            <div className="footer-links">
              <a href="https://twitter.com/soligxbt">@SOLIGXBT</a>
              <a href="mailto:alexmustapha11@gmail.com">Email</a>
              <a href="https://t.me/THaFa_11">Telegram</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
