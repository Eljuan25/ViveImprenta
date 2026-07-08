import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();


    const openWhatsApp = () => {
        window.open(
            "https://wa.me/5213413293203?text=Hola%20Vive%20Imprenta%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20%F0%9F%96%A8%EF%B8%8F",
            "_blank"
        );
    };

    return (
        <section className="hero" id="inicio">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>SÚPER <span>OFERTAS</span></h1>
                    <p>Impresión en lona, vinil, tarjetas y más con la mejor calidad</p>
                    
                    <div className="hero-buttons">
                       <button className="btn-cotizar" onClick={openWhatsApp}>
                            Solicitar Cotización Ahora
                        </button>
                        
                        {/* Botón Quiénes Somos */}
                        <button 
                            className="btn-about-hero"
                            onClick={() => navigate('/quienes-somos')}
                        >
                            ¿Quiénes Somos?
                        </button>
                    </div>
                </div>
                
                <div className="hero-image">
                    <img 
                        src="src\assets\viveimprenta.jpg" 
                        alt="Impresión de Lona" 
                    />
                    <div className="printing-overlay">
                        <span> IMPRIMIENDO...</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;