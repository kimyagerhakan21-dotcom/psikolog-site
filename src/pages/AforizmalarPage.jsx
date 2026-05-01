import { useState } from 'react'
import { aphorisms } from '../data'

const cats = ['Tümü', 'Değişim', 'Umut', 'İyileşme', 'Öz Farkındalık', 'Anlam', 'Öz Sevgi', 'Cesaret']

export default function AforizmalarPage() {
  const [active, setActive] = useState('Tümü')
  const filtered = active === 'Tümü' ? aphorisms : aphorisms.filter(a => a.category === active)

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, var(--forest), var(--forest-light))', color: 'var(--cream)' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--sage-light)' }}>İlham</span>
          <h1 className="section-title font-serif" style={{ color: 'var(--cream)' }}>Aforizmalar</h1>
          <p style={{ color: 'rgba(245,240,232,0.7)', marginTop: '0.75rem' }}>Büyük düşünürlerden ruh sağlığına dair ilham veren sözler</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="filter-tabs">
            {cats.map(c => (
              <button key={c} className={`filter-tab ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          <div className="quote-mini-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {filtered.map(q => (
              <div className="quote-mini" key={q.id}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2" style={{ marginBottom: '0.75rem' }}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                </svg>
                <blockquote style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--forest)', lineHeight: 1.6, marginBottom: '1rem' }}>"{q.text}"</blockquote>
                <div className="quote-mini-footer">
                  <span className="author" style={{ color: 'var(--warmgray)', fontSize: '0.85rem', fontWeight: 500 }}>— {q.author}</span>
                  <span className="tag">{q.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
