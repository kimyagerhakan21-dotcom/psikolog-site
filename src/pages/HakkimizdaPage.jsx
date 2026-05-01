export default function HakkimizdaPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">Biz Kimiz</span>
          <h1 className="section-title font-serif">Hakkımızda</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-label">Misyonumuz</span>
              <h2 className="section-title font-serif" style={{ marginBottom: '1.25rem' }}>Ruh Sağlığını Erişilebilir Kılmak</h2>
              <p style={{ color: 'var(--warmgray)', lineHeight: 1.75, marginBottom: '1rem' }}>
                PsikoLog, ruh sağlığı bilgisini herkes için erişilebilir kılmak amacıyla kurulmuş bir dijital platform ve içerik merkezidir. Bilimsel temelli makaleler, uzman psikologlar ve online terapi hizmetiyle toplumun her kesiminden bireye destek sunmayı hedefliyoruz.
              </p>
              <p style={{ color: 'var(--warmgray)', lineHeight: 1.75 }}>
                Türkiye'de ruh sağlığına erişimin önündeki engelleri azaltmak, stigmayı kırmak ve kaliteli psikoloji içeriğini ücretsiz sunmak temel değerlerimiz arasındadır.
              </p>
              <div className="values-grid">
                {[
                  { title: 'Bilimsellik', desc: 'Tüm içeriklerimiz kanıta dayalı psikoloji literatürüne dayanır.' },
                  { title: 'Erişilebilirlik', desc: 'Temel içeriklerimiz ücretsiz ve herkese açıktır.' },
                  { title: 'Gizlilik', desc: 'Kullanıcı verileriniz asla üçüncü taraflarla paylaşılmaz.' },
                  { title: 'Empati', desc: 'Her bireyin deneyimine saygı duyarak yaklaşıyoruz.' },
                ].map(v => (
                  <div className="value-card" key={v.title}>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">🧠</div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Rakamlarla</span>
          <h2 className="section-title font-serif" style={{ marginBottom: '2.5rem' }}>Büyüyen Bir Topluluk</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '50+', label: 'Makale' },
              { value: '5', label: 'Uzman Terapist' },
              { value: '1000+', label: 'Aylık Okuyucu' },
              { value: '2024', label: 'Kuruluş Yılı' },
            ].map(s => (
              <div key={s.label} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--forest)' }}>{s.value}</div>
                <div style={{ color: 'var(--warmgray)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
