export default function About() {
  return (
    <section id="about" className="py-20 bg-panel">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-10">
        <div>
          <p className="uppercase tracking-widest text-xs text-sky-800 font-semibold mb-2">
            Tentang
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">
            Kenalan lebih dekat
          </h2>
        </div>
        <div className="space-y-4 text-ink/80 max-w-[62ch]">
          <p>
            [perkenalkan nama gw pokari disini gw punya beberapa mapping samp yang bisa kalian beli atau langsung kalian ambil secara gratis.]
          </p>
          <p>
            [Tambahan: MOD, MAPPING DLL.]
          </p>
        </div>
      </div>
    </section>
  )
}