import { ArrowUpRight, Instagram, PenLine, Music2 } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { SITE } from "../../site.config";

export function ContentHub() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Music2,
      tint: "bg-blue-deep text-white",
      iconTint: "bg-white/15 text-white",
      textTint: "text-white/75",
      ...t.content.tiktok,
      href: SITE.tiktok,
    },
    {
      icon: Instagram,
      tint: "bg-blue-soft/60 text-blue-deep",
      iconTint: "bg-card text-primary",
      textTint: "text-muted-foreground",
      ...t.content.instagram,
      href: SITE.instagram,
    },
    {
      icon: PenLine,
      tint: "bg-beige text-blue-deep",
      iconTint: "bg-card text-primary",
      textTint: "text-muted-foreground",
      ...t.content.medium,
      href: SITE.medium,
    },
  ];

  return (
    <section id="content" className="bg-blue-mist py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {t.content.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
            {t.content.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.content.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col rounded-3xl ${card.tint} p-7 transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <span className={`flex size-12 items-center justify-center rounded-2xl ${card.iconTint}`}>
                  <card.icon className="size-6" />
                </span>
                <ArrowUpRight className="size-5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{card.title}</h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${card.textTint}`}>
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                {card.cta}
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
