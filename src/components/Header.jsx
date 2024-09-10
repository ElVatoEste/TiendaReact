import '../styles/Header.css';
import { FaSearch } from 'react-icons/fa'; // Importa el icono de búsqueda

function Header() {
    return (
        <header className="navbar">
            <h1 className="logo">Cloth Shop</h1>
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search products..." className="search-bar" />
            </div>
        </header>
    );
}

export default Header;
