import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>PsikoLog</strong>
            <p>Ruh sağlığının güvenilir bilgi kaynağı ve profesyonel destek platformu. Bilimsel temelli içerikler ve uzman terapistlerle yanınızdayız.</p>
          </div>
          <div className="footer-col">
            <h4>Keşfet</h4>
            <ul>
              <li><Link to="/makaleler">Makaleler</Link></li>
              <li><Link to="/aforizmalar">Günlük Aforizmalar</Link></li>
              <li><Link to="/terapistler">Terapistlerimiz</Link></li>
              <li><Link to="/online-terapi">Online Terapi</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kategoriler</h4>
            <ul>
              <li><Link to="/makaleler">Kaygı & Stres</Link></li>
              <li><Link to="/makaleler">Çocuk Psikolojisi</Link></li>
              <li><Link to="/makaleler">İlişki Psikolojisi</Link></li>
              <li><Link to="/makaleler">Mindfulness</Link></li>
              <li><Link to="/makaleler">Klinik Psikoloji</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <ul className="footer-contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                iletisim@psikolog.com
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                +90 (212) 555 0123
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 PsikoLog. Tüm hakları saklıdır.</p>
          <p>❤️ ile yapıldı</p>
        </div>
      </div>
    </footer>
  )
}
