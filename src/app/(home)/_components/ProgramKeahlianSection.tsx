const programs = [
  {
    name: "Teknik Otomotif",
    description: "Mempelajari perawatan, perbaikan, dan teknologi kendaraan bermotor modern.",
    color: "red",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    specializations: ["Teknik Kendaraan Ringan", "Teknik Sepeda Motor"],
  },
  {
    name: "Pengembangan Perangkat Lunak dan Gim",
    description: "Mempelajari pemrograman, pengembangan aplikasi, dan pembuatan game.",
    color: "blue",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    specializations: ["Web & Mobile Development", "Game Development"],
  },
  {
    name: "Teknik Jaringan Komputer dan Telekomunikasi",
    description: "Mempelajari instalasi, konfigurasi, dan manajemen jaringan komputer.",
    color: "cyan",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    specializations: ["Network Administrator", "Cyber Security"],
  },
  {
    name: "Manajemen Perkantoran dan Layanan Bisnis",
    description: "Mempelajari administrasi perkantoran, kesekretariatan, dan layanan bisnis.",
    color: "orange",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    specializations: ["Administrasi Perkantoran", "Customer Service"],
  },
  {
    name: "Akuntansi dan Keuangan Lembaga",
    description: "Mempelajari pembukuan, laporan keuangan, dan pengelolaan keuangan lembaga.",
    color: "green",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    specializations: ["Akuntansi Dasar & Lanjutan", "Perpajakan"],
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  red: { bg: "bg-red-100", text: "text-red-600" },
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
};

export default function ProgramKeahlianSection() {
  return (
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
          {programs.map((program, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 ${colorClasses[program.color].bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <svg className={`w-8 h-8 ${colorClasses[program.color].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={program.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {program.specializations.map((spec, specIndex) => (
                  <li key={specIndex} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}

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
            <a href="/registrasi" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
