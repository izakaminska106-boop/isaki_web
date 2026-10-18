# ISAKI — Strategic & AI Advisory

Responsywna strona statyczna według PRD 3.0. HTML, CSS i JavaScript, bez frameworka, kompilacji i usług zewnętrznych. Fonty Inter oraz Manrope są serwowane lokalnie.

## Uruchomienie

```sh
cd /workspace/isaki_web
python3 -m http.server 8000 --bind 0.0.0.0
```

## Publikacja w GitHub Pages

1. W repozytorium otwórz **Settings → Pages → Source → GitHub Actions**.
2. Wyślij pliki na gałąź `main`. Workflow `Deploy GitHub Pages` opublikuje wyłącznie pliki strony i zasoby.
3. Sprawdź zakończenie workflow w zakładce Actions. Adres publikacji poda krok Deploy.

Względne ścieżki obsługują zarówno adres projektu `/isaki_web/`, jak i późniejszą domenę własną. Właścicielka dodała plik CNAME dla isaki.pl. Workflow zachowuje go w publikowanym artefakcie. Działanie domeny wymaga poprawnych DNS oraz konfiguracji Pages.

## Do uzupełnienia przed premierą firmową

Oryginalny logotyp właścicielki (`isakilogotyp.jpg`) jest używany bez modyfikacji w nagłówku, hero i stopce.

- Zatwierdzony e-mail kontaktowy i aktywny link `mailto:` w sekcji Contact.
- Pełna nazwa firmy, adres, NIP i odpowiednia informacja o przetwarzaniu danych.
- Favicon z zatwierdzonego sygnetu. Nie generujemy zamiennika logo.

Strona nie zawiera fikcyjnych danych kontaktowych, formularza, analityki ani cookies. Informacja o prywatności jest robocza, a nie kompletną polityką firmy.

## Testy

Testy Playwright znajdują się w `tests/site.spec.cjs`. Wymagają pakietu `@playwright/test` oraz Chromium. Testują nawigację, menu mobilne, brak przewijania poziomego, brak błędów zasobów i okno prywatności.
