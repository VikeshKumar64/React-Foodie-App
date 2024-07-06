import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
    };

    const CalculatePrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            const price = item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100;
            totalPrice += price * item.quantity; 
        });
        return totalPrice;
    }

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-list-box">
                <button className="clear-button" onClick={handleClearCart}>
                    ❌ Clear Cart
                </button>
                <div className="cart-list">
                    <CategoryItemList citems={cartItems} isCart={true} />
                    <div className="total-price">
                        Total Fair:- ₹ {CalculatePrice()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
