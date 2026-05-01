import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/>
    <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/>
    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/>
    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/>
    <path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

const links = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/makaleler', label: 'Makaleler' },
  { to: '/aforizmalar', label: 'Aforizmalar' },
  { to: '/terapistler', label: 'Terapistler' },
  { to: '/online-terapi', label: 'Online Terapi' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <nav className="main-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon"><BrainIcon /></div>
            <div className="nav-logo-text">
              <strong>PsikoLog</strong>
              <span>Ruh Sağlığı Platformu</span>
            </div>
          </Link>

          <div className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? 'active' : ''}`}>{l.label}</Link>
            ))}
          </div>

          <Link to="/online-terapi" className="nav-cta" style={{ display: 'none' }}>Randevu Al</Link>
          <Link to="/online-terapi" className="nav-cta" style={{ marginLeft: '1rem' }}>Randevu Al</Link>

          <button className="nav-mobile-btn" onClick={() => setOpen(o => !o)} style={{ display: 'none' }}>
            {open ? <XIcon /> : <MenuIcon />}
          </button>
          <button className="nav-mobile-btn" onClick={() => setOpen(o => !o)}>
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? 'active' : ''}`} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link to="/online-terapi" className="nav-cta" onClick={() => setOpen(false)}>Randevu Al</Link>
      </div>
    </>
  )
}
