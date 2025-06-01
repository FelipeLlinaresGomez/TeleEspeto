import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>TeleEspeto</h1>
          <p>Álvaro de Sebastián - Espetero Profesional</p>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Inicio
          </Link>
          <Link 
            to="/contratacion" 
            className={location.pathname === '/contratacion' ? 'nav-link active' : 'nav-link'}
          >
            Contratación
          </Link>
          <Link 
            to="/sobre-mi" 
            className={location.pathname === '/sobre-mi' ? 'nav-link active' : 'nav-link'}
          >
            Sobre Mí
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
