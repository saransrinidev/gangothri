"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { Chevron, Close, Menu } from "./icons";
import { Logo } from "./Logo";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeaderWithPath() {
  const pathname = usePathname();
  return <SiteHeader pathname={pathname} />;
}

export function SiteHeader({ pathname }: { pathname: string | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Background lives in its own layer: backdrop-filter on the header itself
          would become the containing block of the fixed mobile menu and collapse it. */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-cream-50/95 shadow-[0_10px_30px_-20px_rgba(45,32,24,0.45)] backdrop-blur-md"
            : "bg-cream-50/0"
        }`}
      />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" onClick={closeAll} className="shrink-0" aria-label={`${site.name} — Home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      aria-controls="online-services-menu"
                      onClick={() => setDropdownOpen((o) => !o)}
                      className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] transition-colors ${
                        isActive(pathname, item.href) ? "text-maroon-800" : "text-brown-700 hover:text-maroon-800"
                      }`}
                    >
                      {item.label}
                      <Chevron className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                      {isActive(pathname, item.href) && <ActiveDot />}
                    </button>
                    <div
                      id="online-services-menu"
                      className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-300 ${
                        dropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-3xl border border-gold-500/20 bg-ivory p-2 shadow-[0_24px_50px_-24px_rgba(59,16,18,0.45)]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeAll}
                              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-brown-700 transition-colors hover:bg-cream-100 hover:text-maroon-800"
                            >
                              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                        <li className="mt-1 border-t border-gold-500/20 pt-1">
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="block rounded-2xl px-4 py-3 font-serif text-lg italic text-maroon-700 hover:bg-cream-100"
                          >
                            All online services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-2 text-[0.95rem] transition-colors ${
                      isActive(pathname, item.href) ? "text-maroon-800" : "text-brown-700 hover:text-maroon-800"
                    }`}
                  >
                    {item.label}
                    {isActive(pathname, item.href) && <ActiveDot />}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-maroon-800 px-5 py-2.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-maroon-700 sm:inline-flex"
          >
            Contact Astrologer
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-maroon-800/20 text-maroon-800 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-cream-50 px-5 pb-10 transition-all duration-500 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-gold-500/20 border-y border-gold-500/20">
            {nav.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className={`block py-3 font-serif text-2xl ${isActive(pathname, item.href) ? "text-maroon-700" : "text-brown-900"}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-3 grid grid-cols-2 gap-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeAll}
                          className="block rounded-2xl bg-cream-100 px-3 py-2.5 text-sm text-brown-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact"
          onClick={closeAll}
          className="mt-8 flex justify-center rounded-full bg-maroon-800 px-6 py-3.5 font-medium text-ivory"
        >
          Contact Astrologer
        </Link>
      </div>
    </header>
  );
}

function ActiveDot() {
  return <span aria-hidden className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rotate-45 bg-gold-500" />;
}
