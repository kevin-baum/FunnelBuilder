# Funnel Builder (Next.js + Swapy)

Dieses Beispielprojekt demonstriert, wie man mit **Next.js** und der **Swapy‑Bibliothek** einen einfachen Funnel‑ bzw. Seiten‑Editor ähnlich dem Onepage‑Builder umsetzt. Der Editor erlaubt es, vordefinierte Abschnitte hinzuzufügen, sie per Drag‑and‑Drop zu sortieren und ihre Inhalte zu bearbeiten. 

## Voraussetzungen

* Node.js ≥ 18
* pnpm, npm oder yarn zum Installieren der Abhängigkeiten

## Installation

```bash
cd funnelbuilder
npm install
# oder pnpm install / yarn install
```

## Entwicklung starten

```bash
npm run dev
```

Die Anwendung ist anschließend unter `http://localhost:3000` erreichbar. Der Builder befindet sich unter `http://localhost:3000/builder`.

## Funktionsumfang

* Hinzufügen von vordefinierten Seitenabschnitten aus einer Palette (Hero, Text, Features, CTA)
* Sortieren der Abschnitte per Drag‑and‑Drop mit Swapy
* Bearbeiten der Inhalte einzelner Abschnitte über einfache Formularfelder

## Hinweise

Die verwendete Bibliothek **Swapy** ist ein clientseitiges Drag‑and‑Drop‑Tool. Gemäß der Dokumentation muss es erst nach dem Mounten des React‑Components initialisiert und bei Unmount wieder zerstört werden【89839987114266†L64-L101】. Bei dynamischen Listen (Hinzufügen/Entfernen von Elementen) ist der `manualSwap`‑Modus erforderlich. Swapy stellt dafür Hilfsfunktionen zur Verfügung, um das Mapping zwischen Slots und Items in React‑State zu verwalten【341303551667202†L64-L174】.