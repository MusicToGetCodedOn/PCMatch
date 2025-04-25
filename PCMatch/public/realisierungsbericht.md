# Realisierungsbericht

## Status  
Abgeschlossen  

## Projektname  
PCMatch  

## Projektleiter  
Max Mustermann  

## Auftraggeber  
Tech Solutions GmbH  

## Autoren  
Anna Beispiel, John Doe  

## Verteiler  
Projektteam, Auftraggeber  

---

## Änderungskontrolle, Prüfung, Genehmigung  

| Version | Datum       | Beschreibung, Bemerkung       | Name oder Rolle |
|---------|-------------|-------------------------------|-----------------|
| 1.0     | 2023-10-01  | Initiale Erstellung           | Anna Beispiel   |
| 1.1     | 2023-10-05  | Ergänzung der Testspezifikation | John Doe        |

---

## Definitionen und Abkürzungen  

| Begriff / Abkürzung | Bedeutung                       |
|---------------------|---------------------------------|
| PCMatch             | PC-Building Application        |
| ISDS                | Informationssicherheit und Datenschutz |

---

## Referenzen  

| Referenz | Titel, Quelle                           |
|----------|-----------------------------------------|
| [1]      | React Documentation                     |
| [2]      | React Router Documentation              |
| [3]      | LocalStorage API Documentation          |

---

## Inhaltsverzeichnis  

1. Zusammenfassung  
2. Technische Detailspezifikation  
   2.1. Systemdesign  
       2.1.1. Struktur  
       2.1.2. Beschreibung der Elemente  
   2.2. Schnittstellendefinitionen  
   2.3. Sicherheit (ISDS)  
   2.4. Anforderungszuordnung  
3. Systemdokumentation  
   3.1. Konfigurations-Dokumentation  
   3.2. Benutzerhandbuch  
       3.2.1. Systemübersicht  
       3.2.2. Anwenderfunktionalität  
   3.3. Supporthandbuch  
       3.3.1. Maßnahmen bei Benutzerproblemen  
       3.3.2. Maßnahmen bei technischen Problemen  
       3.3.3. Anhang zum Supporthandbuch  
4. Systemtest  
   4.1. Testspezifikation  
       4.1.1. Kritikalität der Funktionseinheit  
       4.1.2. Testanforderungen  
       4.1.3. Testverfahren  
       4.1.4. Testkriterien  
       4.1.5. Testfälle  
   4.2. Testprozedur  
       4.2.1. Vorbereitung  
       4.2.2. Durchführung  
       4.2.3. Nachbearbeitung  
   4.3. Testprotokoll  
       4.3.1. Testobjekt  
       4.3.2. Testresultate  
       4.3.3. Testauswertung  
5. Weiterführung der Projektplanung  
   5.1. Abgleich von Planung und tatsächlichem Verlauf der Phase Konzept  
   5.2. Aktualisierung der Risikosituation  
   5.3. Planung der nächsten Phase  

---

## 1. Zusammenfassung  

Dieses Dokument beschreibt die Realisierung des Projekts PCMatch. Ziel des Projekts ist die Entwicklung einer Anwendung, die es Nutzern ermöglicht, individuelle PC-Builds zu erstellen, zu speichern und zu verwalten. Das Dokument enthält technische Detailspezifikationen, Systemdokumentation, Testspezifikationen und die Planung der nächsten Projektphase.  

---

## 2. Technische Detailspezifikation  

### 2.1. Systemdesign  

#### 2.1.1. Struktur  
Das System basiert auf React und React Router zur Navigation. Es besteht aus mehreren Komponenten und Routen, die die Funktionalität der Anwendung bereitstellen.  

#### 2.1.2. Beschreibung der Elemente  
- **Header**: Navigation und Produktmenü.  
- **BuildForm**: Schrittweises Erstellen eines PC-Builds.  
- **Routes**: Verschiedene Seiten für Produkte und Builds.  

### 2.2. Schnittstellendefinitionen  
- **LocalStorage**: Speicherung von Builds.  
- **React Router**: Navigation zwischen Seiten.  

