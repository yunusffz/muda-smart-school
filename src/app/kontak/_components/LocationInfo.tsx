import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description:
    "Hubungi SMK Muhammadiyah 2 Cibiru Bandung via WhatsApp, email, atau kunjungi kami di Jl. Cilengkrang II No. 7, Cibiru, Bandung.",
};

const socialLinks = [
  {
    name: "Instagram",
    handle: "@smkmuh2.cibiru",
    link: "https://instagram.com/smkmuh2.cibiru",
    color: "from-purple-500 to-pink-500",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "Facebook",
    handle: "SMK Muhammadiyah 2 Cibiru",
    link: "https://facebook.com/smkmuh2cibiru",
    color: "from-blue-500 to-blue-600",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "YouTube",
    handle: "SMK Muda Cibiru",
    link: "https://youtube.com/@smkmudacibiru",
    color: "from-red-500 to-red-600",
    icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
];

import { getGalleryByCategory } from "@/src/features/cms/services/gallery";

const locationImage = await getGalleryByCategory("FASILITAS");

export default function LocationInfo() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              Lokasi Sekolah
            </h2>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-72">
                {locationImage && locationImage.length > 0 && (
                  <Image
                    src={locationImage[0].image}
                    alt={locationImage[0].title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-primary-900/30" />
              </div>
              <div className="p-6">
                <address className="not-italic text-neutral-700 leading-relaxed mb-4">
                  <strong className="text-neutral-900">
                    SMK Muhammadiyah 2 Cibiru
                  </strong>
                  <br />
                  Jl. Cilengkrang II No. 7<br />
                  Kel. Palasari, Kec. Cibiru
                  <br />
                  Kota Bandung, Jawa Barat 40615
                </address>
                <a
                  href="https://maps.google.com/?q=SMK+Muhammadiyah+2+Cibiru+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Jam Operasional
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Senin - Jumat</span>
                  <span className="font-semibold text-neutral-900">
                    07.00 - 15.00 WIB
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">
                    Sabtu (Ekstrakurikuler)
                  </span>
                  <span className="font-semibold text-neutral-900">
                    07.00 - 12.00 WIB
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Minggu & Hari Libur</span>
                  <span className="font-semibold text-red-500">Tutup</span>
                </div>
              </div>
            </div>

            {/* Other Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                Kontak Lainnya
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Website</p>
                    <p className="font-semibold text-neutral-900">
                      smkm2.sch.id
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email</p>
                    <p className="font-semibold text-neutral-900">
                      info@smkm2.sch.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Ikuti Kami
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {social.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
