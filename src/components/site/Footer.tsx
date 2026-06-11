import { Instagram, Mail, Music2, PenLine } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { SITE } from "../../site.config";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#specialties", label: t.nav.specialties },
    { href: "#content", label: t.nav.content },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#booking", label: t.nav.book },
  ];

  return (
    <footer className="bg-blue-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-white/60 uppercase">
            {t.footer.quickLinks}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-white/60 uppercase">
            {t.footer.contact}
          </h4>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <Mail className="size-4" />
            {SITE.email}
          </a>

          <h4 className="mt-6 text-sm font-semibold tracking-widest text-white/60 uppercase">
            {t.footer.social}
          </h4>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Music2 className="size-4" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SITE.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <PenLine className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 sm:px-6">
          <p className="text-xs text-white/50">{t.footer.disclaimer}</p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
