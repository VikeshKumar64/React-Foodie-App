import { useSelector } from "react-redux";
import { C_LOGO } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
 
const Header = () =>{
    const cartItems = useSelector((store) =>store.cart.items);
    console.log(cartItems);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);


    return(
        <div className="header">
            <div className="logo-container">
                    <img className="logo" src={C_LOGO}/>
            </div>  

                <div className="nav-items">
                    <ul>
                    <li>
                        <NavLink exact to="/" className={({ isActive }) => (isActive ? "activ-link" : "linkss")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "activ-link" : "linkss")}>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "activ-link" : "linkss")}>Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"className={({ isActive }) => (isActive ? "activ-link" : "linkss")}>
                            Cart({totalItems} Items)
                        </NavLink>
                    </li>
                </ul>
                </div>
        </div>
    )
}

export default Header;