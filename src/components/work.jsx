import { workData } from '../data/work'

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <p className="uppercase tracking-widest text-xs text-sky-800 font-semibold mb-2">
          Karya
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-10">
          Proyek yang pernah saya kerjakan
        </h2>

        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {workData.map((item, i) => {
            const hasImg = item.image && item.image.trim() !== ''
            return (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[80px_1fr_auto] gap-2 sm:gap-6 items-center py-6"
              >
                <div className="text-inkdim text-sm">{item.year}</div>
                <div className="flex items-center gap-4">
                  {hasImg && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="font-display font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-inkdim text-sm max-w-[48ch] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sky-500 text-sm font-medium whitespace-nowrap hover:text-sky-800 transition-colors"
                  >
                    Lihat &rarr;
                  </a>
                ) : (
                  <span></span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}