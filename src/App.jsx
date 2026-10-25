import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Project"
import Content from "./components/Content"
import Project from "./components/Project";
import { useState } from "react";

function App(){
  let name ="syam";
  let age = 21;
  const [count,setCount]=useState(0);
  return (
 <div>
  <Home name={name} count={count} setcount={setCount}/>
  <p>{name}</p>
  <About/>
  <Project/>
  <Content/>

  {/* hopks - useState 
  instalizing const [name,setNmae]= useState(intial value)
  updating setName(new value) */}
  

</div>
  );
}

export default App;


