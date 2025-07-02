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

## Problem: GitHub Pages deployment conflict

Jeśli widzisz błąd typu:
```
Error: Deployment request failed for [...] due to in progress deployment. 
Please cancel [...] first or wait for it to complete.
```

### Rozwiązanie:

1. **Automatyczne naprawienie:**
   ```bash
   npm run fix-deploy
   ```
   
2. **Zbuduj i zweryfikuj:**
   ```bash
   npm run build:verify
   ```
   
3. **Wypchnij zmiany:**
   ```bash
   git add .
   git commit -m "Fix deployment conflicts - update SW cache version"
   git push origin main
   ```

4. **Poczekaj na deployment:**
   - GitHub Actions automatycznie anuluje poprzednie deploymenty
   - Sprawdź status na: https://github.com/mkdevelopment1312/pwa-hotel/actions

### Co robi fix-deploy:
- Aktualizuje wersję cache w service workerze (usuwa timestamp conflicts)
- Dodaje lepsze error handling w SW
- Filtruje problematyczne requesty GitHub Actions

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