### 2.3. Sicherheit (ISDS)  
- **Datenschutz**: Speicherung von Daten nur lokal im Browser.  
- **Sicherheitsmaßnahmen**: Keine sensiblen Daten werden verarbeitet.  

### 2.4. Anforderungszuordnung  
| AFo.-Nr. | Anforderung (Stichwort) | Erfüllt durch |
|----------|--------------------------|---------------|
| 1        | PC-Build speichern       | BuildForm     |
| 2        | Navigation               | Header        |

---

## 3. Systemdokumentation  

### 3.1. Konfigurations-Dokumentation  
Die Anwendung ist mit React und React Router konfiguriert.  

### 3.2. Benutzerhandbuch  

#### 3.2.1. Systemübersicht  
- **Ziele**: Erstellung und Speicherung von PC-Builds.  
- **Hauptfunktionen**: Produktnavigation, Build-Erstellung.  

#### 3.2.2. Anwenderfunktionalität  
- **Aufgabe**: Auswahl von Komponenten und Speichern des Builds.  
- **Instruktion**:  
  1. Navigieren Sie zum Builder.  
  2. Wählen Sie Komponenten aus.  
  3. Speichern Sie den Build.  

### 3.3. Supporthandbuch  

#### 3.3.1. Maßnahmen bei Benutzerproblemen  
- **Problem**: Menü wird nicht angezeigt.  
- **Lösung**: Seite neu laden.  

#### 3.3.2. Maßnahmen bei technischen Problemen  
- **Problem**: Build wird nicht gespeichert.  
- **Lösung**: Browser-Cache überprüfen.  

#### 3.3.3. Anhang zum Supporthandbuch  
- **Glossar**: Enthält technische Begriffe und deren Bedeutung.  
- **Fehlermeldungen**: Liste möglicher Fehlermeldungen und deren Lösungen.  

---

## 4. Systemtest  

### 4.1. Testspezifikation  

#### 4.1.1. Kritikalität der Funktionseinheit  
- **Build-Speicherung**: Hoch.  

#### 4.1.2. Testanforderungen  
- **Normalbedingungen**: Auswahl und Speicherung eines Builds.  

#### 4.1.3. Testverfahren  
- **Vorbereitung**: Testdaten erstellen.  
- **Durchführung**: Komponenten auswählen und speichern.  

#### 4.1.4. Testkriterien  
- **Ende-Kriterien**: Build wird korrekt gespeichert.  

#### 4.1.5. Testfälle  
| Nr. | AFo.-Nr. | Anwendungsfall | Ausgangssituation | Eingabedaten | Erwartetes Ergebnis |
|-----|----------|----------------|--------------------|--------------|---------------------|
| 1   | 1        | Build speichern | Leerer Build      | Komponenten  | Build gespeichert   |

### 4.2. Testprozedur  

#### 4.2.1. Vorbereitung  
- **Voraussetzungen**: Browser mit aktiviertem LocalStorage.  

#### 4.2.2. Durchführung  
- **Schritte**:  
  1. Öffnen Sie die Anwendung.  
  2. Navigieren Sie zum Builder.  
  3. Wählen Sie Komponenten aus und speichern Sie den Build.  

#### 4.2.3. Nachbearbeitung  
- **Auswertung**: Überprüfen Sie, ob der Build korrekt im LocalStorage gespeichert wurde.  

### 4.3. Testprotokoll  

#### 4.3.1. Testobjekt  
- **Version**: 1.0  
- **Tester**: Anna Beispiel  

#### 4.3.2. Testresultate  
- **Ergebnis**: Alle Tests erfolgreich bestanden.  

#### 4.3.3. Testauswertung  
- **Abweichungen**: Keine.  

---

## 5. Weiterführung der Projektplanung  

### 5.1. Abgleich von Planung und tatsächlichem Verlauf der Phase Konzept  
Die geplanten Funktionen wurden erfolgreich umgesetzt.  

### 5.2. Aktualisierung der Risikosituation  
Keine neuen Risiken identifiziert.  

### 5.3. Planung der nächsten Phase  
- **Nächste Schritte**: Optimierung der Benutzeroberfläche und Implementierung zusätzlicher Features wie Export von Builds.
