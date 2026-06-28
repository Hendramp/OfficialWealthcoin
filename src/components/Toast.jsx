export default function Toast({ toasts }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map((t) => (
        <div key={t.id} className={`px-4 py-3 rounded-xl text-sm font-medium shadow-2xl border backdrop-blur-sm ${
          t.type === 'success' ? 'bg-emerald-900/90 border-[#00C853]/40 text-[#00C853]' :
          t.type === 'error' ? 'bg-red-900/90 border-red-500/40 text-red-300' :
          'bg-[#1a1a1a]/90 border-[#D4AF37]/40 text-[#D4AF37]'
        }`}>
          {t.msg}
        </div>
      ))}
    </div>
  );
}
