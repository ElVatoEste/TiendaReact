import '../styles/Footer.css'; // Asegúrate de tener un archivo CSS para los estilos

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>
                        <a href="https://maps.app.goo.gl/RQT8ku6C49cii7Az6" target="_blank" rel="noopener noreferrer">
                            Ciudad Jardín, Casa P-12
                        </a>
                    </p>
                </div>
                <div className="footer-item">
                    <i className="fab fa-whatsapp"></i>
                    <p>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            +123 456 7890
                        </a>
                    </p>
                </div>
                <div className="footer-item">
                    <i className="fab fa-github"></i>
                    <p>
                        <a href="https://github.com/ElVatoEste" target="_blank" rel="noopener noreferrer">
                            Mi GitHub
                        </a>
                    </p>
                </div>
                <div className="footer-item">
                    <i className="fas fa-globe"></i>
                    <p>
                        <a href="https://vatodev.xyz/" target="_blank" rel="noopener noreferrer">
                            www.vatodev.xyz
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} VatoDev. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
