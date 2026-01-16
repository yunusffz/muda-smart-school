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
    </main>
  );
}
