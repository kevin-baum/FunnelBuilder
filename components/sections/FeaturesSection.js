/**
 * FeaturesSection
 *
 * Ein Abschnitt, der eine Liste von Merkmalen hervorhebt. Jeder Eintrag hat einen Titel
 * und eine Beschreibung. Die Elemente sind horizontal angeordnet.
 */
export default function FeaturesSection({ heading, features, onSelect, isSelected, onRemove }) {
  return (
    <div
      onClick={onSelect}
      style={{
        padding: '2rem',
        backgroundColor: '#f0fdfa',
        border: isSelected ? '2px solid #10b981' : '1px solid #bbf7d0',
        borderRadius: '8px',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          backgroundColor: '#ef4444',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '0.25rem 0.5rem',
          cursor: 'pointer',
          fontSize: '0.75rem',
        }}
      >
        Entfernen
      </button>
      <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{heading}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {features.map((feat, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 200px',
              backgroundColor: '#ffffff',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '1rem',
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{feat.title}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{feat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}