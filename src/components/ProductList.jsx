import ProductCard from './ProductCard';
import products from '../data/products.json';
import '../styles/ProductList.css';

function ProductList() {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
