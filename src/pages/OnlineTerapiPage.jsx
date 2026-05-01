export default function OnlineTerapiPage() {
  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, var(--plum), var(--midnight))', paddingBottom: '5rem' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--lavender-light)' }}>Yakında</span>
          <h1 className="section-title font-serif" style={{ color: 'white' }}>Online Terapi</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem' }}>Uzman psikologlarımızla evinizden güvenli terapi seansları</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '🔒', title: 'Güvenli & Gizli', desc: 'Uçtan uca şifreleme ile tüm görüşmeleriniz tamamen güvende.' },
              { icon: '📹', title: 'HD Video Görüşme', desc: 'Yüksek kaliteli görüntü ve ses ile yüz yüzeymiş gibi terapi deneyimi.' },
              { icon: '⏰', title: 'Esnek Randevu', desc: '7/24 randevu sistemi ile size uygun saatte seans ayarlayın.' },
              { icon: '🌍', title: 'Her Yerden Erişim', desc: 'Türkiye veya yurt dışında nerede olursanız olun desteğe erişin.' },
            ].map(f => (
              <div className="card" key={f.title} style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--forest)' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--warmgray)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="section-label">Fiyatlandırma</span>
            <h2 className="section-title font-serif">Seans Paketleri</h2>
          </div>

          <div className="pricing-grid">
            {[
              { name: 'Başlangıç', price: '450', sessions: 1, features: ['50 dakika seans', 'HD video görüşme', 'Güvenli bağlantı', 'Seans notları'] },
              { name: 'Aylık Paket', price: '1600', sessions: 4, features: ['4 × 50 dk seans', 'Terapist seçimi', 'Öncelikli randevu', 'İlerleme takibi', 'E-posta desteği'], featured: true },
              { name: 'Yoğun Program', price: '2800', sessions: 8, features: ['8 × 50 dk seans', 'Terapist seçimi', 'Öncelikli randevu', 'Detaylı raporlama', '7/24 mesaj desteği', 'Kişisel egzersizler'] },
            ].map(p => (
              <div className={`pricing-card ${p.featured ? 'featured' : ''}`} key={p.name}>
                <h3 className="font-serif">{p.name}</h3>
                <div className="pricing-price">₺{p.price}<span> / {p.sessions} seans</span></div>
                <ul className="pricing-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <button className={p.featured ? 'btn-forest' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                  Randevu Al
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
