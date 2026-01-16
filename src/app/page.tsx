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
                <span className="text-2xl md:text-3xl font-bold text-white">A</span>
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
              Selamat Datang di{" "}
              <span className="text-secondary-400">SMK Muhammadiyah 2 Cibiru</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md animate-fade-in-up animation-delay-200">
              Mencetak generasi unggul, berkarakter Islami, dan siap bersaing di era global
            </p>
          </div>
        </div>
      </section>

      {/* School Information Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tentang <span className="text-primary-600">Sekolah Kami</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SMK Muhammadiyah 2 Cibiru adalah lembaga pendidikan kejuruan yang berkomitmen
                untuk mencetak lulusan yang kompeten, berkarakter Islami, dan siap memasuki
                dunia kerja maupun melanjutkan pendidikan ke jenjang yang lebih tinggi.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kurikulum Terkini</h3>
                    <p className="text-gray-600">Menggunakan kurikulum merdeka yang relevan dengan kebutuhan industri</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fasilitas Lengkap</h3>
                    <p className="text-gray-600">Laboratorium komputer, bengkel praktik, dan ruang kelas yang nyaman</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tenaga Pengajar Profesional</h3>
                    <p className="text-gray-600">Guru-guru berpengalaman dan bersertifikasi di bidangnya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/gambar-1.jpg"
                    alt="Kegiatan Sekolah 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/gambar-2.jpg"
                    alt="Kegiatan Sekolah 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/gambar-3.jpg"
                    alt="Kegiatan Sekolah 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/gambar-4.jpg"
                    alt="Kegiatan Sekolah 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
