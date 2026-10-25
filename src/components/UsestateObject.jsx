import React, { useState } from "react"
const UsestateObject = ()=>{
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const [submitedform , setSubmittedform]=useState(null);
    const [submitted,submittedState]=useState(false);
    const handleChange = (event)=>{
        setFormData({
             ...formData,
            [event.target.name]:event.target.value,
        })
    }
    const handelsubmit = (event)=>{
        event.preventDefault();
        submittedState(true);
        setSubmittedform({...formData});
        setFormData({
            email:"",
            password:"",
        
        })

    }
    
    return <div>
        <form onSubmit={handelsubmit}>
            <input placeholder="enter email "
            name="email"
            onChange={handleChange}
            value={formData.email}
            ></input>

             <input placeholder="enter password "
            name="password"
            onChange={handleChange}
            value={formData.password}
            ></input>
            <button type="submit">Submit</button>
        </form>
        {submitted&&
        <div>
            <p>email:{submitedform.email}</p>
            <p>password : {submitedform.password}</p>
            </div>}

    </div>
}
export default UsestateObject;