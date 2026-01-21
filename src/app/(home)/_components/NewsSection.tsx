import Image from "next/image";

const newsItems = [
  {
    image: "/gambar-2.jpg",
    category: "PENGUMUMAN",
    categoryColor: "bg-green-100 text-green-700",
    title: "Jadwal Ujian Akhir Semester Genap 2024",
    date: "12 Januari 2024",
  },
  {
    image: "/gambar-3.jpg",
    category: "KEGIATAN",
    categoryColor: "bg-primary-100 text-primary-700",
    title: "Kunjungan Industri ke PT Telkom Indonesia",
    date: "10 Januari 2024",
  },
  {
    image: "/gambar-4.jpg",
    category: "PRESTASI",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title: "Juara 1 Lomba Cerdas Cermat Tingkat Provinsi",
    date: "8 Januari 2024",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Berita & <span className="text-primary-600">Pengumuman</span>
            </h2>
            <p className="text-lg text-gray-600">
              Informasi terbaru seputar kegiatan dan pengumuman sekolah
            </p>
          </div>
          <a
            href="/berita"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Lihat Semua
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="group relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/gambar-1.jpg"
                alt="Berita Utama"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  BERITA TERBARU
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  SMK Muhammadiyah 2 Cibiru Raih 3 Medali Emas di Olimpiade Nasional 2024
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Prestasi membanggakan ditorehkan oleh siswa-siswi SMK Muhammadiyah 2 Cibiru dalam ajang Olimpiade Nasional Sains dan Bahasa (ONSB) 2024.
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    15 Januari 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {newsItems.map((news, index) => (
              <a
                key={index}
                href="#"
                className="group flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={news.image} alt="Berita" fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`inline-block ${news.categoryColor} text-[10px] font-bold px-2 py-0.5 rounded-full mb-2`}>
                    {news.category}
                  </span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                    {news.title}
                  </h4>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
