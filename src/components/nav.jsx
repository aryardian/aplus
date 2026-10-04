import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'Tentang' },
    { href: '#work', label: 'Karya' },
    { href: '#featured', label: 'Sorotan' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <nav className="sticky top-0 z-20 bg-cream/90 backdrop-blur-sm border-b border-panel">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="font-display font-extrabold text-lg tracking-tight">
          A+<span className="text-sky-500">MOD</span>
        </div>

        <div className="hidden sm:flex gap-9 text-sm font-medium text-ink/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-500 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://discord.gg/KgefRqNt6J"
          className="hidden sm:block bg-sky-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-sky-500 transition-colors"
        >
          Hubungi Saya
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-ink"></span>
          <span className="block w-6 h-0.5 bg-ink"></span>
          <span className="block w-6 h-0.5 bg-ink"></span>
        </button>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col gap-1 px-8 pb-5 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 hover:text-sky-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-sky-800 text-white text-center text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-sky-500 transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </nav>
  )
}