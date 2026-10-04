export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-panel">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#2B2823_1px,transparent_1px)] bg-[length:22px_22px] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-8 py-20 sm:py-28 grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-12 items-center relative">
        <div className="order-2 sm:order-1">
          <p className="uppercase tracking-widest text-xs text-sky-800 font-semibold mb-4">
            Welcome...
          </p>
          <h1 className="font-display font-extrabold text-[2.6rem] sm:text-[3.4rem] leading-[1.08] tracking-tight">
            A+ MOD,
            <br />
            <span className="text-sky-500">[SAMP MAPPER]</span>
          </h1>
          <p className="mt-5 text-inkdim max-w-[42ch]">
            [Selamat datang di Pokari MOD, kamu dapat mendapatkan Mapping samp dengan harga murah.]
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="bg-sky-800 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-sky-500 transition-colors"
            >
              Cek Mapping
            </a>
            <a
              href="https://discord.gg/KgefRqNt6J"
              className="border border-ink/20 text-sm font-medium px-6 py-3 rounded-full hover:border-sky-500 hover:text-sky-500 transition-colors"
            >
              Kontak Saya
            </a>
          </div>
        </div>

        <div className="order-1 sm:order-2 w-full aspect-[4/5] sm:aspect-square bg-white border border-ink/15 rounded-3xl flex items-center justify-center text-inkdim text-sm text-center p-6 shadow-sm overflow-hidden">
          <img
            src="/logo.png"
            alt="foto profile"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </header>
  )
}