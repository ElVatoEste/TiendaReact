import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import "./styles/App.css"
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
