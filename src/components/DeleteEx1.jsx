import axios from "axios";
import { useRef,useState } from "react";
const DeleteEx1 = ()=>{
    const ref1 = useRef(null);
    const [data,setData] = useState({});
    const delete_ex = async ()=>{
        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${ref1.current.value}`);
        console.log(data);
        setData(data);
    }
    
    return(
        <>
            <input type="number" ref={ref1} placeholder="enter number"></input>
            <button onClick={delete_ex}>ClickMe</button> <br></br><br></br>
            <h1>{JSON.stringify(data)}</h1>
        </>
    )
}
export default DeleteEx1;