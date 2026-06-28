import { CONTRACTS } from '../contracts/addresses';
import { shortAddr } from '../utils/format';

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-display gold-text text-2xl font-bold mb-3">WealthCoin</h3>
        <p className="text-white/45 text-sm mb-6">Officialwealthcoin.com — Social media and support team email are being prepared for future community communication.</p>
        <div className="grid sm:grid-cols-2 gap-2 text-xs text-white/35 font-mono">
          <div>Token: {shortAddr(CONTRACTS.WTC_TOKEN)}</div>
          <div>Presale: {shortAddr(CONTRACTS.WTC_PRESALE)}</div>
          <div>Staking: {shortAddr(CONTRACTS.WTC_STAKING)}</div>
          <div>Treasury: {shortAddr(CONTRACTS.WTC_TREASURY)}</div>
        </div>
      </div>
    </footer>
  );
}
