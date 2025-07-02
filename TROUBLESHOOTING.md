# Instrukcje rozwiązania problemów z PWA

## Problem: Strona nadal pokazuje błędy 404

Jeśli po deploymencie nadal widzisz błędy typu:
- `GET /src/main.tsx net::ERR_ABORTED 404 (Not Found)`
- `Manifest fetch failed, code 404`
- `SW registration failed`

### Rozwiązanie:

1. **Wyczyść cache przeglądarki:**
   - Chrome/Edge: `Ctrl + Shift + R` lub `F12` → Application → Storage → Clear storage
   - Firefox: `Ctrl + Shift + Delete` → Wszystko → Wyczyść teraz

2. **Sprawdź DevTools:**
   - Otwórz DevTools (`F12`)
   - Przejdź do zakładki Application
   - W sekcji Service Workers odznacz "Update on reload"
   - Kliknij "Unregister" przy starym service workerze
   - Odśwież stronę

3. **Sprawdź czy GitHub Actions się wykonał:**
   - Idź do: https://github.com/mkdevelopment1312/pwa-hotel/actions
   - Sprawdź czy ostatni workflow przeszedł pomyślnie

4. **Czekaj na propagację:**
   - GitHub Pages może potrzebować 5-10 minut na pełną propagację
   - Sprawdź stronę w trybie incognito

## Weryfikacja lokalnie

Użyj polecenia:
```bash
npm run build:verify
```

To polecenie zbuduje projekt i sprawdzi czy wszystkie ścieżki są poprawne.

## Testowanie lokalne

```bash
npm run preview
```

Następnie odwiedź: http://localhost:4173/pwa-hotel/
