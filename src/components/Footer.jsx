const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>Vive <span>Imprenta</span></h2>
                        <p>Impresión digital de alta calidad</p>
                    </div>

                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <a href="#inicio">Inicio</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#precios">Precios</a>
                        <a href="#contacto">Contacto</a>
                    </div>

                    <div className="footer-contact">
                        <h3>Contacto</h3>
                        <p>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:vivelmpentaa@gmail.com">vivelmpentaa@gmail.com</a>
                        </p>
                        <p>
                            <i className="fab fa-whatsapp"></i>
                            <a href="https://wa.me/5213413293203?text=Hola%20Vive%20Imprenta%2C%20me%20interesa%20una%20impresi%C3%B3n" className="whatsapp-link">
                                +52 1 341 329 3203
                            </a>
                        </p>
                        <p>
                            <i className="fas fa-map-marker-alt"></i>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=Golondrina+279,+Bugambilias,+49093+Ciudad+Guzman,+Jalisco" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Golondrina 279, Bugambilias, Ciudad Guzmán, Jalisco
                            </a>
                        </p>
                    </div>

                    <div className="footer-social">
                        <h3>Síguenos</h3>
                        <a href="https://www.instagram.com/viveimprentaa/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="instagram-link">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Vive Imprenta. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Botón flotante WhatsApp */}
            <a href="https://wa.me/5213413293203?text=Hola%20Vive%20Imprenta%2C%20me%20interesa%20una%20impresi%C3%B3n%20%F0%9F%96%A8%EF%B8%8F" 
               className="whatsapp-float" 
               target="_blank" 
               rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </footer>
    );
};

export default Footer;