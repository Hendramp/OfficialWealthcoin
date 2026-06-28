import { TARGET_CHAIN_ID } from '../contracts/addresses';
import { formatToken, shortAddr } from '../utils/format';

export default function WalletPanel({ account, chainId, stats, onRefresh, onSwitch }) {
  if (!account) return null;
  const wrongNetwork = chainId !== TARGET_CHAIN_ID;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></span>
          <span className="text-white/40 text-xs uppercase tracking-wider">Wallet</span>
          <span className="text-[#D4AF37] font-mono text-sm">{shortAddr(account)}</span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Balance label="POL" value={formatToken(stats.polBalance, 18, 4)} />
          <Balance label="WTC Held" value={formatToken(stats.tokenBalance)} gold />
          <Balance label="WTC Staked" value={formatToken(stats.stakedBalance)} green />
          <Balance label="Rewards" value={formatToken(stats.pendingRewards)} green />
        </div>
        <div className="flex items-center gap-2">
          {wrongNetwork && <button onClick={onSwitch} className="btn-danger px-3 py-1.5 rounded-lg text-xs font-semibold">Switch to Polygon</button>}
          <button onClick={onRefresh} className="px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 transition-all text-xs">↻ Refresh</button>
        </div>
      </div>
    </section>
  );
}

function Balance({ label, value, gold, green }) {
  return (
    <div className="text-center">
      <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
      <div className={`${gold ? 'text-[#FFD700]' : green ? 'text-[#00C853]' : 'text-white'} font-bold text-base`}>{value}</div>
    </div>
  );
}
