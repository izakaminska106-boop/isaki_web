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

Względne ścieżki obsługują zarówno adres projektu `/isaki_web/`, jak i późniejszą domenę własną. Domena isaki.pl nie jest jeszcze konfigurowana. Nie dodawaj pliku CNAME przed przygotowaniem DNS.

## Do uzupełnienia przed premierą firmową

- Oryginalne logo zatwierdzone przez właścicielkę. Obecna nazwa firmy w tekście jest oznaczeniem roboczym, nie odtworzonym logotypem. Dekoracja geometryczna w hero nie jest znakiem marki.
- Zatwierdzony e-mail kontaktowy i aktywny link `mailto:` w sekcji Contact.
- Pełna nazwa firmy, adres, NIP i odpowiednia informacja o przetwarzaniu danych.
- Favicon z zatwierdzonego sygnetu. Nie generujemy zamiennika logo.

Strona nie zawiera fikcyjnych danych kontaktowych, formularza, analityki ani cookies. Informacja o prywatności jest robocza, a nie kompletną polityką firmy.

## Testy

Testy Playwright znajdują się w `tests/site.spec.cjs`. Wymagają pakietu `@playwright/test` oraz Chromium. Testują nawigację, menu mobilne, brak przewijania poziomego, brak błędów zasobów i okno prywatności.
