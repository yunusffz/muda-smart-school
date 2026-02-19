import Image from "next/image";
import { getActiveFacilities } from "@/src/features/cms/services/facilities";

export default async function FacilitiesSection() {
  const facilities = await getActiveFacilities();

  if (facilities.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Fasilitas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Fasilitas <span className="text-green-600">Lengkap</span> untuk
              Mendukung Pembelajaran
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Kami menyediakan berbagai fasilitas modern untuk mendukung proses
              belajar mengajar yang efektif dan nyaman.
            </p>
          </div>

          {/* Right Content - Facilities Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilities.map((facility) => {
              const images = facility.images ?? [];
              return (
                <div
                  key={facility.id}
                  className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300 group overflow-hidden"
                >
                  {/* Image gallery strip */}
                  {images.length > 0 && (
                    <div className="flex h-28 overflow-hidden">
                      {images.slice(0, 3).map((img, idx) => (
                        <div
                          key={idx}
                          className="relative flex-1 overflow-hidden"
                          style={{
                            flexBasis: `${100 / Math.min(images.length, 3)}%`,
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${facility.name} ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 33vw, 15vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {idx === 2 && images.length > 3 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">
                                +{images.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Card content */}
                  <div className="p-5">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      {facility.icon ? (
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
                            d={facility.icon}
                          />
                        </svg>
                      ) : (
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-semibold text-neutral-800">
                      {facility.name}
                    </h3>
                    {facility.description && (
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                        {facility.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
