import { useParams, Link } from 'react-router-dom'
import { articles } from '../data'

export default function MakaleDetayPage() {
  const { id } = useParams()
  const article = articles.find(a => a.id === id)

  if (!article) return (
    <div style={{ padding: '10rem 0', textAlign: 'center' }}>
      <h2>Makale bulunamadı.</h2>
      <Link to="/makaleler" style={{ color: 'var(--terracotta)', marginTop: '1rem', display: 'inline-block' }}>← Makalelere Dön</Link>
    </div>
  )

  return (
    <div style={{ paddingTop: '68px' }}>
      <div style={{
        height: '420px',
        background: `linear-gradient(to bottom, rgba(45,74,62,0.7), rgba(45,74,62,0.9)), url(${article.image}) center/cover`,
        display: 'flex', alignItems: 'flex-end'
      }}>
        <div className="container" style={{ paddingBottom: '3rem' }}>
          <span className="tag" style={{ background: 'rgba(245,240,232,0.15)', color: 'var(--cream)', marginBottom: '1rem', display: 'inline-block' }}>{article.category}</span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', color: 'var(--cream)', maxWidth: '720px', lineHeight: 1.2 }}>{article.title}</h1>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.875rem' }}>
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} dk okuma</span>
          </div>
        </div>
      </div>

      <div className="container-sm section">
        <Link to="/makaleler" style={{ color: 'var(--terracotta)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="m12 5-7 7 7 7"/></svg>
          Makalelere Dön
        </Link>

        <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--warmgray)' }}>
          <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--forest)', marginBottom: '1.5rem' }}>{article.excerpt}</p>
          {article.content.split('\n\n').map((para, i) => (
            <p key={i} style={{ marginBottom: '1.25rem' }}>{para}</p>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(143,175,149,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>👤</div>
          <div>
            <strong style={{ color: 'var(--forest)', display: 'block' }}>{article.author}</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--warmgray)' }}>Uzman Psikolog</span>
          </div>
        </div>
      </div>
    </div>
  )
}
