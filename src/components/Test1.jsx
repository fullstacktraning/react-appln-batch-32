import Global1 from "../global/Global1";
import Test2 from "./Test2.jsx"
const Test1 = ()=>{
    return(
        <>
            <Global1.Provider value={"Hello"}>
                <Test2></Test2>
            </Global1.Provider>
        </>
    )
}
export default Test1;