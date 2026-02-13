import axios from "axios";
import { useRef,useState } from "react";
const PutEx = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const [res,setRes] = useState({});
    const put_ex = async ()=>{
        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/posts/${ref1.current.value}`,
                {
                    id : parseInt(ref2.current.value),
                    title : ref3.current.value,
                    body : ref4.current.value,
                    userId : parseInt(ref4.current.value)
                },
                {
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": "Bearer dummy_token_123"
                    }
                }
        );
        setRes(data)
    }
    return(
        <>
            <fieldset>
                <legend>PUT - EX</legend>
                <input type="number" ref={ref1} placeholder="enter req parameter"></input> <br></br><br></br>
                <input type="number" ref={ref2} placeholder="enter id"></input> <br></br><br></br>
                <input type="text" ref={ref3} placeholder="enter title"></input> <br></br><br></br>
                <input type="text" ref={ref4} placeholder="enter body"></input> <br></br><br></br>
                <input type="number" ref={ref5} placeholder="enter userId"></input> <br></br><br></br>
                <button onClick={put_ex}>PutEx</button> <br></br><br></br>
                <p>{JSON.stringify(res)}</p>
            </fieldset>
        </>
    )
}
export default PutEx;