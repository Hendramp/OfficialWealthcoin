import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { TARGET_CHAIN_ID } from '../contracts/addresses';
import { formatCountdown, formatToken } from '../utils/format';

export default function Presale({ account, chainId, stats, polInput, setPolInput, estimate, loading, buy, addToast, onConnect, onSwitch }) {
  const [now, setNow] = useState(() => Math.floor(Date.now() / 1000));
  useEffect(() => {
    const timer = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);

  const startTime = Number(stats.startTime || 0n);
  const startsIn = Math.max(0, startTime - now);
  const countdown = formatCountdown(startsIn);
  const sold = Number(ethers.formatEther(stats.totalSold || 0n));
  const cap = Number(ethers.formatEther(stats.presaleCap || 1n));
  const progress = cap > 0 ? Math.min((sold / cap) * 100, 100) : 0;
  const wrongNetwork = account && chainId !== TARGET_CHAIN_ID;
  const canBuy = account && !wrongNetwork && stats.started && !stats.paused && Number(polInput) > 0;

  async function handleBuy() {
    try {
      await buy();
    } catch (error) {
      addToast(error?.message || 'Purchase failed.', 'error');
    }
  }

  return (
    <section id="buy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionLabel>Live Presale</SectionLabel>
      <h2 className="section-title mb-10">Buy <span className="gold-text">WTC</span> with POL</h2>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/25 bg-[#0d0d0d] shadow-[0_0_60px_rgba(212,175,55,0.07)]">
          <div className="px-6 py-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-b border-[#D4AF37]/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C853]"></span></span>
              <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">WealthCoin Presale</span>
            </div>
            <span className="text-[10px] font-medium text-white/30 uppercase tracking-wider border border-white/10 rounded-full px-2.5 py-1">Stage {Number(stats.currentStage || 0n) + 1} of 5</span>
          </div>

          <div className="px-6 pt-6 pb-8 space-y-5">
            {!stats.started && (
              <div className="rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-4 text-center">
                <div className="text-white/40 text-xs uppercase tracking-widest mb-2">Presale Starts In</div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <TimeBox label="Days" value={countdown.d} />
                  <TimeBox label="Hours" value={countdown.h} />
                  <TimeBox label="Minutes" value={countdown.m} />
                  <TimeBox label="Seconds" value={countdown.s} />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <InfoCard label="Current Rate" value={`${formatToken(stats.rate, 18, 0)}`} sub="WTC per 1 POL" gold />
              <InfoCard label="Total Raised" value={formatToken(stats.totalRaised, 18, 4)} sub="POL" green />
            </div>

            <div className="rounded-xl bg-white/[0.03] border border-white/8 px-4 py-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/40 text-xs font-medium">Presale Progress</span>
                <span className="text-[#D4AF37] text-xs font-bold">{progress.toFixed(2)}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] transition-all duration-700" style={{ width: `${Math.max(progress, 0.8)}%` }} />
              </div>
              <div className="flex justify-between mt-2.5 text-[10px]">
                <span className="text-[#D4AF37]/60">{formatToken(stats.totalSold, 18, 0)} WTC sold</span>
                <span className="text-white/25">{formatToken(stats.presaleCap, 18, 0)} WTC cap</span>
              </div>
            </div>

            <div>
              <label className="text-white/50 text-xs mb-2 block uppercase tracking-wider">Amount (POL)</label>
              <div className="relative">
                <input type="number" min="0" step="0.01" value={polInput} onChange={(e) => setPolInput(e.target.value)} placeholder="0.0" className="input-gold w-full pr-20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4AF37]/60 text-sm font-medium">POL</span>
              </div>
            </div>

            <div className="bg-[#00C853]/5 border border-[#00C853]/20 rounded-xl p-4">
              <div className="flex justify-between items-center gap-3">
                <span className="text-white/50 text-sm">You receive</span>
                <span className="text-[#00C853] font-bold text-lg">{formatToken(estimate, 18, 4)} <span className="text-sm font-normal">WTC</span></span>
              </div>
              <div className="text-white/30 text-xs mt-1">Live on-chain estimate from WTCPresale</div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {['10', '50', '100', '250'].map((v) => <button key={v} onClick={() => setPolInput(v)} className="px-3 py-1.5 rounded-lg text-xs border border-[#D4AF37]/20 text-[#D4AF37]/60 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all">{v} POL</button>)}
            </div>

            {!account ? <button onClick={onConnect} className="btn-gold w-full py-3.5 rounded-xl font-bold text-base">Connect Wallet to Buy</button> :
              wrongNetwork ? <button onClick={onSwitch} className="btn-danger w-full py-3.5 rounded-xl font-bold text-base">Switch to Polygon</button> :
              !stats.started ? <button disabled className="btn-disabled w-full py-3.5 rounded-xl font-bold text-base">Presale Has Not Started</button> :
              stats.paused ? <button disabled className="btn-disabled w-full py-3.5 rounded-xl font-bold text-base">Presale Paused</button> :
              <button onClick={handleBuy} disabled={!canBuy || loading} className={`w-full py-3.5 rounded-xl font-bold text-base transition-all ${loading ? 'btn-disabled' : 'btn-green'}`}>{loading ? 'Processing…' : 'Buy WTC Now'}</button>}
          </div>
        </div>

        <div className="space-y-4">
          <InfoPanel title="Presale Status" rows={[
            ['Started', stats.started ? 'Yes' : 'No'],
            ['Paused', stats.paused ? 'Yes' : 'No'],
            ['Stage Remaining', `${formatToken(stats.currentStageRemaining, 18, 0)} WTC`],
            ['Total Remaining', `${formatToken(stats.remainingTokens, 18, 0)} WTC`],
          ]} />
          <InfoPanel title="Launch-Critical Notes" rows={[
            ['Delivery', 'Immediate WTC'],
            ['Unsold Tokens', 'Circulating supply'],
            ['Burn Policy', 'Only by vote'],
            ['Treasury', 'POL forwarded'],
          ]} />
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) { return <div className="text-center text-[#D4AF37] text-xs uppercase tracking-[0.35em] font-semibold mb-3">{children}</div>; }
function TimeBox({ value, label }) { return <div className="rounded-lg bg-black/30 border border-[#D4AF37]/15 py-3"><div className="text-[#FFD700] font-bold text-2xl">{String(value).padStart(2, '0')}</div><div className="text-white/35 text-[10px] uppercase">{label}</div></div>; }
function InfoCard({ label, value, sub, gold, green }) { return <div className={`rounded-xl bg-white/[0.03] border ${green ? 'border-[#00C853]/20' : 'border-[#D4AF37]/15'} px-4 py-3.5`}><div className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5">{label}</div><div className={`${gold ? 'text-[#FFD700]' : green ? 'text-[#00C853]' : 'text-white'} font-bold text-2xl leading-none`}>{value}</div><div className="text-white/25 text-[10px] mt-1.5">{sub}</div></div>; }
function InfoPanel({ title, rows }) { return <div className="card-glass p-5 rounded-2xl border border-[#D4AF37]/20"><div className="text-white/40 text-xs uppercase tracking-wider mb-3">{title}</div><div className="space-y-3">{rows.map(([a,b]) => <div key={a} className="flex justify-between gap-4 text-sm"><span className="text-white/45">{a}</span><span className="text-[#D4AF37] font-semibold text-right">{b}</span></div>)}</div></div>; }
