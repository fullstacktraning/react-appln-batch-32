import { useState } from "react";

const FormsEx = ()=>{
    const [formData,setFormData] = useState({"email":"","pass":""});
    const [errors,setErrors] = useState({});
    const handleChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        let newErrors = validate();
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors)
        }else{
            setErrors({})
        }
    }
    const validate = ()=>{
        const newErrors = {};
        if(!formData.email){
            newErrors.email = "Email Required !!!";
        }else if(!formData.email.includes("@")){
            newErrors.email = "please enter valid email";
        }
        if(!formData.pass){
            newErrors.pass = "Password Required !!!"
        }else if(formData.pass.length<6){
            newErrors.pass = "minimum 6 characters are required"
        }
        return newErrors;
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN VALIDATIONS</legend>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="email" 
                               name="email" 
                               value={formData.value} 
                               onChange={handleChange} 
                               placeholder="enter email"></input>
                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                               name="pass"
                               value={formData.pass}
                               onChange={handleChange}
                               placeholder="enter password"></input>
                        {errors.pass && <p style={{color:"red"}}>{errors.pass}</p>}
                    </div>
                    <div>
                        <input type="submit" value={"Login"}></input>
                    </div>
                </form>
            </fieldset>
        </>
    )
}
export default FormsEx;