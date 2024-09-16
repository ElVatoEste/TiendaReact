import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json';
import '../styles/ProductList.css';
import Header from './Header'; // Importamos el Header que incluye la barra de búsqueda

function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');

    // Función para actualizar el término de búsqueda desde el componente Header
    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    // Filtrar productos según el término de búsqueda (nombre, descripción o color)
    const filteredProducts = products.filter((product) => {
        const { name, description, color } = product;
        return (
            name.toLowerCase().includes(searchTerm) ||
            description.toLowerCase().includes(searchTerm) ||
            (color && color.toLowerCase().includes(searchTerm))
        );
    });

    return (
        <div>
            {/* Colocamos el Header con la búsqueda */}
            <Header onSearch={handleSearch} />

            {/* Renderizamos los productos filtrados */}
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
