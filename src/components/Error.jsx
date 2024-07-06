import { useRouteError } from "react-router-dom";

const Error = () =>{
    const erroro = useRouteError();
    console.log(erroro);
    return(
        <>
            <h1>OOPS Something got wrong</h1>
            <h2>{erroro.status}: {erroro.statusText}</h2>
            <h2>{erroro.error.message}</h2>
        </>
    )
}

export default Error;