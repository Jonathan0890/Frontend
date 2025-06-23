import React, { useState, useEffect } from 'react';
import { FaPaintBrush, FaLaptop, FaMobileAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formMessage, setFormMessage] = useState('');

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scrolling para enlaces internos
  useEffect(() => {
    const handleInternalLinks = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          closeMenu();
        }
      }
    };

    document.addEventListener('click', handleInternalLinks);
    return () => {
      document.removeEventListener('click', handleInternalLinks);
    };
  }, []);

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('http://localhost:3001/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setFormMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormMessage(result.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        setFormStatus('error');
      }
    } catch (error) {
      setFormMessage('Error de conexión. Por favor, inténtalo de nuevo más tarde.');
      setFormStatus('error');
    }
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      setFormStatus(null);
      setFormMessage('');
    }, 5000);
  };

  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-600">CreativaStudio</div>
            
            {/* Menú de escritorio */}
            <ul className="hidden md:flex space-x-8">
              <li><a href="#inicio" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Servicios</a></li>
              <li><a href="#portafolio" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portafolio</a></li>
              <li><a href="#contacto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contacto</a></li>
            </ul>
            
            {/* Botón menú móvil */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </nav>
          
          {/* Menú móvil */}
          <div className={`md:hidden fixed top-16 left-0 w-full h-full bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <li><a href="#inicio" className="text-gray-700 hover:text-purple-600 text-xl font-medium transition-colors" onClick={closeMenu}>Inicio</a></li>
              <li><a href="#servicios" className="text-gray-700 hover:text-purple-600 text-xl font-medium transition-colors" onClick={closeMenu}>Servicios</a></li>
              <li><a href="#portafolio" className="text-gray-700 hover:text-purple-600 text-xl font-medium transition-colors" onClick={closeMenu}>Portafolio</a></li>
              <li><a href="#contacto" className="text-gray-700 hover:text-purple-600 text-xl font-medium transition-colors" onClick={closeMenu}>Contacto</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-16" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Diseño que inspira y conecta</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Transformamos tus ideas en experiencias visuales impactantes</p>
          <a href="#contacto" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 inline-block">Contáctanos</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <FaPaintBrush className="text-purple-600 text-5xl mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">Diseño de Logo</h3>
              <p className="text-gray-600">Identidad visual única para tu marca que comunica tu esencia.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <FaLaptop className="text-purple-600 text-5xl mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">Diseño Web</h3>
              <p className="text-gray-600">Sitios web atractivos, funcionales y optimizados para conversiones.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <FaMobileAlt className="text-purple-600 text-5xl mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">Experiencias de usuario intuitivas y visualmente atractivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Nuestro Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Proyecto 1" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-700 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">Branding Café</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Proyecto 2" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-700 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">App Financiera</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Proyecto 3" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-700 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">E-commerce</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Contáctanos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="text-purple-600 mr-3" />
                  Av. Principal 123, Ciudad
                </p>
                <p className="flex items-center text-gray-700">
                  <FaPhone className="text-purple-600 mr-3" />
                  +1 234 567 890
                </p>
                <p className="flex items-center text-gray-700">
                  <FaEnvelope className="text-purple-600 mr-3" />
                  hola@creativastudio.com
                </p>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <FaBehance />
                </a>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre completo" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo electrónico" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="telefono" 
                    placeholder="Teléfono" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <textarea 
                    name="mensaje" 
                    placeholder="Tu mensaje" 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1">
                  Enviar Mensaje
                </button>
              </form>
              {formStatus && (
                <div className={`mt-4 p-3 rounded-lg ${formStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CreativaStudio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;