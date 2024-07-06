import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const CategoryItemList = ({ citems, isCart }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    const getItemQuantity = (id) => {
        const item = cartItems.find(cartItem => cartItem.card.info.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <div>
            {citems.map((item) => (
                <div key={item?.card?.info?.id || item?.card?.info?.name} className="all-items">
                    <div className="category-box">
                        <div className="items-info">
                            <span>{item?.card?.info?.name}</span>
                            <span> ₹{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</span>
                            <div className="items-description">{item?.card?.info?.description}</div>
                        </div>
                        <div className="items-image-button">
                            <div className="items-button">
                                <button onClick={() => handleAddItem(item)} className="add-button">
                                    + ADD
                                </button>
                                {isCart && (
                                    <>
                                        <button onClick={() => handleRemoveItem(item)} className="remove-button">
                                            - REMOVE
                                        </button>
                                        <div className="number-of-items-container">
                                            <div className="number-of-items">{getItemQuantity(item.card.info.id)}</div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="items-image">
                                <img src={IMG_URL + item?.card?.info?.imageId} alt="Image not Loaded" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryItemList;
