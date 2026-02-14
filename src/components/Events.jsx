import { useState } from "react";

const Events = ()=>{
    const [num,setNum] = useState(0);
    const [login,setLogin] = useState("");
    const [x,setX] = useState(100);
    const func_one = ()=>{
        setNum(num+1);
    }
    const func_two = (username,password)=>{
        username == `admin` && password == `admin@123` ? setLogin(`Login Success`) : setLogin(`Login Fail`);
    }
    const func_three = ()=>{
        setX(x=>x+100);
    }
    return(
        <>
            <button onClick={func_one}>Button1</button>
            <h1>{num}</h1>
            
            <button onClick={()=>func_two(`admin`,`admin@123`)}>Login</button>
            <br></br>
            <h1>{login}</h1>

            <br></br>
            <button onDoubleClick={func_three}>Button3</button>
            <br></br>
            <h1>{x}</h1>
        </>
    )
}
export default Events;