import React from 'react';
import { 
  Users, Building2, ClipboardCheck, Calendar, 
  Brain, MessageSquare, FolderKanban, UserCircle, 
  GraduationCap, BarChart4 
} from 'lucide-react';
import { FeatureSlider } from './components/FeatureSlider';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';

function App() {
  const featureGroups = [
    {
      features: [
        {
          icon: Users,
          title: "Registro de Empleados",
          description: "Gestión completa del ciclo de vida laboral, desde la contratación hasta el retiro."
        },
        {
          icon: Building2,
          title: "Gestión Departamental",
          description: "Organiza y administra la estructura de tu empresa de manera eficiente."
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
      ]
    },
    {
      features: [
        {
          icon: ClipboardCheck,
          title: "Evaluaciones de Desempeño",
          description: "Programa y realiza evaluaciones personalizadas para cada rol."
        },
        {
          icon: Calendar,
          title: "Gestión de Ausencias",
          description: "Control de vacaciones, permisos y ausencias con flujos automatizados."
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
      ]
    },
    {
      features: [
        {
          icon: Brain,
          title: "Salud Mental",
          description: "Cuestionarios y seguimiento del bienestar emocional de tu equipo."
        },
        {
          icon: MessageSquare,
          title: "Comunicación Interna",
          description: "Mantén a tu equipo conectado con herramientas de comunicación integradas."
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
      ]
    },
    {
      features: [
        {
          icon: FolderKanban,
          title: "Gestión Documental",
          description: "Almacenamiento seguro y organizado de documentos HR."
        },
        {
          icon: UserCircle,
          title: "Portal del Empleado",
          description: "Acceso autoservicio a información y servicios HR."
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80"
      ]
    },
    {
      features: [
        {
          icon: GraduationCap,
          title: "Desarrollo Profesional",
          description: "Gestiona solicitudes de capacitación y crecimiento profesional."
        },
        {
          icon: BarChart4,
          title: "Encuestas de Satisfacción",
          description: "Mide y mejora la satisfacción laboral con feedback continuo."
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      ]
    },
  ];

  return (
    <div className="landing__container">
      <Hero />
      
      <div className="landing__section-features">
        <div className="landing__section-title">
          <h2>Todo lo que Necesitas en Una Plataforma</h2>
          <p>
            Descubre cómo Employes puede ayudarte a crear un ambiente laboral 
            más eficiente y atractivo con nuestras herramientas integrales de HR.
          </p>
        </div>
        <div className="landing__features-grid">
          {featureGroups.map((group, index) => (
            <FeatureSlider
              key={index}
              features={group.features}
              images={group.images}
            />
          ))}
        </div>
      </div>

      <Stats />
      <Contact />

    </div>
  );
}

export default App;