import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react'; // Para manejar el estado de carga de la imagen
import '../styles/ProductCard.css';

function ProductCard({ product }) {
    const [isImageLoaded, setImageLoaded] = useState(false); // Estado para la carga de la imagen

    return (
        <div className="product-card">
            {/* Añadir un placeholder o spinner mientras la imagen se carga */}
            {!isImageLoaded && <div className="image-placeholder">Cargando...</div>}

            <img
                src={product.image}
                alt={`Imagen del producto ${product.name}`}
                className={`product-image ${isImageLoaded ? '' : 'hidden'}`}
                onLoad={() => setImageLoaded(true)} // Actualiza el estado una vez que la imagen esté cargada
            />

            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <Link to={`/product/${product.id}`} className="info-button">
                    Info
                </Link>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
