import React,{useEffect, useState} from "react";
const Api =()=>{
    const[count,setCount]=useState(0);
    const [times,setTimes]=useState(0);
    const [user,setUser]=useState([]);
    useEffect(()=>{
         fetch("https://fakestoreapi.com/products")
         .then((res)=> res.json())
         .then((data)=>setUser(data))
         .catch((err)=>{
            console.log("error in fetching logs");
         })
            
        
           
    },[])
   const handlecount=(event)=>{
    setCount(event.target.value);
   }
   const handlebutton=()=>{
    setTimes(count);
   }
    

    return (

        <div>
            <input onChange={handlecount} placeholder="number of products"/>
            <button onClick={handlebutton}>submit</button>
            
            {
                user.slice(0,count).map((product)=>(
                   <div key = {product.id}>
                    <img src={product.image} width={150}/>
                    <p>price = {product.price}</p>
                    </div>
                ))
            }

        </div>
    );

}

export default Api;