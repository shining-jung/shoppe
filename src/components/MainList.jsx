import { useDispatch, useSelector } from "react-redux";
import ListCard from "./ListCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProductList } from "../store/productStore";

const MainList = () => {
    let productsState = useSelector((state) => state.products);
    let products = productsState.products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList("new"));
    }, [dispatch]);

    if (productsState.status !== "scucceeded") {
        return <main className="notPage mw">로딩중...</main>;
    }

    return (
        <section className="mainList">
            <h2>Shop The Latest</h2>
            <Link to="/shopall">View All</Link>
            <ul className="listCon">
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <ListCard product={product} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default MainList;
