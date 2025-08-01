/**
 * CTASection
 *
 * Ein Call‑to‑Action‑Abschnitt mit Überschrift, Text und Button. Der Button
 * führt zu einer beliebigen URL (wird über Props gesetzt).
 */
export default function CTASection({ heading, text, buttonText, buttonLink, onSelect, isSelected, onRemove }) {
  return (
    <div
      onClick={onSelect}
      style={{
        padding: '2rem',
        backgroundColor: '#fdf2f8',
        border: isSelected ? '2px solid #d946ef' : '1px solid #f5d0fe',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
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
      <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{heading}</h3>
      <p style={{ margin: '0.5rem 0 1rem 0' }}>{text}</p>
      <a
        href={buttonLink}
        style={{
          display: 'inline-block',
          backgroundColor: '#d946ef',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        {buttonText}
      </a>
    </div>
  );
}