const FontAwesome = ()=>{
    return(
        <>
           <table>
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>ENAME</th>
                        <th>ESAL</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>EMP1</td>
                        <td><i className="fa fa-inr"></i> 10000</td>
                        <td><i className="fa fa-edit"></i></td>
                        <td><i className="fa fa-trash"></i></td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
           </table>
        </>
    )
}
export default FontAwesome;