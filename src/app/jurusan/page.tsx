import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: "teknik-otomotif",
    abbr: "TO",
    name: "Teknik Otomotif",
    description: "Program keahlian yang mempelajari tentang perawatan, perbaikan, dan teknologi kendaraan bermotor modern. Siswa akan dibekali dengan pengetahuan dan keterampilan untuk menjadi teknisi otomotif yang handal.",
    image: "/gambar-1.jpg",
    color: "red",
    skills: [
      "Perawatan dan perbaikan mesin kendaraan",
      "Sistem kelistrikan otomotif",
      "Teknologi injeksi bahan bakar",
      "Diagnosis kerusakan kendaraan",
      "Tune-up dan servis berkala",
    ],
    careers: ["Mekanik Bengkel Resmi", "Teknisi Otomotif", "Quality Control Otomotif", "Wirausaha Bengkel"],
    facilities: ["Bengkel Sepeda Motor", "Bengkel Mobil", "Ruang Praktik Kelistrikan", "Alat Diagnosis Modern"],
  },
  {
    id: "pplg",
    abbr: "PPLG",
    name: "Pengembangan Perangkat Lunak dan Gim",
    description: "Program keahlian yang fokus pada pengembangan software, aplikasi mobile, website, dan game. Siswa akan mempelajari berbagai bahasa pemrograman dan teknologi terkini di industri IT.",
    image: "/gambar-2.jpg",
    color: "blue",
    skills: [
      "Pemrograman Web (HTML, CSS, JavaScript)",
      "Pengembangan Aplikasi Mobile",
      "Database Management",
      "Game Development dengan Unity",
      "UI/UX Design",
    ],
    careers: ["Software Developer", "Web Developer", "Mobile App Developer", "Game Developer", "Freelance Programmer"],
    facilities: ["Lab Komputer Modern", "Software Development Tools", "Game Engine", "Cloud Computing Access"],
  },
  {
    id: "tjkt",
    abbr: "TJKT",
    name: "Teknik Jaringan Komputer dan Telekomunikasi",
    description: "Program keahlian yang mempelajari instalasi, konfigurasi, dan manajemen jaringan komputer serta sistem telekomunikasi. Lulusan siap menjadi ahli di bidang networking dan keamanan siber.",
    image: "/gambar-3.jpg",
    color: "cyan",
    skills: [
      "Instalasi dan konfigurasi jaringan",
      "Administrasi server Linux & Windows",
      "Keamanan jaringan (Cyber Security)",
      "Cloud Computing",
      "Troubleshooting jaringan",
    ],
    careers: ["Network Administrator", "System Administrator", "IT Support", "Cyber Security Analyst", "Cloud Engineer"],
    facilities: ["Lab Jaringan", "Server Room", "Perangkat Cisco", "Simulator Jaringan"],
  },
  {
    id: "mplb",
    abbr: "MPLB",
    name: "Manajemen Perkantoran dan Layanan Bisnis",
    description: "Program keahlian yang mempersiapkan siswa untuk bekerja di bidang administrasi perkantoran, kesekretariatan, dan layanan bisnis dengan keterampilan profesional yang dibutuhkan industri.",
    image: "/gambar-4.jpg",
    color: "orange",
    skills: [
      "Manajemen dokumen dan kearsipan",
      "Korespondensi bisnis",
      "Pengoperasian peralatan kantor",
      "Customer service excellence",
      "Event organizing",
    ],
    careers: ["Sekretaris", "Admin Office", "Customer Service", "Resepsionis", "Event Organizer"],
    facilities: ["Ruang Praktik Perkantoran", "Peralatan Kantor Modern", "Ruang Simulasi Meeting"],
  },
  {
    id: "akl",
    abbr: "AKL",
    name: "Akuntansi dan Keuangan Lembaga",
    description: "Program keahlian yang mempelajari pencatatan, pengelolaan, dan pelaporan keuangan untuk berbagai jenis lembaga. Siswa akan menguasai software akuntansi dan perpajakan modern.",
    image: "/gambar-1.jpg",
    color: "green",
    skills: [
      "Pembukuan dan pencatatan transaksi",
      "Penyusunan laporan keuangan",
      "Perpajakan (PPh dan PPN)",
      "Software akuntansi (MYOB, Accurate)",
      "Audit internal",
    ],
    careers: ["Staff Akuntansi", "Tax Officer", "Auditor", "Finance Admin", "Kasir/Teller"],
    facilities: ["Lab Komputer Akuntansi", "Software Akuntansi Berlisensi", "Ruang Praktik Perpajakan"],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string; hoverBg: string }> = {
  red: { bg: "bg-red-500", text: "text-red-600", border: "border-red-500", light: "bg-red-50", hoverBg: "hover:bg-red-500" },
  blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-500", light: "bg-blue-50", hoverBg: "hover:bg-blue-500" },
  cyan: { bg: "bg-cyan-500", text: "text-cyan-600", border: "border-cyan-500", light: "bg-cyan-50", hoverBg: "hover:bg-cyan-500" },
  orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-500", light: "bg-orange-50", hoverBg: "hover:bg-orange-500" },
  green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-500", light: "bg-green-50", hoverBg: "hover:bg-green-500" },
};

export default function JurusanPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-yellow-400 text-sm font-medium">Program Keahlian</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pilih Jurusan Sesuai <span className="text-yellow-400">Minat & Bakat</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-200 leading-relaxed">
              SMK Muhammadiyah 2 Cibiru menyediakan 5 program keahlian unggulan yang siap membekali siswa dengan keterampilan profesional untuk menghadapi dunia kerja.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {programs.map((program) => (
              <Link
                key={program.id}
                href={`#${program.id}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${colorClasses[program.color].border} ${colorClasses[program.color].text} ${colorClasses[program.color].hoverBg} hover:text-white transition-colors font-medium text-sm`}
              >
                <span className="font-bold">{program.abbr}</span>
                <span className="hidden sm:inline">{program.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-16 md:py-24 scroll-mt-32 ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${colorClasses[program.color].bg} text-white font-bold text-lg px-4 py-2 rounded-lg`}>
                    {program.abbr}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className={`inline-flex items-center gap-2 ${colorClasses[program.color].light} ${colorClasses[program.color].text} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                  <div className={`w-2 h-2 ${colorClasses[program.color].bg} rounded-full`} />
                  Program Keahlian
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  {program.name}
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {program.description}
                </p>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <svg className={`w-5 h-5 ${colorClasses[program.color].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Kompetensi yang Dipelajari
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-2 text-neutral-600">
                        <svg className={`w-5 h-5 ${colorClasses[program.color].text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career & Facilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`${colorClasses[program.color].light} rounded-xl p-5`}>
                    <h4 className={`font-semibold ${colorClasses[program.color].text} mb-3 flex items-center gap-2`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Prospek Karir
                    </h4>
                    <ul className="space-y-1">
                      {program.careers.map((career, careerIndex) => (
                        <li key={careerIndex} className="text-sm text-neutral-700">{career}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-neutral-100 rounded-xl p-5">
                    <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Fasilitas
                    </h4>
                    <ul className="space-y-1">
                      {program.facilities.map((facility, facilityIndex) => (
                        <li key={facilityIndex} className="text-sm text-neutral-700">{facility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Pilih jurusan sesuai minat dan bakatmu, dan mulai perjalanan menuju masa depan yang cerah bersama SMK Muhammadiyah 2 Cibiru.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/hubungi"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Daftar Sekarang
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
