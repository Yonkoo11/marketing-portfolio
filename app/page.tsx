import { profile, contact, stats, tickerItems, caseStudies, services } from "@/data/config";

export default function Home() {
  return (
    <>
      {/* Ticker tape */}
      <div className="ticker-wrap">
        <div className="ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="dot"></span>
              {typeof item === "string" ? (
                ` ${item}`
              ) : (
                <> <span className="ticker-highlight">{item.text}</span>{item.suffix}</>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <header className="masthead">
          <div className="edition-info">
            <span>Est. {profile.founded}</span>
            <span>Marketing Edition</span>
            <span className="verified-badge">
              <svg viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/></svg>
              {contact.xHandle}
            </span>
          </div>
          <h1 className="paper-name">The <span>Daily</span> Dispatch</h1>
          <p className="tagline">&ldquo;{profile.tagline}&rdquo;</p>
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
              <h2 className="main-headline">From Code to Campaign: <em>A Builder&apos;s Approach</em></h2>
              <p className="byline">Profile: <strong>{profile.name}</strong> | Marketing & Growth</p>
              <p className="lead-paragraph">Most marketers talk about products. I build them first, then figure out how to get people to care.</p>
              <div className="article-body">
                <p className="drop-cap">The marketing landscape is littered with inflated metrics and vague deliverables. But {profile.name} ({contact.xHandle}) represents a rare breed: technical enough to understand the code, creative enough to make it resonate, and disciplined enough to deliver results.</p>
                <p>&ldquo;{profile.bio},&rdquo; Alex states plainly. No corporate jargon. No buzzwords. Just results.</p>
                <div className="pull-quote">
                  When I market something, I actually understand how it works under the hood. No bullshit.
                </div>
                <p>With a {stats.engagementRate} engagement rate that&apos;s 4-6x the industry average, a track record that includes being part of the core marketing team behind Truth Bounty&apos;s 2nd place hackathon finish, and relationships with key influencers, the proof is in the performance.</p>
              </div>
            </article>

            <aside className="sidebar">
              <div className="profile-box">
                <img src={profile.profileImage} alt={profile.name} />
                <p className="profile-caption">Builder. Marketer. Ships products.</p>
              </div>
              <div className="vital-stats">
                <h3>The Numbers</h3>
                <div className="stat-row">
                  <span className="stat-label">Followers</span>
                  <div>
                    <span className="stat-value">{stats.followers}</span>
                    <span className="stat-context">Verified</span>
                  </div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Eng. Rate</span>
                  <div>
                    <span className="stat-value highlight">{stats.engagementRate}</span>
                    <span className="stat-context">{stats.engagementContext}</span>
                  </div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Building</span>
                  <div>
                    <span className="stat-value">{stats.buildingSince}</span>
                    <span className="stat-context">Since</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="work" className="columns-section">
          <header className="section-header">
            <h2 className="section-title">Case Files</h2>
          </header>

          <div className="stories-grid">
            {caseStudies.map((study) => (
              <article key={study.title} className="story-card">
                <p className="story-category">{study.category}</p>
                <h3 className="story-headline">{study.title}</h3>
                <p className="story-excerpt">{study.excerpt}</p>
                <span className="story-result">{study.result}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="classifieds">
          <div className="container">
            <header className="classifieds-header">
              <h2 className="classifieds-title">Services</h2>
            </header>

            <ul className="services-list">
              {services.map((service) => (
                <li key={service.number} className="service-ad">
                  <div className="ad-number">{service.number}</div>
                  <h3 className="ad-title">{service.title}</h3>
                  <p className="ad-desc">{service.description}</p>
                  <div className="ad-tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="ad-tag">{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact-banner">
          <p className="contact-label">{profile.status}</p>
          <h2 className="contact-headline">Let&apos;s make something people talk about.</h2>
          <p className="contact-subhead">Looking for marketing that actually converts? Let&apos;s discuss your project. I respond to every serious inquiry within 24 hours.</p>
          <div className="contact-links">
            <a href={contact.x} className="contact-link primary">DM on X &rarr;</a>
            <a href={`mailto:${contact.email}`} className="contact-link">Email</a>
            <a href={contact.telegram} className="contact-link">Telegram</a>
          </div>
        </section>

        <footer>
          <div className="footer-grid">
            <div className="footer-left">&copy; {new Date().getFullYear()} {profile.name} &mdash; Built with precision.</div>
            <div className="footer-links">
              <a href={contact.x}>{contact.xHandle}</a>
              <a href={`mailto:${contact.email}`}>Email</a>
              <a href={contact.telegram}>Telegram</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
