import { useState } from "react";

const tcsHook = (num = 0)=>{
    const [count,setCount] = useState(num);
    let increment = ()=> setCount(count+1);
    let decrement = ()=> setCount(count-1);
    let reset = ()=>setCount(num);
    return {count,increment,decrement,reset };
}
export default tcsHook;