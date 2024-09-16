import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import "./styles/App.css"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    );
}

export default App;
