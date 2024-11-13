import React from 'react';
import { Users2, Building, Award, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users2,
      value: "10,000+",
      label: "Empleados Gestionados"
    },
    {
      icon: Building,
      value: "500+",
      label: "Empresas Confían en Nosotros"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfacción del Cliente"
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Mejora en Productividad"
    }
  ];

  return (
    <div className="landing__section-stats">
      <div className="landing__container">
        <div className="landing__stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="landing__stat-item">
              <stat.icon className="landing__stat-icon" />
              <div className="landing__stat-value">{stat.value}</div>
              <div className="landing__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}