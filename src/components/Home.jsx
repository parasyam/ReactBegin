import React from "react";
const Home = (props) =>{
    const increment = ()=>{
        props.setcount(props.count+1);
    }
    return <div>{props.name}
    <p>{props.count}</p>
    <button onClick={increment}>increse</button>
    </div>
}
export default Home;