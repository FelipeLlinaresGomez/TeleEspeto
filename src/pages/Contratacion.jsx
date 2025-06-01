import { useState } from 'react'
import '../styles/Contratacion.css'

function Contratacion() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fecha: '',
    ubicacion: '',
    numeroPersonas: '',
    mensaje: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se podría integrar con un servicio de email o backend
    console.log('Datos del formulario:', formData)
    setIsSubmitted(true)
    
    // Simular envío de email
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoEvento: '',
        fecha: '',
        ubicacion: '',
        numeroPersonas: '',
        mensaje: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="contratacion">
        <div className="container">
          <div className="success-message">
            <h2>¡Solicitud Enviada!</h2>
            <p>Gracias por tu interés. Me pondré en contacto contigo lo antes posible.</p>
            <div className="success-icon">✅</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contratacion">
      <div className="container">
        <div className="contratacion-header">
          <h1>Contratación de Servicios</h1>
          <p>Completa el formulario y me pondré en contacto contigo para organizar tu evento</p>
        </div>

        <div className="contratacion-content">
          <div className="form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tipoEvento">Tipo de evento *</label>
                  <select
                    id="tipoEvento"
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="boda">Boda</option>
                    <option value="celebracion">Celebración privada</option>
                    <option value="verbena">Verbena/Feria</option>
                    <option value="corporativo">Evento corporativo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fecha">Fecha del evento *</label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ubicacion">Ubicación *</label>
                  <input
                    type="text"
                    id="ubicacion"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleChange}
                    placeholder="Ciudad, provincia"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numeroPersonas">Número aproximado de personas</label>
                  <input
                    type="number"
                    id="numeroPersonas"
                    name="numeroPersonas"
                    value={formData.numeroPersonas}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje adicional</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Cuéntame más detalles sobre tu evento..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Enviar Solicitud
              </button>
            </form>
          </div>

          <div className="info-section">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>alvaro@teleespeto.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+34 666 888 555</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>España</span>
              </div>
            </div>

            <div className="pricing-info">
              <h3>Información de Precios</h3>
              <ul>
                <li>Presupuesto personalizado según el evento</li>
                <li>Incluye sardinas frescas de calidad</li>
                <li>Equipo profesional de espetado</li>
                <li>Desplazamiento incluido en la zona</li>
                <li>Sin costes ocultos</li>
              </ul>
            </div>

            <div className="sardines-image">
              <img
                src="/images/sardinas.jpg"
                alt="Sardinas frescas"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200/2980b9/ffffff?text=Sardinas+Frescas'
                }}
              />
              <p>Sardinas frescas de la mejor calidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contratacion
