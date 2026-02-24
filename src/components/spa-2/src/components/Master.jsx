import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/error" element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;