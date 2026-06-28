import { IconCoin } from './Icons';

export default function Hero({ account, onConnect }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute inset-0 grid-overlay opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#00C853]/5 blur-3xl animate-pulse"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="w-28 h-28 mx-auto mb-8 animate-float drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"><IconCoin /></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8247E5]/10 border border-[#8247E5]/30 text-[#A670EF] text-xs font-medium mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8247E5] animate-pulse"></span>Live on Polygon Network
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
          <span className="gold-text-shimmer">Build Generational</span><br /><span className="text-white">Wealth</span>
        </h1>
        <p className="text-[#D4AF37]/70 text-base sm:text-lg md:text-xl mb-4 font-light tracking-wide">Rooted in Faith — Powered by Blockchain</p>
        <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          WealthCoin (WTC) is a faith-driven, long-term wealth asset built on Polygon with a transparent presale, future staking, and ecosystem growth plans.
        </p>
        <div className="mb-8 max-w-2xl mx-auto">
          <p className="text-white/70 text-base sm:text-lg italic text-center leading-relaxed">
            “Trust in the Lord with all your heart and lean not on your own understanding.”
            <span className="block mt-1 text-white/40 text-sm">— Proverbs 3:5</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {!account ? <button onClick={onConnect} className="btn-gold px-8 py-3.5 rounded-xl text-base font-bold animate-pulse-gold">Connect Wallet to Start</button> : <a href="#buy" className="btn-gold px-8 py-3.5 rounded-xl text-base font-bold">Buy WTC Now</a>}
          <a href="#development" className="btn-ghost px-8 py-3.5 rounded-xl text-base font-semibold">Development Center ↓</a>
        </div>
      </div>
    </section>
  );
}
