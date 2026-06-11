import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLanguage } from "../../i18n/LanguageContext";
import { LANGS } from "../../i18n/translations";
import { SITE } from "../../site.config";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#specialties", label: t.nav.specialties },
    { href: "#content", label: t.nav.content },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#booking", label: t.nav.book },
    { href: "#faq", label: t.nav.faq },
  ];

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-xl font-semibold tracking-wide text-blue-deep">
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5 rounded-full">
                <Globe className="size-4" />
                <span className="uppercase">{current.code}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGS.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={l.code === lang ? "bg-accent" : ""}
                >
                  <span className="mr-1">{l.flag}</span> {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="hidden rounded-full px-5 sm:inline-flex">
            <a href="#booking">{t.nav.bookCta}</a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <a href="#booking" onClick={() => setMobileOpen(false)}>
                {t.nav.bookCta}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
