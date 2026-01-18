import Image from "next/image";

export default function Profil() {
  return (
    <main className="pt-16">
      {/* Hero Section - Minimal Style */}
      <section className="relative bg-primary-900 py-20 md:py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400 text-sm font-medium">Profil Sekolah</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                SMK Muhammadiyah 2 Cibiru
              </h1>
              <p className="text-lg md:text-xl text-primary-200 leading-relaxed">
                Lembaga pendidikan kejuruan yang berkomitmen mencetak generasi muda yang kompeten, berkarakter, dan siap menghadapi tantangan dunia kerja.
              </p>
            </div>

            {/* School Badge */}
            <div className="flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.jpg"
                    alt="Logo SMK Muhammadiyah 2 Cibiru"
                    width={80}
                    height={80}
                    className="rounded-xl"
                  />
                  <div>
                    <p className="text-yellow-400 font-semibold text-sm">Terakreditasi</p>
                    <p className="text-3xl font-bold text-white">A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Vision - Compact Quote Style */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <span className="text-primary-300 text-sm font-medium">Visi Sekolah</span>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed mt-1">
                  Mewujudkan lulusan yang <span className="text-yellow-400">cerdas</span>, <span className="text-yellow-400">berkualitas</span>, <span className="text-green-400">terampil</span>, <span className="text-green-400">kompetitif</span>, berjiwa wirausaha, berkemajuan, dan <span className="text-yellow-400">berakhlak karimah</span>.
                </p>
              </div>
            </div>
          </div>


          {/* Mission Grid */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Misi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Memotivasi Peserta Didik dalam meningkatkan pengetahuan dan wawasan intelektual.",
                "Memiliki kemampuan ilmu pengetahuan, penguasaan teknologi, daya analitik, kreatif, inovatif, profesional dan berwawasan luas.",
                "Meningkatkan keahlian (skill), terampil dalam kompetensi keahlian di bidangnya masing-masing.",
                "Mengembangkan potensi Peserta Didik melalui kegiatan ekstrakurikuler dan pembinaan kedisiplinan.",
                "Meningkatkan daya saing untuk siap memasuki lapangan dunia usaha/industri.",
                "Menumbuhkembangkan jiwa wirausaha yang tangguh dalam bidangnya masing-masing.",
              ].map((misi, index) => (
                <div key={index} className="flex items-start gap-3 bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                  <span className="w-6 h-6 bg-yellow-400 rounded text-yellow-900 text-xs font-bold flex items-center justify-center flex-shrink-0">{index + 1}</span>
                  <p className="text-neutral-700 text-sm leading-relaxed">{misi}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Row */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
              Prestasi Siswa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Medali Emas Informatika", event: "ONSB 2024", level: "Nasional" },
                { title: "Medali Emas Bahasa Inggris", event: "ONSB 2024", level: "Nasional" },
                { title: "Medali Emas Teknik Bisnis Sepeda Motor", event: "Olympicad VII 2024", level: "Nasional" },
                { title: "Juara 1 Cerdas Cermat Kearsipan", event: "Dispusipda Jabar", level: "Provinsi" },
              ].map((prestasi, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${prestasi.level === "Nasional" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                      {prestasi.level.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-800 text-sm">{prestasi.title}</h3>
                  <p className="text-neutral-500 text-xs mt-1">{prestasi.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Keahlian Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Program Keahlian
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Pilihan <span className="text-primary-600">Kompetensi</span> Keahlian
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Pilihan kompetensi keahlian yang dapat dipilih sesuai minat dan bakat siswa
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program 1 - Teknik Otomotif */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Teknik Otomotif</h3>
              <p className="text-neutral-600 mb-4">
                Mempelajari perawatan, perbaikan, dan teknologi kendaraan bermotor modern.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Teknik Kendaraan Ringan
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Teknik Sepeda Motor
                </li>
              </ul>
            </div>

            {/* Program 2 - Pengembangan Perangkat Lunak dan Gim */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Pengembangan Perangkat Lunak dan Gim</h3>
              <p className="text-neutral-600 mb-4">
                Mempelajari pemrograman, pengembangan aplikasi, dan pembuatan game.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Web & Mobile Development
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Game Development
                </li>
              </ul>
            </div>

            {/* Program 3 - Teknik Jaringan Komputer dan Telekomunikasi */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Teknik Jaringan Komputer dan Telekomunikasi</h3>
              <p className="text-neutral-600 mb-4">
                Mempelajari instalasi, konfigurasi, dan manajemen jaringan komputer.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Network Administrator
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cyber Security
                </li>
              </ul>
            </div>

            {/* Program 4 - Manajemen Perkantoran dan Layanan Bisnis */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Manajemen Perkantoran dan Layanan Bisnis</h3>
              <p className="text-neutral-600 mb-4">
                Mempelajari administrasi perkantoran, kesekretariatan, dan layanan bisnis.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Administrasi Perkantoran
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customer Service
                </li>
              </ul>
            </div>

            {/* Program 5 - Akuntansi dan Keuangan Lembaga */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Akuntansi dan Keuangan Lembaga</h3>
              <p className="text-neutral-600 mb-4">
                Mempelajari pembukuan, laporan keuangan, dan pengelolaan keuangan lembaga.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Akuntansi Dasar & Lanjutan
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Perpajakan
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="group bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 flex flex-col justify-center items-center text-center text-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tertarik Bergabung?</h3>
              <p className="text-white/80 mb-5">
                Daftarkan diri Anda sekarang dan raih masa depan cerah bersama kami!
              </p>
              <a href="#" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry Style */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Galeri Sekolah
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Suasana Belajar di <span className="text-primary-600">SMK Muda</span>
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src="/gambar-1.jpg"
                  alt="Kegiatan Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">Kegiatan Pembelajaran</p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="/gambar-2.jpg"
                  alt="Fasilitas Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="/gambar-3.jpg"
                  alt="Kegiatan Siswa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden group">
                <Image
                  src="/gambar-4.jpg"
                  alt="Lingkungan Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Content */}
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Fasilitas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Fasilitas <span className="text-green-600">Lengkap</span> untuk Mendukung Pembelajaran
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Kami menyediakan berbagai fasilitas modern untuk mendukung proses belajar mengajar yang efektif dan nyaman.
              </p>
            </div>

            {/* Right Content - Facilities Grid */}
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Masjid", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                { name: "Aula Sekolah", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { name: "Lab Komputer", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { name: "Lab Bengkel Motor", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                { name: "Ruang Perpustakaan", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                { name: "Ruang Musik", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" },
                { name: "Ruang Organisasi", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { name: "Ruang Konseling (BK)", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                { name: "Ruang Piket", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                { name: "Lapangan Olahraga", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { name: "Kantin Sekolah", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
                { name: "Area Parkir", icon: "M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={facility.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-800">{facility.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-yellow-100/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ekstrakurikuler
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Kembangkan <span className="text-yellow-600">Bakat & Minat</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Berbagai kegiatan ekstrakurikuler untuk mengembangkan potensi siswa di luar akademik
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Ikatan Pelajar Muhammadiyah (IPM)", category: "Organisasi", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { name: "Hizbul Wathan", category: "Kepanduan", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
              { name: "Tapak Suci", category: "Beladiri", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { name: "Paskibra", category: "Baris-berbaris", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
              { name: "Futsal, Voli & Basket", category: "Olahraga", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { name: "MTQ & Lismuda", category: "Keagamaan", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { name: "Club IT, Multimedia & English Club", category: "Minat & Bakat", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            ].map((ekskul, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ekskul.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 text-sm">{ekskul.name}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{ekskul.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Location */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kunjungi <span className="text-green-400">Sekolah Kami</span>
              </h2>
              <address className="not-italic text-lg text-primary-200 leading-relaxed mb-8">
                Jl. Cilengkrang II No. 7<br />
                Kel. Palasari, Kec. Cibiru<br />
                Kota Bandung, Jawa Barat<br />
                40615
              </address>

              {/* Map Placeholder */}
              <div className="relative h-64 rounded-2xl overflow-hidden border-4 border-white/10">
                <Image
                  src="/gambar-4.jpg"
                  alt="Lokasi Sekolah"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/40 flex items-center justify-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hubungi Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ada <span className="text-yellow-400">Pertanyaan?</span>
              </h2>
              <p className="text-primary-200 mb-8">
                Silakan hubungi kami melalui kontak di bawah ini untuk informasi lebih lanjut.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/6282120091616"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp Admin</p>
                    <p className="text-primary-300">0821-2009-1616</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6289669907509"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp Kesiswaan</p>
                    <p className="text-primary-300">0896-6990-7509</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6285221482520"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp Hubinmas</p>
                    <p className="text-primary-300">0852-2148-2520</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Website</p>
                    <p className="text-primary-300">smkm2.sch.id</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Instagram / Facebook</p>
                    <p className="text-primary-300">@smkmuh2.cibiru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
