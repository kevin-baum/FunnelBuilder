/**
 * TextSection
 *
 * Ein Abschnitt für längeren Text mit Überschrift.
 */
export default function TextSection({ heading, content, onSelect, isSelected, onRemove }) {
  return (
    <div
      onClick={onSelect}
      style={{
        padding: '2rem',
        backgroundColor: '#fff7ed',
        border: isSelected ? '2px solid #fb923c' : '1px solid #fed7aa',
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
      <p style={{ marginTop: '0.5rem' }}>{content}</p>
    </div>
  );
}