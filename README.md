# 📰 Newspaper

Eine React/TypeScript-Webanwendung zur dynamischen Darstellung aktueller Nachrichten aus der NewsAPI – mit Suchfunktion, Sprachauswahl und Sortieroptionen.

<img width="1164" height="773" alt="newspaper_start" src="https://github.com/user-attachments/assets/3b57c2df-9107-4ee8-9b29-59cf082b56b8" />

---

## 📋 Über das Projekt

Newspaper ist eine Webanwendung, die aktuelle Nachrichten über die NewsAPI (`newsapi.org`) lädt und benutzerfreundlich präsentiert. Als Übungsprojekt bot es mir die Möglichkeit, API-Integration, React State Management und TypeScript-Typisierung zu vertiefen.

---

## 🛠️ Technologien

- **React** - UI-Framework mit komponentenbasierter Architektur
- **TypeScript** - Strikte Typisierung für robuste Code-Qualität
- **Vite** - Modernes Build-Tool und Development Server
- **CSS3** - Modulares Styling pro Komponente
- **NewsAPI** - REST-API für aktuelle Nachrichten (`newsapi.org`)

---

## ✨ Features

- ✅ **Dynamische API-Anbindung** - Flexible Newssuche über newsapi.org
- ✅ **Suchfunktion** - Suche nach beliebigen Nachrichtenbegriffen
- ✅ **Sprachauswahl** - Nachrichten in verschiedenen Sprachen abrufbar
- ✅ **Sortieroptionen** - Nach Relevanz, Popularität oder Aktualität sortieren
- ✅ **Automatisches Fetching** - Neue API-Calls bei Änderung der Eingabefelder
- ✅ **TypeScript-Interfaces** - Typdefinitionen für News und Artikel (`INews`, `IArticle`)
- ✅ **Modulare Komponentenstruktur** - Wiederverwendbare Components mit eigenem CSS

---

## 📚 Was ich gelernt habe

- **React State Management**: Verwendung von `useState` für Suchbegriff, Sprache und Sortierung
- **useEffect für API-Calls**: Automatisches Fetching bei State-Änderungen
- **Props-Passing**: Datenfluss von Header → Home → NewsFeed → NewsArticle
- **TypeScript mit React**: Erstellung von Interfaces für API-Responses
- **Dynamische URL-Erstellung**: Zusammensetzen von API-URLs aus mehreren Parametern
- **Umgebungsvariablen**: Sicheres Handling von API-Keys mit Vite
- **Modulares CSS**: Organisation von Styles pro Komponente
- **Fehlerbehandlung**: Validierung von API-Daten und Error States

---

## 🌐 API-Funktionalität

**Dynamische Parameter:**
- **Suchbegriff**: Frei wählbar durch den Nutzer
- **Sprache**: Mehrere Sprachen verfügbar (DE, EN, etc.)
- **Sortierung**: Nach Relevanz, Popularität oder Aktualität

**API-Call Ablauf:**
1. Nutzer ändert Suchbegriff, Sprache oder Sortierung
2. `useEffect` erkennt State-Änderung
3. Neue API-URL wird dynamisch erstellt
4. `fetch` ruft NewsAPI auf
5. Response wird validiert und in State gespeichert
6. NewsFeed rendert aktualisierte Artikel

---

## 🧩 Mögliche Erweiterungen

- [ ] Kategorien-Filter (Business, Technology, Sports, etc.)
- [ ] Pagination oder Infinite Scroll für mehr Artikel
- [ ] Loading-Skeleton während API-Call
- [ ] Error-Handling mit benutzerfreundlichen Fehlermeldungen
- [ ] Datum-Filter (von/bis)
