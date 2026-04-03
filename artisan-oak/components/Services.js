const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2"/>
        <line x1="12" y1="12" x2="12" y2="12.01"/>
      </svg>
    ),
    title: 'Буйдан бүрэх',
    desc: 'Дэд зэргийн арьс болон давхуур материалуудыг сонгон өгч, бид чанарын батлагдсан материалаар мэргэжлийн тавилга бүрнэ.',
    features: ['Итгэл дрос: хонгил', 'Фигений аргаас ролгайт', 'Тургачаудрал үнэнтэгэ'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Мод засвар',
    desc: 'Модон тавилгын их бизнийн гэмтэл засах, ангилах болон бүдүн үйлчилгээ. Эртний тавилгын үнэмлэхүй хэдгэлэн сэргэнэ.',
    features: ['Гадаргуу шлийлгэ', 'Хэтэрч засах', 'Лакдах будах'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Захиалгат дизайн',
    desc: 'Таны хүссэн загвар, хэмжээгээр шинээр тавилга үйлдвэрлэж болон загварчлах болон үйлчлүүлэгч үйлчилгээ.',
    features: ['Концепт дизайн зурах', 'Элэн зэгэрлүүлэх', 'Газар дэлгэх хямдлал'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-lato text-xs tracking-[0.25em] uppercase text-brown-600 mb-3" style={{ color: '#795548' }}>
            МАНАЙ ҮЙЛЧИЛГЭЭ
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800">
            Мэргэжлийн сэргэн засварлалт
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-amber-600" style={{ backgroundColor: '#795548' }} />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#f5f0eb', color: '#795548' }}
              >
                {s.icon}
              </div>

              <h3 className="font-playfair text-xl font-semibold text-stone-800 mb-3">
                {s.title}
              </h3>
              <p className="font-lato text-sm text-stone-500 leading-relaxed mb-6">
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-lato text-stone-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
