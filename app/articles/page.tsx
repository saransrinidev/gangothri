import type { Metadata } from "next";
import Link from "next/link";
import { ArtPanel } from "@/components/ArtPanel";
import { ArticlesBrowser } from "@/components/ArticlesBrowser";
import { Reveal } from "@/components/Reveal";
import { Accent, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { categories, formatDate, sortedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles on Kerala astrology, Jathakam, Nakshatras, Muhurtham and traditional Jyothisham, in English and Malayalam.",
};

export default function ArticlesPage() {
  const featured = sortedArticles.filter((a) => a.featured);
  const [lead, ...restFeatured] = featured;

  return (
    <>
      <section className="px-3 pt-2 sm:px-5">
        <div className="mx-auto max-w-[88rem] rounded-[2.25rem] border border-brown-900/10 bg-ivory px-5 py-14 text-center sm:px-10 sm:py-20">
          <div className="animate-rise">
            <Eyebrow className="justify-center">Knowledge · <span lang="ml" className="not-italic">അറിവ്</span></Eyebrow>
            <h1 className="mx-auto mt-4 max-w-4xl font-serif text-5xl leading-[1.02] text-maroon-950 sm:text-7xl">
              Articles on <Accent>Kerala</Accent> astrology
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brown-500">
              Short readings on Jathakam, Nakshatras, Muhurtham and the traditions of Kerala Jyothisham, in English and Malayalam.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {lead && (
        <section className="py-20">
          <Container>
            <SectionHeading align="left" eyebrow="Featured" title="Featured articles" />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <Reveal>
                <article className="group relative grid h-full overflow-hidden rounded-[2.25rem] border border-brown-900/10 bg-ivory p-3 md:grid-cols-2">
                  <ArtPanel art={lead.art} className="aspect-square rounded-[1.75rem] md:aspect-auto" artClassName="w-1/2 transition-transform duration-700 group-hover:scale-105" />
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <p className="text-xs uppercase tracking-[0.16em] text-gold-600">
                      {lead.category} · <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                    </p>
                    <h2 lang={lead.lang} className="mt-4 font-serif text-4xl leading-tight text-maroon-900">
                      <Link href={`/articles/${lead.slug}`} className="after:absolute after:inset-0">{lead.title}</Link>
                    </h2>
                    <p lang={lead.lang} className="mt-4 leading-relaxed text-brown-500">{lead.excerpt}</p>
                    <span className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-maroon-700">Read More →</span>
                  </div>
                </article>
              </Reveal>
              <div className="grid gap-6">
                {restFeatured.slice(0, 2).map((a, i) => (
                  <Reveal key={a.slug} delay={(i + 1) * 100}>
                    <article className="group relative flex h-full gap-5 rounded-[2rem] border border-brown-900/10 bg-ivory p-3">
                      <ArtPanel art={a.art} variant="cream" sun={false} stripes={false} className="aspect-square w-32 shrink-0 rounded-[1.5rem] sm:w-40" artClassName="w-3/5" />
                      <div className="flex flex-col justify-center py-2 pr-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-gold-600">{a.category}</p>
                        <h3 lang={a.lang} className="mt-2 font-serif text-2xl leading-tight text-maroon-900">
                          <Link href={`/articles/${a.slug}`} className="after:absolute after:inset-0">{a.title}</Link>
                        </h3>
                        <time dateTime={a.date} className="mt-2 text-sm text-brown-400">{formatDate(a.date)}</time>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* All, filterable */}
      <section className="pb-12">
        <Container>
          <SectionHeading align="left" eyebrow="Library" title="All articles" className="mb-10" />
          <ArticlesBrowser articles={sortedArticles} categories={categories} />
        </Container>
      </section>

    </>
  );
}
