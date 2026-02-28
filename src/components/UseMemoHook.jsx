import { useMemo, useState } from "react";

const UseMemoHook = ()=>{
    const [msg,setMsg] = useState(`Hello`);
    const [count,setCount] = useState(0);

    const expensiveCalculation = useMemo (()=>{
        console.log("Hello");
        for(let i=0;i<1000;i++){
            return count*2;
        }
    },[count]);

    return(
        <>
            <h1>{expensiveCalculation}</h1>

            <button onClick={()=>setCount(count+1)}>Change1</button>

            <br></br><br></br><br></br>

            <input type="text" onChange={(e)=>setMsg(e.target.value)}></input>
        </>
    )
}
export default UseMemoHook;