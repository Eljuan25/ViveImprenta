const Hero = () => {
    return (
        <section className="hero" id="inicio">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>SÚPER <span>OFERTAS</span></h1>
                    <p>Impresión en lona, vinil, tarjetas y más con la mejor calidad</p>
                    <button className="btn-cotizar">Solicitar Cotización Ahora</button>
                </div>
                
                <div className="hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a035833c9c?w=800" 
                        alt="Impresión de Lona" 
                    />
                    {/* Opcional: overlay de efecto impresión */}
                    <div className="printing-overlay">
                        <span>🖨️ IMPRIMIENDO...</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;