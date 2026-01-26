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
} from "@/src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { FormCard } from "@/src/app/admin/_components/FormCard";
import { ImageUpload } from "@/src/app/admin/_components/ImageUpload";
import { toast } from "sonner";
import { heroSlideSchema, type HeroSlideFormData } from "./HeroSlideSchema";

interface HeroSlideFormProps {
  defaultValues?: Partial<HeroSlideFormData>;
  heroSlideId?: string;
}

export function HeroSlideForm({
  defaultValues,
  heroSlideId,
}: HeroSlideFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!heroSlideId;

  const form = useForm<HeroSlideFormData>({
    resolver: zodResolver(heroSlideSchema) as Resolver<HeroSlideFormData>,
    defaultValues: {
      title: "",
      subtitle: null,
      image: "",
      ctaText: null,
      ctaLink: null,
      order: 0,
      isActive: true,
      ...defaultValues,
    },
  });

  const onSubmit = async (data: HeroSlideFormData) => {
    setIsLoading(true);
    try {
      const url = isEditing
        ? `/api/cms/hero-slides/${heroSlideId}`
        : "/api/cms/hero-slides";
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan hero slide");
      }

      toast.success(
        isEditing
          ? "Hero slide berhasil diperbarui"
          : "Hero slide berhasil dibuat",
      );
      router.push("/admin/cms/hero-slides");
      router.refresh();
    } catch {
      toast.error("Gagal menyimpan hero slide");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Informasi Slide */}
        <FormCard title="Informasi Slide" description="Data utama hero slide">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul</FormLabel>
                    <FormControl>
                      <Input placeholder="Judul slide" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtitle (Opsional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Subtitle slide"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value || null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urutan</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value === "true")}
                    defaultValue={field.value ? "true" : "false"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">Aktif</SelectItem>
                      <SelectItem value="false">Nonaktif</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormCard>

        {/* Gambar Slide */}
        <FormCard
          title="Gambar Slide"
          description="Upload gambar hero slide (wajib)"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    value={field.value}
                    onChange={field.onChange}
                    folder="hero-slides"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormCard>

        {/* CTA (Call to Action) */}
        <FormCard
          title="Call to Action (Opsional)"
          description="Tombol aksi yang ditampilkan pada slide"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="ctaText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teks Tombol</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: Daftar Sekarang"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value || null)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ctaLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link Tombol</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: /registrasi"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value || null)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormCard>

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Menyimpan..." : isEditing ? "Perbarui" : "Simpan"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isLoading}
          >
            Batal
          </Button>
        </div>
      </form>
    </Form>
  );
}
