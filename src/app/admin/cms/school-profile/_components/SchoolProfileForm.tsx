"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/src/components/ui/form";
import { FormCard } from "@/src/app/admin/_components/FormCard";
import { GalleryPicker } from "@/src/app/admin/_components/GalleryPicker";
import { toast } from "sonner";
import {
  schoolProfileSchema,
  type SchoolProfileFormData,
} from "./SchoolProfileSchema";

interface SchoolProfileFormProps {
  defaultValues: SchoolProfileFormData;
}

export function SchoolProfileForm({ defaultValues }: SchoolProfileFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SchoolProfileFormData>({
    resolver: zodResolver(
      schoolProfileSchema,
    ) as Resolver<SchoolProfileFormData>,
    defaultValues,
  });

  const missionsToText = (missions: string[]): string => {
    return missions.join("\n");
  };

  const textToMissions = (text: string): string[] => {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  };

  const onSubmit = async (data: SchoolProfileFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/cms/school-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan pengaturan");
      }

      toast.success("Profil sekolah berhasil diperbarui");
      router.refresh();
    } catch {
      toast.error("Gagal menyimpan pengaturan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Identitas Sekolah */}
        <FormCard
          title="Identitas Sekolah"
          description="Informasi dasar sekolah"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="school_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Sekolah</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="SMK Muhammadiyah 2 Cibiru"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="school_tagline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tagline Sekolah</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Lembaga pendidikan kejuruan yang..."
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="accreditation_grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Akreditasi</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="A"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormCard>

        {/* Logo Sekolah */}
        <FormCard
          title="Logo Sekolah"
          description="Pilih logo sekolah dari galeri"
        >
          <FormField
            control={form.control}
            name="school_logo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <GalleryPicker
                    value={field.value ?? undefined}
                    onChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormCard>

        {/* Visi & Misi */}
        <FormCard title="Visi & Misi" description="Visi dan misi sekolah">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="vision_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visi</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mewujudkan lulusan yang cerdas, berkualitas..."
                      rows={3}
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="missions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Misi</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Satu misi per baris..."
                      rows={8}
                      value={missionsToText(field.value || [])}
                      onChange={(e) =>
                        field.onChange(textToMissions(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Tulis satu misi per baris. Baris kosong akan diabaikan.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormCard>

        {/* Alamat */}
        <FormCard title="Alamat" description="Alamat lengkap sekolah">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="address_line1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Baris 1</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jl. Raya Cibiru No. 1"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="address_line2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Baris 2</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Kel. Cibiru, Kec. Cibiru"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="address_line3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Baris 3</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Kota Bandung, Jawa Barat"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="postal_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kode Pos</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="40615"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="maps_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Google Maps</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://maps.google.com/..."
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormDescription>
                      Link Google Maps untuk lokasi sekolah
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </FormCard>

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
