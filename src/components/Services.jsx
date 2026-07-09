import lona from "../assets/lonaimprenta.jpg";
import stickers from "../assets/stikersz.jpg";
import tarjetas from "../assets/tarjetaimprenta.webp";

const Services = () => {
    return (
        <section id="servicios" className="services">
            <div className="container">
                <h2>Nuestros Servicios</h2>
                <p className="services-subtitle">
                    Impresión de alta calidad para tu negocio
                </p>

                <div className="services-grid">
                    <div className="service-card">
                        <img src={lona} alt="Lona" />
                        <h3>Lona y Vinil</h3>
                        <p>Impresión de gran formato, banners y vallas</p>
                        <span className="price">Desde $139 m²</span>
                    </div>

                    <div className="service-card">
                        <img src={tarjetas} alt="Tarjetas" />
                        <h3>Tarjetas y Papelería</h3>
                        <p>Tarjetas de presentación, flyers, volantes</p>
                        <span className="price">Desde $450 millar</span>
                    </div>

                    <div className="service-card">
                        <img src={stickers} alt="Corte" />
                        <h3>Corte y Diseño</h3>
                        <p>Diseño gráfico + corte de vinil y stickers</p>
                        <span className="price">Desde $550</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;