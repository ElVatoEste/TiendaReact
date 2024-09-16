import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img
                src={`${product.image}`}
                alt={product.name}
                className="product-image"
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
