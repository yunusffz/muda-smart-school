"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { FormCard } from "@/src/app/admin/_components/FormCard";
import { GalleryPicker } from "@/src/app/admin/_components/GalleryPicker";
import { toast } from "sonner";
import { newsSchema, type NewsFormData } from "./NewsSchema";
import { generateSlug } from "@/src/features/cms/utils/slug";

interface NewsFormProps {
  defaultValues?: Partial<NewsFormData>;
  newsId?: string;
}

export function NewsForm({ defaultValues, newsId }: NewsFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!newsId;

  const form = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema) as Resolver<NewsFormData>,
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      image: "",
      category: "BERITA",
      isFeatured: false,
      isPublished: false,
      ...defaultValues,
    },
  });

  const onSubmit = async (data: NewsFormData) => {
    setIsLoading(true);
    try {
      const url = isEditing ? `/api/cms/news/${newsId}` : "/api/cms/news";
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan berita");
      }

      toast.success(
        isEditing ? "Berita berhasil diperbarui" : "Berita berhasil dibuat",
      );
      router.push("/admin/cms/news");
      router.refresh();
    } catch {
      toast.error("Gagal menyimpan berita");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Informasi Dasar */}
        <FormCard title="Informasi Dasar" description="Data utama berita">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Judul berita..."
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        if (!isEditing) {
                          form.setValue("slug", generateSlug(e.target.value));
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="slug-berita" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BERITA">Berita</SelectItem>
                      <SelectItem value="PENGUMUMAN">Pengumuman</SelectItem>
                      <SelectItem value="KEGIATAN">Kegiatan</SelectItem>
                      <SelectItem value="PRESTASI">Prestasi</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Berita Unggulan</FormLabel>
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
                      <SelectItem value="true">Ya</SelectItem>
                      <SelectItem value="false">Tidak</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormCard>

        {/* Konten */}
        <FormCard title="Konten" description="Isi berita">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konten</FormLabel>
                <FormControl>
                  <textarea
                    className="flex min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tulis konten berita..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormCard>

        {/* Ringkasan & Gambar */}
        <FormCard
          title="Ringkasan & Gambar"
          description="Ringkasan dan gambar berita"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ringkasan (Opsional)</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Ringkasan singkat berita..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gambar (Opsional)</FormLabel>
                  <FormControl>
                    <GalleryPicker
                      value={field.value}
                      onChange={field.onChange}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormCard>

        {/* Status Publikasi */}
        <FormCard
          title="Status Publikasi"
          description="Atur status publikasi berita"
        >
          <FormField
            control={form.control}
            name="isPublished"
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
                    <SelectItem value="true">Dipublikasikan</SelectItem>
                    <SelectItem value="false">Draft</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
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
