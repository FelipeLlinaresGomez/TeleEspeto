import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Contratacion from './pages/Contratacion'
import SobreMi from './pages/SobreMi'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contratacion" element={<Contratacion />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
