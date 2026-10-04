import { featuredData } from '../data/featured'

export default function Featured() {
  return (
    <section id="featured" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <p className="uppercase tracking-widest text-xs text-sky-800 font-semibold mb-2">
          Highlight
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-10">
          yang sedang hangat
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredData.map((item, i) => {
            const isAccent = item.variant === 'accent'
            const hasImg = item.image && item.image.trim() !== ''
            return (
              <div
                key={i}
                className={`card-tilt rounded-2xl p-6 flex flex-col justify-end aspect-[3/4] overflow-hidden relative ${
                  isAccent
                    ? 'bg-sky-500 text-white'
                    : 'bg-white border border-ink/10 shadow-sm'
                }`}
              >
                {hasImg && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {hasImg && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                )}
                <div className="relative">
                  <h3
                    className={`font-display font-bold text-xl ${
                      isAccent || hasImg ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      isAccent || hasImg ? 'text-white/80' : 'text-inkdim'
                    }`}
                  >
                    {item.desc}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      className={`mt-3 inline-block text-sm font-medium transition-colors ${
                        isAccent || hasImg
                          ? 'text-white/90 hover:text-white'
                          : 'text-sky-500 hover:text-sky-800'
                      }`}
                    >
                      Lihat &rarr;
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}