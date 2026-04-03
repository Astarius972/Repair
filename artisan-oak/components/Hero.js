export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3e2723 0%, #5d4037 40%, #795548 100%)',
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/80 text-xs font-lato tracking-widest uppercase">Мэргэжлийн үйлчилгээ</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Хуучин тавилга,
            <br />
            <span className="text-amber-300">буйдангаа шинэ</span>
            <br />
            мэт болгоно
          </h1>

          <p className="text-white/70 font-lato text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Уламжлалт гар урлалыг орчин үеийн технологитой хослуулан таны нандин тавилгыг дахин төрхөнд нь оруулна.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brown-800 hover:bg-brown-900 text-white font-lato text-sm font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-brown-900/40 hover:-translate-y-0.5"
              style={{ backgroundColor: '#5d4037' }}
            >
              Үнэ төлбөргүй зөвлөгөө авах
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-lato text-sm font-semibold px-7 py-3.5 rounded transition-all duration-200 backdrop-blur-sm"
            >
              Манай ажилтай танилцах
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-white/15">
            {[
              { number: '500+', label: 'Гүйцэтгэсэн ажил' },
              { number: '12+', label: 'Жилийн туршлага' },
              { number: '98%', label: 'Хэрэглэгчийн сэтгэл ханамж' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair text-2xl font-bold text-amber-300">{stat.number}</div>
                <div className="text-white/50 font-lato text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs font-lato tracking-widest uppercase">Доош</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
