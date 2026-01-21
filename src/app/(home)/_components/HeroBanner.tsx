"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    type: "vision",
    image: "/gambar-4.jpg",
    title: (
      <>
        Mewujudkan lulusan yang{" "}
        <span className="text-yellow-400">cerdas</span>,{" "}
        <span className="text-primary-300">berkualitas</span>,{" "}
        <span className="text-green-400">terampil</span>,{" "}
        kompetitif, berjiwa wirausaha, berkemajuan dan{" "}
        <span className="text-yellow-400">berakhlak karimah</span>
      </>
    ),
    subtitle: "SMK Muhammadiyah 2 Cibiru - Pendidikan kejuruan berkualitas untuk masa depan cemerlang",
  },
  {
    type: "info",
    image: "/gambar-1.jpg",
    title: "5 Program Keahlian Unggulan",
    subtitle: "Teknik Otomotif, PPLG, TJKT, MPLB, dan Akuntansi - Siap menghadapi tantangan industri 4.0",
  },
  {
    type: "achievement",
    image: "/gambar-2.jpg",
    title: "3 Medali Emas Tingkat Nasional",
    subtitle: "Prestasi gemilang di bidang Informatika, Bahasa Inggris, dan Teknik Bisnis Sepeda Motor",
  },
  {
    type: "cta",
    image: "/gambar-3.jpg",
    title: "Pendaftaran Siswa Baru Dibuka!",
    subtitle: "Bergabunglah bersama kami dan wujudkan masa depan cemerlang. Kuota terbatas!",
    cta: {
      text: "Daftar Sekarang",
      href: "#pendaftaran",
    },
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3",
          bulletActiveClass: "!bg-white !w-8 !rounded-full",
        }}
        loop={true}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={typeof slide.title === "string" ? slide.title : "SMK Muhammadiyah 2 Cibiru"}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-8 md:p-12 pb-16 md:pb-20">
                  <div className="max-w-7xl mx-auto">
                    {slide.type === "cta" ? (
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                          <span className="inline-block bg-yellow-400 text-yellow-900 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4 animate-pulse">
                            PENERIMAAN SISWA BARU
                          </span>
                          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            {slide.title}
                          </h2>
                          <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
                            {slide.subtitle}
                          </p>
                        </div>
                        <a
                          href={slide.cta?.href}
                          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          {slide.cta?.text}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                          {slide.title}
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
                          {slide.subtitle}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
