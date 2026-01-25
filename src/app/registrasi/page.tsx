import { GraduationCap } from "lucide-react";
import RegistrasiForm from "./_components/RegistrasiForm";

export const metadata = {
  title: "Pendaftaran Siswa Baru | Muda Smart School",
  description: "Formulir pendaftaran siswa baru Muda Smart School",
};

export default function RegistrasiPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary-100 rounded-full">
              <GraduationCap className="size-8 text-primary-900" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            Pendaftaran Siswa Baru
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Silakan lengkapi formulir pendaftaran di bawah ini dengan data yang
            benar dan lengkap.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <RegistrasiForm />
        </div>
      </div>
    </main>
  );
}
