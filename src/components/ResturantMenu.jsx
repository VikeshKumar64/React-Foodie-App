import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useResturantMenue from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const { resId } = useParams();

    const resInfo = useResturantMenue(resId);


    if(resInfo === null) return <ShimmerUI />;

   
    const {name,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <>
            <div>
                <div className="text-center">
                    <div className="res-name">{name}</div>
                    <p className="cuisines-list">
                        {cuisines.join(", ")}
                    </p>
                    {categories.map((category) => <RestaurantCategory key={category?.card?.card?.id} cdata={category?.card?.card}/>)}
                </div>
                
            </div>
        </>
    )
}

export default RestaurantMenu;