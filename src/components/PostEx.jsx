import { useRef,useState } from "react";
import axios from "axios"
const PostEx = ()=>{
    const [res,setRes] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const post_ex = async ()=>{
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts",
                            {"userId":parseInt(ref1.current.value),
                            "title":ref2.current.value,
                            "body":ref3.current.value
                            },
                            {
                                headers:{
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer dummy_token_123"
                                }
                            });
        setRes(data);
    }
    return(
        <>
            <fieldset>
                <legend>POST EX</legend>
                <input type="number" ref={ref1} placeholder="enter userId"></input> <br></br><br></br>
                <input type="text" ref={ref2} placeholder="enter title"></input> <br></br><br></br>
                <input type="text" ref={ref3} placeholder="enter body"></input> <br></br><br></br>
                <button onClick={post_ex}>PostEx</button>
                <br></br>
                <p>{JSON.stringify(res)}</p>
            </fieldset>
        </>
    )
}
export default PostEx;