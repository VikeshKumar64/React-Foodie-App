import { IMG_URL,ICON } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props; //destructuring
    return(
        <div className="restro-card">
            <img
            className="restro-logo"
            src={IMG_URL+resData.info.cloudinaryImageId}/> 
            
            <div className="card-info">
                <h3 style={{fontWeight:"900"}}>{resData.info.name}</h3>
                <h4 style={{display:"flex", fontWeight:"800"}}><img style={{width:"23px", height: "23px"}} src={ICON}/> {resData.info.avgRating} · {resData.info.sla.slaString}</h4>
                <h5>{resData.info.cuisines.join(" , ")}</h5>
                <h5>{resData.info.areaName}</h5>
                <h5 style={{color:"#212121"}}>{resData.info.costForTwo}</h5>
            </div>
        </div>
    )
}

export const isOpenLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="isOnlineLabel">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; 