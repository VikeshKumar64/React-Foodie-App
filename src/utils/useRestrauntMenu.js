import { useEffect, useState } from "react";
import { Menu_API } from "../utils/constants";


const useResturantMenue = (resId) =>{

    const [resInfo,setResInfo] = useState(null);

    console.log(resInfo);

    useEffect(()=>{

        fetchData();

    },[]);

    const fetchData = async () =>{
        const data = await fetch(Menu_API+resId);

        const json = await data.json();
        setResInfo(json.data);
        console.log(json);
    }

    return resInfo;
}

export default useResturantMenue;