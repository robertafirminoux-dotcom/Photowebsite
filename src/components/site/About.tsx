import { Check } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../i18n/LanguageContext";
import { SITE } from "../../site.config";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-beige/60 py-20 scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] bg-blue-soft/50" />
          <ImageWithFallback
            src={SITE.aboutImage}
            alt="Gabrielle Firmino"
            className="relative aspect-square w-full rounded-[1.75rem] object-cover shadow-lg"
          />
        </div>

        <div>
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {t.about.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.about.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-3 text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
