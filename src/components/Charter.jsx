const charterSections = [
  ['Mission', 'WealthCoin exists to build transparent blockchain tools that encourage stewardship, education, service, and long-term value.'],
  ['Foundation', 'We acknowledge God as the source of wisdom and seek to build with humility, accountability, and biblical principles.'],
  ['Core Values', 'Integrity before profit. Transparency before hype. Stewardship before speculation. Education before adoption.'],
  ['Biblical Leadership', 'We seek to lead with wisdom, service, honesty, and accountability throughout the lifespan of WealthCoin.'],
  ['Long-Term Vision', 'Our vision includes WealthCoin Academy, Biblical Finance resources, crypto education, governance, and transparent ecosystem growth.'],
  ['Living Commitment', 'This Charter is intended to guide WealthCoin as the project, community, and technology continue to grow.'],
];

const scriptures = [
  ['Proverbs 3:5–6', 'Trust in the Lord with all your heart.'],
  ['Micah 6:8', 'Do justice, love kindness, and walk humbly with your God.'],
  ['1 Corinthians 4:2', 'It is required of stewards that they be found faithful.'],
  ['Colossians 3:23', 'Whatever you do, work heartily, as for the Lord.'],
];

export default function Charter() {
  return (
    <section id="charter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <div className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-semibold mb-3">
          Official Charter
        </div>
        <h2 className="section-title">
          The <span className="gold-text">WealthCoin Charter</span>
        </h2>
        <p className="text-white/45 max-w-3xl mx-auto mt-4">
          The written foundation for WealthCoin’s mission, values, biblical leadership, and long-term vision.
        </p>
      </div>

      <div className="card-gold-glow rounded-3xl p-6 sm:p-8 mb-8 text-center">
        <div className="text-[#FFD700] text-sm uppercase tracking-[0.3em] mb-3">
          Built on Faith • Driven by Integrity • Committed to Stewardship
        </div>
        <p className="text-white/60 max-w-4xl mx-auto leading-relaxed">
          WealthCoin is being developed with a desire to pursue wisdom, transparency, and responsible innovation under the guidance of the Holy Spirit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {charterSections.map(([title, text]) => (
          <div key={title} className="card-glass rounded-2xl border border-[#D4AF37]/15 p-6">
            <h3 className="text-[#D4AF37] font-bold text-xl mb-3">{title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 card-glass rounded-2xl border border-[#D4AF37]/20 p-6">
        <h3 className="text-center text-[#D4AF37] font-bold text-xl mb-6">
          Scripture That Guides Us
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {scriptures.map(([ref, text]) => (
            <div key={ref} className="rounded-xl border border-[#D4AF37]/15 bg-black/30 p-4">
              <div className="text-[#FFD700] text-sm font-semibold mb-2">{ref}</div>
              <p className="text-white/50 text-sm italic">“{text}”</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <div className="text-white/35 text-sm">
          Charter Version 1.0 • July 2026 • A living commitment for the lifespan of WealthCoin
        </div>
      </div>
    </section>
  );
}