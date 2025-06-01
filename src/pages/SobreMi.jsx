import '../styles/SobreMi.css'

function SobreMi() {
  const fotos = [
    {
      src: '/images/foto_2.jpeg',
      alt: 'Álvaro en acción espetando sardinas',
      fallback: 'https://via.placeholder.com/300x400/2980b9/ffffff?text=Álvaro+Espetando'
    },
    {
      src: '/images/foto_3.jpeg',
      alt: 'Evento de espetado en verbena',
      fallback: 'https://via.placeholder.com/300x400/1e40af/ffffff?text=Evento+Verbena'
    },
    {
      src: '/images/foto_4.jpeg',
      alt: 'Sardinas recién espetadas',
      fallback: 'https://via.placeholder.com/300x400/3b82f6/ffffff?text=Sardinas+Espetadas'
    }
  ]

  return (
    <div className="sobre-mi">
      <div className="container">
        {/* Header Section */}
        <div className="sobre-mi-header">
          <h1>Sobre Mí</h1>
          <p className="subtitle">Conoce la historia detrás de TeleEspeto</p>
        </div>

        {/* Main Content */}
        <div className="sobre-mi-content">
          <div className="story-section">
            <h2>Mi Historia</h2>
            <div className="story-text">
              <p>
                Soy Álvaro de Sebastián, y mi pasión por el espetado de sardinas comenzó hace más de 
                una década. Lo que empezó como una tradición familiar se ha convertido en mi profesión 
                y en la esencia de TeleEspeto.
              </p>
              <p>
                Crecí viendo a mi abuelo espetar sardinas en las verbenas del pueblo, y desde pequeño 
                me fascinó la técnica, la precisión y el arte que requiere este oficio tradicional. 
                Con los años, he perfeccionado mi técnica y he llevado esta tradición a eventos de 
                todo tipo.
              </p>
              <p>
                Mi objetivo es preservar esta hermosa tradición culinaria española y compartirla con 
                nuevas generaciones, llevando el auténtico sabor del espetado a bodas, celebraciones 
                y eventos especiales.
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="gallery-section">
            <h2>Galería</h2>
            <div className="photo-gallery">
              {fotos.map((foto, index) => (
                <div key={index} className="photo-item">
                  <img 
                    src={foto.src}
                    alt={foto.alt}
                    onError={(e) => {
                      e.target.src = foto.fallback
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="experience-section">
            <h2>Mi Experiencia</h2>
            <div className="experience-grid">
              <div className="experience-item">
                <h3>🎯 Especialización</h3>
                <p>Más de 10 años especializándome en el arte del espetado tradicional de sardinas</p>
              </div>
              <div className="experience-item">
                <h3>🎉 Eventos Realizados</h3>
                <p>Más de 500 eventos exitosos, desde bodas íntimas hasta grandes verbenas</p>
              </div>
              <div className="experience-item">
                <h3>👥 Clientes Satisfechos</h3>
                <p>Miles de invitados han disfrutado de mis sardinas espetadas</p>
              </div>
              <div className="experience-item">
                <h3>🏆 Reconocimiento</h3>
                <p>Reconocido en ferias gastronómicas y eventos tradicionales</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2>Mis Valores</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🔥</div>
                <h3>Tradición</h3>
                <p>Respeto y preservo las técnicas tradicionales del espetado</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⭐</div>
                <h3>Calidad</h3>
                <p>Solo utilizo sardinas frescas de la mejor calidad</p>
              </div>
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h3>Pasión</h3>
                <p>Cada sardina espetada lleva mi pasión y dedicación</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Compromiso</h3>
                <p>Me comprometo a hacer de tu evento una experiencia memorable</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="testimonials-section">
            <h2>Lo que dicen mis clientes</h2>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p>"Álvaro hizo de nuestra boda algo especial. Las sardinas estaban deliciosas y el espectáculo fue increíble."</p>
                <cite>- María y Carlos, Boda en Sevilla</cite>
              </div>
              <div className="testimonial">
                <p>"Profesional, puntual y con un producto de calidad excepcional. Repetiremos sin duda."</p>
                <cite>- Ayuntamiento de Málaga</cite>
              </div>
              <div className="testimonial">
                <p>"La verbena no habría sido lo mismo sin Álvaro. Toda la gente quedó encantada."</p>
                <cite>- Comisión de Fiestas de Cádiz</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreMi
