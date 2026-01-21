import Image from "next/image";

export default function GallerySection() {
  return (
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
  );
}
