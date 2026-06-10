import { ArrowRight, Video } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../i18n/LanguageContext";
import { SITE } from "../../site.config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-blue-soft/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-leaf/40 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
            <Video className="size-4" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-tight font-semibold text-blue-deep sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title1}{" "}
            <span className="italic text-primary">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <a href="#booking">
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
              <a href="#about">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{t.hero.languagesLabel}:</span>
            {["English", "Português", "Español"].map((l) => (
              <span
                key={l}
                className="rounded-full border border-border bg-card px-3 py-1 text-foreground"
              >
                {l}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t.hero.locationNote}</p>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-4 rotate-2 rounded-[2rem] bg-leaf/60" />
            <div className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-blue-soft/60" />
            <ImageWithFallback
              src={SITE.heroImage}
              alt="Gabrielle Firmino"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
