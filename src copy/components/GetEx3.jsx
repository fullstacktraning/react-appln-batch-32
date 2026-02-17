import axios from "axios";
import { useState,useRef } from "react";
const GetEx3 = ()=>{
    const ref1 = useRef(1);
    const [user,setUser] = useState({});
    const get_user = async ()=>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${ref1.current.value}`);
        console.log(data);
        setUser(data);
    }
    const fetch_user = ()=>{
        get_user();
    }
    return(
        <>
            <input type="number" ref={ref1} placeholder="enter user id"></input>
            <button onClick={fetch_user}>Fetch</button>
            <br></br>
            <b>{user.name}</b> <br></br>
            <b>{user.id}</b> <br></br>
            <b>{user.phone}</b> <br></br>
            <b>{user.username}</b> <br></br>
            <b>{user.website}</b> <br></br>
           
        </>
    )
}
export default GetEx3;