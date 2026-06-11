import { useMemo, useState } from "react";
import { enUS, es as esLocale, ptBR } from "date-fns/locale";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Copy,
  Heart,
  Landmark,
  QrCode,
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
import { LANGS, PACKAGE_SESSIONS, type Lang } from "../../i18n/translations";
import { detectRegion, formatPrice, PRICING } from "../../lib/region";
import { SITE } from "../../site.config";

type Step = "plan" | "schedule" | "payment" | "success";
type Plan = "single" | "package";

// Working hours: 10:00–18:00 CET, Tuesday to Thursday.
const TIME_SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
// react-day-picker dayOfWeek: 0=Sun … 6=Sat — everything except Tue/Wed/Thu is disabled.
const UNAVAILABLE_DAYS = [0, 1, 5, 6];
const DATE_LOCALES = { en: enUS, pt: ptBR, es: esLocale };
const INTL_LOCALES: Record<Lang, string> = { en: "en-GB", pt: "pt-BR", es: "es-ES" };

function CopyField({
  label,
  value,
  copyLabel,
  copiedLabel,
}: {
  label: string;
  value: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — user can still select the text.
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-semibold text-blue-deep">{value}</p>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={copy}
        className="shrink-0 rounded-full"
      >
        {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
        {copied ? copiedLabel : copyLabel}
      </Button>
    </div>
  );
}

export function Booking() {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState<Step>("plan");
  const [plan, setPlan] = useState<Plan>("single");
  const [dates, setDates] = useState<Date[]>([]);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [country, setCountry] = useState("");
  const [sessionLang, setSessionLang] = useState<string>(lang);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const b = t.booking;
  const region = useMemo(() => detectRegion(), []);
  const sessionPrice = PRICING[region].session;
  const requiredDates = plan === "single" ? 1 : PACKAGE_SESSIONS;
  const total = sessionPrice * requiredDates;
  const intlLocale = INTL_LOCALES[lang];
  const price = (amount: number) => formatPrice(amount, region, intlLocale);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat(intlLocale, {
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

  const confirmBooking = () => {
    const detailsOk = name && email && (region === "br" ? cpf && country : true);
    if (!detailsOk) {
      setError(b.fillAllFields);
      return;
    }
    setError("");
    setProcessing(true);
    // The booking request is simulated — payment arrives directly via PIX/IBAN
    // and the confirmation email is sent once it is identified.
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
    }, 1200);
  };

  const reset = () => {
    setStep("plan");
    setDates([]);
    setTime("");
    setName("");
    setEmail("");
    setCpf("");
    setCountry("");
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

        {step === "plan" && region === "br" && (
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 text-center text-sm text-amber-900">
            {b.brLimitNote}
          </p>
        )}

        {step === "plan" && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {(["single", "package"] as const).map((p) => {
              const info = b[p];
              const planTotal = p === "single" ? sessionPrice : sessionPrice * PACKAGE_SESSIONS;
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
                      {price(planTotal)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {p === "package" ? `${price(sessionPrice)} ${b.perSession}` : b.perSession}
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
                    disabled={[{ before: tomorrow }, { dayOfWeek: UNAVAILABLE_DAYS }]}
                  />
                ) : (
                  <Calendar
                    mode="multiple"
                    locale={DATE_LOCALES[lang]}
                    selected={dates}
                    max={PACKAGE_SESSIONS}
                    onSelect={(d) => setDates(d ?? [])}
                    disabled={[{ before: tomorrow }, { dayOfWeek: UNAVAILABLE_DAYS }]}
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
                {region === "br" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="bk-cpf">{b.cpf}</Label>
                      <Input
                        id="bk-cpf"
                        inputMode="numeric"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder={b.cpfPlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bk-country">{b.country}</Label>
                      <Input
                        id="bk-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder={b.countryPlaceholder}
                      />
                    </div>
                  </>
                )}
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
                {region === "br" ? (
                  <QrCode className="size-5 text-primary" />
                ) : (
                  <Landmark className="size-5 text-primary" />
                )}
                {region === "br" ? b.pixTitle : b.transferTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {region === "br" ? b.pixInstructions : b.transferInstructions}
              </p>

              <div className="mt-5 space-y-3">
                {region === "br" ? (
                  <CopyField
                    label={b.pixKeyLabel}
                    value={SITE.payment.pixKey}
                    copyLabel={b.copy}
                    copiedLabel={b.copied}
                  />
                ) : (
                  <>
                    <CopyField
                      label={b.accountHolderLabel}
                      value={SITE.payment.accountHolder}
                      copyLabel={b.copy}
                      copiedLabel={b.copied}
                    />
                    <CopyField
                      label={b.ibanLabel}
                      value={SITE.payment.iban}
                      copyLabel={b.copy}
                      copiedLabel={b.copied}
                    />
                    <CopyField
                      label={b.bicLabel}
                      value={SITE.payment.bic}
                      copyLabel={b.copy}
                      copiedLabel={b.copied}
                    />
                  </>
                )}
                <div className="flex items-center justify-between rounded-xl bg-blue-mist px-4 py-3">
                  <p className="text-xs text-muted-foreground">{b.amountLabel}</p>
                  <p className="font-display text-lg font-semibold text-blue-deep">
                    {price(total)}
                  </p>
                </div>
              </div>

              {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
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
                  onClick={confirmBooking}
                  disabled={processing}
                  size="lg"
                  className="rounded-full px-8"
                >
                  {processing ? b.processing : b.confirmBooking}
                </Button>
              </div>
              <p className="mt-4 text-right text-xs text-muted-foreground">{b.paymentNote}</p>
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
                  <dd className="font-display text-2xl font-semibold">{price(total)}</dd>
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
              <p className="mt-3 border-t border-border pt-3 font-semibold text-blue-deep">
                {b.total}: {price(total)}
              </p>
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
