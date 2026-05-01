import { therapists } from '../data'

export default function TerapistlerPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">Ekibimiz</span>
          <h1 className="section-title font-serif">Uzman Terapistlerimiz</h1>
          <p style={{ color: 'var(--warmgray)', marginTop: '0.75rem' }}>Alanında deneyimli, empatik ve bilimsel temelli çalışan psikologlarımız</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="therapist-grid">
            {therapists.map(t => (
              <div className="therapist-card" key={t.id}>
                <img src={t.image} alt={t.name} className="therapist-photo" />
                <div className="therapist-body">
                  <h3>{t.name}</h3>
                  <p>{t.title} · {t.experience} deneyim</p>
                  <p style={{ fontSize: '0.825rem', color: 'var(--warmgray)', marginTop: '0.75rem', lineHeight: 1.5 }}>{t.bio}</p>
                  <div className="therapist-tags">
                    {t.specialties.map(s => <span key={s} className="therapist-tag">{s}</span>)}
                  </div>
                </div>
                <a href="/online-terapi" className="therapist-btn">Randevu Al</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
