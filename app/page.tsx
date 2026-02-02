export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
                  Security Researcher · Smart Contract Auditor
                </span>
              </div>
              <h1 className="text-[48px] font-bold tracking-tight leading-none mb-4 font-[family-name:var(--font-display)]">
                dr. alex
              </h1>
              <p className="text-text-secondary max-w-lg leading-relaxed">
                Medical doctor turned security researcher. Applying clinical precision
                to smart contract auditing. Finding the vulnerabilities others miss.
              </p>
            </div>
            <div className="text-right">
              <div className="w-20 h-20 border border-border rounded-lg overflow-hidden mb-3 ml-auto">
                <img
                  src="https://pbs.twimg.com/profile_images/1980803386858414080/GWu3ilf9.jpg"
                  alt="dr. alex"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="https://x.com/soligxbt"
                className="text-accent hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @soligxbt
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x divide-border">
            <div className="py-6 pr-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2">
                Bugs Found
              </div>
              <div className="text-[32px] font-bold text-text font-[family-name:var(--font-display)]">
                5
              </div>
            </div>
            <div className="py-6 px-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2">
                Critical/High
              </div>
              <div className="text-[32px] font-bold text-critical font-[family-name:var(--font-display)]">
                2
              </div>
            </div>
            <div className="py-6 px-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2">
                Protocols
              </div>
              <div className="text-[32px] font-bold text-text font-[family-name:var(--font-display)]">
                Uniswap V4
              </div>
            </div>
            <div className="py-6 pl-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2">
                Focus Area
              </div>
              <div className="text-[32px] font-bold text-accent font-[family-name:var(--font-display)]">
                DeFi Hooks
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent">$</span>
            <span className="text-text-muted">cat findings.log</span>
            <span className="cursor text-accent">▋</span>
          </div>
          <h2 className="text-[28px] font-bold font-[family-name:var(--font-display)]">
            Security Findings
          </h2>
          <p className="text-text-secondary mt-2">
            Vulnerabilities discovered during smart contract security research
          </p>
        </div>

        {/* Findings */}
        <div className="space-y-8">
          {/* Finding 1 - Critical */}
          <div className="finding-card">
            <div className="finding-header">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="severity-critical px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider pulse-critical">
                    Critical
                  </span>
                  <span className="text-text-muted text-sm">TokenLaunchHook.sol</span>
                </div>
                <h3 className="text-lg font-semibold">
                  Per-user anti-bot tracking is broken because sender is SwapRouter, not the actual user
                </h3>
              </div>
              <div className="text-right text-sm text-text-muted shrink-0">
                <div>Impact: <span className="text-critical">High</span></div>
                <div>Likelihood: <span className="text-critical">High</span></div>
              </div>
            </div>
            <div className="finding-content">
              <p className="text-text-secondary mb-6">
                The hook tracks swap amounts and cooldowns per-address to enforce anti-bot limits.
                However, the <code className="text-accent">sender</code> parameter in _beforeSwap is the SwapRouter contract,
                not the actual user. <strong className="text-critical">ALL users share a single tracking entry.</strong>
              </p>

              <div className="code-block mb-6">
                <div className="code-header">
                  <span>TokenLaunchHook.sol:125-172</span>
                  <span className="text-critical text-xs">VULNERABLE</span>
                </div>
                <pre className="code-content">
<code>{`function _beforeSwap(
    address sender,  `}<span className="comment">// ← sender is SwapRouter, NOT user</span>{`
    PoolKey calldata key,
    SwapParams calldata params,
    bytes calldata
) internal override returns (bytes4, BeforeSwapDelta, uint24) {
    `}<span className="comment">// All users' swaps accumulate under same router address</span>{`
    if (`}<span className="highlight">addressLastSwapBlock[sender]</span>{` > 0) {
        uint256 blocksSinceLastSwap = block.number - addressLastSwapBlock[sender];
        if (blocksSinceLastSwap < phaseCooldown) {
            applyPenalty = true;
        }
    }
    `}<span className="highlight">addressSwappedAmount[sender]</span>{` += swapAmount;
    `}<span className="highlight">addressLastSwapBlock[sender]</span>{` = block.number;
}`}</code>
                </pre>
              </div>

              <div className="bg-surface-elevated border border-border rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-text-muted mb-2">Impact Analysis</div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li className="terminal-prompt">Per-user swap limits completely non-functional</li>
                  <li className="terminal-prompt">One user can exhaust limits for ALL users</li>
                  <li className="terminal-prompt">Attacker can grief legitimate users</li>
                  <li className="terminal-prompt">Anti-bot protection defeated</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finding 2 - Critical */}
          <div className="finding-card">
            <div className="finding-header">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="severity-critical px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider">
                    Critical
                  </span>
                  <span className="text-text-muted text-sm">TokenLaunchHook.sol</span>
                </div>
                <h3 className="text-lg font-semibold">
                  _resetPerAddressTracking() only resets address(0), user limits persist across phases
                </h3>
              </div>
              <div className="text-right text-sm text-text-muted shrink-0">
                <div>Impact: <span className="text-critical">High</span></div>
                <div>Likelihood: <span className="text-critical">High</span></div>
              </div>
            </div>
            <div className="finding-content">
              <p className="text-text-secondary mb-6">
                When phases transition, _resetPerAddressTracking() should reset all user tracking.
                Instead, it only resets <code className="text-accent">address(0)</code> - which is never used for actual tracking.
              </p>

              <div className="code-block mb-6">
                <div className="code-header">
                  <span>TokenLaunchHook.sol:189-192</span>
                  <span className="text-critical text-xs">BUG</span>
                </div>
                <pre className="code-content">
<code>{`function _resetPerAddressTracking() internal {
    `}<span className="comment">// Only resets address(0) - never used for actual tracking</span>{`
    `}<span className="highlight">addressSwappedAmount[address(0)] = 0;</span>{`
    `}<span className="highlight">addressLastSwapBlock[address(0)] = 0;</span>{`
    `}<span className="comment">// All actual tracking persists!</span>{`
}`}</code>
                </pre>
              </div>

              <div className="bg-surface-elevated border border-border rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-text-muted mb-2">Impact Analysis</div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li className="terminal-prompt">Users hitting Phase 1 limits remain limited in Phase 2</li>
                  <li className="terminal-prompt">Phase 2's higher limits (5%) meaningless if Phase 1 amount (1%) persists</li>
                  <li className="terminal-prompt">Defeats purpose of graduated restrictions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finding 3 - Medium */}
          <div className="finding-card">
            <div className="finding-header">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="severity-medium px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider">
                    Medium
                  </span>
                  <span className="text-text-muted text-sm">TokenLaunchHook.sol</span>
                </div>
                <h3 className="text-lg font-semibold">
                  Phase boundary inconsistency between _beforeSwap and getCurrentPhase
                </h3>
              </div>
              <div className="text-right text-sm text-text-muted shrink-0">
                <div>Impact: <span className="text-medium">Medium</span></div>
                <div>Likelihood: <span className="text-critical">High</span></div>
              </div>
            </div>
            <div className="finding-content">
              <p className="text-text-secondary mb-6">
                The internal logic uses <code className="text-accent">&lt;=</code> for phase boundaries
                while the view function uses <code className="text-accent">&lt;</code>, causing state inconsistency
                at exact boundary blocks.
              </p>

              <div className="code-block mb-6">
                <div className="code-header">
                  <span>Comparison</span>
                  <span className="text-medium text-xs">INCONSISTENT</span>
                </div>
                <pre className="code-content">
<code>{`// _beforeSwap uses <= (lines 139-145)
if (blocksSinceLaunch `}<span className="highlight">&lt;=</span>{` phase1Duration) { newPhase = 1; }

