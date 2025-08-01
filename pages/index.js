import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Funnel Builder Demo</h1>
      <p style={{ marginBottom: '1rem' }}>
        Dieses Beispiel zeigt, wie man mit <strong>Next.js</strong> und der Drag‑and‑Drop‑Bibliothek <strong>Swapy</strong> einen einfachen
        Funnel‑ bzw. Onepage‑Builder umsetzt. Sie können einzelne Abschnitte hinzufügen, ihre Reihenfolge ändern und
        die Inhalte bearbeiten.
      </p>
      <Link href="/builder" style={{ color: '#2563eb', textDecoration: 'underline' }}>
        Zum Builder
      </Link>
    </main>
  );
}