import { useState } from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data'

const categories = ['Tümü', 'Kaygı & Stres', 'Çocuk Psikolojisi', 'İlişki Psikolojisi', 'Nöropsikoloji', 'Mindfulness', 'Klinik Psikoloji']

export default function MakalelerPage() {
  const [active, setActive] = useState('Tümü')
  const filtered = active === 'Tümü' ? articles : articles.filter(a => a.category === active)

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">Bilgi Merkezi</span>
          <h1 className="section-title font-serif">Psikoloji Makaleleri</h1>
          <p style={{ color: 'var(--warmgray)', marginTop: '0.75rem', fontSize: '1rem' }}>Uzman psikologlarımızın kaleme aldığı bilimsel içerikler</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="filter-tabs">
            {categories.map(c => (
              <button key={c} className={`filter-tab ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          <div className="articles-grid">
            {filtered.map(a => (
              <Link to={`/makale/${a.id}`} key={a.id}>
                <article className="card article-card">
                  <div className="article-img">
                    <img src={a.image} alt={a.title} />
                    <span className="article-cat">{a.category}</span>
                  </div>
                  <div className="article-body">
                    <div className="article-meta">
                      <span>{a.author}</span>
                      <span>·</span>
                      <span>{a.date}</span>
                    </div>
                    <h3 className="article-title font-serif" style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                    <p className="article-excerpt" style={{ fontSize: '0.85rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.excerpt}</p>
                    <div className="article-footer" style={{ marginTop: '1rem' }}>
                      <span className="read-time">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        {a.readTime} dk okuma
                      </span>
                      <span className="read-more" style={{ fontSize: '0.8rem' }}>
                        Devamını Oku
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--warmgray)' }}>
              Bu kategoride henüz makale bulunmuyor.
            </div>
          )}
        </div>
      </section>
    </>
  )
}
