import { useDispatch, useSelector } from "react-redux";
import ListCard from "../components/ListCard";
import { useCallback, useEffect, useState } from "react";
import { getProductList } from "../store/productStore";

const Shopall = () => {
    let productsState = useSelector((state) => state.products);
    let products = productsState.products;

    const dispatch = useDispatch();
    let [list, setList] = useState(products);
    const sortProducts = useCallback((type) => {
        let srotList = [...list];
        if (type === "lowFee") {
            srotList.sort((a, b) => a.price - b.price);
        } else if (type === "highFee") {
            srotList.sort((a, b) => b.price - a.price);
        } else if (type === "highdiscount") {
            srotList.sort((a, b) => b.discount - a.discount);
        }
        setList(srotList);
    });

    useEffect(() => {
        dispatch(getProductList(""));
    }, [dispatch]);

    useEffect(() => {
        setList(products);
    }, [products]);

    if (productsState.status !== "scucceeded") {
        return <main className="notPage mw">로딩중...</main>;
    }
    return (
        <main className="mw shopall">
            <h2>Shop The Latest</h2>
            <nav>
                <button onClick={() => dispatch(getProductList(""))}>모든상품</button>
                <button onClick={() => dispatch(getProductList("new"))}>신상품</button>
                <button onClick={() => dispatch(getProductList("top"))}>인기상품</button>

                <button onClick={() => sortProducts("lowFee")}>낮은 가격</button>
                <button onClick={() => sortProducts("highFee")}>높은 가격</button>
                <button onClick={() => sortProducts("highdiscount")}>높은 할인율</button>
            </nav>
            <ul className="listCon">
                {list.map((product) => {
                    return (
                        <li key={product.id}>
                            <ListCard product={product} />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Shopall;
