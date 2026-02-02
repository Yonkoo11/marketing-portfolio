export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header - minimal */}
      <header className="py-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm tracking-wide">dr. alex</span>
          <a
            href="https://x.com/soligxbt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-accent"
          >
            @soligxbt
          </a>
        </div>
      </header>

      {/* Hero - simple, striking */}
      <section className="px-6 md:px-12 pt-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            <div className="animate-in">
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted mb-6">
                Marketing Profile
              </p>
              <h1 className="text-[64px] md:text-[80px] leading-[0.95] italic mb-8">
                dr. alex
              </h1>
              <p className="text-text-secondary max-w-md leading-relaxed mb-10">
                Medical doctor with a second practice in Web3 marketing.
                I bring clinical precision to content strategy, campaign analysis,
                and community growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  Work with me
                </a>
                <a href="#work" className="btn-secondary">
                  See my work
                </a>
              </div>
            </div>

            {/* Right column - vitals */}
            <div className="animate-in delay-1">
              <div className="profile-card p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-strong">
                  <div className="w-16 h-16 avatar-frame">
                    <img
                      src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg"
                      alt="dr. alex"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm">@SOLIGXBT</div>
                    <div className="text-xs text-text-muted">Verified</div>
                  </div>
                </div>
                <div className="vital">
                  <div className="vital-label">Followers</div>
                  <div className="vital-value">2,142</div>
                </div>
                <div className="vital">
                  <div className="vital-label">Engagement</div>
                  <div className="vital-value green">High</div>
                </div>
                <div className="vital">
                  <div className="vital-label">Status</div>
                  <div className="stamp mt-2">Open to Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Work */}
      <section id="work" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted sticky top-8">
                Selected Work
              </p>
            </div>
            <div className="space-y-16">
              {/* Work item 1 */}
              <div className="margin-line pl-8">
                <p className="text-xs uppercase tracking-[0.15em] text-accent mb-3">
                  Campaign Analysis
                </p>
                <h3 className="text-2xl italic mb-4">Infinex Airdrop Breakdown</h3>
                <p className="text-text-secondary mb-6 max-w-lg">
                  Dissected Infinex's viral airdrop rollout. Identified the mechanics
                  driving 10x engagement: gamified reveals, influencer seeding,
                  and precision FOMO triggers.
                </p>
                <div className="flex gap-8 text-sm">
                  <div>
                    <span className="text-text-muted">Impressions</span>
                    <span className="ml-2 font-bold">850K+</span>
                  </div>
                  <div>
                    <span className="text-text-muted">Engagement</span>
                    <span className="ml-2 font-bold">12%</span>
                  </div>
                </div>
              </div>

              {/* Work item 2 */}
              <div className="margin-line pl-8">
                <p className="text-xs uppercase tracking-[0.15em] text-accent mb-3">
                  Content Strategy
                </p>
                <h3 className="text-2xl italic mb-4">Avalanche Content Study</h3>
                <p className="text-text-secondary mb-6 max-w-lg">
                  Six-month analysis of Avalanche's top-performing content.
                  Extracted winning formulas: meme formats, thread structures,
                  and timing patterns for maximum reach.
                </p>
                <div className="flex gap-8 text-sm">
                  <div>
                    <span className="text-text-muted">Reach</span>
                    <span className="ml-2 font-bold">2.1M+</span>
                  </div>
                  <div>
                    <span className="text-text-muted">Avg. Engagement</span>
                    <span className="ml-2 font-bold">15K</span>
                  </div>
                </div>
              </div>

              {/* Work item 3 */}
              <div className="margin-line pl-8">
                <p className="text-xs uppercase tracking-[0.15em] text-accent mb-3">
                  Viral Content
                </p>
                <h3 className="text-2xl italic mb-4">Meme Marketing</h3>
                <p className="text-text-secondary mb-6 max-w-lg">
                  Created viral meme content that consistently outperforms industry
                  benchmarks. Developed repeatable frameworks for crypto-native
                  humor that builds community.
                </p>
                <div className="flex gap-8 text-sm">
                  <div>
                    <span className="text-text-muted">Avg. Likes</span>
                    <span className="ml-2 font-bold">300-400</span>
                  </div>
                  <div>
                    <span className="text-text-muted">vs Industry</span>
                    <span className="ml-2 font-bold">5x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Services - minimal list */}
      <section id="services" className="px-6 md:px-12 py-24 bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted sticky top-8">
                Services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl italic mb-4">Content Strategy</h3>
                <p className="text-text-secondary text-sm mb-6">
                  Data-driven content calendars and viral post frameworks.
                  Turn your feed into a growth engine.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">Threads</span>
                  <span className="tag">Memes</span>
                  <span className="tag">Visuals</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl italic mb-4">Campaign Analysis</h3>
                <p className="text-text-secondary text-sm mb-6">
                  Deep competitive analysis and campaign breakdowns.
                  Learn what's actually working in Web3.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">Research</span>
                  <span className="tag">Reports</span>
                  <span className="tag">Strategy</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl italic mb-4">Community Growth</h3>
                <p className="text-text-secondary text-sm mb-6">
                  Organic audience building and engagement tactics.
                  Build a loyal following that converts.
                </p>
                <div className="flex flex-wrap gap-2">
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

      {/* About - brief */}
      <section id="about" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted sticky top-8">
                About
              </p>
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl italic mb-8">
                The doctor who gets marketing.
              </h2>
              <p className="text-text-secondary mb-6">
                Licensed medical doctor who found a second calling in Web3 marketing.
                The same analytical rigor I apply to diagnostics, I bring to campaign strategy.
              </p>
              <p className="text-text-secondary mb-8">
                Clinical precision in messaging. Evidence-based decisions.
                The ability to translate complex ideas into content that resonates.
                In crypto since 2021, building through bear markets.
              </p>
              <div className="flex flex-wrap gap-2">
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

      {/* Contact - simple */}
      <section id="contact" className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted sticky top-8">
                Contact
              </p>
            </div>
            <div>
              <h2 className="text-3xl italic mb-8">
                Let's work together.
              </h2>
              <p className="text-text-secondary mb-10 max-w-md">
                Looking for a marketer who understands Web3 culture
                and delivers results? Reach out.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://x.com/soligxbt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  DM on X
                </a>
                <a
                  href="mailto:alexmustapha11@gmail.com"
                  className="btn-secondary"
                >
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

      {/* Footer - minimal */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            2026 dr. alex
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green" />
            <span className="text-text-muted text-xs">Available for projects</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
