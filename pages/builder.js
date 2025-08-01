import { useEffect, useMemo, useRef, useState } from 'react';
import { createSwapy, utils } from 'swapy';
import SectionRenderer from '../components/SectionRenderer';
import SectionEditor from '../components/SectionEditor';

// Definiere alle verfügbaren Abschnittstypen und deren Standard‑Eigenschaften
const availableSections = {
  hero: {
    name: 'Hero',
    defaultProps: {
      title: 'Willkommen zu unserem Produkt',
      subtitle: 'Hier steht eine kurze Beschreibung.',
    },
  },
  text: {
    name: 'Text',
    defaultProps: {
      heading: 'Über uns',
      content:
        'Dieser Textabschnitt kann genutzt werden, um Ihre Dienstleistung, Ihr Produkt oder Ihre Vision ausführlicher zu beschreiben. Passen Sie den Text nach Belieben an.',
    },
  },
  features: {
    name: 'Features',
    defaultProps: {
      heading: 'Unsere Features',
      features: [
        { title: 'Schnell', description: 'Kurze Ladezeiten dank modernster Technik.' },
        { title: 'Einfach', description: 'Intuitive Bedienung ohne Schnickschnack.' },
        { title: 'Flexibel', description: 'Passen Sie alles so an, wie Sie es benötigen.' },
      ],
    },
  },
  cta: {
    name: 'Call to Action',
    defaultProps: {
      heading: 'Bereit, loszulegen?',
      text: 'Klicken Sie auf den Button, um Ihr Projekt zu starten.',
      buttonText: 'Jetzt starten',
      buttonLink: '#',
    },
  },
};

// Hilfsfunktion zur Generierung einer eindeutigen ID
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export default function BuilderPage() {
  // Liste der hinzugefügten Abschnitte
  const [sections, setSections] = useState([]);
  // Mapping zwischen Slots und Item‑IDs, wird von Swapy verwaltet
  const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap([], 'id'));
  // Aktuell ausgewählter Abschnitt
  const [selectedSectionId, setSelectedSectionId] = useState(null);

  const containerRef = useRef(null);
  const swapyRef = useRef(null);

  // Swapy initialisieren
  useEffect(() => {
    if (containerRef.current) {
      // `manualSwap` aktivieren, um die Reaktion auf dynamische Änderungen an die App zu delegieren
      swapyRef.current = createSwapy(containerRef.current, { manualSwap: true });
      swapyRef.current.onSwap((event) => {
        // Neue Reihenfolge speichern
        setSlotItemMap(event.newSlotItemMap.asArray);
      });
    }
    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  // Aktualisiere Swapy, wenn Abschnitte hinzugefügt oder entfernt werden
  useEffect(() => {
    if (swapyRef.current) {
      utils.dynamicSwapy(swapyRef.current, sections, 'id', slotItemMap, setSlotItemMap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  // Berechne die Reihenfolge der Abschnitte basierend auf SlotItemMap
  const slottedSections = useMemo(() => {
    return utils.toSlottedItems(sections, 'id', slotItemMap);
  }, [sections, slotItemMap]);

  // Abschnitt hinzufügen
  const addSection = (type) => {
    const id = generateId();
    const newSection = {
      id,
      type,
      props: JSON.parse(JSON.stringify(availableSections[type].defaultProps)),
    };
    setSections((prev) => [...prev, newSection]);
    setSelectedSectionId(id);
  };

  // Abschnitt entfernen
  const removeSection = (id) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
    if (selectedSectionId === id) {
      setSelectedSectionId(null);
    }
  };

  // Abschnitt updaten
  const updateSectionProps = (id, newProps) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, props: newProps } : s)));
  };

  // Ausgewählter Abschnitt (Objekt) für Editor
  const selectedSection = sections.find((s) => s.id === selectedSectionId);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Seitenleiste: Palette */}
      <aside
        style={{
          width: '220px',
          borderRight: '1px solid #e5e7eb',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>Abschnitte</h2>
        {Object.entries(availableSections).map(([key, meta]) => (
          <button
            key={key}
            onClick={() => addSection(key)}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              backgroundColor: '#f9fafb',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            {meta.name} hinzufügen
          </button>
        ))}
      </aside>
      {/* Hauptbereich: Canvas */}
      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        <h1 style={{ fontSize: '1.5rem', marginTop: 0 }}>Seiten‑Editor</h1>
        {sections.length === 0 && (
          <div style={{ color: '#6b7280', fontStyle: 'italic', marginTop: '2rem' }}>
            Noch keine Abschnitte hinzugefügt. Wähle einen Abschnitt aus der linken Leiste.
          </div>
        )}
        <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {slottedSections.map(({ slotId, itemId, item }) => (
            <div key={slotId} data-swapy-slot={slotId}>
              <div data-swapy-item={itemId}>
                <SectionRenderer
                  section={item}
                  onSelect={() => setSelectedSectionId(item.id)}
                  isSelected={selectedSectionId === item.id}
                  onRemove={() => removeSection(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Editor‑Seitenleiste */}
      <aside style={{ width: '320px', borderLeft: '1px solid #e5e7eb', backgroundColor: '#fafafa' }}>
        <SectionEditor
          section={selectedSection}
          onUpdate={(newProps) => {
            if (selectedSection) {
              updateSectionProps(selectedSection.id, newProps);
            }
          }}
        />
      </aside>
    </div>
  );
}