// getCurrentPhase uses < (lines 197-202)
if (blocksSinceLaunch `}<span className="highlight">&lt;</span>{` phase1Duration) { return 1; }`}</code>
                </pre>
              </div>

              <div className="bg-surface-elevated border border-border rounded-lg p-4">
                <div className="text-[11px] uppercase tracking-wider text-text-muted mb-2">Impact Analysis</div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li className="terminal-prompt">View functions report wrong phase at boundaries</li>
                  <li className="terminal-prompt">Integrating contracts get incorrect state</li>
                  <li className="terminal-prompt">Occurs at every phase transition block</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finding 4 & 5 - Low */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="finding-card">
              <div className="finding-header">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="severity-low px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider">
                      Low
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">
                    Deploy script uses wrong hook flags
                  </h3>
                </div>
              </div>
              <div className="finding-content">
                <p className="text-text-secondary text-sm mb-4">
                  Script declares <code className="text-accent">BEFORE_INITIALIZE_FLAG</code> but
                  contract uses <code className="text-accent">afterInitialize: true</code>. Deployment will fail.
                </p>
                <div className="code-block">
                  <pre className="code-content text-xs">
<code><span className="line-remove">- BEFORE_INITIALIZE_FLAG</span>
<span className="line-add">+ AFTER_INITIALIZE_FLAG</span></code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="finding-card">
              <div className="finding-header">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="severity-low px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wider">
                      Low
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">
                    Dead state variables never updated
                  </h3>
                </div>
              </div>
              <div className="finding-content">
                <p className="text-text-secondary text-sm mb-4">
                  Multiple state variables declared but never incremented, wasting gas on deployment.
                </p>
                <div className="code-block">
                  <pre className="code-content text-xs">
<code><span className="text-text-muted">// Never incremented:</span>
totalPenaltyFeesCollected
addressTotalSwaps
addressPenaltyCount</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold font-[family-name:var(--font-display)] mb-8">
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="stat-card rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">Languages</div>
              <div className="space-y-2 text-sm">
                <div className="text-text">Solidity</div>
                <div className="text-text">Rust</div>
                <div className="text-text">TypeScript</div>
              </div>
            </div>
            <div className="stat-card rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">Tools</div>
              <div className="space-y-2 text-sm">
                <div className="text-text">Foundry</div>
                <div className="text-text">Slither</div>
                <div className="text-text">Echidna</div>
              </div>
            </div>
            <div className="stat-card rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">Protocols</div>
              <div className="space-y-2 text-sm">
                <div className="text-text">Uniswap V4</div>
                <div className="text-text">ERC-4626</div>
                <div className="text-text">Custom Hooks</div>
              </div>
            </div>
            <div className="stat-card rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">Focus</div>
              <div className="space-y-2 text-sm">
                <div className="text-text">DeFi Security</div>
                <div className="text-text">Access Control</div>
                <div className="text-text">Logic Bugs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-surface border border-border rounded-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2">
                Available for Security Audits
              </h2>
              <p className="text-text-secondary text-sm">
                DeFi protocols, smart contracts, and hook implementations
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://x.com/soligxbt"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link border border-border px-4 py-2 rounded-lg hover:border-accent"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @soligxbt
              </a>
              <a
                href="mailto:alexmustapha11@gmail.com"
                className="contact-link border border-border px-4 py-2 rounded-lg hover:border-accent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="https://t.me/THaFa_11"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link border border-border px-4 py-2 rounded-lg hover:border-accent"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-text-muted">
            <span>© 2026 dr. alex</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Available for audits
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
