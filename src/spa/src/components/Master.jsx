import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Laptops from "./Laptops.jsx"
import Dell from "./Dell.jsx";
import Mac from "./Mac.jsx";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/laptops" style={{marginRight:200}}>Laptops</Link>

                <Routes>
                    <Route path="/laptops" element={<Laptops></Laptops>}>
                        <Route path="laptops/dell" element={<Dell></Dell>}></Route>
                        <Route path="laptops/mac" element={<Mac></Mac>}></Route>
                    </Route>

                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;