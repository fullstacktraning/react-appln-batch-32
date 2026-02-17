import Child1 from "./Child1.jsx"
const Parent1 = ()=>{
    return(
        <>
            <Child1 key1={`Hello`}
                    key2={[10,20,30,40,50]}></Child1>
        </>
    )
}
export default Parent1;