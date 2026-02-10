import axios from "axios";
import { useState,useEffect } from "react";
const GetEx2 = ()=>{
    const [comments,setComments] = useState([]);
    const get_comments = async ()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments/");
        console.log(data);
        setComments(data);
    }

    useEffect(()=>{
        get_comments();
    },[]);
   
   
   
    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <td>email</td>
                        <td>body</td>
                        <td>name</td>
                        <td>postId</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.email}</td>
                                <td>{element.body}</td>
                                <td>{element.name}</td>
                                <td>{element.postId}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default GetEx2;