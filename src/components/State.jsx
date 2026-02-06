import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
const State = ()=>{
    const [str,setStr] = useState(`Hello`);
    const [num1,setNum1] = useState(200);
    const [num2,setNum2] = useState(100);
    const [flag,setFlag] = useState(true);
    const [list1,setList1] = useState([100,200,300,400,500]);
    const [obj,setObj] = useState({frontend:`ReactJS`,backend:`NodeJS`,database:`MongoDB`});
    const [emps,setEmps] = useState( [{eid:"e101",ename:"Emp1",esal:10000,eimg:"https://reqres.in/img/faces/1-image.jpg"},
                                      {eid:"e102",ename:"Emp2",esal:20000,eimg:"https://reqres.in/img/faces/2-image.jpg"},
                                      {eid:"e103",ename:"Emp3",esal:30000,eimg:"https://reqres.in/img/faces/3-image.jpg"},
                                      {eid:"e104",ename:"Emp4",esal:40000,eimg:"https://reqres.in/img/faces/4-image.jpg"},
                                      {eid:"e105",ename:"Emp5",esal:50000,eimg:"https://reqres.in/img/faces/5-image.jpg"}] );
    return(
        <>
           <table border={1}
                  align="center"
                  cellPadding={10}
                  cellSpacing={10}>
                <thead>
                    <tr>
                        <th>eid</th>
                        <th>ename</th>
                        <th>esal(<i className="fa fa-inr"></i>)</th>
                        <th>bonus(<i className="fa fa-inr"></i>)</th>
                        <th>eimg</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.eid}</td>
                                <td>{element.ename}</td>
                                <td>{element.esal}</td>
                                <td>{(element.esal)*0.1}</td>
                                <td>
                                    <img src={element.eimg} width={50} alt="Employee"></img>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
           </table>
           <hr></hr>
           <h1>{obj.frontend}...{obj.backend}...{obj.database}</h1>
           <hr></hr>
           {
                list1.map((element,index)=>{
                    return(<h1 key={index}>{element}</h1>)
                })
           }
            <hr></hr>
            {
                flag ? <h1>{num1}</h1> : <h1>{num2}</h1>
            }
            {
                !flag ? <h1>{num1}</h1> : <h1>{num2}</h1>
            }
            {
                flag ? <Comp1></Comp1> : <Comp2></Comp2>
            }
            {
                !flag ? <Comp1></Comp1> : <Comp2></Comp2>
            }
            <hr></hr>
            <h1>Addition.{num1+num2}</h1>
            <h1>Subtraction.{num1-num2}</h1>
            <h1>Square.{Math.sqrt(num1)}</h1>
            <hr></hr>
            <h1>{str}</h1>
        </>
    )
}
export default State;