import { useState } from "react";
import Child3 from "./Child3.jsx"
const Parent3 = ()=>{
    const [flag,setFlag] = useState(true);
    const [obj,setObj] = useState({frontend:`ReactJS`});
    return(
        <>
            <Child3 flag={flag} obj={obj}></Child3>
        </>
    )
}
export default Parent3;