"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/lib/articles";
import { ArticleCard } from "./cards";

type Lang = "all" | "en" | "ml";

/** Client-side category and language filter for the article listing. */
export function ArticlesBrowser({ articles, categories }: { articles: Article[]; categories: readonly string[] }) {
  const [category, setCategory] = useState<string>("All");
  const [lang, setLang] = useState<Lang>("all");

  const list = useMemo(
    () =>
      articles.filter(
        (a) => (category === "All" || a.category === category) && (lang === "all" || a.lang === lang),
      ),
    [articles, category, lang],
  );

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm transition-all duration-300 ${
      active ? "bg-maroon-800 text-ivory" : "border border-brown-900/15 bg-ivory text-brown-700 hover:border-maroon-800/40 hover:text-maroon-800"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)} className={chip(category === c)}>
              {c}
            </button>
          ))}
        </div>
        <div role="group" aria-label="Filter by language" className="flex shrink-0 gap-1 rounded-full border border-brown-900/15 bg-ivory p-1">
          {([
            ["all", "All"],
            ["en", "English"],
            ["ml", "മലയാളം"],
          ] as const).map(([v, l]) => (
            <button
              key={v}
              type="button"
              aria-pressed={lang === v}
              onClick={() => setLang(v)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${lang === v ? "bg-gold-500 text-maroon-950" : "text-brown-700 hover:text-maroon-800"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-brown-400" aria-live="polite">
        {list.length} {list.length === 1 ? "article" : "articles"}
      </p>

      {list.length > 0 ? (
        <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-3xl border border-dashed border-brown-900/20 p-10 text-center font-serif text-2xl italic text-brown-500">
          No articles in this selection yet.
        </p>
      )}
    </div>
  );
}
