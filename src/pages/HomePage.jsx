import { Link } from 'react-router-dom'
import { articles, aphorisms } from '../data'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function HomePage() {
  const featured = articles[0]
  const rest = articles.slice(1, 4)
  const quotes = aphorisms.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
              Bilimsel temelli psikoloji içerikleri
            </div>
            <h1>
              Ruh Sağlığınız
              <span className="accent">Bizim Önceliğimiz</span>
            </h1>
            <p>Bilimsel temelli makaleler, ilham veren aforizmalar ve uzman terapistlerle online terapi hizmetimizle yanınızdayız.</p>
            <div className="hero-btns">
              <Link to="/makaleler" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
                Makaleleri Keşfet
              </Link>
              <Link to="/online-terapi" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                Online Terapi
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-stats animate-fade-in delay-3">
          {[
            { icon: '📚', value: '50+', label: 'Makale' },
            { icon: '👥', value: '5', label: 'Terapist' },
            { icon: '💚', value: '1000+', label: 'Danışan' },
          ].map(s => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-icon">{s.icon}</div>
              <div><strong>{s.value}</strong><span>{s.label}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Quote */}
      <section className="section-sm">
        <div className="container-sm">
          <div className="quote-featured animate-fade-in">
            <blockquote>"{aphorisms[0].text}"</blockquote>
            <div className="quote-author">
              <span>{aphorisms[0].author}</span>
              <span className="quote-cat">{aphorisms[0].category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div>
              <span className="section-label">Öneriler</span>
              <h2 className="section-title">Güncel Makaleler</h2>
            </div>
            <Link to="/makaleler" className="section-link">Tüm Makaleler <ArrowRight /></Link>
          </div>

          {/* Featured article */}
          <Link to={`/makale/${featured.id}`}>
            <article className="article-featured">
              <div className="article-img">
                <img src={featured.image} alt={featured.title} />
                <span className="article-cat">{featured.category}</span>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <h3 className="article-title font-serif" style={{ fontSize: '1.6rem', lineHeight: 1.25, marginBottom: '1rem' }}>{featured.title}</h3>
                <p className="article-excerpt">{featured.excerpt}</p>
                <div className="article-footer">
                  <span className="read-time">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    {featured.readTime} dk okuma
                  </span>
                  <span className="read-more">Devamını Oku <ArrowRight /></span>
                </div>
              </div>
            </article>
          </Link>

          {/* Grid articles */}
          <div className="articles-grid">
            {rest.map(a => (
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
                      <span className="read-time"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>{a.readTime} dk</span>
                    </div>
                    <h3 className="article-title" style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{a.title}</h3>
                    <p className="article-excerpt" style={{ fontSize: '0.85rem', WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">İlham</span>
            <h2 className="section-title">İlham Veren Sözler</h2>
          </div>
          <div className="quote-mini-grid">
            {quotes.map(q => (
              <div className="quote-mini" key={q.id}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2" style={{ marginBottom: '0.75rem' }}><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
                <blockquote>"{q.text}"</blockquote>
                <div className="quote-mini-footer">
                  <span className="author">— {q.author}</span>
                  <span className="tag">{q.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/aforizmalar" className="section-link">Tüm Aforizmalar <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Online Terapi CTA */}
      <section className="section">
        <div className="container">
          <div className="terapi-cta">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="terapi-cta-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                Yakında Aktif
              </div>
              <h2>Online Terapi ile<span className="accent">Evinizden Destek Alın</span></h2>
              <p>Uzman psikologlarımızla güvenli video görüşmeleri aracılığıyla terapi hizmeti alın. Zaman ve mekân kısıtlaması olmadan, profesyonel desteğe ulaşın.</p>
              <Link to="/online-terapi" className="btn-secondary">Detayları İncele <ArrowRight /></Link>
            </div>
            <div className="terapi-features">
              {[
                { icon: '🔒', title: 'Güvenli', desc: 'Uçtan uca şifreleme' },
                { icon: '📹', title: 'HD Video', desc: 'Yüksek kalite görüşme' },
                { icon: '🕐', title: 'Esnek', desc: '7/24 randevu imkânı' },
                { icon: '🤝', title: 'Gizli', desc: 'Tam gizlilik garantisi' },
              ].map(f => (
                <div className="terapi-feature" key={f.title}>
                  <div style={{ fontSize: '1.5rem' }}>{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-sm">
        <div className="container-sm">
          <div className="newsletter-section">
            <h2>Haftalık Bülten</h2>
            <p>Her hafta yeni makaleler, aforizmalar ve psikoloji dünyasından haberler doğrudan e-postanıza gelsin.</p>
            <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Abone oldunuz!') }}>
              <input type="email" placeholder="E-posta adresiniz" required />
              <button type="submit" className="btn-forest">Abone Ol</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
