import axios from "axios";
import { useEffect,useState } from "react";
const DeleteEx=()=>{
    const [data,setData] = useState({});
    const delete_ex = async ()=>{
        const {data} = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
        setData(data);
    }

    useEffect(()=>{
        delete_ex();
    },[]);
    
    
    return(
        <>
            <h1>{JSON.stringify(data)}</h1>
        </>
    )
}
export default DeleteEx;