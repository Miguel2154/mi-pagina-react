import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="App">
      <div className="fondo-animado" />

      <header className="encabezado">
        <div className="perfil-barra">
          <img src="/miggi2.jpg" alt="Foto de perfil" className="foto-izquierda" />
          <h1 className="mi-nombre">Miguel Angel Paz Castro</h1>
          <button className="boton-menu" onClick={toggleMenu}>☰ Menú</button>
        </div>
        <div className="fecha-hora">
          <p>Ubicación: Colombia 🇨🇴</p>
        </div>
      </header>

      {menuAbierto && (
        <nav className="barra-navegacion-vertical">
          <a href="#perfil" onClick={cerrarMenu}>Sobre mí</a>
          <a href="#historia" onClick={cerrarMenu}>Mi Historia</a>
          <a href="#habilidades" onClick={cerrarMenu}>Habilidades</a>
          <a href="#tecnicas" onClick={cerrarMenu}>Técnicas</a>
          <a href="#proyectos" onClick={cerrarMenu}>Proyectos</a>
          <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
        </nav>
      )}

      <main className="container">
        <section className="seccion" id="perfil">
          <h2>Sobre mí</h2>
          <p>Tengo 23 años, estudio Técnico Auxiliar en desarrollo de software. Me apasiona aprender y mi motivación es tener un trabajo fijo. Me considero una persona responsable, comprometida y en constante crecimiento personal y profesional.</p>
        </section>

        <section className="seccion" id="historia">
          <h2>Mi Historia</h2>
          <p>Soy de Ecuador y actualmente estoy en Colombia con el propósito de alcanzar una meta que no pude cumplir en mi país. He enfrentado muchos desafíos, pero cada uno de ellos me ha motivado a seguir adelante. Tomé la decisión de venir aquí para estudiar y formarme en lo que más me gusta: el desarrollo de software. Este camino ha sido exigente pero gratificante, y me siento orgulloso de cada paso que doy.</p>
        </section>

        <section className="seccion" id="habilidades">
          <h2>Lenguajes y Herramientas</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Visual Studio Code</li>
            <li>Git</li>
          </ul>
        </section>

        <section className="seccion" id="tecnicas">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>Manejo básico de terminal y consola</li>
            <li>Creación de páginas web responsivas</li>
            <li>Trabajo con componentes en React</li>
            <li>Consumo de APIs</li>
            <li>Uso de estados y props</li>
            <li>Diseño de interfaces simples y organizadas</li>
          </ul>
        </section>

        <section className="seccion" id="proyectos">
          <h2>Proyectos principales</h2>
          <ul>
            <li>Calculadora: Proyecto que permite realizar operaciones básicas con una interfaz amigable.</li>
            <li>Gestor de tareas: Herramienta para organizar tareas pendientes con opción de marcar como completadas.</li>
            <li>Consumo de una API: Aprendí a integrar APIs externas y mostrar información en tiempo real dentro de una aplicación web.</li>
          </ul>
        </section>

        <section className="seccion" id="contacto">
          <h2>Contacto</h2>
          <p>Puedes contactarme a través de los siguientes medios:</p>
          <div className="icono-contacto">
            <a href="https://wa.me/573001356550" target="_blank" rel="noopener noreferrer">
              <img src="/icono-whatsapp.png" alt="WhatsApp" /> Escríbeme por WhatsApp
            </a>
          </div>
          <div className="icono-contacto">
            <a href="mailto:pazmiguel967@gmail.com">
              <img src="/icono-email.png" alt="Correo electrónico" /> Envíame un correo
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Miguel Paz</p>
      </footer>
    </div>
  );
}

export default App;
