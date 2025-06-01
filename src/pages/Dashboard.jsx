import { Link } from 'react-router-dom'
import '../styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Álvaro de Sebastián</h1>
            <h2>Espetero Profesional</h2>
            <p className="hero-description">
              Especialista en espetado de sardinas para eventos, celebraciones, verbenas, 
              bodas y todo tipo de actos. Con años de experiencia y pasión por la tradición 
              culinaria española.
            </p>
            <div className="hero-buttons">
              <Link to="/contratacion" className="btn btn-primary">
                Contratar Servicios
              </Link>
              <Link to="/sobre-mi" className="btn btn-secondary">
                Conocer Más
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/foto_1.jpeg"
              alt="Álvaro de Sebastián - Espetero Profesional"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x500/1e40af/ffffff?text=Álvaro+de+Sebastián'
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Servicios Especializados</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Eventos y Celebraciones</h3>
              <p>Espetado profesional de sardinas para fiestas, cumpleaños y celebraciones especiales.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💒</div>
              <h3>Bodas</h3>
              <p>Añade un toque tradicional y auténtico a tu boda con nuestro servicio de espetado.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎪</div>
              <h3>Verbenas y Ferias</h3>
              <p>Experiencia en verbenas populares y ferias tradicionales con el mejor espetado.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Eventos Corporativos</h3>
              <p>Servicios profesionales para eventos de empresa y actos corporativos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2>¿Por qué elegir TeleEspeto?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🔥 Experiencia Profesional</h3>
              <p>Años de experiencia en el arte del espetado tradicional de sardinas.</p>
            </div>
            <div className="feature">
              <h3>🐟 Producto de Calidad</h3>
              <p>Utilizamos solo las mejores sardinas frescas para garantizar el mejor sabor.</p>
            </div>
            <div className="feature">
              <h3>⚡ Servicio Rápido</h3>
              <p>Espetado eficiente y profesional para que tus invitados no esperen.</p>
            </div>
            <div className="feature">
              <h3>🎯 Adaptabilidad</h3>
              <p>Nos adaptamos a cualquier tipo de evento, desde íntimo hasta multitudinario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>¿Listo para tu evento?</h2>
          <p>Contacta conmigo para hacer de tu celebración una experiencia inolvidable</p>
          <Link to="/contratacion" className="btn btn-primary btn-large">
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
