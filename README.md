
# Kalorienrechner

Dies ist ein einfacher webbasierter Kalorienrechner, der den Grundumsatz (BMR), den Gesamtenergieverbrauch (TDEE) und den Gesamtenergiebedarf basierend auf den Benutzereingaben schätzt, einschließlich Geschlecht, Alter, Gewicht, Größe und Aktivitätsniveau. Der Rechner bietet Einblicke in die täglichen kalorischen Anforderungen und betont die Bedeutung der Berücksichtigung des PAL-Faktors (Physical Activity Level), um den TDEE zu bestimmen.

## BMR-Berechnung

Der Grundumsatz (BMR) wird mithilfe der Mifflin-St Jeor-Gleichungen berechnet:
- Für Männer:
  BMR = 66,47 + (13,7 * Gewicht in kg) + (5 * Größe in cm) - (6,8 * Alter in Jahren)
- Für Frauen:
  BMR = 655,1 + (9,6 * Gewicht in kg) + (1,8 * Größe in cm) - (4,7 * Alter in Jahren)

Hinweis: Die Ergebnisse werden in Kilokalorien (Kcal) ausgedrückt.

## TDEE-Berechnung

Um den Gesamtenergieverbrauch (TDEE) zu bestimmen, wird der BMR mit dem aus dem Dropdown-Menü ausgewählten PAL (Physical Activity Level) multipliziert. TDEE repräsentiert die geschätzte Anzahl von Kalorien, die eine Person benötigt, um ihr aktuelles Gewicht zu halten.

## Verwendung

1. Öffnen Sie die Datei `index.html` in einem Webbrowser.

2. Geben Sie die folgenden Informationen ein:
   - **Geschlecht**: Wählen Sie entweder "Männlich" oder "Weiblich".
   - **Alter**: Geben Sie Ihr Alter in Jahren ein.
   - **Gewicht**: Geben Sie Ihr Gewicht in Kilogramm ein.
   - **Größe**: Geben Sie Ihre Größe in Zentimetern ein.
   - **Aktivitätsniveau**: Wählen Sie Ihr PAL aus dem Dropdown-Menü.

3. Klicken Sie auf die Schaltfläche "Berechnen".

4. Der Rechner zeigt den geschätzten BMR, TDEE und die entsprechenden Werte sowohl in Kilokalorien (Kcal) als auch in Kilojoule (KJ) an.

## Gesamtenergiebedarf

Dieser Rechner hilft Ihnen auch dabei, Ihren täglichen Kalorienbedarf für verschiedene Ziele zu bestimmen:
- Um Gewicht zu verlieren, sollten Sie weniger Kalorien zu sich nehmen als Ihr TDEE.
- Um Ihr aktuelles Gewicht zu halten, sollten Sie Kalorien im gleichen Wert wie Ihr TDEE konsumieren.
- Um Gewicht zuzunehmen, sollten Sie mehr Kalorien als Ihr TDEE konsumieren.

## Wichtige Hinweise

- Die Ergebnisse, die dieser Rechner liefert, sind Schätzungen und können bei verschiedenen Personen variieren. Für personalisierte Ernährungs- und Fitnesspläne empfehlen wir, einen Gesundheitsexperten oder Ernährungsberater zu konsultieren.

- Stellen Sie sicher, dass Sie alle erforderlichen Felder ausfüllen, bevor Sie auf "Berechnen" klicken. Unvollständige Eingaben führen zu einer Fehlermeldung.


## Authors

- [@KWiefel](https://github.com/KWiefel)


## Support

For support, email dev.kwiefel427@gmail.com.

