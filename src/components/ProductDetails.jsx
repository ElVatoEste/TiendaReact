import { useParams } from 'react-router-dom';
import products from '../data/products.json';

function ProductDetails() {
    const { id } = useParams();
    const product = products.find(prod => prod.id === parseInt(id));

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="product-details">
            <img src={`/images/${product.image}`} alt={product.name} width="400" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Available sizes: {product.sizes.join(', ')}</p>
        </div>
    );
}

export default ProductDetails;
