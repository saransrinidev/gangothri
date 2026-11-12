import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/articles";
import type { Service } from "@/lib/services";
import { ArtPanel } from "./ArtPanel";
import { ArrowRight } from "./icons";

/** Card styled after the reference "{Star} party" card: ivory card, dark inset image, arrow pill. */
export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const href = `/services/${service.slug}`;
  return (
    <article className="group relative flex h-full flex-col rounded-[2rem] border border-brown-900/10 bg-ivory p-3 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(59,16,18,0.5)]">
      <ArtPanel
        art={service.art}
        className="aspect-[4/3] rounded-[1.5rem]"
        artClassName="w-1/2 transition-transform duration-700 group-hover:scale-105"
        label={`${service.name} illustration`}
      />
      <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[1.9rem] leading-tight text-maroon-900">{service.name}</h3>
          {index !== undefined && <span className="font-serif text-lg italic text-gold-600">0{index + 1}</span>}
        </div>
        <p lang="ml" className="text-sm text-gold-600">{service.nameMl}</p>
        <p className="mt-3 flex-1 leading-relaxed text-brown-500">{service.short}</p>
        <div className="mt-6 flex items-center justify-between">
          <Link href={href} className="text-sm font-medium uppercase tracking-[0.14em] text-maroon-700 after:absolute after:inset-0 after:rounded-[2rem]">
            Learn More
            <span className="sr-only"> about {service.name}</span>
          </Link>
          <span aria-hidden className="inline-flex h-9 w-14 items-center justify-center rounded-full bg-maroon-900 text-ivory transition-all duration-300 group-hover:w-16 group-hover:bg-maroon-700">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-brown-900/10 bg-ivory p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(59,16,18,0.45)]">
      <ArtPanel
        art={article.art}
        variant={large ? "maroon" : "cream"}
        className={`${large ? "aspect-[16/10]" : "aspect-[16/10]"} rounded-[1.5rem]`}
        artClassName={`${large ? "w-2/5" : "w-2/5"} transition-transform duration-700 group-hover:scale-105`}
        sun={large}
        stripes={large}
      />
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] text-brown-400">
          <span className="rounded-full bg-cream-100 px-3 py-1 text-gold-600">{article.category}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          {article.lang === "ml" && <span className="rounded-full border border-gold-500/40 px-2 py-0.5 text-[0.65rem] text-maroon-700">മലയാളം</span>}
        </div>
        <h3 lang={article.lang} className={`mt-4 font-serif leading-tight text-maroon-900 ${large ? "text-3xl" : "text-2xl"}`}>
          <Link href={`/articles/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>
        <p lang={article.lang} className="mt-3 line-clamp-3 flex-1 leading-relaxed text-brown-500">{article.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-maroon-700">
          Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
