import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <div className="home-container">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}



export default Home;
