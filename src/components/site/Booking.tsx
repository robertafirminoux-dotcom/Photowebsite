import { useState } from "react";
import { enUS, es as esLocale, ptBR } from "date-fns/locale";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Heart,
  Lock,
} from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useLanguage } from "../../i18n/LanguageContext";
import { LANGS, PACKAGE_SESSIONS, SESSION_PRICE, type Lang } from "../../i18n/translations";

type Step = "plan" | "schedule" | "payment" | "success";
type Plan = "single" | "package";

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const DATE_LOCALES = { en: enUS, pt: ptBR, es: esLocale };
const INTL_LOCALES: Record<Lang, string> = { en: "en-GB", pt: "pt-BR", es: "es-ES" };

export function Booking() {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState<Step>("plan");
  const [plan, setPlan] = useState<Plan>("single");
  const [dates, setDates] = useState<Date[]>([]);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sessionLang, setSessionLang] = useState<string>(lang);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const b = t.booking;
  const requiredDates = plan === "single" ? 1 : PACKAGE_SESSIONS;
  const total = SESSION_PRICE * requiredDates;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat(INTL_LOCALES[lang], {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(d);

  const sortedDates = [...dates].sort((a, b2) => a.getTime() - b2.getTime());

  const choosePlan = (p: Plan) => {
    setPlan(p);
    setDates([]);
    setTime("");
    setStep("schedule");
  };

  const goToPayment = () => {
    if (dates.length === requiredDates && time) {
      setError("");
      setStep("payment");
    }
  };

  const pay = () => {
    if (!name || !email || !cardName || !cardNumber || !expiry || !cvc) {
      setError(b.fillAllFields);
      return;
    }
    setError("");
    setProcessing(true);
    // Simulated payment — swap for a real provider (e.g. Stripe) in production.
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
    }, 1600);
  };

  const reset = () => {
    setStep("plan");
    setDates([]);
    setTime("");
    setName("");
    setEmail("");
    setCardName("");
    setCardNumber("");
    setExpiry("");
    setCvc("");
    setError("");
  };

  const steps: { key: Step; label: string }[] = [
    { key: "plan", label: b.stepPlan },
    { key: "schedule", label: b.stepSchedule },
    { key: "payment", label: b.stepPayment },
  ];
  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <section id="booking" className="bg-blue-mist/60 py-20 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            {b.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-blue-deep sm:text-4xl">
            {b.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{b.subtitle}</p>
        </div>

        {step !== "success" && (
          <div className="mx-auto mt-10 flex max-w-md items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.key} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-1.5">
                  <span
                    className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      i < stepIndex
                        ? "bg-primary text-primary-foreground"
                        : i === stepIndex
                          ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                          : "bg-card text-muted-foreground"
                    }`}
                  >
                    {i < stepIndex ? <Check className="size-4" /> : i + 1}
                  </span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-2 mb-5 h-0.5 flex-1 rounded ${
                      i < stepIndex ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {step === "plan" && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {(["single", "package"] as const).map((p) => {
              const info = b[p];
              return (
                <div
                  key={p}
                  className={`relative flex flex-col rounded-3xl border-2 p-8 transition-colors ${
                    p === "package"
                      ? "border-primary bg-card"
                      : "border-transparent bg-card"
                  }`}
                >
                  {p === "package" && (
                    <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {b.package.badge}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold text-blue-deep">
                    {info.title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-semibold text-primary">
                      {info.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {p === "package" ? `€${SESSION_PRICE} ${b.perSession}` : b.perSession}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{info.description}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {info.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="size-3 text-primary" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => choosePlan(p)}
                    variant={p === "package" ? "default" : "outline"}
                    className="mt-7 rounded-full"
                    size="lg"
                  >
                    {b.choosePlan}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        )}

        {step === "schedule" && (
          <div className="mt-10 grid gap-8 rounded-3xl bg-card p-6 sm:p-8 lg:grid-cols-[auto_1fr]">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-blue-deep">
                <CalendarDays className="size-5 text-primary" />
                {plan === "single" ? b.selectDateSingle : b.selectDatePackage}
              </h3>
              <div className="mt-4 rounded-2xl border border-border">
                {plan === "single" ? (
                  <Calendar
                    mode="single"
                    locale={DATE_LOCALES[lang]}
                    selected={dates[0]}
                    onSelect={(d) => setDates(d ? [d] : [])}
                    disabled={[{ before: tomorrow }, { dayOfWeek: [0, 6] }]}
                  />
                ) : (
                  <Calendar
                    mode="multiple"
                    locale={DATE_LOCALES[lang]}
                    selected={dates}
                    max={PACKAGE_SESSIONS}
                    onSelect={(d) => setDates(d ?? [])}
                    disabled={[{ before: tomorrow }, { dayOfWeek: [0, 6] }]}
                  />
                )}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{b.timezoneNote}</p>
            </div>

            <div className="flex flex-col">
              {dates.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-blue-deep">
                    {b.selectedDates} ({dates.length}/{requiredDates})
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sortedDates.map((d) => (
                      <span
                        key={d.toISOString()}
                        className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                      >
                        {formatDate(d)}
                        {time && ` · ${time}`}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <h4 className="mt-6 text-sm font-semibold text-blue-deep">{b.selectTime}</h4>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-4">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                      time === slot
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                <Button variant="ghost" onClick={() => setStep("plan")} className="rounded-full">
                  <ArrowLeft className="size-4" />
                  {b.back}
                </Button>
                <Button
                  onClick={goToPayment}
                  disabled={dates.length !== requiredDates || !time}
                  size="lg"
                  className="rounded-full px-8"
                >
                  {b.continue}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "payment" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem]">
            <div className="rounded-3xl bg-card p-6 sm:p-8">
              <h3 className="font-semibold text-blue-deep">{b.yourDetails}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="bk-name">{b.name}</Label>
                  <Input
                    id="bk-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={b.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-email">{b.email}</Label>
                  <Input
                    id="bk-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={b.emailPlaceholder}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>{b.sessionLanguage}</Label>
                  <Select value={sessionLang} onValueChange={setSessionLang}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGS.map((l) => (
                        <SelectItem key={l.code} value={l.code}>
                          {l.flag} {l.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <h3 className="mt-8 flex items-center gap-2 font-semibold text-blue-deep">
                <CreditCard className="size-5 text-primary" />
                {b.payment}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="bk-cardname">{b.cardName}</Label>
                  <Input
                    id="bk-cardname"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Maria Silva"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="bk-cardnumber">{b.cardNumber}</Label>
                  <Input
                    id="bk-cardnumber"
                    inputMode="numeric"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-expiry">{b.expiry}</Label>
                  <Input
                    id="bk-expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-cvc">{b.cvc}</Label>
                  <Input
                    id="bk-cvc"
                    inputMode="numeric"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                  />
                </div>
              </div>

              {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

              <div className="mt-8 flex items-center justify-between gap-4">
                <Button
                  variant="ghost"
                  onClick={() => setStep("schedule")}
                  className="rounded-full"
                  disabled={processing}
                >
                  <ArrowLeft className="size-4" />
                  {b.back}
                </Button>
                <Button
                  onClick={pay}
                  disabled={processing}
                  size="lg"
                  className="rounded-full px-8"
                >
                  {processing ? b.processing : `${b.payNow} · €${total}`}
                </Button>
              </div>
              <p className="mt-4 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                <Lock className="size-3.5" />
                {b.securityNote}
              </p>
            </div>

            <aside className="h-fit rounded-3xl bg-blue-deep p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-semibold">{b.summary}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/70">{b.plan}</dt>
                  <dd className="text-right font-medium">{b[plan].title}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/70">{b.dates}</dt>
                  <dd className="space-y-1 text-right font-medium">
                    {sortedDates.map((d) => (
                      <div key={d.toISOString()}>
                        {formatDate(d)} · {time}
                      </div>
                    ))}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-white/20 pt-4 text-base">
                  <dt>{b.total}</dt>
                  <dd className="font-display text-2xl font-semibold">€{total}</dd>
                </div>
              </dl>
            </aside>
          </div>
        )}

        {step === "success" && (
          <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-card p-10 text-center">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary">
              <Heart className="size-8 text-primary" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-semibold text-blue-deep">
              {b.successTitle}
            </h3>
            <p className="mt-4 text-muted-foreground">{b.successMessage}</p>

            <div className="mt-6 rounded-2xl bg-blue-mist p-5 text-left text-sm">
              <p className="font-semibold text-blue-deep">{b[plan].title}</p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                {sortedDates.map((d) => (
                  <p key={d.toISOString()}>
                    {formatDate(d)} · {time} (CET)
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground italic">{b.successDetail}</p>
            <Button onClick={reset} variant="outline" className="mt-8 rounded-full px-8">
              {b.bookAnother}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
