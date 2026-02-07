import { useState } from "react";
import Child5 from "./Child5.jsx"
const Parent5 = ()=>{
    const [str,setStr] = useState(`Hello,CareerIT Institute`);
    const [num,setNum] = useState(1000);
    return(
        <>
            <Child5 str={str} num={num}></Child5>
        </>
    )
}
export default Parent5;