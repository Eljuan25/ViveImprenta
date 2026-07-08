import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();

    return (
        <section className="about-page">
            <div className="container">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    ← Volver al Inicio
                </button>

                <div className="about-header">
                    <h1>¿Quiénes Somos?</h1>
                    <p className="about-subtitle">Tu socio confiable en impresión de calidad en Ciudad Guzmán</p>
                </div>
                
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            En <strong>Vive Imprenta</strong> transformamos tus ideas en impresiones profesionales 
                            con la más alta calidad. Con años de experiencia en el mercado, nos hemos consolidado 
                            como una opción confiable para negocios y emprendedores de la región.
                        </p>
                        
                        <p>Utilizamos materiales premium y tecnología moderna para ofrecerte:</p>
                        
                        <ul className="about-features">
                            <li><i className="fas fa-check-circle"></i> Impresión en lona y vinil de gran formato</li>
                            <li><i className="fas fa-check-circle"></i> Tarjetas de presentación y papelería</li>
                            <li><i className="fas fa-check-circle"></i> Banners, pendones y publicidad exterior</li>
                            <li><i className="fas fa-check-circle"></i> Diseño gráfico y asesoría personalizada</li>
                        </ul>

                        <div className="about-mission">
                            <h3><i className="fas fa-bullseye"></i> Nuestra Misión</h3>
                            <p>
                                Entregar impresiones de excelente calidad con atención personalizada y precios justos, 
                                ayudando a que tu negocio destaque.
                            </p>
                        </div>
                    </div>

                    <div className="about-image">
                        <img 
                            src="src/assets/viveimprenttta.jpg" 
                            alt="Vive Imprenta" 
                        />
                    </div>
                </div>

                {/* Ubicación */}
                <div className="about-location">
                    <h2><i className="fas fa-map-marker-alt"></i> Visítanos</h2>
                    <p><strong>Golondrina 279, Col. Bugambilias</strong></p>
                    <p>Ciudad Guzmán, Jalisco</p>
                    
                    <button 
                        className="btn-maps"
                        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Golondrina+279,+Bugambilias,+49093+Ciudad+Guzman,+Jalisco', '_blank')}
                    >
                        <i className="fas fa-map"></i> Ver en Google Maps
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;