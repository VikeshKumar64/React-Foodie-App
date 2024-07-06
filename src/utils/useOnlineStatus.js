import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus,useOnlineStatus] = useState(true);
    // check if online

    useEffect(()=>{
        window.addEventListener("offline",() =>{
            useOnlineStatus(false);
        })
        window.addEventListener("online",() =>{
            useOnlineStatus(true);
        })
    },[])

    return onlineStatus;
}

export default useOnlineStatus;