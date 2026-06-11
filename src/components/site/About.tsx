import { Check } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../i18n/LanguageContext";
import { SITE } from "../../site.config";

export function About() {
  const { t } = useLanguage();
  const firstName = SITE.name.split(" ")[0];

  return (
    <section id="about" className="bg-blue-mist/60 py-20 scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Editorial portrait with magazine-style typography overlay */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-blue-soft/50" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <ImageWithFallback
              src={SITE.aboutImage}
              alt={SITE.name}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/30 via-transparent to-blue-deep/40" />

            <div className="absolute inset-x-0 top-7 px-6 text-center text-white">
              <p className="font-display text-lg italic underline decoration-white/70 decoration-1 underline-offset-[6px] drop-shadow-md sm:text-xl">
                {t.about.photoIntro}
              </p>
              <p className="-mt-1 font-display text-6xl font-semibold tracking-tight drop-shadow-lg sm:text-7xl">
                {firstName}
              </p>
            </div>

            <span className="absolute top-[55%] right-4 -rotate-3 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-deep shadow-lg sm:right-6">
              {t.about.photoSticker}
            </span>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm tracking-[0.2em] text-white/90 uppercase drop-shadow">
              {SITE.name}
            </p>
          </div>
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
