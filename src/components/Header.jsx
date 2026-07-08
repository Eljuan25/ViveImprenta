import { useState } from 'react';
import "../index.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

        const openWhatsApp = () => {
        window.open(
            "https://wa.me/5213413293203?text=Hola%20Vive%20Imprenta%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20%F0%9F%96%A8%EF%B8%8F",
            "_blank"
        );
    };


    return (
        <header className="header">
            <div className="logo">
                <h2>Vive <span>Imprenta</span></h2>
            </div>

            <nav className={`menu ${menuOpen ? 'active' : ''}`}>
                <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
                <a href="#precios" onClick={() => setMenuOpen(false)}>Precios</a>
                <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            </nav>
                        
            <button className="btn-cotizar" onClick={openWhatsApp}>
                            Solicitar Cotización Ahora
            </button>
                        
            <button 
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
            >
                {menuOpen ? '✕' : '☰'}
            </button>
        </header>
    );
}

export default Header;