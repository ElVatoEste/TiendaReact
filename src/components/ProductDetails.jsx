import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import '../styles/ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const product = products.find(prod => prod.id === parseInt(id));

    if (!product) return <h2>Product not found</h2>;

    console.log("Image URL:", product.image); // Log para verificar la URL de la imagen

    return (
        <div className="product-details">
            <img
                src={`${product.image}`}
                alt={product.name}
                className="product-image"
            />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Available sizes: {product.sizes.join(', ')}</p>
        </div>
    );
}


export default ProductDetails;
