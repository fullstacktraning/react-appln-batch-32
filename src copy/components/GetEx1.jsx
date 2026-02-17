import axios from "axios";
import { useEffect,useState } from "react";
const GetEx1 = ()=>{
    const [users,setUsers] = useState([]);
    const get_users = async ()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data);  //list of objects
        setUsers(data);
    }
    useEffect(()=>{
        get_users();
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
                        <th>email</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>username</th>
                        <th>website</th>
                        <th>address</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.email}</td>
                                <td>{element.name}</td>
                                <td>
                                    <a href={`tel:${element.phone}`}>
                                        {element.phone}
                                </a>
                                </td>
                                <td>{element.username}</td>
                                <td>
                                    <a href={`https://${element.website}`} target="_blank">{element.website}</a>
                                </td>
                                <td>
                                    <b>City:</b> {element.address.city} <br></br>
                                    <b>Street</b> {element.address.street} <br></br>
                                    <b>Suite</b> {element.address.suite} <br></br>
                                    
                                    <a href={`https://www.google.com/maps?q=${element.address.geo.lat},${element.address.geo.lng}`}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                           <b>Location</b>   <i className="fa fa-map-marker"></i>
                                    </a>
                                    <br></br>
                                    <b>Zipcode </b> {element.address.zipcode}
                                </td>
                                <td>
                                    <b>Bs.</b>{element.company.bs} <br></br>
                                    <b>CatchPhrase.</b> {element.company.catchPhrase} <br></br>
                                    <b>Name.</b> {element.company.name}
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default GetEx1;