import "../index.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Logo y descripción */}
                    <div className="footer-logo">
                        <h2>Vive <span>Imprenta</span></h2>
                        <p>Impresión digital de alta calidad con entrega rápida.</p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="footer-links">
                        <h3>Enlaces</h3>
                        <a href="#inicio">Inicio</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#precios">Precios</a>
                        <a href="#contacto">Contacto</a>
                    </div>

                    {/* Contacto */}
                    <div className="footer-contact">
                        <h3>Contacto</h3>
                        <p>📧 vivelmpentaa@gmail.com</p>
                        <p>📱 (XX) XXXX-XXXX</p>
                        <p>📍 Tu Ciudad, País</p>
                    </div>

                    {/* Redes sociales */}
                    <div className="footer-social">
                        <h3>Síguenos</h3>
                        <div className="social-icons">
                            <a href="#" target="_blank">📘</a>
                            <a href="#" target="_blank">📷</a>
                            <a href="#" target="_blank">🐦</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Vive Imprenta. Todos los derechos reservados.</p>
                    
                </div>
            </div>
        </footer>
    );
};


export default Footer;