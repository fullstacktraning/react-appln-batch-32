const Child1 = (props)=>{
    return(
        <>
            <h1>{props.key1}</h1>
            {
                props.key2.map((element,index)=>{
                    return(<h1 key={index}>{element}</h1>)
                })
            }
        </>
    )
}
export default Child1;