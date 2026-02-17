import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Laptops from "./Laptops.jsx";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/laptops" style={{marginRight:200}}>
                    Laptops
                </Link>
                <Routes>
                    <Route path="/laptops" element={<Laptops></Laptops>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;