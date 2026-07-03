const Services = () => {
    return (
        <section id="servicios" className="services">
            <div className="container">
                <h2>Nuestros Servicios y Precios</h2>
                <p className="services-subtitle">Consulta rápida de precios actualizados</p>

                <div className="chat-container">
                    <div className="chat-header">
                        <div className="chat-avatar"></div>
                        <div>
                            <strong>Vive Imprenta</strong>
                            <p>En línea • Respuesta inmediata</p>
                        </div>
                    </div>

                    <div className="chat-messages">
                        <div className="message received">
                            <p><strong>Lona impresa</strong> <span>$139</span> m²</p>
                        </div>
                        <div className="message received">
                            <p><strong>Vinil impreso</strong> <span>$300</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Tarjetas (1 millar)</strong> <span>$450</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Tarjeta frente y vuelta</strong> <span>$800</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Tarjeta terminada mate</strong> <span>$1100</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Corte de vinil</strong> <span>$550</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Playera sublimada</strong> <span>$180</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Volantes papel bond</strong> <span>$700</span></p>
                        </div>
                        <div className="message received">
                            <p><strong>Notas 1/4 carta</strong> <span>$1300</span></p>
                        </div>
                    </div>

                    <div className="chat-footer">
                        <p> Precios incluyen diseño básico</p>
                        <button className="btn-cotizar">Pedir Cotización Personalizada</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;