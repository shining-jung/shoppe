import { useDispatch } from "react-redux";
import style from "../css/CartItem.module.css";
import { useNavigate } from "react-router-dom";
import { plusCount, minusCount, delItem } from "../store/cartStore";

const CartItem = ({ product }) => {
    let goProducts = useNavigate();
    let dispatch = useDispatch();
    return (
        <div className={style.cartItem}>
            <div
                className={style.thum}
                onClick={() => {
                    goProducts(`/Products/${product.id}`);
                }}>
                <img src={`${process.env.PUBLIC_URL}/img/${product.img}`} alt="img" />
            </div>
            <span
                onClick={() => {
                    goProducts(`/Products/${product.id}`);
                }}>
                {product.title}
            </span>
            <span>정가 : {Number(product.price).toLocaleString()}</span>
            <span>
                {product.count === 1 ? (
                    <button disabled>-</button>
                ) : (
                    <button
                        onClick={() => {
                            dispatch(minusCount(product.id));
                        }}>
                        -
                    </button>
                )}
                <span>{product.count}</span>개
                <button
                    onClick={() => {
                        dispatch(plusCount(product.id));
                    }}>
                    +
                </button>
            </span>
            {product.discount === "0" ? (
                <span className={style.sumPrice}>
                    <span>{(Number(product.price) * product.count).toLocaleString()}원</span>
                </span>
            ) : (
                <span className={style.sumPrice}>
                    <span className={style.discount}>{product.discount}% 할인</span>
                    <span className={style.lineText}>{(Number(product.price) * product.count).toLocaleString()}원</span>
                    <span>{(Number(product.price) * (1 - product.discount / 100) * product.count).toLocaleString()}원</span>
                </span>
            )}
            <i
                className="fa-regular fa-trash-can"
                onClick={() => {
                    dispatch(delItem(product.id));
                }}></i>
        </div>
    );
};

export default CartItem;
