import Image from "next/image";

export default function Beranda() {
  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/gambar-4.jpg"
          alt="SMK Muhammadiyah 2 Cibiru"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Accreditation Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 animate-fade-in">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border border-primary-200">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl md:text-3xl font-bold text-white">B</span>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold text-gray-600">Terakreditasi</p>
                <p className="text-lg md:text-xl font-bold text-primary-600">Akreditasi A</p>
              </div>
            </div>
          </div>
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
              Mewujudkan lulusan yang{" "}
              <span className="text-secondary-400">cerdas</span>,{" "}
              <span className="text-primary-300">berkualitas</span>,{" "}
              <span className="text-yellow-400">terampil</span>,{" "}
              kompetitif, berjiwa wirausaha, berkemajuan dan{" "}
              <span className="text-green-400">berakhlak karimah</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md animate-fade-in-up animation-delay-200">
              SMK Muhammadiyah 2 Cibiru - Pendidikan kejuruan berkualitas untuk masa depan cemerlang
            </p>
          </div>
        </div>
      </section>
      {/* Program Keahlian Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program <span className="text-primary-600">Keahlian</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan kompetensi keahlian yang dapat dipilih sesuai minat dan bakat siswa
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program 1 - Teknik Otomotif */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teknik Otomotif</h3>
              <p className="text-gray-600 mb-4">
                Mempelajari perawatan, perbaikan, dan teknologi kendaraan bermotor modern.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
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
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pengembangan Perangkat Lunak dan Gim</h3>
              <p className="text-gray-600 mb-4">
                Mempelajari pemrograman, pengembangan aplikasi, dan pembuatan game.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
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
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teknik Jaringan Komputer dan Telekomunikasi</h3>
              <p className="text-gray-600 mb-4">
                Mempelajari instalasi, konfigurasi, dan manajemen jaringan komputer.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
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
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manajemen Perkantoran dan Layanan Bisnis</h3>
              <p className="text-gray-600 mb-4">
                Mempelajari administrasi perkantoran, kesekretariatan, dan layanan bisnis.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
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
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Akuntansi dan Keuangan Lembaga</h3>
              <p className="text-gray-600 mb-4">
                Mempelajari pembukuan, laporan keuangan, dan pengelolaan keuangan lembaga.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
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
              <a href="#" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Clean Design */}
      <section className="py-14 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="text-yellow-400 font-semibold text-sm">Prestasi</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Raihan Prestasi Gemilang
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-right max-w-xs">
              3 Medali Emas Nasional
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Achievements List */}
            <div className="lg:col-span-3 space-y-3">
              {/* Achievement Items */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white">Medali Emas Informatika</h3>
                    <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold">NASIONAL</span>
                  </div>
                  <p className="text-gray-400 text-sm">Olimpiade Nasional Sains dan Bahasa (ONSB) 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white">Medali Emas Bahasa Inggris</h3>
                    <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold">NASIONAL</span>
                  </div>
                  <p className="text-gray-400 text-sm">Olimpiade Nasional Sains dan Bahasa (ONSB) 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white">Medali Emas Teknik Bisnis Sepeda Motor</h3>
                    <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold">NASIONAL</span>
                  </div>
                  <p className="text-gray-400 text-sm">Olimpiade Ahmad Dahlan (Olympicad) VII 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur rounded-xl p-4 border border-primary-500/20 hover:border-primary-500/40 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white">Juara 1 Cerdas Cermat Kearsipan</h3>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-bold">PROVINSI</span>
                  </div>
                  <p className="text-gray-400 text-sm">Dispusipda Jawa Barat 2024</p>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/gambar-1.jpg" alt="Prestasi 1" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/gambar-2.jpg" alt="Prestasi 2" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/gambar-3.jpg" alt="Prestasi 3" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/gambar-4.jpg" alt="Prestasi 4" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni <span className="text-primary-600">Alumni & Orang Tua</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apa kata mereka tentang pengalaman belajar di SMK Muhammadiyah 2 Cibiru
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Alumni */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;Berkat pendidikan di SMK Muhammadiyah 2 Cibiru, saya mendapatkan ilmu dan keterampilan yang sangat berguna. Sekarang saya bekerja sebagai Software Developer di perusahaan teknologi ternama.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    RA
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rizki Ananda</h4>
                    <p className="text-sm text-gray-500">Alumni 2020 - Software Developer</p>
                  </div>
                </div>
              </div>
              <span className="absolute top-4 right-4 bg-primary-100 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">Alumni</span>
            </div>

            {/* Testimonial 2 - Orang Tua */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;Saya sangat bersyukur menyekolahkan anak di sini. Selain akademik yang bagus, pembinaan karakter Islami membuat anak saya tumbuh menjadi pribadi yang berakhlak mulia.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    SH
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ibu Siti Hartini</h4>
                    <p className="text-sm text-gray-500">Orang Tua Siswa Kelas XII</p>
                  </div>
                </div>
              </div>
              <span className="absolute top-4 right-4 bg-secondary-100 text-secondary-600 text-xs font-semibold px-3 py-1 rounded-full">Orang Tua</span>
            </div>

            {/* Testimonial 3 - Alumni */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;Program magang yang difasilitasi sekolah membuka jalan karir saya. Langsung setelah lulus, saya diterima bekerja di tempat magang dengan posisi yang bagus.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    DN
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dina Nurhaliza</h4>
                    <p className="text-sm text-gray-500">Alumni 2022 - Admin Finance</p>
                  </div>
                </div>
              </div>
              <span className="absolute top-4 right-4 bg-primary-100 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">Alumni</span>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & School Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Logo SMK Muhammadiyah 2 Cibiru"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">SMK Muhammadiyah 2 Cibiru</h3>
                  <p className="text-gray-400 text-sm">Terakreditasi A</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Lembaga pendidikan kejuruan yang berkomitmen mencetak lulusan kompeten,
                berkarakter Islami, dan siap bersaing di era global.
              </p>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi
              </h4>
              <address className="text-gray-400 not-italic leading-relaxed">
                Jl. Cilengkrang II No. 17<br />
                Kel. Cipadung, Kec. Cibiru<br />
                Kota Bandung, Jawa Barat<br />
                40614
              </address>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kontak
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (022) 7834567
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@smkmuda2cibiru.sch.id
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  0812-3456-7890
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 SMK Muhammadiyah 2 Cibiru. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
