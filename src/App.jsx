import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MakalelerPage from './pages/MakalelerPage'
import MakaleDetayPage from './pages/MakaleDetayPage'
import AforizmalarPage from './pages/AforizmalarPage'
import TerapistlerPage from './pages/TerapistlerPage'
import OnlineTerapiPage from './pages/OnlineTerapiPage'
import HakkimizdaPage from './pages/HakkimizdaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/makaleler" element={<MakalelerPage />} />
          <Route path="/makale/:id" element={<MakaleDetayPage />} />
          <Route path="/aforizmalar" element={<AforizmalarPage />} />
          <Route path="/terapistler" element={<TerapistlerPage />} />
          <Route path="/online-terapi" element={<OnlineTerapiPage />} />
          <Route path="/hakkimizda" element={<HakkimizdaPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
