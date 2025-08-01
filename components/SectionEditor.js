import { useState } from 'react';

/**
 * SectionEditor
 *
 * Eine einfache Seitenleiste, die je nach Abschnittstyp die passenden
 * Formularfelder anzeigt. Sie erlaubt es, die Props des gewählten
 * Abschnitts zu bearbeiten. Änderungen werden über `onUpdate` nach
 * außen gereicht.
 */
export default function SectionEditor({ section, onUpdate }) {
  if (!section) {
    return (
      <div style={{ padding: '1rem' }}>Wähle einen Abschnitt zum Bearbeiten aus.</div>
    );
  }

  const handleChange = (propName, value) => {
    onUpdate({ ...section.props, [propName]: value });
  };

  // Für Features: einzelne Elemente aktualisieren
  const handleFeatureChange = (index, field, value) => {
    const newFeatures = section.props.features.map((feat, i) =>
      i === index ? { ...feat, [field]: value } : feat
    );
    onUpdate({ ...section.props, features: newFeatures });
  };

  // Neues Feature hinzufügen
  const addFeature = () => {
    const newFeatures = [
      ...section.props.features,
      { title: 'Neues Feature', description: 'Beschreibung' },
    ];
    onUpdate({ ...section.props, features: newFeatures });
  };

  // Feature entfernen
  const removeFeature = (index) => {
    const newFeatures = section.props.features.filter((_, i) => i !== index);
    onUpdate({ ...section.props, features: newFeatures });
  };

  return (
    <div style={{ padding: '1rem', borderLeft: '1px solid #e5e7eb', height: '100%', overflowY: 'auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginTop: 0 }}>Abschnitt bearbeiten</h2>
      {section.type === 'hero' && (
        <div>
          <label style={{ display: 'block', marginTop: '1rem' }}>Titel</label>
          <input
            type="text"
            value={section.props.title}
            onChange={(e) => handleChange('title', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <label style={{ display: 'block', marginTop: '1rem' }}>Untertitel</label>
          <input
            type="text"
            value={section.props.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
        </div>
      )}
      {section.type === 'text' && (
        <div>
          <label style={{ display: 'block', marginTop: '1rem' }}>Überschrift</label>
          <input
            type="text"
            value={section.props.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <label style={{ display: 'block', marginTop: '1rem' }}>Text</label>
          <textarea
            value={section.props.content}
            onChange={(e) => handleChange('content', e.target.value)}
            rows={6}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', resize: 'vertical' }}
          />
        </div>
      )}
      {section.type === 'features' && (
        <div>
          <label style={{ display: 'block', marginTop: '1rem' }}>Überschrift</label>
          <input
            type="text"
            value={section.props.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <h3 style={{ marginTop: '1rem' }}>Features</h3>
          {section.props.features.map((feat, idx) => (
            <div key={idx} style={{ marginBottom: '1rem', border: '1px solid #e5e7eb', padding: '0.5rem', borderRadius: '4px' }}>
              <label style={{ display: 'block', fontWeight: 'bold' }}>Titel</label>
              <input
                type="text"
                value={feat.title}
                onChange={(e) => handleFeatureChange(idx, 'title', e.target.value)}
                style={{ width: '100%', padding: '0.25rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
              />
              <label style={{ display: 'block', marginTop: '0.5rem', fontWeight: 'bold' }}>Beschreibung</label>
              <textarea
                value={feat.description}
                onChange={(e) => handleFeatureChange(idx, 'description', e.target.value)}
                rows={3}
                style={{ width: '100%', padding: '0.25rem', border: '1px solid #d1d5db', borderRadius: '4px', resize: 'vertical' }}
              />
              <button
                type="button"
                onClick={() => removeFeature(idx)}
                style={{ marginTop: '0.5rem', backgroundColor: '#f43f5e', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.25rem 0.5rem', cursor: 'pointer' }}
              >
                Feature entfernen
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            Feature hinzufügen
          </button>
        </div>
      )}
      {section.type === 'cta' && (
        <div>
          <label style={{ display: 'block', marginTop: '1rem' }}>Überschrift</label>
          <input
            type="text"
            value={section.props.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <label style={{ display: 'block', marginTop: '1rem' }}>Text</label>
          <textarea
            value={section.props.text}
            onChange={(e) => handleChange('text', e.target.value)}
            rows={4}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', resize: 'vertical' }}
          />
          <label style={{ display: 'block', marginTop: '1rem' }}>Button‑Text</label>
          <input
            type="text"
            value={section.props.buttonText}
            onChange={(e) => handleChange('buttonText', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <label style={{ display: 'block', marginTop: '1rem' }}>Button‑Link</label>
          <input
            type="text"
            value={section.props.buttonLink}
            onChange={(e) => handleChange('buttonLink', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
        </div>
      )}
    </div>
  );
}