const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    alt: 'Сэргээн засварласан буйдан',
    span: 'col-span-1 row-span-2',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
    alt: 'Арьсан тавилга',
    span: '',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    alt: 'Модон сандал',
    span: '',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    alt: 'Эртний тавилга',
    span: '',
    className: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-3">
            Хийж гүйцэтгэсэн ажил
          </h2>
          <p className="font-lato text-stone-500 text-sm max-w-md">
            Бидний урчлав, туршлагыг иттгэн &quot;Өмнө ба Дараах&quot; зургуудын цуглуулга.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto' }}>
          {/* Large left image */}
          <div className="col-span-1 row-span-2 md:row-span-2 overflow-hidden rounded-2xl group cursor-pointer"
               style={{ gridRow: 'span 2' }}>
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ minHeight: '340px' }}
            />
          </div>

          {/* Right images */}
          {galleryImages.slice(1).map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-lato text-sm font-semibold border-b-2 pb-1 transition-colors duration-200"
            style={{ color: '#795548', borderColor: '#795548' }}
          >
            Бүх ажлыг харах
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
