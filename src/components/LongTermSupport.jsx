const items = [
  ['💎', 'Long-Term Holder Support', 'Future staking, rewards, and dashboards are planned around long-term participation.'],
  ['🛡️', 'Emergency Pause', 'The presale owner can pause purchases during maintenance or unexpected issues.'],
  ['🏛️', 'Governance Future', 'Unsold token burns are not automatic and can be handled by future community vote.'],
  ['🌉', 'Cross-Chain Roadmap', 'WealthCoin keeps future blockchain expansion visible while focusing on Polygon first.'],
];

export default function LongTermSupport() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <div className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-semibold mb-3">Holder Support</div>
        <h2 className="section-title">Built for <span className="gold-text">Long-Term Trust</span></h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(([icon, title, desc]) => (
          <div key={title} className="card-glass rounded-2xl border border-[#D4AF37]/15 p-6 flex gap-4">
            <div className="text-3xl">{icon}</div>
            <div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
