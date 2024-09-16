import '../styles/Header.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value); // Pasar el valor de búsqueda al componente padre
    };

    return (
        <header className="navbar">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className="logo">Martha's Shop</h1>
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={handleSearchChange} // Captura el valor del input
                />
            </div>
        </header>
    );
}

// Añadir la validación de PropTypes para la prop onSearch
Header.propTypes = {
    onSearch: PropTypes.func.isRequired, // onSearch debe ser una función
};

export default Header;
