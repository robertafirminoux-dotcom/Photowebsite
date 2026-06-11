import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useLanguage } from "../../i18n/LanguageContext";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {t.faq.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.faq.subtitle}</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-3xl border border-border bg-card px-6 sm:px-8"
        >
          {t.faq.items.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-base font-semibold text-blue-deep hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
