import React, { useState } from "react";
const OnChangeonSubmit= ()=>
    {
    const [name,setName]=useState("");
    const [typi,setTyping]=useState(false); 
    const [submit,setSubmit]=useState(false);

    const typing =(e)=>{

        setName(e.target.value);
        setTyping(true);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmit(true);
    }

    
    return <dev>
        <form onSubmit={handleSubmit}>
            <input onChange={typing} placeholder="enter name here" ></input>
            <button type="submit">submit</button>
        </form>
        {typi&&<p>typing started</p>}
        {submit&&<p>name: {name}</p>}


    </dev>
}

export default OnChangeonSubmit;
