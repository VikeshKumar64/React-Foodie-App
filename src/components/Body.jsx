import RestaurantCard,{isOpenLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    const [dataList , setDataList] = useState([]);

    const [searchText , setSearchText] = useState("");

    const [filteredRest , setFilteredRest] = useState([]);

    const ResturantCardOpen = isOpenLabel(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setDataList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRest(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    useEffect(() =>{
        fetchData();
    },[]);

    useEffect(()=>{
        dataList;   
    },[filteredRest])




    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>You are OFFLINE</h1>
    


    return dataList.length == 0 ?(
                <>
                    <ShimmerUI />
                    <ShimmerUI />
                    <ShimmerUI />
                    <ShimmerUI />
                    <ShimmerUI />
                </>):(
        <div className="body">
             <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e) =>{setSearchText(e.target.value);
                    }}/>
                    <button
                         className="search-button"
                         onClick={() =>{

                            const filterRes = dataList.filter(
                                (res) =>res.info.name.toLowerCase().includes(searchText)
                                );
                        

                        setFilteredRest(filterRes);
                    }}
                    >
                        Search
                    </button>
                </div>
                <div className="btn-search">
                <label>Rating higher than 4.2 :-</label>
                <button  
                    className="filter-btn"
                    onClick={() =>{
                        const fliterData = dataList.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setFilteredRest(fliterData);
                    }}>
                        Filter it
                </button>
                </div>
             </div>
                <div className="restro-container">
                    {
                    filteredRest.map((restaurant) => (
                    <Link style={{textDecoration:"none"}} 
                    key={restaurant.info.id} 
                    to={"/resturant/"+restaurant.info.id}>
                        {
                        restaurant.info.isOpen ? (<ResturantCardOpen resData={restaurant}/> ):(<RestaurantCard resData={restaurant}/>)
                        }
                    </Link>
                    ))
                    }
                </div>
        </div>
    )
}

export default Body;