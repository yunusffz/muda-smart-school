import type { News } from "@prisma/client";
import NewsCard from "./NewsCard";

interface NewsListSectionProps {
  news: News[];
}

export default function NewsListSection({ news }: NewsListSectionProps) {
  if (news.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-500 text-lg">Belum ada berita.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
