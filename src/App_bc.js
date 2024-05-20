import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Shopall from "./pages/Shopall";
import Products from "./pages/Products";
import Company from "./pages/Company";
import Cart from "./pages/Cart";
import Ceo from "./pages/Ceo";
import Organization from "./pages/Organization";

import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/reset.css";
import "./css/App.css";

function App() {
    const [products, setProducts] = useState([]);

    const getproductList = useCallback(async (cate) => {
        let url = `http://localhost:5000/products`;
        if (cate) {
            url += `?category=${cate}`;
        }
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main products={products} getproductList={getproductList} />} />
                <Route path="/shopall" element={<Shopall products={products} setProducts={setProducts} getproductList={getproductList} />} />
                <Route path="/products/:id" element={<Products getproductList={getproductList} products={products} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/company" element={<Company />}>
                    <Route path="ceo" element={<Ceo />} />
                    <Route path="organization" element={<Organization />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main className="notPage mw">
                            <strong>404</strong>페이지가 없습니다.
                        </main>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
