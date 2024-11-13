import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="landing__section-contact">
      <div className="landing__container">
        <div className="landing__contact-content">
          <div className="landing__contact-info">
            <h2>¿Listo para Empezar?</h2>
            <p>
              Nuestro equipo está aquí para ayudarte a implementar la solución 
              perfecta para tu empresa.
            </p>
            <div className="landing__contact-details">
              <div className="landing__contact-item">
                <Mail className="landing__contact-icon" />
                <span>contacto@employes.com</span>
              </div>
              <div className="landing__contact-item">
                <Phone className="landing__contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="landing__contact-item">
                <MapPin className="landing__contact-icon" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>
          <form className="landing__contact-form">
            <div className="landing__form-group">
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="landing__form-group">
              <input type="email" placeholder="Correo electrónico" />
            </div>
            <div className="landing__form-group">
              <input type="text" placeholder="Empresa" />
            </div>
            <div className="landing__form-group">
              <textarea placeholder="Mensaje" rows={4}></textarea>
            </div>
            <button type="submit" className="landing__form-submit">
              Enviar Mensaje
              <Send className="landing__button-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}