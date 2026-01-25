"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, MapPin, Users, School, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  registrasiSchema,
  type RegistrasiFormData,
  jenisKelaminOptions,
  programKeahlianOptions,
  pendidikanOptions,
  requiredFields,
} from "./schema";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/src/components/ui/alert-dialog";

interface FormSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function FormSection({ title, icon, children }: FormSectionProps) {
  return (
    <Card className="border-primary-100 pt-0 rounded-t-lg">
      <CardHeader className="bg-primary-50 rounded-t-lg pt-2">
        <CardTitle className="flex items-center gap-2 text-primary-900">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  );
}

interface FieldLabelProps {
  name: keyof RegistrasiFormData;
  children: React.ReactNode;
}

function FieldLabel({ name, children }: FieldLabelProps) {
  const isRequired = requiredFields.has(name);
  return (
    <>
      {children}
      {isRequired && <span className="text-red-500 ml-1">*</span>}
    </>
  );
}

export default function RegistrasiForm() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingData, setPendingData] = useState<RegistrasiFormData | null>(null);

  const form = useForm<RegistrasiFormData>({
    resolver: zodResolver(registrasiSchema),
    mode: "onChange",
    defaultValues: {
      namaLengkap: "",
      nisn: "",
      nik: "",
      nomorKk: "",
      tempatLahir: "",
      tanggalLahir: "",
      noHpMurid: "",
      noHpOrtu: "",
      alamatJalan: "",
      rt: "",
      rw: "",
      kelurahanDesa: "",
      kecamatan: "",
      kotaKabupaten: "",
      provinsi: "",
      namaAyah: "",
      tahunLahirAyah: "",
      pekerjaanAyah: "",
      namaIbu: "",
      tahunLahirIbu: "",
      pekerjaanIbu: "",
      namaAsalSekolah: "",
      npsnAsalSekolah: "",
      alamatAsalSekolah: "",
    },
  });

  function onSubmit(data: RegistrasiFormData) {
    setPendingData(data);
    setIsDialogOpen(true);
  }

  async function handleConfirmSubmit() {
    if (!pendingData) return;

    setIsSubmitting(true);
    setIsDialogOpen(false);

    try {
      const response = await fetch("/api/registrasi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pendingData),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Terjadi kesalahan saat mendaftar");
        return;
      }

      toast.success("Pendaftaran berhasil! Terima kasih telah mendaftar.");
      router.push("/");
    } catch {
      toast.error("Terjadi kesalahan jaringan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setPendingData(null);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Identitas Diri */}
        <FormSection title="Identitas Diri" icon={<User className="size-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="namaLengkap"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="namaLengkap">Nama Lengkap</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jenisKelamin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="jenisKelamin">Jenis Kelamin</FieldLabel></FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jenisKelaminOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programKeahlian"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="programKeahlian">Program Keahlian yang Diminati</FieldLabel></FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih program keahlian" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {programKeahlianOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nisn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="nisn">NISN</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan NISN (10 digit)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nik"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="nik">Nomor Induk Kependudukan (NIK)</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan NIK (16 digit)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nomorKk"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="nomorKk">Nomor Kartu Keluarga (KK)</FieldLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan Nomor KK (16 digit)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tempatLahir"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="tempatLahir">Tempat Lahir</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan tempat lahir" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tanggalLahir"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="tanggalLahir">Tanggal Lahir</FieldLabel></FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="noHpMurid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="noHpMurid">Nomor HP (WhatsApp) Calon Murid</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: 081234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="noHpOrtu"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="noHpOrtu">Nomor HP (WhatsApp) Orang Tua</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: 081234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormSection>

        {/* Alamat */}
        <FormSection title="Alamat" icon={<MapPin className="size-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="alamatJalan"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="alamatJalan">Nama Jalan/Gang/Kampung/Komplek/Perumahan</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan alamat lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="rt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><FieldLabel name="rt">RT</FieldLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rw"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel><FieldLabel name="rw">RW</FieldLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="kelurahanDesa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="kelurahanDesa">Kelurahan/Desa</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan kelurahan/desa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kecamatan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="kecamatan">Kecamatan</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan kecamatan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kotaKabupaten"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="kotaKabupaten">Kota/Kabupaten</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan kota/kabupaten" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="provinsi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="provinsi">Provinsi</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan provinsi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormSection>

        {/* Data Ayah */}
        <FormSection title="Data Ayah" icon={<Users className="size-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="namaAyah"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="namaAyah">Nama Ayah</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama ayah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tahunLahirAyah"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="tahunLahirAyah">Tahun Lahir</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: 1975" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pendidikanAyah"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="pendidikanAyah">Pendidikan Terakhir</FieldLabel></FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {pendidikanOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pekerjaanAyah"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="pekerjaanAyah">Pekerjaan</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan pekerjaan ayah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormSection>

        {/* Data Ibu */}
        <FormSection title="Data Ibu" icon={<Users className="size-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="namaIbu"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="namaIbu">Nama Ibu</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama ibu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tahunLahirIbu"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="tahunLahirIbu">Tahun Lahir</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: 1978" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pendidikanIbu"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="pendidikanIbu">Pendidikan Terakhir</FieldLabel></FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {pendidikanOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pekerjaanIbu"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="pekerjaanIbu">Pekerjaan</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan pekerjaan ibu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormSection>

        {/* Asal Sekolah */}
        <FormSection title="Asal Sekolah" icon={<School className="size-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="namaAsalSekolah"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel><FieldLabel name="namaAsalSekolah">Nama SMP/MTs/PKBM</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama sekolah asal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="npsnAsalSekolah"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="npsnAsalSekolah">NPSN SMP/MTs/PKBM</FieldLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan NPSN (8 digit)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alamatAsalSekolah"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FieldLabel name="alamatAsalSekolah">Alamat SMP/MTs</FieldLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan alamat sekolah asal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormSection>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="bg-primary-900 hover:bg-primary-800 text-white px-12"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Mengirim...
              </>
            ) : (
              "Daftar Sekarang"
            )}
          </Button>
        </div>
      </form>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Pendaftaran</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin data yang diisi sudah benar? Data yang sudah
              dikirim tidak dapat diubah.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmSubmit}
              className="bg-primary-900 hover:bg-primary-800"
            >
              Ya, Kirim Pendaftaran
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Form>
  );
}
