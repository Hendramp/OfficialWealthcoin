import { FeatureIcon } from './Icons';

const features = [
  ['Core Token', '✅ Live', 'Existing WTC token is deployed on Polygon.'],
  ['Presale Contract', '✅ Live', 'Buy flow uses the deployed WTCPresale contract.'],
  ['Live Calculator', '✅ Live', 'Estimates come directly from the smart contract.'],
  ['Staking', '🟡 In Development', 'Contract deployed; frontend and reward funding flow still being finalized.'],
  ['Holder Dashboard', '🟡 In Development', 'Balances are visible now; advanced history and receipts are planned.'],
  ['Governance', '🔵 Planned', 'Future voting can decide burns and ecosystem proposals.'],
  ['Cross-Chain Expansion', '🔵 Planned', 'Future EVM-compatible chain expansion remains in roadmap.'],
  ['Mobile App', '⚪ Future Vision', 'Native app considered after core dApp stabilizes.'],
];

export default function DevelopmentCenter() {
  return (
    <section id="development" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <div className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-semibold mb-3">Transparency Center</div>
        <h2 className="section-title">Development <span className="gold-text">Progress</span></h2>
        <p className="text-white/45 max-w-2xl mx-auto mt-4">WealthCoin separates live features from in-development and planned roadmap items so holders can see exactly where the project stands.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(([title, status, desc]) => (
          <div key={title} className="card-glass rounded-2xl border border-[#D4AF37]/15 p-5 hover:border-[#D4AF37]/35 transition-all">
            <FeatureIcon>{status.slice(0, 2)}</FeatureIcon>
            <h3 className="text-white font-bold mt-4 mb-1">{title}</h3>
            <div className="text-[#D4AF37] text-xs font-semibold mb-3">{status}</div>
            <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
