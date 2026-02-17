import Child2 from "./Child2.jsx";
import { useState } from "react";
const Parent2 = ()=>{
    const [num,setNum] = useState(100);
    const [laptops,setLaptops] = useState([{"pid":111,"pname":"Dell","pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/asus.png"},
                                           {"pid":222,"pname":"Asus","pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/dell.jpeg"},
                                           {"pid":333,"pname":"Hp","pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/hp.png"},
                                           {"pid":444,"pname":"Lenovo","pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/lenovo.jpg"},
                                           {"pid":555,"pname":"MSI","pimg":"https://mern-stack-appln.s3.eu-north-1.amazonaws.com/laptops/msi.jpg"}]);
    return(
        <>
            <Child2 num={num} laptops={laptops}></Child2>
        </>
    )
}
export default Parent2;