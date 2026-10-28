import React from "react";
import Profile from "./Profile"
const Home = (props) =>{
    const increment = ()=>{
        props.setcount(props.count+1);
    }
    return <div>{props.name}
    <p>{props.count}</p>
    <button onClick={increment}>increse</button>
    <Profile name ={props.name}/>
    </div>
}
export default Home;