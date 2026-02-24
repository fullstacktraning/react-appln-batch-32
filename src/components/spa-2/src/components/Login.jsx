import { useRef } from "react";
import {useNavigate} from "react-router-dom"
const Login = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();
    const login_fn = ()=>{
        ref1.current.value == "test@gmail.com" && ref2.current.value == "test@123" ? navigate("/dashboard") : navigate("/error");
    }
    
    return(
        <>
            <fieldset>
                <legend>LOGIN</legend>
                <input type="email" ref={ref1} placeholder="enter email"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login_fn}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;