import { HeartHandshake, Plane, Home, Sparkles, Coins, Flower2 } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const ICONS = [HeartHandshake, Plane, Home, Sparkles, Coins, Flower2];
const TINTS = [
  "bg-blue-soft/50",
  "bg-leaf/50",
  "bg-blue-mist",
  "bg-leaf-soft",
  "bg-secondary",
  "bg-blue-soft/30",
];

export function Specialties() {
  const { t } = useLanguage();

  return (
    <section id="specialties" className="py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {t.specialties.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
            {t.specialties.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.specialties.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.specialties.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className={`group rounded-3xl ${TINTS[i % TINTS.length]} p-7 transition-transform hover:-translate-y-1`}
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <Icon className="size-6 text-primary" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-blue-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
