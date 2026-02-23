import { Link, Outlet } from "react-router-dom";

const Laptops = ()=>{
    return(
        <>
            <h1>Laptops Soon...!</h1>
            <Link to={"laptops/dell"} style={{marginRight:300}}>Dell</Link>
            <Link to={"laptops/mac"}>Mac</Link>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Laptops;