import { useState } from 'react';
import "../index.css";   // Importa el CSS global

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <h2>ViveImprenta</h2>
            </div>

            <nav className={`menu ${menuOpen ? 'active' : ''}`}>
                <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
                <a href="#precios" onClick={() => setMenuOpen(false)}>Precios</a>
                <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            </nav>

            <button className="btn-cotizar">
                Solicitar Cotización
            </button>

            <button 
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
        </header>
    );
}

export default Header;