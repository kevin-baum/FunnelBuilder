/**
 * HeroSection
 *
 * Ein einfacher Hero‑Abschnitt mit Titel und Untertitel. Dieser Abschnitt wird im Builder als
 * eigenständiges Element gerendert. Eigenschaften werden über das `props`‑Objekt übergeben.
 */
export default function Hero({ title, subtitle, onSelect, isSelected, onRemove }) {
  return (
    <div
      onClick={onSelect}
      style={{
        padding: '2rem',
        backgroundColor: '#f0f4ff',
        border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
        borderRadius: '8px',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Entfernen‑Button */}
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
      <h2 style={{ fontSize: '2rem', margin: 0 }}>{title}</h2>
      <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>{subtitle}</p>
    </div>
  );
}