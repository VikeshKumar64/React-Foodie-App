import { useEffect, useState } from "react";
import CategoryItemList from "./CategoryItemList";
import { useSelector } from "react-redux";

const RestaurantCategory = ({cdata}) =>{


    const [showItems,setShowItems] = useState(false);

    const [showCartInfo,setShowCartInfo] = useState(false);

    const handleClick = () =>{
        setShowItems(!showItems);

    }
    const cartItems = useSelector((store) =>store.cart.items);
    // console.log(cartItems);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    // console.log(cdata);

    
    useEffect(()=>{
        if(totalItems > 0){
            setShowCartInfo(true);
        }
        else{
            setShowCartInfo(false);
        }
    },[totalItems])
    return <div className="list-holder">
        
        <div className="lists" onClick={handleClick}>
            <span>{cdata.title} ({cdata.itemCards.length})</span>
            <span>🔻</span>
        </div>

        {showItems && <CategoryItemList citems={cdata.itemCards}/>}
        
        {showCartInfo && (
            <div className="item-added-box">
                Items Added :-  {totalItems}
            </div>
        )}
    </div>
}


export default RestaurantCategory;