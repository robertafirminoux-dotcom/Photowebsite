import { Check, Star } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const AVATAR_COLORS = [
  "bg-blue-soft text-blue-deep",
  "bg-leaf text-blue-deep",
  "bg-blue-deep text-white",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {t.testimonials.label}
          </span>
          <div>
            <h2 className="font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.testimonials.subtitle}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {t.testimonials.refs.map((ref) => (
                <span key={ref} className="flex items-center gap-1.5 text-sm text-foreground">
                  <Check className="size-4 text-primary" />
                  {ref}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <figcaption className="flex items-center gap-3">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    AVATAR_COLORS[i % AVATAR_COLORS.length]
                  }`}
                >
                  {initials(item.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-blue-deep">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.location}</span>
                </span>
              </figcaption>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                “{item.text}”
              </blockquote>
              <div className="mt-4 flex gap-0.5 border-t border-border pt-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
