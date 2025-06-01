import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TeleEspeto</h3>
            <p>Álvaro de Sebastián - Espetero Profesional</p>
            <p>Especialista en espetado de sardinas para eventos</p>
          </div>
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li>Bodas</li>
              <li>Celebraciones</li>
              <li>Verbenas</li>
              <li>Eventos corporativos</li>
              <li>Fiestas privadas</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📧 alvaro@teleespeto.com</p>
            <p>📱 +34 666 888 555</p>
            <p>📍 España</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TeleEspeto - Álvaro de Sebastián. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
