/**
 * Pricing is regional: clients in Brazil pay in reais via PIX,
 * everyone else pays in euros via bank transfer (IBAN).
 */
export type Region = "br" | "intl";

export const PRICING: Record<Region, { currency: "BRL" | "EUR"; session: number }> = {
  br: { currency: "BRL", session: 250 },
  intl: { currency: "EUR", session: 88 },
};

const BRAZIL_TIMEZONES = new Set([
  "America/Noronha",
  "America/Belem",
  "America/Fortaleza",
  "America/Recife",
  "America/Araguaina",
  "America/Maceio",
  "America/Bahia",
  "America/Sao_Paulo",
  "America/Campo_Grande",
  "America/Cuiaba",
  "America/Santarem",
  "America/Porto_Velho",
  "America/Boa_Vista",
  "America/Manaus",
  "America/Eirunepe",
  "America/Rio_Branco",
]);

/**
 * Payment currency depends only on where the visitor is, regardless of
 * the site language: Brazil pays in reais, everyone else in euros.
 * Detected via the device timezone, falling back to the pt-BR locale.
 */
export function detectRegion(): Region {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) return BRAZIL_TIMEZONES.has(tz) ? "br" : "intl";
  } catch {
    // Older browsers without timezone support fall through to the locale check.
  }
  return navigator.language?.toLowerCase() === "pt-br" ? "br" : "intl";
}

export function formatPrice(amount: number, region: Region, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: PRICING[region].currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
