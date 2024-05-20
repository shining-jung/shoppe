import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
    let cart = useSelector((state) => state.cart);

    const totalFee = cart
        .reduce((a, b) => {
            return a + b.price * (1 - b.discount / 100) * b.count;
        }, 0)
        .toLocaleString();

    return (
        <main className="cart mw">
            <h2>Shopping cart</h2>
            <p>
                총 <strong>3개</strong>의 아이템이 담겨있어요
            </p>
            <ul className="cartList">
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <CartItem product={item} />
                        </li>
                    );
                })}
                <li className="totalFee">
                    <span>총 결제가격</span>
                    <strong>{totalFee} 원</strong>
                </li>
            </ul>
        </main>
    );
};

export default Cart;
