export default function Contact() {
  const links = [
    { href: 'tangkurak.jampang@gmail.com', label: 'E-mail' },
    { href: 'https://instagram.com/arya_7598', label: 'Instagram' },
    { href: 'https://x.com/arya_7598', label: 'X' },
    { href: 'https://github.com/aryardian', label: 'GitHub' },
  ]

  return (
    <section id="contact" className="py-20 bg-panel">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-10">
        <div>
          <p className="uppercase tracking-widest text-xs text-sky-800 font-semibold mb-2">
            Kontak
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">
            Mari terhubung
          </h2>
          <p className="text-inkdim mt-3 max-w-[36ch]">
            Terbuka untuk kolaborasi, obrolan, atau sekadar say hi.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="font-display font-semibold text-2xl hover:text-sky-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}