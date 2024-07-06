import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/ResturantMenu";
import ShimmerUI from "./components/ShimmerUI";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Aboute = lazy(()=> import("./components/About"));


const Applayout = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<ShimmerUI/>}><Aboute/></Suspense>
            },
            {
                path:"/contact",
                element: <ContactUs />
            },
            {
                path: "/resturant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("Root"));
root.render(<RouterProvider  router={appRouter}/>); // to Render the component you have to write it like this .
 