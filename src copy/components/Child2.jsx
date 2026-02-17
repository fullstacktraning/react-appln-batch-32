import "./Child2.css"
const Child2 = (props)=>{
    return(
        <>
            <h1>{props.num}</h1>

            <div className="parent">
                {
                    props.laptops.map((element,index)=>{
                        return(<div className="child">
                            <img src={element.pimg} className="img"></img>
                            <p>{element.pid}</p>
                            <p>{element.pname}</p>
                        </div>)
                    })
                }
            </div>

        </>
    )
}
export default Child2;