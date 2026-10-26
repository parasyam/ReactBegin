import React,{useState,useRef,useEffect} from "react";

const Hook = ()=>{
    const [name,setName]=useState("");
    const rname =useRef("");
    const [done,setDone]=useState(false);

   useEffect(()=>{
    console.log("rendering");
   },)
   

    const handleinput=(event)=>{
        setName(event.target.value);
    }
    
    return <div>
        <input value={name} onChange={handleinput}></input>

         <input 
         placeholder="Enter another name"
          ref={rname}></input>
         <button
          onClick={()=>{setDone(true)}}>submit</button>
         {done && <p>{rname.current.value}</p>}

    </div>
}
export default Hook;