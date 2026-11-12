import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArtPanel } from "@/components/ArtPanel";
import { ArticleCard } from "@/components/cards";
import { ContactCTA } from "@/components/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, Ornament, SectionHeading } from "@/components/ui";
import { articles, formatDate, getArticle, relatedArticles, type Block } from "@/lib/articles";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article not found" };
  return { title: a.title, description: a.excerpt };
}

export default function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  return (
    <>
      <Container className="pt-6">
        <nav aria-label="Breadcrumb" className="text-sm text-brown-400">
          <Link href="/" className="hover:text-maroon-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-maroon-700">Articles</Link>
        </nav>
      </Container>
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleContent params={params} />
      </Suspense>
      <ContactCTA />
    </>
  );
}

async function ArticleContent({ params }: Pick<PageProps<"/articles/[slug]">, "params">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = relatedArticles(article);

  return (
    <>
      <article lang={article.lang}>
        <header className="pt-8">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Eyebrow className="justify-center">{article.category}</Eyebrow>
              <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-maroon-950 sm:text-6xl">{article.title}</h1>
              <p className="mt-5 text-brown-400" lang="en">
                <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readMinutes} min read · {site.astrologer.name}
              </p>
            </div>
            <ArtPanel art={article.art} className="mx-auto mt-12 aspect-[21/9] max-w-6xl rounded-[2.25rem]" artClassName="w-[24%] min-w-[140px] animate-float" />
          </Container>
        </header>

        <Container>
          <div className="prose-temple mx-auto max-w-3xl py-16">
            <p className="font-serif text-2xl leading-relaxed text-maroon-800">{article.excerpt}</p>
            <Ornament className="mx-auto" />
            {article.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </Container>
      </article>

      <section className="pt-8">
        <Container>
          <SectionHeading eyebrow="Continue reading" title="Related articles" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 100}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "list":
      return (
        <ul>
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

function ArticleSkeleton() {
  return (
    <Container className="animate-pulse pt-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto h-5 w-40 rounded-full bg-cream-200" />
        <div className="mx-auto mt-6 h-14 w-3/4 rounded-2xl bg-cream-200" />
        <div className="mx-auto mt-5 h-4 w-60 rounded-full bg-cream-200" />
      </div>
      <div className="mx-auto mt-12 aspect-[21/9] max-w-6xl rounded-[2.25rem] bg-maroon-900/80" />
    </Container>
  );
}
