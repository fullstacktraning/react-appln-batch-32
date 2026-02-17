import Comp1 from "./Comp1.jsx"
import State from "./State.jsx"
const Child3 = ({flag,obj})=>{
    return(
        <>
            {
                !flag? <Comp1></Comp1> : <State></State>
            }
            <h1>{obj.frontend}</h1>
        </>
    )
}
export default Child3;