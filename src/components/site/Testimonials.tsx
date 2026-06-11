import { Quote } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {t.testimonials.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <figure
              key={item.name}
              className={`flex flex-col rounded-3xl border border-border p-7 ${
                i % 3 === 1 ? "bg-blue-mist" : "bg-card"
              }`}
            >
              <Quote className="size-7 text-blue-soft" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-blue-deep">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
