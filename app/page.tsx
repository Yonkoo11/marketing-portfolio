export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold">dr. alex</span>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-text-secondary hover:text-text transition-colors">Work</a>
            <a href="#services" className="text-sm text-text-secondary hover:text-text transition-colors">Services</a>
            <a href="#about" className="text-sm text-text-secondary hover:text-text transition-colors">About</a>
            <a href="#contact" className="cta-button text-sm py-2 px-4">Let's Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
            <div>
              <p className="text-accent font-medium mb-4">Web3 Growth Marketer</p>
              <h1 className="text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tight mb-6">
                I turn crypto projects into
                <span className="font-[family-name:var(--font-display)] italic font-normal"> cultural movements</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-xl mb-8 leading-relaxed">
                Viral content strategist and community builder for Web3 brands.
                Medical precision meets creative marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="cta-button">
                  Work With Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#work" className="ghost-button">
                  See My Work
                </a>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-border mb-4 lg:ml-auto glow">
                <img
                  src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg"
                  alt="dr. alex"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="https://x.com/soligxbt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors font-medium"
              >
                @soligxbt
              </a>
              <p className="text-text-muted text-sm mt-1">2,100+ followers</p>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="metric-card">
              <div className="text-4xl font-bold gradient-text mb-2">400%+</div>
              <div className="text-text-secondary text-sm">Average Engagement Rate</div>
            </div>
            <div className="metric-card">
              <div className="text-4xl font-bold gradient-text mb-2">2.1K</div>
              <div className="text-text-secondary text-sm">Organic Followers</div>
            </div>
            <div className="metric-card">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-text-secondary text-sm">Viral Posts Created</div>
            </div>
            <div className="metric-card">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-text-secondary text-sm">Campaigns Analyzed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Case Studies */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-accent font-medium mb-3">Selected Work</p>
            <h2 className="text-4xl font-bold">Campaign Case Studies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="case-card">
              <div className="case-card-image">
                <span>∞</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Campaign Analysis
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Infinex Airdrop Campaign</h3>
                <p className="text-text-secondary mb-6">
                  Deep-dive analysis of Infinex's viral airdrop rollout strategy. Identified key mechanics
                  driving 10x engagement: gamified reveals, influencer seeding, and FOMO triggers.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="text-accent font-bold">850K+</div>
                    <div className="text-text-muted">Impressions</div>
                  </div>
                  <div>
                    <div className="text-accent font-bold">12%</div>
                    <div className="text-text-muted">Engagement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="case-card">
              <div className="case-card-image">
                <span>◆</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Content Strategy
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Avalanche Content Breakdown</h3>
                <p className="text-text-secondary mb-6">
                  Analyzed Avalanche's top-performing content over 6 months. Extracted winning formulas:
                  meme formats, thread structures, and timing patterns that drove maximum reach.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="text-accent font-bold">2.1M+</div>
                    <div className="text-text-muted">Total Reach</div>
                  </div>
                  <div>
                    <div className="text-accent font-bold">15K</div>
                    <div className="text-text-muted">Avg. Engagement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="case-card">
              <div className="case-card-image">
                <span>⚡</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Viral Content
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Meme Marketing Playbook</h3>
                <p className="text-text-secondary mb-6">
                  Created viral meme content that consistently outperforms industry benchmarks.
                  Developed repeatable frameworks for crypto-native humor that builds community.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="text-accent font-bold">300-400</div>
                    <div className="text-text-muted">Avg. Likes/Post</div>
                  </div>
                  <div>
                    <div className="text-accent font-bold">5x</div>
                    <div className="text-text-muted">Industry Avg.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="case-card">
              <div className="case-card-image">
                <span>◎</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Community Growth
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Brand Growth</h3>
                <p className="text-text-secondary mb-6">
                  Grew personal following to 2K+ through organic content strategy. Zero paid promotion.
                  Built engaged audience of crypto natives, founders, and marketers.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="text-accent font-bold">2,142</div>
                    <div className="text-text-muted">Followers</div>
                  </div>
                  <div>
                    <div className="text-accent font-bold">100%</div>
                    <div className="text-text-muted">Organic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-accent font-medium mb-3">Services</p>
            <h2 className="text-4xl font-bold">How I Can Help</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-bg hover:border-accent transition-colors">
              <div className="text-4xl mb-6">📈</div>
              <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
              <p className="text-text-secondary mb-6">
                Data-driven content calendars, viral post frameworks, and engagement optimization.
                Turn your feed into a growth engine.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="service-tag">Threads</span>
                <span className="service-tag">Memes</span>
                <span className="service-tag">Visuals</span>
              </div>
            </div>

            <div className="p-8 border border-border bg-bg hover:border-accent transition-colors">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Campaign Analysis</h3>
              <p className="text-text-secondary mb-6">
                Deep competitive analysis, campaign breakdowns, and strategic recommendations.
                Learn from what's working in Web3.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="service-tag">Research</span>
                <span className="service-tag">Reports</span>
                <span className="service-tag">Strategy</span>
              </div>
            </div>

            <div className="p-8 border border-border bg-bg hover:border-accent transition-colors">
              <div className="text-4xl mb-6">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Community Growth</h3>
              <p className="text-text-secondary mb-6">
                Organic audience building, engagement tactics, and community management.
                Build a loyal following that converts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="service-tag">Twitter/X</span>
                <span className="service-tag">Discord</span>
                <span className="service-tag">Telegram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-3">About</p>
              <h2 className="text-4xl font-bold mb-6">The Doctor Who Gets Marketing</h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                I'm a licensed medical doctor who found a second calling in Web3 marketing.
                The same analytical rigor I apply to diagnostics, I bring to campaign strategy.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                My unique background gives me an edge: clinical precision in messaging,
                evidence-based decision making, and the ability to translate complex ideas
                into content that resonates.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                I've been in crypto since 2021, surviving bear markets and building through them.
                I understand the culture because I live it.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="service-tag">Medical Doctor</span>
                <span className="service-tag">Crypto Native</span>
                <span className="service-tag">Content Creator</span>
                <span className="service-tag">Growth Strategist</span>
              </div>
            </div>
            <div className="relative">
              <div className="testimonial">
                <p className="text-lg italic text-text-secondary mb-6 pt-8">
                  "Alex brings a unique analytical approach to marketing. His campaign breakdowns
                  helped us identify what was actually driving results vs. vanity metrics."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-medium">James D.</div>
                    <div className="text-text-muted text-sm">DeFi Protocol Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium mb-3">Ready to grow?</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's build something
            <span className="font-[family-name:var(--font-display)] italic font-normal"> together</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Looking for a marketer who understands Web3 culture and delivers results?
            Let's talk about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://x.com/soligxbt"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              DM on X
            </a>
            <a
              href="mailto:alexmustapha11@gmail.com"
              className="ghost-button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="https://t.me/THaFa_11"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">© 2026 dr. alex. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-secondary text-sm">Available for projects</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
