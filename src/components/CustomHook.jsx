import tcsHook from "../custom/tcsHook";
const CustomHook = ()=>{
    
    const {count,increment,decrement,reset} = tcsHook(1);
    
    
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>reset()}>Reset</button>
        </>
    )
}
export default CustomHook;