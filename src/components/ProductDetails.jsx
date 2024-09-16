import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import '../styles/ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const product = products.find(prod => prod.id === parseInt(id));

    // Usar useEffect para desplazarse hacia arriba cuando se cargue el componente
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazarse hasta la parte superior de la página
    }, [id]); // Se ejecutará cada vez que el id cambie

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="product-details">
            <img
                src={`/${product.image}`}
                alt={product.name}
                className="product-image"
            />
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: <span>${product.price}</span></p>
                <p className="product-sizes">Available sizes: <span>{product.sizes.join(', ')}</span></p>
            </div>
        </div>
    );
}

export default ProductDetails;
