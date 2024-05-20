import style from "../css/ListCard.module.css";
import { useNavigate } from "react-router-dom";

const ListCard = ({ product }) => {
    const nav = useNavigate();
    const goProducts = () => {
        nav(`/Products/${product.id}`);
    };
    return (
        <div className={style.listCard} onClick={goProducts}>
            <div className={style.pImg}>
                <img src={`${process.env.PUBLIC_URL}/img/${product.img}`} alt={product.title} />
            </div>
            <div className={style.pInfo}>
                <p>{product.title}</p>
                <p>{Number(product.price).toLocaleString()}</p>
            </div>
            {product.discount === "0" ? null : <span className={style.discount}>{product.discount}% 할인</span>}
        </div>
    );
};

export default ListCard;
