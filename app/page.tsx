export default function Home() {
  return (
    <div className="page">
      {/* Header */}
      <header className="grid grid-cols-[1fr_auto] gap-10 p-10 pl-20 border-b-2 border-ink">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink-light mb-2">
            Marketing Profile · Diagnostic Report
          </p>
          <h1 className="font-serif text-[56px] font-normal italic tracking-tight leading-none mb-3">
            dr. alex
          </h1>
          <p className="text-[14px] max-w-[420px] leading-relaxed">
            Licensed medical doctor with a passion for digital storytelling,
            brand strategy, and audience-building. Bridging healthcare expertise
            with creative marketing.
          </p>
        </div>
        <div className="text-right">
          <div className="w-[100px] h-[100px] border-[3px] border-ink p-1 mb-3 ml-auto">
            <img
              src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg"
              alt="dr. alex"
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
          <div className="text-[10px] uppercase tracking-[0.15em]">
            <div className="text-[14px] font-bold tracking-normal">
              @SOLIGXBT
            </div>
            <div className="text-ink-light">ID: 1432626899533053952</div>
            <div className="text-ink-light">Status: Verified ✓</div>
          </div>
        </div>
      </header>

      {/* Vitals Strip */}
      <div className="grid grid-cols-4 border-b border-grid">
        <div className="p-6 pl-20 border-r border-grid">
          <div className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-1">
            Follower Count
          </div>
          <div className="font-serif text-[32px]">2,142</div>
        </div>
        <div className="p-6 border-r border-grid">
          <div className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-1">
            Avg. Engagement
          </div>
          <div className="font-serif text-[32px] text-green">High</div>
        </div>
        <div className="p-6 border-r border-grid">
          <div className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-1">
            Content Type
          </div>
          <div className="font-serif text-[32px]">Viral</div>
        </div>
        <div className="p-6">
          <div className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-1">
            Specialty
          </div>
          <div className="font-serif text-[32px]">Memes</div>
          <div className="text-[12px] text-ink-light">& strategy</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[2fr_1fr]">
        {/* Left Column */}
        <main className="p-10 pl-20 border-r border-grid">
          <section className="mb-10">
            <h2 className="section-title">Marketing Expertise</h2>

            <div className="entry">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-[22px] italic">
                  Content Strategy
                </h3>
                <span className="status-badge active">Active</span>
              </div>
              <p className="text-[11px] text-red uppercase tracking-[0.05em] mb-2">
                Viral Content · Meme Creation · Audience Growth
              </p>
              <p className="text-[12px] text-ink-light leading-relaxed">
                Crafting engaging content that resonates with crypto-native
                audiences. Proven track record of viral posts reaching 300-400+
                engagements. Specializing in relatable, humorous content that
                builds community loyalty.
              </p>
            </div>

            <div className="entry">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-[22px] italic">
                  Campaign Analysis
                </h3>
                <span className="status-badge active">Active</span>
              </div>
              <p className="text-[11px] text-red uppercase tracking-[0.05em] mb-2">
                Performance Tracking · Strategy Evaluation · ROI Assessment
              </p>
              <p className="text-[12px] text-ink-light leading-relaxed">
                Deep analysis of high-impact marketing campaigns across crypto
                projects. Evaluated and spotlighted top-tier efforts including
                Infinex airdrop rollouts and Avalanche content delivery.
                Identifying winning strategies and optimization opportunities.
              </p>
            </div>

            <div className="entry">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-[22px] italic">
                  Community Building
                </h3>
                <span className="status-badge active">Active</span>
              </div>
              <p className="text-[11px] text-red uppercase tracking-[0.05em] mb-2">
                Audience Growth · Engagement Optimization · Brand Voice
              </p>
              <p className="text-[12px] text-ink-light leading-relaxed">
                Building and nurturing engaged communities through consistent,
                authentic interaction. Grew personal following to 2K+ through
                organic content strategy. Expert in developing distinctive brand
                voices that stand out in crowded markets.
              </p>
            </div>

            <div className="entry">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-[22px] italic">
                  Healthcare Communication
                </h3>
                <span className="status-badge highlight">Unique Edge</span>
              </div>
              <p className="text-[11px] text-red uppercase tracking-[0.05em] mb-2">
                Medical Background · Trust Building · Clear Messaging
              </p>
              <p className="text-[12px] text-ink-light leading-relaxed">
                As a licensed MD, bringing clinical communication skills to
                marketing: precision in messaging, ethical decision-making, and
                the ability to translate complex concepts into accessible
                content. Unique credibility for health-adjacent brands.
              </p>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="p-10 pl-6 bg-[rgba(0,0,0,0.01)]">
          <div className="mb-8">
            <h3 className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-3">
              Contact Information
            </h3>
            <div className="text-[11px] space-y-2">
              <div className="flex justify-between">
                <span className="text-ink-light">X/Twitter</span>
                <a
                  href="https://x.com/soligxbt"
                  className="text-ink hover:text-red transition-colors"
                >
                  @soligxbt
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-light">Email</span>
                <a
                  href="mailto:alexmustapha11@gmail.com"
                  className="text-ink hover:text-red transition-colors"
                >
                  alexmustapha11@gmail.com
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-light">Telegram</span>
                <a
                  href="https://t.me/THaFa_11"
                  className="text-ink hover:text-red transition-colors"
                >
                  @THaFa_11
                </a>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-3">
              Marketing Skills
            </h3>
            <ul className="sidebar-list">
              <li>
                <span className="text-ink-light">Content</span>
                <span>Memes, Threads, Visuals</span>
              </li>
              <li>
                <span className="text-ink-light">Strategy</span>
                <span>Campaign, Brand, Growth</span>
              </li>
              <li>
                <span className="text-ink-light">Platforms</span>
                <span>X, Telegram, Discord</span>
              </li>
              <li>
                <span className="text-ink-light">Analytics</span>
                <span>Engagement, ROI</span>
              </li>
              <li>
                <span className="text-ink-light">Niche</span>
                <span>Crypto, Web3, Health</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] uppercase tracking-[0.2em] text-ink-light mb-3">
              Clinical Notes
            </h3>
            <div className="notes-lined">
              Patient exhibits strong creative tendencies. Prognosis: will
              create viral content regardless of market conditions. Recommend
              continued exposure to interesting brands and campaigns.
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="p-6 pl-20 border-t-2 border-ink flex justify-between items-center text-[10px] uppercase tracking-[0.15em]">
        <span className="text-ink-light">Report Generated: February 2026</span>
        <a
          href="https://dr-alex-portfolio.vercel.app"
          className="text-ink hover:text-red transition-colors"
        >
          dr-alex-portfolio.vercel.app
        </a>
        <div className="stamp">Open to Work</div>
      </footer>
    </div>
  );
}
