import overviewPdf from '../assets/docs/WealthCoin_Overview_v1.pdf';
import charterPdf from '../assets/docs/WealthCoin_Charter_v1.pdf';

const documents = [
  {
    icon: '📊',
    title: 'WealthCoin Overview',
    label: 'Start Here',
    description: 'A simple beginner-friendly visual guide to WealthCoin, crypto, stewardship, and the mission.',
    meta: 'Estimated read: 5 minutes',
    button: 'View Infographic',
    href: overviewPdf,
  },
  {
    icon: '📜',
    title: 'WealthCoin Charter',
    label: 'Official Charter',
    description: 'The deeper mission, values, biblical leadership, long-term vision, and guiding scriptures of WealthCoin.',
    meta: 'Version 1.0 • July 2026',
    button: 'Read Charter',
    href: charterPdf,
  },
  {
    icon: '📘',
    title: 'Whitepaper',
    label: 'Coming Soon',
    description: 'Investor-grade documentation covering tokenomics, roadmap, contracts, and ecosystem development.',
    meta: 'In development',
    button: 'Coming Soon',
    disabled: true,
  },
];

export default function StartHere() {
  return (
    <section id="knowledge-center" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <div className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-semibold mb-3">
          Knowledge Center
        </div>

        <h2 className="section-title">
          Start With <span className="gold-text">Clarity</span>
        </h2>

        <p className="text-white/45 max-w-2xl mx-auto mt-4">
          Explore WealthCoin through official documents designed to help new users, holders, and future community members understand the mission.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="card-glass rounded-2xl border border-[#D4AF37]/15 p-6 flex flex-col"
          >
            <div className="text-4xl mb-4">{doc.icon}</div>

            <div className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-2">
              {doc.label}
            </div>

            <h3 className="text-white font-bold text-xl mb-3">
              {doc.title}
            </h3>

            <p className="text-white/45 text-sm leading-relaxed flex-1">
              {doc.description}
            </p>

            <div className="text-white/30 text-xs mt-5 mb-4">
              {doc.meta}
            </div>

            {doc.disabled ? (
              <button
                disabled
                className="btn-disabled w-full py-3 rounded-xl font-bold"
              >
                {doc.button}
              </button>
            ) : (
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-3 rounded-xl font-bold text-center"
              >
                {doc.button}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="card-gold-glow rounded-2xl p-6 mt-8 text-center">
        <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">
          WealthCoin is building a transparent ecosystem centered on education,
          stewardship, biblical leadership, and responsible blockchain
          development.
        </p>
      </div>
    </section>
  );
}