import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="landing__hero">
      <div className="landing__container">
        <h1 className="landing__hero-title">
          Transforma la Gestión de RH con{" "}
          <span>Employes</span>
        </h1>
        <p className="landing__hero-description">
          Sistema integral de gestión de recursos humanos que optimiza procesos, 
          mejora la experiencia de tus empleados e impulsa el crecimiento organizacional.
        </p>
        <div className="landing__button-group">
          <button className="landing__button landing__button--primary">
            Comenzar Ahora <ArrowRight className="landing__button-icon" />
          </button>
          <a href="#contact" className="landing__button landing__button--secondary">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}