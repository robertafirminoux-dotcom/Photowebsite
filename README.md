# Gabrielle Firmino · Psychoanalyst

Personal website for Gabrielle Firmino — psychoanalysis focused on relationships,
immigration, family, love & self-esteem, money and the feminine. Online sessions
in English, Portuguese and Spanish.

## Features

- **Multilingual (EN / PT / ES)** — language switcher in the top navigation,
  with automatic detection of the visitor's browser language.
- **User journey** — meet Gabrielle → explore specialties → find her content on
  TikTok, Instagram and Medium → read testimonials → book and pay.
- **Booking flow** — choose a single session (€90) or a monthly package
  (4 sessions, €360, same price per session), pick date(s) on the calendar,
  choose a time slot, and pay on the site.
- **Design** — warm blue + beige palette, soft rounded cards, serif display
  typography (Cormorant Garamond + Nunito Sans).

## Running the code

```bash
npm i
npm run dev
```

## Customizing

- **Photos, social links and contact email** — edit `src/site.config.ts`.
  Replace the placeholder portrait URLs with your real photos (e.g. drop files
  into `src/assets/` and import them).
- **Texts and translations** — edit `src/i18n/translations.ts`.
- **Prices** — `SESSION_PRICE` and `PACKAGE_SESSIONS` in `src/i18n/translations.ts`.
- **Colors** — CSS variables in `src/styles/globals.css`.

## Notes

The payment step is currently a simulated checkout (no card is charged). To
accept real payments, connect a provider such as Stripe Checkout or Payment
Links inside `src/components/site/Booking.tsx` (see the `pay()` function).
