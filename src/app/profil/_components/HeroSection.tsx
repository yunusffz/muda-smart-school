import Image from "next/image";

export default function HeroSection() {
  return (
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
  );
}
