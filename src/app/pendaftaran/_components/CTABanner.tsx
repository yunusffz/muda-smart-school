import { ArrowDown } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <svg className="w-full h-full opacity-5" viewBox="0 0 200 200">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
         

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bergabunglah Bersama Kami di
            <br />
            <span className="text-yellow-400">Tahun Ajaran 2024/2025</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Lengkapi formulir pendaftaran di bawah ini sebagai langkah awal menjadi bagian dari SMK Muhammadiyah 2 Cibiru. 
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#formPendaftaran"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              Daftar Sekarang
              <ArrowDown className="size-6 text-yellow-900" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
