import Global1 from "../global/Global1";
import { useContext } from "react";
const Test2 = ()=>{
    const msg = useContext(Global1);
    return(
        <>
            <h1>{msg}</h1>
        </>
    )
}
export default Test2;